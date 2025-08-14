let a=[1,2,0,0,1,0,2,1];

let i=0,j=0,k=a.length;

while(j<=a.length){
    if (a[k]<a[j]) {
        let t=a[j];
        a[j]=a[k];
        a[k]=t;
        k--;
    }
    else if (a[i]>a[j]) {
        let t=a[j];
        a[j]=a[i];
        a[i]=t;
        j++;
        i++;
    }
    else{
        j++;
    }
}
console.log(a);
