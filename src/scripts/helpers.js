import moment from "moment"
import { truncate } from "lodash"
import "twix"

function pastDate(date) {
  return moment(date).isBefore(moment().subtract(1, "d"))
}

function isFlush(imgType) {
  return imgType === "flush" || imgType === "image/jpeg"
}

function optionalImg(images) {
  if (images && images.length > 0) {
    return {
      type: images[0].type,
      src: images[0].url
    }
  }
  return {
    type: "",
    src: ""
  }
}

function date(date) {
  return moment(date).format("MMM D, YYYY")
}

function dates(start, end) {
  return moment(start)
    .twix(end, { allDay: true })
    .format({
      monthFormat: "MMMM",
      dayFormat: "D"
    })
}

function blogImgSrc(txt) {
  if (txt === "placeholder") {
    return txt
  }

  // parse the raw HTML into a document
  let parser = new DOMParser()
  let htmlDoc = parser.parseFromString(txt, "text/html")

  // retrieve the first blog image
  let src = htmlDoc.querySelectorAll("img")[0].src

  // reduce the image size to 640px wide
  return src.split("1024").join("640")
}

function blogContent(txt) {
  let parser = new DOMParser()
  let doc = parser.parseFromString(txt, "text/html")

  // retrieve the first <p>
  let text = doc.querySelectorAll("p")[0].innerHTML
  let truncText = truncate(text, {
    length: 180,
    separator: " "
  })

  return truncText
}

export default {
  pastDate,
  isFlush,
  optionalImg,
  date,
  dates,
  blogImgSrc,
  blogContent
}
