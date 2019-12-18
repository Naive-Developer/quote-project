import { darken, lighten } from "polished";

export const polishedColorStyle = {
  primarydark: darken(0.2, "#643a7a"),
  primarylight: lighten(0.2, "#643a7a"),
  secondarydark: darken(0.2, "#741caf"),
  secondarylight: lighten(0.2, "#741caf")
};


// Biz buraya theme adında bir obje yazacağız aynı zamanda biz burda ayrı bir fonksiyon yazıp bunu da ThemeProvider içerisinde uygulanmasını istediğmiz component e props olarak gönderebiliriz ki eğer props olarak gönderirsek ThemeProvider içerisinde props olarak gönderdiğmiz herşeyi biz tüm styled-componentler içerisinde kullanabiliriz
//Kendi design sistemini yapmak isteyebiliyor bazı kurumsal şirketler..bootstrap bir design sistemidir standartları bellidir butonların alternatifleri vardır onun dışında buton göremezsiniz gibi...
//Biz burda bir thema da standart olması gereken özellikleri belirteceğiz ki her kurum kendi standartını belirlemek isteyecektir.Bu standartlar nelerdir neleri biz standart yapmalıyız bunlar için bootstrap ten fikir alabiliriz
//utilities web sitesinin stilini etkileyen yan etkenler demektir ve web geliştiricilere anlamsal olarak adlandırılarak web sitesini test etmesine veya bazı özellikleri eklemesi veya kaldırmasını sağlar.Örneğin kenar boşluklar
export const theme = {
   mode:"dark",
  chooseThemeColors:{
      light:{
        primary:"#c70d3a",
        secondary:"#DA2D2D",
        primarybackground:"#F8EFBA",
        secondarybackground:lighten(0.6,"#2C3A47"),
        iconcolorprimary:lighten(0.01,"#9D0B0B"),
        fontcolorprimary:"#000",
        hovercolor:darken(0.1,"#DA2D2D")
      },
      middle:{
        primary:"#f4efd3",
        secondary:darken(0.2,"#badfdb"),
        primarybackground:"#6f9a8d",
        secondarybackground:"#2C3A47",
        iconcolorprimary:lighten(0.01,"#f4efd3"),
        fontcolorprimary:"#fff",
        hovercolor:darken(0.3,"#badfdb")
      }

  }, 
  colors: {
    primary: "#643a7a",
    primarydark: darken(0.2, "#643a7a"),
    primarylight: lighten(0.2, "#643a7a"),
    secondary: "#741caf",
    secondarydark: darken(0.2, "#741caf"),
    secondarylight: lighten(0.2, "#741caf"),
    bgcolordark: "#201C29",
    bgcolorlight:"#fff",
    
  },
  fontfamily: {
    primary: "'dancing script', cursive",
    secondary: "'josefin sans', sans serif"
  },
  fontcolors: {
    primary: "rgb(121, 125, 127);",
    secondary: "#fff"
  },
  iconcolors: {
    primary: "rgba(100, 58, 122, 0.2)",
    secondary: "#000"
  },
  utilities: {
    button: {
      padding: "1rem 0",
      margin: "0"
    },
    bgcolordark: "#201C29"
  },
  headers: {},
  boxshadows: {
    cardshadow: "0 0 1.5rem rgba(0, 0, 0, 0.5);",
    numberbeforeshadow: "0 0 0.7rem rgba(0, 0, 0, 0.5)"
  },
  sizes: {
    fontsize: {
      primaryquote: "1.3rem",
      secondaryauthor: "0.8rem",
      primaryiconsize: "3.5rem",
      seondaryiconsize:"1.4rem"
    },
    radius: "5px"
  },
  textalignes: {
    textalignprimary: "center",
    textalignsecondary: "justify",
    verticalalign: "middle"
  },
  animation: {
    transitionbutton: "0.2s ease-out"
  },
  hover:{
      buttonbgcolor:"#802bbc"
  }
};
