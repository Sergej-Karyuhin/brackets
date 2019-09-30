module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');
  let counter = 0;
  let stack = [];
  let special_bracket = 0;
  let n = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] == "|") {
      special_bracket++;
    }
  }

  if (special_bracket !== 0) {
  if (special_bracket % 2 == 0) {
    n = special_bracket / 2;
    for (let i = 0; i < brackets.length; i++) {
      if (brackets[i] == "|") {
        if (n > 0) {
          brackets[i] = "open";
          n--;
        }
        else {
          brackets[i] = "closed";
        }
      }
    }
  }
  else {
    return false;
  }
  }

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] == "(" || brackets[i] == "["
    || brackets[i] == "{" || brackets[i] == "open") {
      counter++;
      stack.push(brackets[i]);
    }
    else {

      switch (brackets[i]) {

        case ")":
          if (stack[stack.length - 1] == "(") {
            counter--;
            stack.pop();
            if (counter < 0) {
              return false;
            }
          }
          else {
            return false;
          }
          break;

        case "]":
          if (stack[stack.length - 1] == "[") {
            counter--;
            stack.pop();
            if (counter < 0) {
              return false;
            }
          }
          else {
            return false;
          }
          break;

        case "}":
          if (stack[stack.length - 1] == "{") {
            counter--;
            stack.pop();
            if (counter < 0) {
              return false;
            }
          }
          else {
            return false;
          }
          break;

          case "closed":
            if (stack[stack.length - 1] == "open") {
              counter--;
              stack.pop();
              if (counter < 0) {
                return false;
              }
            }
            else {
              return false;
            }
            break;
    }
  }
}

  if (counter == 0) {
    return true;
  }
  else {
    return false;
  }
}
