export const slugify = (str) =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}
export const getContent = async (cat, $content, query, search, error) => {
  const currentPage = parseInt(query.page) || 1

  const perPage = 5

  const tags = query.tags ? JSON.parse(query.tags) : []
  const pipeline = { published: true }
  if (tags.length) pipeline.tags = { $containsAny: tags }
  const count = await $content(cat)
    .search(search)
    .where(pipeline)
    .only([])
    .fetch()

  const totalArticles = count.length

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage)

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % perPage

  const skipNumber = () => {
    if (+currentPage === 1) {
      return 0
    }
    if (+currentPage === lastPage) {
      if (lastPageCount === 0) {
        return totalArticles - perPage
      }

      return totalArticles - lastPageCount
    }
    return (currentPage - 1) * perPage
  }
  let posts, pinnedPost
  if (currentPage === 1) {
    const rawPosts = await $content(cat)
      .search(search)
      .where(pipeline)
      .sortBy('date', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch()

    pinnedPost = await $content(cat)
      .search(search)
      .where({ ...pipeline, pinned: true })
      .sortBy('date', 'desc')
      .limit(1)
      .fetch()

    posts = pinnedPost
      ? rawPosts.filter((item) => item.slug !== pinnedPost[0]?.slug)
      : rawPosts
  } else {
    posts = await $content(cat)
      .where(pipeline)
      .search(search)
      .sortBy('date', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch()
    pinnedPost = false
  }

  if (currentPage === 0 || !posts.length) {
    return
  }

  return {
    count: totalArticles,
    pages: lastPage,
    pinnedPost: pinnedPost.length ? pinnedPost[0] : false,
    posts,
  }
}
export const LightenDarkenColor = (col, amt) => {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (
    (usePound ? '#' : '') +
    String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
  )
}
export const _srcset = function (ctx, src) {
  return ctx.$img.getSizes(src, {
    sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
    modifiers: {
      format: 'webp',
      quality: 70,
      height: 160,
    },
  })
}
