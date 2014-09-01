/**
 * 不重复数字的 升序组合
 * Created by lchysh on 2014/8/20.
 */
var nList = [9,1,2,3,4,8];
nList.sort();
var l = nList.length,i= 0;
var ret = [];
var j = 1, k,str,nValid;
var count = 0;
var total = 2<<l-1;
while(j < total){
    k = 0;
    str = '';
    while(k < l){
        count++;
        nValid = 1 << k;
        if(nValid  & j){
            str+= nList[k];
        }
        k++;
    }
    console.log(str);
    j++;
}
console.log('循环次数:'+count);