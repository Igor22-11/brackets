module.exports = function check(str, bracketsConfig) {

    const newBrackets = bracketsConfig.map((num)=> num.join(''));

    function replaceBrackets(string) {
        for (let i = 0; i < newBrackets.length; i++) {
            if (string.includes(newBrackets[i])) {
                string = string.replace(newBrackets[i], '');
                return replaceBrackets(string);
            } else if (string.length === 0) {
                return true;
            }
        }
        return false;
    }
    return replaceBrackets(str);
}
