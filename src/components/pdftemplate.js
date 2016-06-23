import moment from 'moment';
export default function PDFTemplate(annotations, userData) {

  function contributers(annotations) {
    var contribs = [];
    annotations.forEach(function(anno) {
      if(contribs.indexOf("<p>" + anno.annotationType + "</p>") == -1) {
        contribs.push("<p>" + anno.annotationType + "</p>");
      }
    });
    console.warn(contribs)
    return contribs.join('');
  }
 function truncate(str) {
   var arr = str.split('');
   if (arr.length >= 40) {
     return arr.slice(0, 40).join('');
   }
   return str;
 }
 function colorByType(type) {
   switch(type) {
     case 'Visual Design':
       return 'red';
       break;
     case 'User Research':
       return 'orange';
       break;
     case 'Product Design':
       return 'yellow';
       break;
     case 'Information Architecture':
       return 'green';
       break;
     case 'Interaction Design':
       return 'blue';
       break;
     case 'UI Engineer':
       return 'purple';
       break;
     case 'Manager':
       return 'pink';
       break;
     case 'Sales':
       return 'black';
       break;
    default:
      return '#333'
   }
 }

  var font = "<link href='https://fonts.googleapis.com/css?family=Quicksand:700,400' rel='stylesheet' type='text/css'>"
  var coverPage = "<div style='width: 100%; height: 102%; display: -webkit-flex; -webkit-flex-direction: column; -webkit-justify-content: space-around; -webkit-align-items: center;'><h1 style='font-family: Quicksand;'>" + userData.collectionTitle + "</h1><h4 style='font-family: Quicksand;'>For: " + userData.companyName + "</h4><div style='font-family: Quicksand; text-align: center;'><h6 style='font-family: Quicksand;'>Prepared By:</h6><h3 style='font-family: Quicksand;'>Go Live Labs</h3></div><div style='font-family: Quicksand; text-align: center;'><h4>Contributers: </h4>" + contributers(annotations) + "</div></div>"
  var strings = annotations.map(function(annotation, idx) {
    //  return "<div style='width: 100%; height: 100%;'><div style='width: 100%; height: 50%; background-color: #f9f9f9;'><img style='position: relative; top: 15%; left: 2.5%; margin-top: 10px; margin-bottom: 10px;' src='" + annotation.annotationMedia + "' width='95%' /><div style='height: 40px; width: 100%; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center; background-color: " + colorByType(annotation.annotationType) + ";'><div style='width:500px; display: -webkit-flex; -webkit-justify-content: flex-start; -webkit-align-items: center;'><img style='position: relative; margin-left: 10px;' src='https://s3-us-west-1.amazonaws.com/uxpjpeg/svg/annotationWhiteB.svg' width='50px'><h3 style='color: #fff; font-family: Quicksand; font-weight: 700; margin-top: 30px; margin-left: 10px;'>" + annotation.annotationType + "</h3></div><div style='display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: center; font-family: Quicksand; color: #fff; width: 100%;'><h3>" + annotation.pinType + "</h3></div></div><div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: center; -webkit-flex-direction: column; font-family: Quicksand; color: #333;'><h4>Title: " + annotation.annotationTitle + "<h5>Description: " + annotation.annotationText + "</h5><h5>Domain: <a target='_blank' href='" + annotation.specificURL + "'>" + annotation.specificURL + "</a></h5></div></div></div>"
    return (
      "<div style='width: 100%; height: 102%;'>" +
          "<div id='header' style='position: relative; top: 0; height: 30px; width: 100%; border-bottom: 2px solid #333; box-sizing: border-box; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center;'>" +
            "<h4 style='font-family: Quicksand; font-weight: 700;'>" + userData.collectionTitle + "</h4>" +
            "<h4 style='font-family: Quicksand; font-weight: 700;'>" + userData.companyName + "</h4>" +
            "<h4 style='font-family: Quicksand;'>" + moment(Date.now()).format('MM/DD/YYYY') + "</h4>" +
          "</div>" +
          "<div style='width: 100%; height: 99%; display: -webkit-flex; -webkit-justify-content: flex-start; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; height: 225px; display: -webkit-flex; -webkit-justify-content: space-around; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
              "<div style='width: 100%;'>" +
                "<p style='line-height: 90%; font-family: Quicksand; font-weight: 700; font-size: 15px;'>Annotation Title: <span style='font-family: Quicksand; font-weight: 400;'>" + annotation.annotationTitle + "</span></p>" +
                "<p style='line-height: 90%; font-family: Quicksand; font-weight: 700;'>Annotation Description: <span style='font-family: Quicksand; font-weight: 400;'>" + annotation.annotationText + "</span></p>" +
                "<p style='line-height: 90%; font-family: Quicksand; font-weight: 700;'>Annotation Pin Type: <span style='font-family: Quicksand; font-weight: 400;'>" + annotation.pinType + "</span></p>" +
                "<p style='line-height: 90%; word-break: break-all; font-family: Quicksand; font-weight: 700; margin-bottom: 10px;'>Annotation URL: <span style='font-family: Quicksand; font-weight: 400;'><a href=" + annotation.specificURL +">" + truncate(annotation.specificURL) + "</a></span></p>" +
              "</div></div>" +
            "<div style='margin-top: 10px; width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: center;'>" +
              "<img style='' src='" + annotation.annotationMedia + "' height='225px' />" +
            "</div>" +
            "<div style='height: 40px; width: 100%; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center; background-color: " + colorByType(annotation.annotationType) + ";'><div style='width:500px; display: -webkit-flex; -webkit-justify-content: flex-start; -webkit-align-items: center;'><img style='position: relative; margin-left: 10px;' src='https://s3-us-west-1.amazonaws.com/uxpjpeg/svg/annotationWhiteB.svg' width='50px'><h3 style='color: #fff; font-family: Quicksand; font-weight: 700; margin-top: 30px; margin-left: 10px;'>" + annotation.annotationType + "</h3></div></div>" +
            "<div style='border-bottom: 1px solid #666; width: 100%; margin-bottom: 20px; margin-top: 20px;'><span style='font-family: Quicksand;'>Comments:</span></div>" +
            "<div style='border-bottom: 1px solid #666; width: 100%; margin-bottom: 20px;'></div>" +
            "<div style='border-bottom: 1px solid #666; width: 100%; margin-bottom: 70px;'></div>" +
            "<div style='position: relative; height: 25px; width: 100%; border-top: 2px solid #333; box-sizing: border-box; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center; -webkit-flex-direction: row;'>" +
              "<h5 style='font-family: Quicksand;'>Confidential</h5>" +
              "<h5 style='font-family: Quicksand;'>Prepared by Go Live Labs</h5>" +
              "<h5 style='font-family: Quicksand;'>Page: " + (idx+1) + " of " + (annotations.length + (userData.recs ? 1 : 0)) + "</h5>" +
            '</div>' +
          '</div>'+
      "</div>"
    );
  });
  var recsPage = '';
  if(userData.recs == true) {
    recsPage = (
      "<div style='width: 100%; height: 99%; font-family: Quicksand; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: center; -webkit-flex-direction: column;'>" +
        "<div id='header' style='position: relative; top: 0; height: 30px; width: 100%; border-bottom: 2px solid #333; box-sizing: border-box; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center;'>" +
          "<h3 style='font-family: Quicksand;'>" + userData.collectionTitle + "</h3>" +
          "<h3 style='font-family: Quicksand;'>" + userData.companyName + "</h3>" +
          "<h5 style='font-family: Quicksand;'>" + moment(Date.now()).format('MM/DD/YYYY') + "</h5>" +
        "</div>" +
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h2>Recommendations</h2></div>" +
        "</div>" +
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Cognitive Walkthrough</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.cogWalk + "</p>" +
        "</div>" +
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Heuristic Evaluation</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.herEval + "</p>" +
        "</div>" +
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Information Architecture Review</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.infoArch + "</p>" +
        "</div>"+
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Interaction Design Review</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.intDesign + "</p>" +
        "</div>"+
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Visual Design Review</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.visDesign + "</p>" +
        "</div>"+
        "<div style='width: 100%; display: -webkit-flex; -webkit-justify-content: center; -webkit-align-items: flex-start; -webkit-flex-direction: column;'>" +
          "<div style='width: 100%; text-align: center;'><h4>Javascript Optimization</h4></div>" +
          "<p style='text-decoration: underline;'>" + userData.jsOpts + "</p>" +
        "</div>"+
        "<div style='position: relative; height: 25px; width: 100%; border-top: 2px solid #333; box-sizing: border-box; display: -webkit-flex; -webkit-justify-content: space-between; -webkit-align-items: center; -webkit-flex-direction: row;'>" +
          "<h5 style='font-family: Quicksand;'>Confidential</h5>" +
          "<h5 style='font-family: Quicksand;'>Prepared by Go Live Labs</h5>" +
          "<h5 style='font-family: Quicksand;'>Page: " + (annotations.length + 1) + " of " + (annotations.length + 1) + "</h5>" +
        '</div>' +
      "</div>"
    );
  }
  return font + coverPage + strings.join('') + recsPage + '<video src="https://s3-us-west-1.amazonaws.com/uxpwebm/0163e497-34a9-4995-b48d-4563cb36a148.webm" />';
}
//title - larger font
//sub heading - client and product name
//go live logo
//NDA footer
//conducted with UXPass message
//UL of researchers
/*
switch(annotation.annotationType) {
  case 'Visual Design':
    return 'red';
    break;
  case 'User Research':
    return 'orange';
    break;
  case 'Product Design':
    return 'yellow';
    break;
  case 'Information Architecture':
    return 'green';
    break;
  case 'Interaction Design':
    return 'blue';
    break;
  case 'UI Engineer':
    return 'purple';
    break;
  case 'Manager':
    return 'pink';
    break;
  case 'Sales':
    return 'black';
    break;
}
*/
