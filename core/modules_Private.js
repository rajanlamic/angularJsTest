function moduleLoader() {

  var modules = {};
  
  function load(name) {
  
    if(modules[name]) {
      console.log(name + ' -> Yes');
        return modules[name];
    } else {
      console.log(name + ' -> No');
      modules[name] = name;
      return modules[name];
    }
  }
    
    return {
      load: load
    };
}
  
  
  var loader = new moduleLoader();

  loader.load('one');
  loader.load('two');
  loader.load('one');