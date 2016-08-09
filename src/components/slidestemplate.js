export default function SlidesTemplate(annotations, data) {
  console.log(annotations, data)
  var formatSlides = () => {

    var slides = annotations.map((anno) => {
      var media = "";
      if (anno.annotationMediaType == 'jpeg') {
        media = `<img src=${anno.annotationMedia} />`
      } else if(anno.annotationMediaType == 'webm') {
        media = `<video src=${anno.annotationMedia} controls />`
      } else if(anno.annotationMediaType == 'webcam') {
        media = `<video src=${anno.annotationMedia} controls />`
      } else if(anno.annotationMediaType == 'audio') {
        media = `<audio src=${anno.annotationMedia} controls />`
      }
      return `
        <section>
          <section>
          <p style="font-size: 20px;">Title: ${anno.annotationTitle}</p>
          <p style="font-size: 20px;">Text: ${anno.annotationText}</p>
          <a style="font-size: 20px;" href=${anno.specificURL}>${anno.specificURL}</a>
          ${media}
          </section>
          ${anno.recommendation != "" ? `
            <section>
              <p>Violation: ${anno.violation}</p>
              <p>Recommendation: ${anno.recommendation}</p>
              <p>Severity: ${anno.severity}</p>
            </section>` : "" }
        </section>
      `;
    });
    return slides;
  }
  var formatRecs = () => {
    var recs = [];
    recs.push(
      `
      <section>
        <p>Cognitive Walkthrough:</p>
        <p>${data.cogWalk}</p>
      </section>

      `,`
      <section>
        <p>Heuristic Evaluation:</p>
        <p>${data.herEval}</p>
      </section>

      `,`
      <section>
        <p>Information Architecture:</p>
        <p>${data.infoArch}</p>
      </section>

      `,`
      <section>
        <p>Interaction Design:</p>
        <p>${data.intDesign}</p>
      </section>

      `,`
      <section>
        <p>Visual Design:</p>
        <p>${data.visDesign}</p>
      </section>

      `,`
      <section>
        <p>Programming Optimization:</p>
        <p>${data.jsOpts}</p>
      </section>

      `)
      return recs;
  }
  var htmlHead = `
  <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/g/reveal.js@3.0.0(css/reveal.min.css+css/theme/reveal.min.css)">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/reveal.js/3.0.0/css/theme/black.css">
    </head>
    <body>
        <div class="reveal">
            <div class="slides">
                <section>
                  <p style="font-size: 70px; margin-bottom: 40px">GoLiveLabs</p>
                  <p style="font-size: 30px;">${data.fileName}</p>
                </section>
                ${formatSlides().join('')}
                ${data.recs ? formatRecs().join('') : ""}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/reveal.js/3.0.0/js/reveal.min.js"></script>
        <script>
            Reveal.initialize();
        </script>
    </body>
</html>`;

  return htmlHead;
}
