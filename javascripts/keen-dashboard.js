var client = new Keen({
  projectId: "551351932fd4b114c0263db0",
  readKey: "bea7b14749615eae8e9788a7aa7e932bf50d9e0303283d577745082694d27344f0a06cf1a43ef5e318de2d67bccafee87531f02931c4da7d0eff147dd53f40097e54a0a0e4b739893b64fc83f133fd93eecbfdcadddbe0f2b48df148157a0564b19a2d71b74aa698fad702b302fbe7a9"
});

Keen.ready(function(){


  // ----------------------------------------
  // Pageviews
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count_unique", {
    eventCollection: "pageviews",
    timeframe: "this_week",
    targetProperty: "keen.id",
    interval: "daily"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "linechart",
    title: false,
    height: 250,
    width: "auto",
      chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });


  // ----------------------------------------
  // click throughs
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
    eventCollection: "clicks",
    timeframe: "this_year",
    groupBy: "element.name"
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
      chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      }
    }
  });


  // ----------------------------------------
  // referer info
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    timeframe: "this_year",
    groupBy: "referrer_info.source"
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      }
    }
  });



  // ----------------------------------------
  // tickets sold
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "Eventbrite_Events",
    timeframe: "this_year",
    targetProperty: "keen.id"
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
    }
  });

  // var recent_orders = new Keen.Query("extraction", {
  //   eventCollection: "wardrobe",
  //   timeframe: "this_year",
  //   propertyNames: ["name", "address_line_1", "city", "state", "zip", "country", "size", "garment_gender", "email"]
  // });
  // client.draw(recent_orders, document.getElementById("recent-orders"), {
  //   chartType:"table",
  //   title: false,
  //   width: "auto"
  // });


});
