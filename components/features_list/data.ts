import { 
  BsFillMoonFill,
  BsStars,
  BsCloudFill,
  BsFillCreditCardFill,
} from 'react-icons/bs'
import {
  FaAccessibleIcon,
  FaExpandAlt,
  FaPaintBrush
} from 'react-icons/fa'
import {
  MdOutlineSecurity,
  MdVisibility,
} from 'react-icons/md'
import { 
  IoCopy 
} from 'react-icons/io5'

export const features = [
  {
    name: 'Creación en simples pasos',
    description: 'Automatizamos la creación de infraestructura auto escalable, utilizando kubernetes, para que tus servicios siempre respondan.',
    icon: BsStars,
  },
  {
    name: 'Todo funciona en tu nube',
    description:
      'La infra es montada en tu cuenta AWS, nuestra plataforma solo se encarga de generarla de manera correcta y segura.',
    icon: BsCloudFill,
  },
  // {
  //   name: 'Corta camino',
  //   description: 'Eliminamos el trabajo repetivo ahorrando trabajo humano y agilizando el proceso de desarrollo',
  //   icon: BsFillMoonFill,
  // },
  {
    name: 'Seguridad y control de accesos',
    description: 'La creación esta basada en las buenas prácticas, experiencias y conocimiento de nuestros mejores expertos.',
    icon: MdOutlineSecurity,
  },
  {
    name: 'Visibilidad',
    description: 'Para no perder de vista el estado de la infra, recursos y servicios en todo momento.',
    icon: MdVisibility,
  },
  {
    name: 'Gestión de ambientes',
    description: 'Para que las salidas a producción sean seguras, para que los devs puedan deployar sus desarrollos y hacer pruebas con total libertad.',
    icon: IoCopy,
  },
  {
    name: 'Control de gastos',
    description: 'Visibilidad en tiempo real del gasto generado por cada uno de los recursos en tu cuenta AWS.',
    icon: BsFillCreditCardFill,
  }, 
  // {
  //   name: 'Administración de recursos',
  //   description: 'Gestiona recursos como clusters, instancias, asi también como bases de datos y recursos nativos de AWS.',
  //   icon: FaExpandAlt,
  // }, 
  // {
  //   name: 'Soporte',
  //   description: 'Te ofrecemos todo el soporte para que puedas comenzar y te acompañamos en tu crecimiento',
  //   icon: FaExpandAlt,
  // }, 
]
