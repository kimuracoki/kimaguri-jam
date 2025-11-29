"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          py: 8,
          borderBottom: "1px solid",
          borderColor: "divider",
          background:
            "radial-gradient(circle at top, #FFE0B2 0, #FFF8E7 40%, #FFF 100%)",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              icon={<CoffeeIcon />}
              label="instrumental trio"
              color="primary"
              variant="outlined"
            />
            <Typography variant="h2" component="h1">
              kimaguri jam
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ふらっと立ち寄ったカフェで、  
              いつのまにか長居してしまうような。  
              やわらかくて、少しだけスパイスのあるインストバンド。
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={6}>
          {/* Band Profile */}
          <section>
            <Typography variant="h5" gutterBottom>
              Band
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle1" gutterBottom>
                  「きまぐれ」に始まるジャムセッション
                </Typography>
                <Typography color="text.secondary">
                  リーダーで作曲を手がけるのは、ギターの若い女性プレイヤー。
                  その音に寄り添うように、エレクトリックベースとドラムの二人が
                  カフェの空気をゆっくりと揺らします。
                  歌がなくても、物語が浮かんでくるようなインストゥルメンタルをお届けします。
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle2" color="text.secondary">
                        Member
                      </Typography>
                      <Typography>Gt. / Leader …（女性）</Typography>
                      <Typography>Ba. …（男性）</Typography>
                      <Typography>Dr. …（男性）</Typography>
                    </CardContent>
                  </Card>
                  <Typography variant="body2" color="text.secondary">
                    カフェや小さめのライブスペースでの演奏を中心に、
                    BGM ライブ、イベント出張などもご相談可能です。
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </section>

          {/* Live Schedule (dummy) */}
          <section>
            <Typography variant="h5" gutterBottom>
              Live
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Stack spacing={2}>
              <Typography color="text.secondary" variant="body2">
                直近のライブ情報です。（※ダミー。決まり次第ここに掲載）
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle2" color="text.secondary">
                        2025.03.15 Sat
                      </Typography>
                      <Typography variant="h6">
                        Café Lumière (Nagoya)
                      </Typography>
                      <Typography color="text.secondary">
                        open 18:00 / start 19:00  
                        charge ¥2,500 + 1drink
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">詳細を見る</Button>
                      <Button size="small" variant="outlined">
                        予約する
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </section>

          {/* Music Links */}
          <section>
            <Typography variant="h5" gutterBottom>
              Music
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Stack spacing={2}>
              <Typography color="text.secondary">
                デモ音源やライブ映像は、順次アップロード予定です。
                公開までは、下記の SNS から最新情報をご覧ください。
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems="center"
                  >
                    <MusicNoteIcon />
                    <Box flex={1}>
                      <Typography variant="subtitle1">
                        YouTube / SoundCloud
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        公開予定。公開後、ここにリンクを掲載します。
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </section>

          {/* Contact */}
          <section>
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Stack spacing={2}>
              <Typography color="text.secondary">
                ライブのお問い合わせ、イベント出演のご依頼などは  
                お気軽にご連絡ください。
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  variant="contained"
                  startIcon={<MailOutlineIcon />}
                  href="mailto:info@example.com"
                >
                  メールで問い合わせ
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<InstagramIcon />}
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Button>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                ※メールアドレスや SNS のリンクは実際の運用に合わせて変更してください。
              </Typography>
            </Stack>
          </section>

          <Box component="footer" sx={{ pt: 4, pb: 2, textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} kimaguri jam
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}