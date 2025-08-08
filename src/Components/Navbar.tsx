'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Репродукции", "Новинки", "О нас"];

  return (
    <AppBar 
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#E1EDE6",
        px: { xs: 2, md: 4, lg: "165px" },
        py: 1
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: '0 !important',
        }}
      >
        <Box sx={{ flexGrow: isMobile ? 1 : 0 }}>
          <Image 
            alt="Логотип" 
            src="/icon.svg" 
            width={isMobile ? 100 : 143} 
            height={isMobile ? 25 : 35} 
            priority
          />
        </Box>

        {!isMobile && (
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, md: 4, lg: 6 },
            mx: 'auto'
          }}>
            {navItems.map((label) => (
              <Button
                key={label}
                sx={{
                  color: "#2C2D35",
                  fontSize: { md: '16px', lg: '20px' },
                  fontWeight: 500,
                  textTransform: 'none',
                  minWidth: 'auto',
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: "#2C2D35" }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          ) : (
            <IconButton sx={{ color: "#2C2D35" }}>
              <AddShoppingCartIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Мобильное меню */}
      {isMobile && mobileOpen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
            gap: 2,
            backgroundColor: "#E1EDE6",
          }}
        >
          {navItems.map((label) => (
            <Button
              key={label}
              fullWidth
              sx={{
                color: "#2C2D35",
                fontSize: '18px',
                fontWeight: 500,
                textTransform: 'none',
              }}
            >
              {label}
            </Button>
          ))}
          <IconButton sx={{ color: "#2C2D35" }}>
            <AddShoppingCartIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
      )}
    </AppBar>
  );
}