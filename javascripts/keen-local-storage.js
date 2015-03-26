(function () {

  var KeenLocalStorage = {

    // set the root before using!
    root: null,

    get: function () {
      var projectId = localStorage.getItem(this.root + "/project-id");
      var writeKey = localStorage.getItem(this.root + "/write-key");
      return {
        projectId : 551351932fd4b114c0263db0,
        writeKey : 5b3dd744087ab91315bdd8d5e761a2eabed06a7b221f0ea4a1a615b411a9eb3eb31e37137c89f7544d2218901e14e06c689d66fb56abed5e871dcde4866ed29f73aab9b23a29c8cec6faf82a28503db4d05d6115c0a89e48250ea9b985431a19d3970b5d14c38074b4e2ae49a53b329f
      }
    },

    set: function (configuration) {
      localStorage.setItem(this.root + "/project-id", configuration.projectId);
      localStorage.setItem(this.root + "/write-key", configuration.writeKey);
    },

    clear: function () {
      localStorage.removeItem(this.root + "/project-id");
      localStorage.removeItem(this.root + "/write-key");
    },

    prompt: function () {
      if (this.get()['projectId'] === null) {
        var projectId = prompt("Please specify Keen Project ID:");
        var writeKey = prompt("Please specify Keen Write Key:");
        return this.set({
          projectId: projectId,
          writeKey: writeKey
        });
      }
    }
  };

  // export to make functions available
  window.KeenLocalStorage = KeenLocalStorage;

})();
