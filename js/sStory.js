// Generated by CoffeeScript 1.3.3
var makeTimeline, sStory;

makeTimeline = function(d, i) {
  var timelineoptions;
  timelineoptions = {
    type: 'timeline',
    width: '100%',
    height: '620',
    source: d.url,
    embed_id: 'timeline' + i
  };
  return $(document).ready(function() {
    return createStoryJS(timelineoptions);
  });
};

sStory = function(sections) {
  var container;
  container = d3.select("#container");
  return container.selectAll('.section').data(sections).enter().append("div").attr("class", function(d, i) {
    return "section " + d.type + " " + d.type + i;
  }).html(function(d, i) {
    var html;
    switch (d.type) {
      case "image":
        console.log("image");
        html = ich.image(d, true);
        break;
      case "image2":
        console.log("image2");
        html = ich.image2(d, true);
        break;
      case "image3":
        console.log("image3");
        html = ich.image3(d, true);
        break;
      case "vimeo":
        console.log("vimeo");
        html = ich.vimeo(d, true);
        break;
      case "soundcloud":
        console.log("soundcloud");
        html = ich.soundcloud(d, true);
        break;
      case "map":
        console.log("map");
        break;
      case "timeline":
        html = "<h2>" + d.title + "</h2> ";
        html += "<div id='timeline" + i + "'></div>";
        makeTimeline(d, i);
        console.log("timeline");
    }
    return html;
  }).style("background-image", function(d, i) {
    if (d.type === "image" || d.type === "image2" || d.type === "image3") {
      return "url('" + d.url + "')";
    }
  });
};