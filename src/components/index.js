import Vue from 'vue'
import Hello from './Hello'

let MessageBoxConstructor = Vue.extend(Hello)
let instance,currentMsg
let msgQueue = [];

let defaults = {
  title:'',
  msg:'',
  showPicture:'',
  showCancel:'false',
  showConfirm:'true',
  autoClose:'false',
  lockScroll:'',
  autoCloseTime:2000,
};
let merge = function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
};
let callbackDefault = function(action) {
  if (currentMsg) {
    let callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
  }
  if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.showInput) {
          currentMsg.resolve({ value: instance.inputValue, action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action);
      }
  }
}
let initInstance = function() {

  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });
};
let showMsg = function(){
  if(!instance){
    initInstance()
  }
  currentMsg = msgQueue.shift()
  let options = currentMsg.options

  if(options!={}){
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
  }
  if (options.callback === undefined) {
    instance.callback = callbackDefault;
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.isShow=true
  });
}
let HelloMsg = function(options,callback){

  if (typeof options === 'string') {
    options = {
      title: options
    };
    if (arguments[1]) {
      options.msg = arguments[1];
    }
    if (arguments[2]) {
      options.showPicture = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }
  if (typeof Promise !== 'undefined') {
    return new Promise(function(resolve, reject) {
      msgQueue.push({
        options: merge({}, defaults, HelloMsg.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })
      showMsg()
    });

  }else{
    msgQueue.push({
      options: merge({}, defaults, HelloMsg.defaults || {}, options),
      callback: callback,
    })
    showMsg()
  }
}

export default HelloMsg
export { HelloMsg }
