'use client';
import { AppBar, Toolbar, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

// Импорт изображений
import logo from "/public/icon.svg";
import socialIcon1 from "/public/icon4.svg";
import socialIcon2 from "/public/icon5.svg";
import socialIcon3 from "/public/icon6.svg";

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

  const socialIcons = [
    { icon: socialIcon1, alt: "Instagram" },
    { icon: socialIcon2, alt: "Facebook" },
    { icon: socialIcon3, alt: "Twitter" }
  ];

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
        {/* Лого и контакты */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          order: { xs: 1, md: 1 },
          width: { xs: "100%", md: "auto" }
        }}>
          <ExportedImage 
            src={logo}
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

        {/* Меню */}
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
                <Link href="#" passHref legacyBehavior>
                  <a style={{ textDecoration: 'none', color: 'inherit' }}>
                    {section.title}
                  </a>
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
                  <Link href="#" passHref legacyBehavior>
                    <a style={{ textDecoration: 'none', color: 'inherit' }}>
                      {item}
                    </a>
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>

        {/* Соцсети и копирайт */}
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
            {socialIcons.map(({ icon, alt }, index) => (
              <Link href="#" passHref key={index} legacyBehavior>
                <a>
                  <ExportedImage
                    src={icon}
                    alt={alt}
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
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