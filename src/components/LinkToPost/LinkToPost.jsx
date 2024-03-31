
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './LinkToPost.css';
import Slideshow from '../img/ImageSlider'
import url from '../backend-server-url'
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Footer from '../footer/footer';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



let baseurl = url.baseUrl
let url_get_data=url.url_get_data



/* Загрузка определенного поста по id*/



 const LinkToPost =() => {
  const [post, setPost] = useState([])
  let {id} = useParams();
useEffect(()=>{ 
    
    axios.get(`${baseurl}${url_get_data}${id}`)
      .then(res => {
        const post = res.data;
        console.log(post)
        setPost( post );
     
      
      })

 },[])



    return (
      <>
      <Container>
      { post.map(posts =>
        <div key={posts.id}>
       
        <div className="content-title content" dangerouslySetInnerHTML={{ __html: posts.title }} />
        <div className="content">
        <Slideshow  baseurl={baseurl} image1={`${baseurl}${posts.image1}`} image2={`${baseurl}${posts.image2}`} image3={`${baseurl}${posts.image3}`} />
        </div>

        <Box sx={{ minWidth: 275 }}>


    <Card variant="outlined">
    <React.Fragment>
<CardContent>
<Typography variant="h6" component="div">
        Пост жайлы қысқаша ақпарат
</Typography>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Посттың жасалған күні - {posts.date_add} <PlaylistAddCheckIcon sx={{ color: 'blue'}}/>
  </Typography>

  <Typography sx={{ fontSize: 14 }} color="text.secondary">
  Лүпілдер саны {posts.likes.length} <FavoriteIcon sx={{ color: 'red'}}/>
  </Typography>

  {posts.main_news
  ?
  <Typography sx={{ fontSize: 14 , color: 'green' }} color="text.secondary">
       Пост басты бетке қойылды <VerifiedIcon/>
  </Typography>
  :
  <Typography  sx={{ fontSize: 14, color: 'red'}} color="text.secondary">
  Пост басты бетке қойылмады <UnpublishedIcon/>
</Typography>
  
  }
 

</CardContent>
</React.Fragment>
</Card>
</Box>

<CardContent/>


          <Card variant="outlined">
         
          <Container>
       
        <CardContent>
                <div dangerouslySetInnerHTML={{ __html: posts.content_text }}/>
                </CardContent>
                </Container>
          
              
                </Card>

                </div>
                
       
        
    )}
    <CardContent/>
    <Alert severity="warning">
    <AlertTitle>Назар!</AlertTitle>
    Біз идеяны алға жылжытпаймыз, біз жай ғана фактілерді айтамыз және оларға сену сіздің таңдауыңыз.
    <br/>
    <strong> Біз «сеніңіз, бірақ тексеріңіз» идеяларын ұстанамыз</strong>
  </Alert>

    </Container>
    <Footer/>
    </>
        
      
    )
  
}



export default LinkToPost;