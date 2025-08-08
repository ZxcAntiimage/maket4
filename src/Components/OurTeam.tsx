'use client';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Image from "next/image";


export default function OurTeam() {


  return (
    <Box sx={{ 
      px: { xs: 2, sm: 4, md: 6, lg: '165px' },
      mb: { xs: 4, sm: 6, md: '70px' },
      width: '100%'
    }}>
      <AppBar 
        elevation={0} 
        position="relative" 
        sx={{
          backgroundColor: "transparent",
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ p: '0 !important' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 2,
            p: { xs: 2, md: 4 }
          }}>
            <Box sx={{
              position: 'relative',
              width: { xs: '100%', md: '445px' },
              height: { xs: '300px', md: '440px' },
              minWidth: { xs: '100%', md: '445px' },
              mr: { xs: 0, md: 4 },
              mb: { xs: 3, md: 0 }
            }}>
              <Image 
                src="/img2.png" 
                alt="Наша команда" 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 445px"
              />
            </Box>

            <Box sx={{ 
              flex: 1,
              ml: { xs: 0, md: '30px' }
            }}>
              <Typography 
                variant="h2"
                sx={{
                  color: '#2C2D35',
                  fontSize: { xs: '28px', sm: '34px', md: '40px' },
                  fontWeight: 500,
                  mb: { xs: 2, md: '20px' }
                }}
              >
                Наша команда
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#2C2D35',
                  fontSize: { xs: '16px', md: '18px' },
                  mb: { xs: 2, md: '20px' },
                  lineHeight: 1.6
                }}
              >
                Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет 
                оценить значение экспериментов, поражающих по своей масштабности и грандиозности. 
                Мы вынуждены отталкиваться от того, что консультация с широким активом.
              </Typography>

              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: { xs: 2, sm: 4, md: '30px' },
                flexWrap: 'wrap'
              }}>
                {["/icon.png", "/icon2.jpg", "/icon3.jpg"].map((icon) => (
                  <Box key={icon} sx={{
                    position: 'relative',
                    width: { xs: 60, sm: 80 },
                    height: { xs: 60, sm: 80 }
                  }}>
                    <Image 
                      src={icon} 
                      alt="Иконка социальной сети"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 600px) 60px, 80px"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}