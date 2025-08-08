'use client';
import { AppBar, Toolbar, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuSections = [
    {
      title: "Репродукции",
      items: ["Франция", "Германия", "Англия"]
    },
    {
      title: "Новинки",
      items: ["2021", "2020"]
    },
    {
      title: "О нас",
      items: ["Художники", "Менеджеры"]
    }
  ];

  const socialIcons = ["/icon4.svg", "/icon5.svg", "/icon6.svg"];

  return (
    <AppBar
      component="footer"
      elevation={0}
      position="relative"
      sx={{
        width: "100%",
        bgcolor: "#E1EDE6",
        py: { xs: 3, md: 4 },
        px: { xs: 2, sm: 4, lg: "165px" },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          p: "0 !important",
          gap: { xs: 3, md: 0 }
        }}
      >

        <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          order: { xs: 1, md: 1 },
          width: { xs: "100%", md: "auto" }
        }}>
          <Image 
            src="/icon.svg" 
            alt="Логотип компании" 
            width={isMobile ? 120 : 143} 
            height={isMobile ? 30 : 35} 
          />
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              mt: 1,
              fontSize: { xs: 16, sm: 20 },
              color: "#2C2D35",
              fontWeight: 500,
            }}
          >
            +7 (999) 543‑54‑54
          </Typography>
          <Typography variant="body2" component="p" sx={{ color: "#86928B", mt: 0.5 }}>
            Мастерская
          </Typography>
        </Box>


        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, sm: 4, lg: 6 },
            order: { xs: 3, md: 2 },
            width: { xs: "100%", md: "auto" },
            mt: { xs: 2, md: 0 }
          }}
        >
          {menuSections.map((section) => (
            <Box key={section.title} sx={{ minWidth: 120 }}>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: 16, sm: 20 },
                  color: "#2C2D35",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                <Link href="/page" passHref>
                  {section.title}
                </Link>
              </Typography>

              {section.items.map((item) => (
                <Typography 
                  key={item} 
                  variant="body2" 
                  sx={{ 
                    color: "#86928B", 
                    mb: 1,
                    fontSize: { xs: 14, sm: 16 }
                  }}
                >
                  <Link href="/page" passHref>
                    {item}
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 2, sm: 3 },
            order: { xs: 2, md: 3 },
            width: { xs: "100%", sm: "auto" },
            mt: { xs: 0, sm: 0 }
          }}
        >
          <Box sx={{ 
            display: "flex", 
            gap: { xs: 2, sm: 3 },
            order: { xs: 2, sm: 1 }
          }}>
            {socialIcons.map((src) => (
              <Image 
                key={src} 
                src={src} 
                alt="Социальная сеть" 
                width={24} 
                height={24} 
              />
            ))}
          </Box>

          <Typography
            variant="caption"
            component="p"
            sx={{ 
              color: "#86928B", 
              fontSize: 12,
              order: { xs: 1, sm: 2 },
              textAlign: { xs: "left", sm: "center" }
            }}
          >
            Ink. House ®<br />All rights reserved
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}