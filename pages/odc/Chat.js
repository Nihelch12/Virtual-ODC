import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

export default function Chat(props) {
    const modalState= props.toggle
   
  const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#DDDDDD',
    botFontColor: '#000000',
    userBubbleColor: '#F16E00',
    userFontColor: '#ffffff',
    outerWidth: '26px'
    
  };
  return (
    <div style={{ display:"flex", justifyContent: "center"}}>
      <style global js>{`
       .iBOxRA{
        width: 300px
      }
      .dNHtKL:disabled{
        background: none 
      }
      .bZjSBb{
        width:880px
      }
      .hDiPRc{
        position: unset
      }
      .dNHtKL{
        border-top: none 
      }
      .klvvmm{
        width:300px;
      }
    
      `}</style>
      
      <ThemeProvider theme={theme}>
        
        <ChatBot  style={{borderRadius: "0px",top:"-790px",left:"380px",height: "690px",width:"500px"}}
          botDelay="1300"
          bubbleOptionStyle= {{ backgroundColor: "white", color: "#F16E00", border: '1px solid #F16E00'}}
          footerStyle ={{display: "none", height: "0px"}}
          bubbleStyle={{width: "450px"}}
          placeholder=''
          hideUserAvatar
          
          // width='500px'
          
          botAvatar='../images/avatarResponsable.png'
          headerTitle="Responsable Ecole du code"
          //speechSynthesis={{ enable: true, lang: 'fr' }}
          steps={[
            {
              id: '1',
              message: 'Bonjour, bienvenu à Orange Digital Center , Avez-vous une idée sur le centre?',
              trigger: 2
            },

            {
              id: '2',
              options: [
                { value: 1, label: 'Ecole du code', trigger: '4' },
                { value: 2, label: 'Non , aucune idée', trigger: '5' },

              ],
            },
            {
              id: '3',
              options: [
                { value: 1, label: 'Merci' },
                { value: 2, label: 'Merci , sinon je veux savoir un peu à propos le Fab Lab Orange?',  trigger: '6'  },

              ],
            },
            {
              id: '4',
              message: 'Oui, bien deviné ! En fait, Orange Digital Center abrite quatre programmes stratégiques sous le même toit : la coding school, le FabLab Solidaire, Orange Fab et Orange Digital Ventures Africa. Ce réseau de ressources gratuites et inclusives soutient les start-ups et les projets locaux utilisant les technologies numériques et est en cours de déploiement au Moyen-Orient et en Afrique.',
              trigger: '3',
            },
            {
              id: '5',
              message: 'D accord, alors Orange Digital Center abrite quatre programmes stratégiques sous le même toit : la coding school, le FabLab Solidaire, Orange Fab et Orange Digital Ventures Africa. Ce réseau de ressources gratuites et inclusives soutient les start-ups et les projets locaux utilisant les technologies numériques et est en cours de déploiement au Moyen-Orient et en Afrique.',
              end: true,
            },
            {
              id: '6',
              message: 'Le Solidarity FabLab est un atelier de production numérique pour créer et prototyper avec des équipements numériques, tels que des imprimantes 3D, des fraiseuses et des découpeuses laser. Il rassemble aussi bien des jeunes sans emploi et sans qualification que des étudiants, jeunes diplômés et jeunes entrepreneurs.',
              trigger: '7',
            },
            {
              id: '7',
              options: [
                { value: 1, label: 'Intéressant' },
                { value: 2, label: 'Bien compris' },

              ],
            },
          ]}
        />
      </ThemeProvider>
    
    </div>

  )

}
