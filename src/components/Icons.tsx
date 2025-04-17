import IconContainer from "./IconContainer";
import { 
  BootstrapIcon,
  DartIcon, 
  DockerIcon, 
  ExpressJSIcon,
  FirebaseIcon, 
  FlutterIcon, 
  GithubIcon, 
  HoppscotchIcon, 
  JavaScriptIcon, 
  LaravelIcon, 
  LinuxIcon, 
  MongoDBIcon, 
  MysqlIcon, 
  NodeJSIcon, 
  NpmIcon, 
  PhpIcon, 
  PostgresIcon, 
  PostmanIcon, 
  PythonIcon, 
  ReactJSIcon, 
  ReactNativeIcon, 
  RtkIcon, 
  SassIcon, 
  TailwindIcon, 
  TypescriptIcon, 
  NestJSIcon,
  AWSIcon,
  ClickUpIcon
  } from "../assets/icons";

const Icons = () => {
  return (  
    <>
      <div className="grid grid-cols-4 md:grid-cols-9 gap-4 ">
        {/* Languages */}

        {/* Javascript */}
        <IconContainer icon={<JavaScriptIcon />} label= {"Javascript"}/>
        
        {/* Typescript */}
        <IconContainer icon={<TypescriptIcon />} label= "Typescript"/> 

        {/* React */}
        <IconContainer icon={<ReactJSIcon />} label= "ReactJS"/>

        {/* NestJS */}
        <IconContainer icon={<NestJSIcon />} label= "NestJS"/>

        {/* Express JS */}
        <IconContainer icon={<ExpressJSIcon />} label= "ExpressJS"/>

        {/* NodeJs */}
        <IconContainer icon={<NodeJSIcon />} label= "NodeJS"/>

        {/* PHP */}
        <IconContainer icon={<PhpIcon />} label= "PHP"/> 

        {/* Laravel */}
        <IconContainer icon={<LaravelIcon />} label= "Laravel"/>

        {/* React Native */}
        <IconContainer icon={<ReactNativeIcon />} label= "React Native"/>

        {/* Dart */}
        <IconContainer icon={<DartIcon />} label= "Dart"/> 

        {/* Flutter*/}
        <IconContainer icon={<FlutterIcon />} label= "Flutter"/>

        {/* Python */}
        <IconContainer icon={<PythonIcon />} label= "Python"/> 

        {/* MySQL */}
        <IconContainer icon={<MysqlIcon />} label= "MySQL"/>


        {/* PostgreSQL */}
        <IconContainer icon={<PostgresIcon />} label= "PostgreSQL"/>

        {/* MongoDB */}
        <IconContainer icon={<MongoDBIcon />} label= "MongoDB"/>

        {/* Firebase */}
        <IconContainer icon={<FirebaseIcon />} label= "Firebase"/>

        {/* Bootstrap */}
        <IconContainer icon={<BootstrapIcon />} label= "Bootstrap"/> 

        {/* Tailwind */}
        <IconContainer icon={<TailwindIcon />} label= "Tailwind"/> 

        {/* Sass */}
        <IconContainer icon={<SassIcon />} label= "Sass"/>

        {/* NPM */}
        <IconContainer icon={<NpmIcon />} label= "NPM"/>

        {/* Docker */}
        <IconContainer icon={<DockerIcon />} label= "Docker"/>

        {/* Git` */}
        <IconContainer icon={<GithubIcon />} label= "Github"/>


        {/* AWS */}
        <IconContainer icon={<AWSIcon />} label= "AWS S3"/>

        {/* Linux */}
        <IconContainer icon={<LinuxIcon />} label= "Linux"/>

        {/* RTK */}
        <IconContainer icon={<RtkIcon />} label= "Redux"/>

        {/* Postman */}
        <IconContainer icon={<PostmanIcon />} label= "Postman"/>

        {/* ClickUp */}
        <IconContainer icon={<ClickUpIcon />} label= "ClickUp"/>

      </div>
    </>
  );
};

export default Icons;
