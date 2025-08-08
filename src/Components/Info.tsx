'use client';
import { AppBar, Button, Toolbar, useMediaQuery, Box, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import star from "../../public/star.png";
import background from "../../public/bg.png";

export default function Info() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: "100%",
        minHeight: { xs: "auto", sm: "80vh" },
        px: { xs: 2, sm: 4, md: 6, lg: "165px" },
        py: { xs: 8, sm: 12 },
        overflow: 'hidden'
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)'
          }
        }}
      >
        <ExportedImage
          src={background}
          alt="Фоновое изображение"
          fill
          placeholder="blur"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '80%', lg: '70%' },
            mx: 'auto',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              mb: { xs: 4, sm: 6 }
            }}
          >
            <ExportedImage
              src={star}
              alt="Декоративная звезда"
              width={isMobile ? 60 : 80}
              height={isMobile ? 60 : 80}
              placeholder="blur"
              style={{
                marginBottom: isMobile ? 16 : 0,
                marginRight: isMobile ? 0 : 32
              }}
            />
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: { 
                  xs: '2rem', 
                  sm: '2.5rem', 
                  md: '3rem',
                  lg: '3.5rem'
                },
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'common.white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Новая коллекция
              <Box component="br" display={{ xs: 'none', sm: 'block' }} />
              французских авторов
            </Typography>
          </Box>

          <Box sx={{ 
            mb: { xs: 5, sm: 7 },
            '& p': {
              fontSize: { 
                xs: '1rem', 
                sm: '1.1rem', 
                md: '1.2rem'
              },
              lineHeight: 1.7,
              color: 'common.white',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              mb: 3,
              textAlign: { xs: 'center', sm: 'left' }
            }
          }}>
            <Typography component="p">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, 
              {!isMobile && ' которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.'}
            </Typography>
            <Typography component="p">
              Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность
              {!isMobile && ' направлений прогрессивного развития.'}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#EEDB6D',
                color: '#2C2D35',
                width: { xs: '100%', sm: 257 },
                height: { xs: 56, sm: 64 },
                fontSize: { 
                  xs: '1rem', 
                  sm: '1.1rem'
                },
                px: 4,
                '&:hover': {
                  bgcolor: '#DBCB5F',
                  transform: 'translateY(-2px)',
                  boxShadow: 3
                },
                transition: 'all 0.3s ease',
                boxShadow: 2
              }}
            >
              Ознакомиться
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}