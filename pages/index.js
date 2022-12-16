import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';


export default function Home() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: 'lightgrey',
    userFontColor: '#4a4a4a',
    outerWidth: '26px'
  };
  return (
    <div>
    <ThemeProvider theme={theme}>
    <ChatBot 
    placeholder=''
    hideUserAvatar
    width='500px'
    botAvatar='avatarResponsable.png'
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
          { value: 1, label: 'Merci'},
          { value: 2, label: 'Merci , je peux savoir une autre chose?'},

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
    ]}
  />
  </ThemeProvider>
    </div>
    
  )

}
