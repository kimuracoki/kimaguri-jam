"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Divider,
  Button,
  Link,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "./theme";

import {
  GroupOutlined,
  MusicNoteOutlined,
  GraphicEqOutlined,
  QueueMusicOutlined,
  PlayCircleOutline,
  Instagram,
  AlbumOutlined,
  EventAvailableOutlined,
  SendOutlined,
  PlaceOutlined,
} from "@mui/icons-material";

const pastEvents = [
  "KDハポン",
  "コロンブスマーケット",
  "COBO market",
  "Japanese Craft Fair 2025",
  "愛知ウェルネスマルシェ",
  "などなど",
];

export default function HomePage() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ bgcolor: "#faf5ef", minHeight: "100vh" }}>
          {/* ===== Hero / Top ===== */}
          <Box
            sx={{
              py: { xs: 7, md: 10 },
              borderBottom: "1px solid rgba(62,47,30,0.08)",
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <GroupOutlined fontSize="small" color="inherit" />
                    <Typography
                      variant="overline"
                      sx={{
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "text.secondary",
                      }}
                    >
                      instrumental trio from aichi, japan
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h2"
                    sx={{
                      mt: 1.5,
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 700,
                      fontSize: { xs: "2.6rem", md: "3.6rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    kimaguri jam
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 1.9,
                      maxWidth: 560,
                    }}
                  >
                    『ジャンルに縛られない、3人だけの自由なセッション』をコンセプトに活動中。  
                    その時、その瞬間に生まれるグルーヴを純粋に楽しむバンドです。  
                    愛知県をメインに、いろんな場所に出没します。
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ mt: 3, flexWrap: "wrap" }}
                  >
                    <Chip
                      icon={<MusicNoteOutlined />}
                      label="Free Session"
                      variant="outlined"
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      icon={<GroupOutlined />}
                      label="Instrumental Trio"
                      variant="outlined"
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      icon={<PlaceOutlined fontSize="small" /> }
                      label="From Aichi"
                      variant="outlined"
                      sx={{ borderRadius: 999 }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mt: 4, flexWrap: "wrap" }}
                  >
                    <Button
                      variant="contained"
                      sx={{ borderRadius: 999, bgcolor: "#3e2f1e" }}
                      href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<PlayCircleOutline />}
                    >
                      ライブ動画を見る
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ borderRadius: 999 }}
                      href="https://www.instagram.com/kimaguri_jam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Instagram />}
                    >
                      Instagram
                    </Button>
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Paper
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      bgcolor: "#e4c8b4",
                    }}
                    elevation={3}
                  >
                    {/* 後で写真に差し替え想定のダミー */}
                    <Box
                      sx={{
                        width: "100%",
                        height: 320,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.4rem",
                          textAlign: "center",
                          lineHeight: 1.6,
                        }}
                      >
                        Soft, free,
                        <br />
                        and a little bit
                        <br />
                        unpredictable.
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* ===== Members ===== */}
          <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <GroupOutlined />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    textAlign: "center",
                  }}
                >
                  Members
                </Typography>
              </Stack>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.96)",
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <MusicNoteOutlined fontSize="small" />
                      <Typography
                        variant="overline"
                        sx={{ letterSpacing: "0.14em" }}
                      >
                        Drums / Leader
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 1,
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      スグリユリカ
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                      柔らかいドラムサウンドと、ふとした一打で曲の空気をふわっと変えるバンドリーダー。  
                      その日の空気と会場のムードで、演奏の展開も気まぐれに変わります。
                    </Typography>
                  </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.96)",
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <GraphicEqOutlined fontSize="small" />
                      <Typography
                        variant="overline"
                        sx={{ letterSpacing: "0.14em" }}
                      >
                        Bass
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 1,
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      ツマガリダイスケ
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                      安定したグルーヴで、自由なセッションを下支えするベーシスト。  
                      タイトにも、ゆるく揺らぐ感じにも対応しながら、3人のバランスを支えます。
                    </Typography>
                  </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.96)",
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <QueueMusicOutlined fontSize="small" />
                      <Typography
                        variant="overline"
                        sx={{ letterSpacing: "0.14em" }}
                      >
                        Guitar
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 1,
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      キムラコウキ
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                      音数よりも「間」や余韻を大事にするギタリスト。  
                      さりげないフレーズやエフェクトワークで、曲の表情を少しだけ変えていきます。
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* ===== Live Video ===== */}
          <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#f3e8dc" }}>
            <Container maxWidth="md">
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <PlayCircleOutline />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    textAlign: "center",
                  }}
                >
                  Live Video
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", mb: 3, color: "text.secondary" }}
              >
                ライブの雰囲気を、まずは 1 本だけ。
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  pt: "56.25%", // 16:9
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Link
                  href="https://www.youtube.com/watch?v=rQOJfemmTUk"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  YouTubeで開く
                </Link>
              </Box>
            </Container>
          </Box>

          {/* ===== 音源 ===== */}
          <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Container maxWidth="sm">
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <AlbumOutlined />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    textAlign: "center",
                  }}
                >
                  音源
                </Typography>
              </Stack>

              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(62,47,30,0.08)",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ mb: 1.5 }}>
                  準備中……
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  レコーディング音源を只今制作中です。  
                  公開まで、ライブ動画と Instagram で雰囲気を楽しんでいただけたらうれしいです。
                </Typography>
              </Paper>
            </Container>
          </Box>

          {/* ===== Events（カード） ===== */}
          <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#f3e8dc" }}>
            <Container maxWidth="lg">
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <EventAvailableOutlined />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    textAlign: "center",
                  }}
                >
                  Events
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", mb: 3, color: "text.secondary" }}
              >
                これまで出演したイベントの一部と、今後のイベント情報を掲載していきます。
              </Typography>

              <Grid container spacing={3}>
                {pastEvents.map((name) => (
                  <Grid key={name} size={{ xs: 12, md: 4 }}>
                    <Card
                      elevation={0}
                      sx={{
                        borderRadius: 3,
                        border: "1px solid rgba(62,47,30,0.08)",
                        bgcolor: "rgba(255,255,255,0.96)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardContent>
                        <Chip
                          icon={<EventAvailableOutlined />}
                          label="Past Event"
                          size="small"
                          sx={{ mb: 1, borderRadius: 999 }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "var(--font-playfair)",
                            mb: 1,
                          }}
                        >
                          {name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          出演実績の一部です。マーケットやフェア、イベント会場など、
                          いろいろな場所で演奏しています。
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}

                {/* 今後のイベント用カード（プレースホルダー） */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: "1px dashed rgba(62,47,30,0.25)",
                      bgcolor: "rgba(255,255,255,0.8)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Chip
                        icon={<EventAvailableOutlined />}
                        label="Coming Soon"
                        color="primary"
                        size="small"
                        sx={{ mb: 1, borderRadius: 999 }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "var(--font-playfair)",
                          mb: 1,
                        }}
                      >
                        次のイベント
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        新しいイベントが決まり次第、こちらに情報を追加していきます。
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        最新情報は Instagram でもお知らせします。
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* ===== Contact / Footer ===== */}
          <Box
            sx={{
              py: { xs: 5, md: 6 },
              borderTop: "1px solid rgba(62,47,30,0.08)",
            }}
          >
            <Container maxWidth="sm">
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <SendOutlined />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    textAlign: "center",
                  }}
                >
                  Contact
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", mb: 1.5, lineHeight: 1.8 }}
              >
                イベント出演や企画へのお誘いなどは、  
                Instagram の DM からお気軽にご連絡ください。
              </Typography>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 999, px: 4 }}
                  href="https://www.instagram.com/kimaguri_jam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Instagram />}
                >
                  Instagram を開く
                </Button>
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 4,
                  color: "text.secondary",
                }}
              >
                © {new Date().getFullYear()} kimaguri jam
              </Typography>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

/**
 * A tiny dummy icon component to represent "place" without pulling in another import.
 * 実際に Place アイコンを使いたければ、@mui/icons-material から Place を import して
 * そちらに差し替えてください。
 */
function PlaceOutlinedDummy() {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width: 14,
        height: 14,
        borderRadius: "50%",
        border: "1.4px solid currentColor",
      }}
    />
  );
}