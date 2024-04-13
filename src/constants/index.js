import {
  Unet,
  Simci,
  Javeriana,
  accenture,
  IOT,
  ia,
  digital,
  basedatos,
  azure,
  databricks,
  redhat,
  excel,
  yanhaas,
  Febrero_1,
  Marzo_1,
  Abril_1,
  Mayo,
  Junio,
  Julio,
  Agosto,
  Septiembre,
  Octubre,
  Noviembre,
  Diciembre,
  Enero_2,
  Febrero_2,
  Marzo_2,
  Abril_2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electronic Engineer",
    icon: digital,
  },
  {
    title: "Data Base and SQL",
    icon: basedatos,
  },
  {
    title: "Machine Learning and Deep Learning",
    icon: ia,
  },

];

const certificates = [
  {
    title: "Azure fundamentals AZ - 900",
    icon: azure,
    source_code_link:'https://drive.google.com/file/d/1Dq34goNGyepqBnepsh2sWgLYLo-21C_y/view?usp=sharing',
  },
  {
    title: "Databricks and Apache Spark to Big data",
    icon: databricks,
    source_code_link:'https://drive.google.com/file/d/1l5NRi9vhcRGV_x4vw7G7v_PoHdTDFfPZ/view?usp=sharing',
  
  },
  {
    title: "Excel Basics for Data Analysis",
    icon: excel,
    source_code_link:'https://drive.google.com/file/d/1FYpwx2_hQWly20rwPWxLPJJLbF1FK8Xg/view?usp=sharing',
  
  },
  {
    title: "Red Hat System Administration I (RH124)",
    icon: redhat,
    source_code_link:'https://drive.google.com/file/d/1eTVflCKh3XH348sjuU6_x4kinBbpGSmA/view?usp=sharing',
  
  },

];


const experiences = [

  {
    title: "Febrero 2023",
    company_name: "Después de acompañarme a ver a mi comediante favorito, te quedaste conmigo en mi casa. Hicimos el amor toda la noche y al atardecer salimos a comer. Fue la primera vez que regresaste una carne conmigo mientras veía un partido del Barcelona.",
    icon: Febrero_1,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Marzo 2023",
    company_name: "Tu primer cumpleaños conmigo. Esa noche te llore, te prometí que estaría contigo por toda mi vida y que te haría la mujer mas feliz del mundo. Después, te quedaste dormida en mi baño y tuve que limpiarte.",
    icon: Marzo_1,
    iconBg: "#fff",
    video: true,
  },

  {
    title: "Abril 2023",
    company_name: "Quince días antes de que tuuuuu “dañaras” mi sorpresa, me di cuenta de que toda mi vida iba a estar documentada por videos y fotos, llegaste a mi vida a ponerme una cámara en cada momento especial, y aunque diga que no me guste, hoy me doy cuenta que tener esos recuerdos no tienen precio.",
    icon: Abril_1,
    iconBg: "#fff",
    video: true,
  },

  {
    title: "Mayo 2023",
    company_name: "Antes de ir a comer a H, me apostaste a que no serías capaz de llevar el sello de una botella de agua. Me ganaste cinco mil y me afirmaste que lo nuestro nunca tendrá un segundo aburrido.",
    icon: Mayo,
    iconBg: "#fff",
    video: false,
  },
  {
    title: "Junio 2023",
    company_name: "Dos días antes de nuestro primer viaje, presente mi tesis y me llevaste a comer después de haberme dado mil regalos y a nuestro primer hijo. Sin mentirte, pensé casi todo el mes en ese viaje y disfruté cada día, incluso cuando me tiraste la crema en la cara.",
    icon: Junio,
    iconBg: "#fff",
    video: false,
  },
  {
    title: "Julio 2023",
    company_name: "Me llevaste a Cali, conocí a tu papá, tu mamá, tu hermano, amigos, Mati, Milonga, Sandrix. Me presentantes a todo el mundo con la certeza de que esto duraría para toda la vida, y te confieso que todos los días lo confirmo. En este mismo viaje creimos que estabas embarazada compramos la prueba y nos snetamos en un parque a planear nuestra vida juntos",
    icon: Julio,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Agosto 2023",
    company_name: "Ese mes le contaste a Majo que tenias al mejor novio del mundo, que te hacia muy feliz, y lo que más me sorprendió fue que hayas dicho que en realidad eres fácil de amar. Amarte es como respirar, es necesario para vivir, se aprende desde antes de nacer y se hace todos los días.",
    icon: Agosto,
    iconBg: "#fff",
    video: true,
  },
  {
    title: "Septiembre 2023",
    company_name: "El mes de mi grado, conociste a mi familia, me diste los mejores regalos. ¡Esa noche estabas hermosa! Nuevamente lloré prometiéndote que eres todo para mí y que esta vida se queda corta para todo lo que nos queremos amar.",
    icon: Septiembre,
    iconBg: "#fff",
    video: false,
  },
  

  {
    title: "Octubre 2023",
    company_name: "Ese mes cumplió años mi papá y estuve toda la noche escuchándolo que eres una mujer muy buena y que te debo cuidar, él también piensa que eres tú. Nuestro primer Halloween juntos, con disfraz improvisado y comprado el mismo día, una noche del puuuutas.",
    icon: Octubre,
    iconBg: "#fff",
    video: false,
  },
  
  {
    title: "Noviembre 2023",
    company_name: "Entregaste tu primer libro mientras yo buscaba trabajo y hacia todo para impresionarte. Hicimos por primera vez la super receta, y un día, cansado de estar encerrados, jugamos voli en la cancha de la U. Una de las mejores citas que hemos tenido, me hiciste pensar que cada cosita contigo se convierte en un juego, risa, sudor, felicidad absoluta. ",
    icon: Noviembre,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Diciembre 2023",
    company_name: "Dos días antes de esa noche, entregaste tu tesis, te acompañé en uno de tus sueños y me sentí la persona más orgullosa. En la noche de velitas, iba coger una para prender por mí y por mi familia, pero no había más, prendí todas mis velas por ti, nosotros, y nuestro futuro. Obviamente te robé velas.",
    icon: Diciembre,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Enero 2024",
    company_name: "Otro carnaval juntos, al que sobreviviste porque te fui a ver. Conociste mi casa y me hizo muy feliz saber que ya tienes que volver todos los años así no te hayan quedado ganas jeje. Llegó Renata nuestras vidas, tu excusa para amarrarme para toda la vida. Nuestra primera hija nos ha hecho muy felices.",
    icon: Enero_2,
    iconBg: "#fff",
    video: false,
  },
  
  {
    title: "Febero 2024",
    company_name: "Hasta que por fin me llevaste al parque… Siento que esta relación es así, tú siempre sacándome a conocer cosas lindas y yo corriendo como Renata detrás de ti, ilusionado por ver que me quieres mostrar. Me has enseñado muchas cosas del mundo y de mí que no tenía ni la menor idea de que estaban ahí.",
    icon: Febrero_2,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Marzo 2024",
    company_name: "El mes de tu cumpleaños! El mes de tu grado! Vivir contigo estos dos momentos tan importantes y especiales para ti me hacen pensar que eres una mujer muy afortunada, tienes una familia hermosa, aunque un poco peculiar, pero una familia que siempre quiere lo mejor de ti, por eso se me llena el pecho cuando me presentas ante todo el mundo como alguien muy importante en tu vida. Veo como me abres tu casa, tu mundo, tu corazón, tu familia, y siento que en verdad Dios no hizo para estar juntos. Infinitas gracias por dejarme entrar en tu vida.",
    icon: Marzo_2,
    iconBg: "#fff",
    video: false,
  },

  {
    title: "Abril 2024",
    company_name: "Abril... un mes de muchos cambios, nuevo trabajo, nuevas etapas, nuevos horizontes y nuevas expectativas. Vuelo para ver todo esto y solo me imagino llenando con más besos y recuerdos esta página (pero con más tiempo para no tenerte en mi cama sola esperándome), más historias, para que el cuento de que nos ganamos un viaje a Cartagena sin hacer nada solo sea un chiste. Creeme que la vida nos dará cosas muy lindas, que serán mucho mejor si estamos juntos. Te amo para toda la vida",
    icon: Abril_2,
    iconBg: "#fff",
    video: false,
  },
  
  
];



const projects = [
  {
    name: "Brain Extraction",
    description:
      "A system that employs preprocessing techniques focused on 3D magnetic resonance imaging and Deep Learning using the U-net configuration, all for the purpose of extracting the brain and enhancing the performance of a system that assists in the diagnosis of MCI (Mild Cognitive Impairment)",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
      {
        name: "Sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: Unet,
    source_code_link: "https://github.com/DanielZA0/3D_Unet",
  },
  {
    name: "SIMCI",
    description:
      "SIMCI is a system for detecting mild cognitive impairment that employs a multimodal approach and a stratification process to address this issue. The system utilizes demographic characteristics and clinical test results to provide medical interpretability and assist specialists in decision-making. The database includes magnetic resonance imaging (MRI) brain scans, clinical examination results, and demographic information. SIMCI achieves an F1-score of 0.9233, a sensitivity of 0.9200, and a specificity of 0.9275.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
      {
        name: "Sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: Simci,
    source_code_link: "https://github.com/DanielZA0/Simci",
  },
  {
    name: "ViniTech",
    description:
      "IoT system for monitoring a wine cellar, using a Raspberry Pi and Wi-Fi communication with sensors conditioned with Arduino Uno. This system includes a loss prediction model based on wine evaporation.",
    tags: [
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "Matlap",
        color: "green-text-gradient",
      },
      {
        name: "pyhton",
        color: "pink-text-gradient",
      },
    ],
    image: IOT,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects, certificates};
