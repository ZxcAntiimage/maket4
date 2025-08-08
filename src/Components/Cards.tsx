'use client';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';


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
      const res = await import(`@/data/${country}.json`);
      setCards(res.default);
    }
    fetchData();
  }, [country]);

  return (
    <Box sx={{ 
      px: { xs: 2, sm: 4, md: 6, lg: '165px' }, 
      py: 2 
    }}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar
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
              variant="h4"
              component="p"
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
                  sx={{
                    color: '#2C2D35',
                    backgroundColor: '#D4E8D9',
                    fontWeight: 500,
                    fontSize: { xs: '14px', sm: '20px' },
                    width: { xs: 100, sm: 126 },
                    height: { xs: 36, sm: 43 },
                    borderRadius: 24,
                    borderColor: '#D4E8D9',
                    '&:hover': {
                      backgroundColor: '#376B44',
                      color: '#F4F6F5',
                      borderColor: '#376B44'
                    },
                    outline: 'none'
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                lg: 'repeat(3, 1fr)' 
              },
              gap: 3,
              width: '100%',
              py: 2
            }}
          >
            {cards.map(card => (
              <Box
                key={card.id}
                sx={{
                  width: '100%',
                  maxWidth: { sm: '400px', lg: '350px' },
                  height: { xs: 'auto', sm: '730px' },
                  textAlign: 'left',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  p: 2,
                  backgroundColor: "#E1EDE6",
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto'
                }}
              >
                <Box sx={{ 
                  width: '100%', 
                  height: { xs: 'auto', sm: '422px' },
                  position: 'relative',
                  aspectRatio: '310/422'
                }}>
                  <Image 
                    src={card.img} 
                    alt={card.title || 'Картина'} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
                <p className='text-[#86928B] font-medium text-lg mt-[20px] mb-[10px]'>{card.subImg}</p>
                <p className='text-[24px] md:text-[30px] font-medium text-[#2C2D35] mb-[8px]'>{card.title}</p>
                <p className='text-base md:text-lg text-[#2C2D35] font-medium mb-[20px] md:mb-[30px]'>{card.subTitle}</p>
                <p className='text-[#598D66] font-medium text-xl md:text-2xl mb-[15px] md:mb-[20px]'>{card.price}</p>

                <Button
                  variant="outlined"
                  sx={{
                    color: '#598D66',
                    borderColor: '#598D66',
                    mt: 'auto',
                    width: '100%',
                    height: 40
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