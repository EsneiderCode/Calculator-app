const link = document.getElementById("file1");
function changingTheme (props){
    let newTheme=0;
    if (props==1)
    {
        newTheme='theme1';
    }
    if (props==2)
    {
        newTheme='theme2';
    }
    if (props==3)
    {
        newTheme='theme3';
    }
    link.href=newTheme+'.css';
}
