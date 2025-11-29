"use client";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import {
  EventAvailableOutlined,
  GraphicEqOutlined,
  GroupOutlined,
  Instagram as InstagramIcon,
  MusicNoteOutlined,
  PlaceOutlined,
  PlayCircleOutline,
  SendOutlined,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import theme from "./theme";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ===== 固定ヘッダー ===== */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(10,5,2,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* ロゴ／バンド名 */}
          <Stack direction="row" spacing={1.5} alignItems="baseline">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              kimaguri jam
            </Typography>
            <Typography
              variant="caption"
              sx={{
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                display: { xs: "none", sm: "inline" },
              }}
            >
              free session / instrumental trio
            </Typography>
          </Stack>

          {/* ナビゲーション */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
          >
            <Button
              href="#top"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Top
            </Button>
            <Button
              href="#members"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Members
            </Button>
            <Button
              href="#live"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Live
            </Button>
            <Button
              href="#contact"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Contact
            </Button>

            {/* SNS アイコン */}
            <Stack direction="row" spacing={1}>
              <Button
                href="https://www.instagram.com/kimaguri_jam/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size="small"
                sx={{ minWidth: 0 }}
              >
                <InstagramIcon fontSize="small" />
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size="small"
                sx={{ minWidth: 0 }}
              >
                <YouTubeIcon fontSize="small" />
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ===== Main ===== */}
      <Box sx={{ bgcolor: "#f3e7da", color: "#3e2f1e" }} id="top">
        {/* ヘッダーぶんの余白 */}
        <Box sx={{ height: 72 }} />

        {/* ===== Hero + Members：パララックス背景 ===== */}
        <Box
          sx={{
            position: "relative",
            color: "#fefaf5",
            overflow: "hidden",
            backgroundImage: "url('/kimaguri-artist-photo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: { xs: "scroll", md: "fixed" }, // md以上でパララックス
          }}
        >
          {/* グラデーションオーバーレイ */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, rgba(5,2,0,0.82), rgba(5,2,0,0.32) 45%, rgba(5,2,0,0.82) 100%)",
              zIndex: 0,
            }}
          />

          {/* ===== Hero ===== */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Container
              maxWidth="lg"
              sx={{
                pt: { xs: 7, md: 9 },
                pb: { xs: 8, md: 10 },
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: { xs: 4, md: 6 } }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 1,
                    bgcolor: "rgba(255,255,255,0.6)",
                    borderRadius: 999,
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  instrumental trio from aichi, japan
                </Typography>
              </Stack>

              <Grid container spacing={4} alignItems="flex-end">
                {/* 左：コピー・テキスト */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 700,
                      fontSize: { xs: "2.8rem", md: "3.8rem" },
                      lineHeight: 1.15,
                    }}
                  >
                    kimaguri jam
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1.5,
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    free session / instrumental groove
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 1.9,
                      maxWidth: 560,
                      color: "rgba(255,255,255,0.93)",
                    }}
                  >
                    『ジャンルに縛られない、3人だけの自由なセッション』をコンセプトに活動中。
                    その時、その瞬間に生まれるグルーヴを純粋に楽しむバンドです。
                    愛知県をメインにいろんな場所に出没します。
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1.2}
                    sx={{ mt: 3, flexWrap: "wrap" }}
                  >
                    <Chip
                      icon={<MusicNoteOutlined />}
                      label="Free Session"
                      variant="outlined"
                      sx={{
                        borderRadius: 999,
                        borderColor: "rgba(255,255,255,0.4)",
                        color: "rgba(255,255,255,0.9)",
                        bgcolor: "rgba(0,0,0,0.2)",
                        "& .MuiChip-icon": { color: "inherit" },
                      }}
                    />
                    <Chip
                      icon={<GroupOutlined />}
                      label="Instrumental Trio"
                      variant="outlined"
                      sx={{
                        borderRadius: 999,
                        borderColor: "rgba(255,255,255,0.4)",
                        color: "rgba(255,255,255,0.9)",
                        bgcolor: "rgba(0,0,0,0.2)",
                        "& .MuiChip-icon": { color: "inherit" },
                      }}
                    />
                    <Chip
                      icon={<PlaceOutlined fontSize="small" />}
                      label="From Aichi"
                      variant="outlined"
                      sx={{
                        borderRadius: 999,
                        borderColor: "rgba(255,255,255,0.4)",
                        color: "rgba(255,255,255,0.9)",
                        bgcolor: "rgba(0,0,0,0.2)",
                        "& .MuiChip-icon": { color: "inherit" },
                      }}
                    />
                  </Stack>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mt: 4, alignItems: { xs: "stretch", sm: "center" } }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 999,
                        px: 4,
                        py: 1.2,
                        bgcolor: "#fefaf5",
                        color: "#2b1d10",
                        fontWeight: 500,
                        "&:hover": {
                          bgcolor: "#f4e5d4",
                        },
                      }}
                      href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<PlayCircleOutline />}
                    >
                      ライブ動画を見る
                    </Button>

                    <Button
                      variant="text"
                      sx={{
                        borderRadius: 999,
                        px: 2,
                        color: "rgba(255,255,255,0.9)",
                        textTransform: "none",
                        justifyContent: "flex-start",
                      }}
                      href="https://www.instagram.com/kimaguri_jam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<InstagramIcon />}
                    >
                      Instagramで最新情報を見る
                    </Button>
                  </Stack>
                </Grid>

                {/* 右：グラスカード（リンク集） */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      ml: { md: "auto" },
                      maxWidth: 360,
                      mt: { xs: 4, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background:
                          "linear-gradient(135deg, rgba(20,10,4,0.86), rgba(65,43,28,0.92))",
                        border: "1px solid rgba(255,255,255,0.18)",
                        backdropFilter: "blur(22px)",
                        boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 1.5 }}
                      >
                        <GraphicEqOutlined fontSize="small" />
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          links
                        </Typography>
                      </Stack>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "var(--font-playfair)",
                          mb: 2,
                        }}
                      >
                        Listen / Watch / Follow
                      </Typography>

                      <Stack spacing={1.5}>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            borderRadius: 999,
                            justifyContent: "flex-start",
                            bgcolor: "#fefaf5",
                            color: "#2b1d10",
                            textTransform: "none",
                            "&:hover": {
                              bgcolor: "#f4e5d4",
                            },
                          }}
                          href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<YouTubeIcon />}
                        >
                          ライブ動画（YouTube）
                        </Button>

                        <Button
                          fullWidth
                          variant="outlined"
                          sx={{
                            borderRadius: 999,
                            justifyContent: "flex-start",
                            borderColor: "rgba(255,255,255,0.45)",
                            color: "rgba(255,255,255,0.92)",
                            textTransform: "none",
                            "&:hover": {
                              borderColor: "#ffffff",
                              bgcolor: "rgba(255,255,255,0.06)",
                            },
                          }}
                          href="https://www.instagram.com/kimaguri_jam/"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<InstagramIcon />}
                        >
                          Instagram
                        </Button>

                        <Button
                          fullWidth
                          variant="text"
                          sx={{
                            borderRadius: 999,
                            justifyContent: "flex-start",
                            color: "rgba(255,255,255,0.8)",
                            textTransform: "none",
                          }}
                          href="https://www.instagram.com/kimaguri_jam/"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<SendOutlined />}
                        >
                          イベント出演のご相談（DM）
                        </Button>
                      </Stack>

                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mt: 2.5,
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.6,
                        }}
                      >
                        マルシェ／マーケット／フェアなど、
                        雰囲気を大事にしたイベントへの出演も
                        お気軽にご相談ください。
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* ===== Members ===== */}
          <Box
            id="members"
            sx={{
              position: "relative",
              zIndex: 1,
              py: { xs: 8, md: 10 },
            }}
          >
            <Container maxWidth="lg">
              <Stack spacing={1.5} sx={{ mb: 5 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <GroupOutlined fontSize="small" />
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    members
                  </Typography>
                </Stack>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                  }}
                >
                  メンバー
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    maxWidth: 520,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  若い女性ドラマーをリーダーに、ギターとベースのトリオ編成。
                  それぞれのルーツを持ち寄りながら、その場の空気で自由に音を重ねていきます。
                </Typography>
              </Stack>

              <Grid container spacing={3}>
                {/* スグリユリカ */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.15)",
                      bgcolor: "rgba(253,248,242,0.92)",
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(62,47,30,0.7)",
                        }}
                      >
                        drums / leader
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 0.5,
                          fontWeight: 600,
                          color: "#3e2f1e",
                        }}
                      >
                        スグリ ユリカ
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 2, color: "rgba(62,47,30,0.9)" }}
                      >
                        バンドの方向性をゆるやかに導くリーダー。
                        軽やかさと芯の強さを併せ持つドラミングで、セッション全体の空気をつくります。
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* ツマガリダイスケ */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.15)",
                      bgcolor: "rgba(253,248,242,0.92)",
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(62,47,30,0.7)",
                        }}
                      >
                        bass
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 0.5,
                          fontWeight: 600,
                          color: "#3e2f1e",
                        }}
                      >
                        ツマガリ ダイスケ
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 2, color: "rgba(62,47,30,0.9)" }}
                      >
                        グルーヴのど真ん中を支えるベース。
                        低音で土台を作りながら、時にメロディックに動いてバンドの表情を変えていきます。
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* キムラコウキ */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.15)",
                      bgcolor: "rgba(253,248,242,0.92)",
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(62,47,30,0.7)",
                        }}
                      >
                        guitar
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 0.5,
                          fontWeight: 600,
                          color: "#3e2f1e",
                        }}
                      >
                        キムラ コウキ
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 2, color: "rgba(62,47,30,0.9)" }}
                      >
                        クリーン〜ドライブまで幅広いトーンで、メロディとテクスチャを行き来するギター。
                        空間系の響きで、会場全体の雰囲気をふわりと変えていきます。
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {/* ===== Live Video ===== */}
        <Box
          id="live"
          sx={{
            py: { xs: 8, md: 10 },
            bgcolor: "#f3e7da",
            borderTop: "1px solid rgba(62,47,30,0.06)",
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={1.5} sx={{ mb: 5 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EventAvailableOutlined fontSize="small" />
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(62,47,30,0.7)",
                  }}
                >
                  live video
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                }}
              >
                ライブ動画
              </Typography>
              <Typography
                variant="body2"
                sx={{ maxWidth: 520, color: "rgba(62,47,30,0.8)" }}
              >
                実際の演奏の雰囲気を、そのまま感じていただけるライブ映像です。
                会場の空気感ごと楽しんでいただければうれしいです。
              </Typography>
            </Stack>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(62,47,30,0.12)",
                    bgcolor: "#1a110a",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      pt: "56.25%", // 16:9
                    }}
                  >
                    <Box
                      component="iframe"
                      src="https://www.youtube.com/embed/rQOJfemmTUk"
                      title="kimaguri jam live"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                    />
                  </Box>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid rgba(62,47,30,0.08)",
                    bgcolor: "#fdf8f2",
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={2}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        イベント出演について
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(62,47,30,0.85)" }}
                      >
                        KDハポン、コロンブスマーケット、COBO market、
                        Japanese Craft Fair 2025、愛知ウェルネスマルシェ など、
                        これまでさまざまなイベントに出演してきました。
                        会場の雰囲気に合わせた選曲と音量で演奏します。
                      </Typography>

                      <Divider sx={{ my: 1.5 }} />

                      <Stack spacing={1.5} id="contact">
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            borderRadius: 999,
                            bgcolor: "#3e2f1e",
                            color: "#fefaf5",
                            textTransform: "none",
                            "&:hover": {
                              bgcolor: "#2f2316",
                            },
                          }}
                          href="https://www.instagram.com/kimaguri_jam/"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<InstagramIcon />}
                        >
                          Instagram から問い合わせ
                        </Button>

                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{
                            borderRadius: 999,
                            textTransform: "none",
                            borderColor: "rgba(62,47,30,0.3)",
                            "&:hover": {
                              borderColor: "rgba(62,47,30,0.7)",
                            },
                          }}
                          href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<YouTubeIcon />}
                        >
                          YouTube で見る
                        </Button>
                      </Stack>

                      <Typography
                        variant="caption"
                        sx={{
                          mt: 2,
                          color: "rgba(62,47,30,0.75)",
                          lineHeight: 1.7,
                        }}
                      >
                        マルシェ／マーケット／店舗イベントなど、
                        まずは日程や雰囲気だけでもお知らせいただければ、
                        編成や内容をご提案いたします。
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ===== Footer ===== */}
        <Box
          component="footer"
          sx={{
            borderTop: "1px solid rgba(62,47,30,0.12)",
            bgcolor: "#efe0cf",
            py: 4,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={0.5}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    kimaguri jam
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(62,47,30,0.85)" }}
                  >
                    Instrumental trio band based in Aichi, Japan.
                  </Typography>
                </Stack>
              </Grid>

              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: "flex", justifyContent: { md: "flex-end" } }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Button
                    href="https://www.instagram.com/kimaguri_jam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      textTransform: "none",
                      color: "rgba(62,47,30,0.9)",
                    }}
                    startIcon={<InstagramIcon fontSize="small" />}
                  >
                    Instagram
                  </Button>
                  <Button
                    href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      textTransform: "none",
                      color: "rgba(62,47,30,0.9)",
                    }}
                    startIcon={<YouTubeIcon fontSize="small" />}
                  >
                    YouTube
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 2,
                color: "rgba(62,47,30,0.7)",
              }}
            >
              © {new Date().getFullYear()} kimaguri jam. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}