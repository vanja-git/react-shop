export const konvertujBrojSaPocetnimNulama = (broj:number) => {
    const brojsanulama = '00' +  broj;
    const dvocifrenibrojsapocetnimnulama = brojsanulama.slice(-2);
    return dvocifrenibrojsapocetnimnulama;
}