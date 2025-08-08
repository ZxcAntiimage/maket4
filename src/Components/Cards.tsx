'use client';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ExportedImage from "next-image-export-optimizer";

interface Card {
  id: number;
  img: string;
  subImg: string;
  title: string;
  subTitle: string;
  price: string;
}

const countries = [
  { key: 'france', label: 'Франция' },
  { key: 'germany', label: 'Германия' },
  { key: 'england', label: 'Англия' }
];

export default function Cards() {
  const [country, setCountry] = useState('france');
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await import(`@/data/${country}.json`);
        setCards(res.default);
      } catch (error) {
        console.error('Error loading data:', error);
        setCards([]);
      }
    }
    fetchData();
  }, [country]);

  return (
    <Box sx={{ 
      px: { xs: 2, sm: 4, md: 6, lg: '165px' }, 
      py: 2 
    }}>
      <AppBar
        component="header"
        position="relative"
        sx={{
          backgroundColor: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: 0,
            width: '100%'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              py: 3
            }}
          >
            <Typography
              variant="h1"
              component="h2"
              sx={{ 
                color: '#2C2D35', 
                fontWeight: 500, 
                mr: { sm: 5 }, 
                mb: { xs: 2, sm: 0 },
                fontSize: { xs: '1.5rem', sm: '2rem' }
              }}
            >
              Репродукции
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 2 },
                ml: { sm: 'auto' }
              }}
            >
              {countries.map(({ key, label }) => (
                <Button
                  key={key}
                  variant="outlined"
                  disableRipple
                  onClick={() => setCountry(key)}
                  aria-label={`Показать ${label}`}
                  sx={{
                    color: '#2C2D35',
                    backgroundColor: '#D4E8D9',
                    fontWeight: 500,
                    fontSize: { xs: '14px', sm: '20px' },
                    minWidth: { xs: 100, sm: 126 },
                    height: { xs: 36, sm: 43 },
                    borderRadius: 24,
                    borderColor: '#D4E8D9',
                    '&:hover': {
                      backgroundColor: '#376B44',
                      color: '#F4F6F5',
                      borderColor: '#376B44'
                    },
                    '&:focus-visible': {
                      outline: '2px solid #2C2D35'
                    }
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, minmax(0, 1fr))', 
                lg: 'repeat(3, minmax(0, 1fr))' 
              },
              gap: 3,
              width: '100%',
              py: 2
            }}
          >
            {cards.map(card => (
              <Box
                key={card.id}
                component="article"
                sx={{
                  width: '100%',
                  maxWidth: { sm: '400px', lg: '350px' },
                  minHeight: { xs: 'auto', sm: '730px' },
                  textAlign: 'left',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  p: 2,
                  backgroundColor: "#E1EDE6",
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: { xs: 'auto', sm: '422px' },
                    position: 'relative',
                    aspectRatio: '310/422',
                    overflow: 'hidden',
                    borderRadius: 1
                  }}
                >
                  <ExportedImage
                    src={card.img} 
                    alt={card.title || 'Картина'} 
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={card.id === 1} 
                  />
                </Box>
                
                <Typography variant="body1" sx={{ 
                  color: '#86928B', 
                  fontWeight: 500, 
                  fontSize: '1.125rem',
                  mt: 2.5,
                  mb: 1.25
                }}>
                  {card.subImg}
                </Typography>
                
                <Typography variant="h3" sx={{ 
                  color: '#2C2D35', 
                  fontWeight: 500,
                  fontSize: { xs: '1.5rem', md: '1.875rem' },
                  mb: 1
                }}>
                  {card.title}
                </Typography>
                
                <Typography variant="body2" sx={{ 
                  color: '#2C2D35', 
                  fontWeight: 500,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  mb: { xs: 2.5, md: 3.75 }
                }}>
                  {card.subTitle}
                </Typography>
                
                <Typography variant="h4" sx={{ 
                  color: '#598D66', 
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  mb: { xs: 1.875, md: 2.5 }
                }}>
                  {card.price}
                </Typography>

                <Button
                  variant="outlined"
                  aria-label={`Добавить ${card.title} в корзину`}
                  sx={{
                    color: '#598D66',
                    borderColor: '#598D66',
                    mt: 'auto',
                    width: '100%',
                    height: 40,
                    '&:hover': {
                      backgroundColor: 'rgba(89, 141, 102, 0.04)'
                    }
                  }}
                >
                  В корзину
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}