module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let res;

  str.split('').forEach((item, i) => {

    if(i == 0) {
      stack.push(item);
      return;
    }

    let lastOpen = bracketsConfig.find(type =>
      stack[stack.length - 1] == type[0]);

    lastOpen = lastOpen && lastOpen[1];

    if(item != lastOpen){
      stack.push(item);
    }
    else{
      stack.pop();
    }

  });

  if(stack.length == 0) return true;
  return false;
}
