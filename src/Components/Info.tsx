'use client';
import { AppBar, Button, Toolbar, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Info() {
  const isMobile = useMediaQuery('(max-width:600px)');


  return (
    <AppBar
      elevation={0}
      position="relative"
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "574px" },
        px: { xs: 2, sm: 4, md: 6, lg: "165px" },
        py: { xs: 4, sm: 0 },
        boxShadow: "none",
        backgroundImage: "url(/bg.png)",
        backgroundSize: "cover",  
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: { xs: "40px", sm: "70px" },
        marginBottom: { xs: "40px", sm: "70px" }
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minHeight: "0 !important",
          py: { xs: 2, sm: 4 }
        }}
      >
        <div className="flex flex-col w-full">
          <div className={`flex ${isMobile ? "flex-col" : "items-center"} mb-5 ${isMobile ? "mt-0" : "mt-[70px]"}`}>
            <Image 
              src="/star.png" 
              alt="Декоративная звезда" 
              width={isMobile ? 60 : 80} 
              height={isMobile ? 60 : 80} 
              className={isMobile ? "mb-4" : ""}
            />
            <h1 className={`title leading-[100%] ${isMobile ? "ml-0 text-2xl" : "ml-4 text-[40px]"} font-medium`}>
              Новая коллекция {!isMobile && <br />}
              французских авторов
            </h1>
          </div>

          <div className={`sub-title mt-2 ${isMobile ? "text-base" : "text-lg"} font-medium leading-relaxed`}>
            <p>
              {isMobile ? (
                "Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям."
              ) : (
                <>
                  Сложно сказать, почему акционеры крупнейших компаний <br />
                  призывают нас к новым свершениям, которые, в свою очередь, <br />
                  должны быть заблокированы в рамках своих собственных <br />
                  рациональных ограничений. <br />
                </>
              )}
            </p>

            <p className={`mt-[10px] ${isMobile ? "mb-[30px]" : "mb-[60px]"}`}>
              {isMobile ? (
                "Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность."
              ) : (
                <>
                  Принимая во внимание показатели успешности, граница <br />
                  обучения кадров предопределяет высокую востребованность <br />
                  направлений прогрессивного развития.
                </>
              )}
            </p>
          </div>
          
          <Button 
            sx={{
              backgroundColor: "#EEDB6D",
              color: "#2C2D35",
              width: { xs: "100%", sm: "257px" },
              height: { xs: "50px", sm: "65px" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              '&:hover': {
                backgroundColor: "#CEBE61"
              }
            }}
          >
            Ознакомиться
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}