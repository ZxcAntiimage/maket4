import ExportedImage from "next-image-export-optimizer";
import Img from "/public/img.png"
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        py: { xs: 2, sm: 3 },      
        px: { xs: 2, sm: 4 },       
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          gap: { xs: 3, md: 6 }, 
        }}
      >
        {/* Картинка */}
        <Box sx={{ flexShrink: 0 }}>
          <ExportedImage src={Img} alt="" width={540} height={621} />
        </Box>

        {/* Текст + кнопка */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "60%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            component="p"
            sx={{
              fontSize: { xs: 36, sm: 48, md: 60 },
              color: "#2C2D35",
              fontWeight: 500,
              mb: 2.5,
              lineHeight: 1.2,
            }}
          >
            Реплики картин <br />
            от{" "}
            <Link href="/page" className="text-[#598D66]">
              
                Ink. House

            </Link>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#86928B",
              mb: 4,
            }}
          >
            Высокое качество отрисовки на плотной бумаге или льняном холсте.{" "}
            <br />
            Редкие произведения, доступные цены.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#598D66",
              borderColor: "#598D66",
              textTransform: "none",
              fontWeight: 500,
              px: { xs: 3, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              minWidth: 0,
            }}
          >
            Продукция
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
