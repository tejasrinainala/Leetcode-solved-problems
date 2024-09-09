/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    let lc=false;
    let uc=false;
    let sc=false;
    let d=false;
    let ac= true;
    const specialChar="!@#$%^&*()-+";
    if(password.length<8)
    {
        return false;
    }
    for(let i=0;i<password.length;i++)
    {
        let char=password[i];
        if(char>='a' && char<='z')
        {
            lc=true;
        }
        else if(char>='A' && char<='Z')
        {
            uc=true;
        }
        else if(char >= '0' && char <= '9')
        {
            d=true;
        }
        else if(specialChar.includes(char))
        {
            sc=true;
        }
        else if(char != password[i-1])
        {
            return false;
        }
    }
    return lc && uc && d && sc && ac;
};
