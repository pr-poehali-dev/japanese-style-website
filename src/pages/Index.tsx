import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const schedule = [
    { day: "月曜日", dayName: "Понедельник", time: "18:00 - 20:00", activity: "Го - Начинающие" },
    { day: "火曜日", dayName: "Вторник", time: "19:00 - 21:00", activity: "Маджонг - Продвинутые" },
    { day: "水曜日", dayName: "Среда", time: "17:00 - 19:00", activity: "Го - Продвинутые" },
    { day: "木曜日", dayName: "Четверг", time: "18:30 - 20:30", activity: "Маджонг - Начинающие" },
    { day: "金曜日", dayName: "Пятница", time: "19:00 - 22:00", activity: "Турнир" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-9xl font-noto-serif text-gold animate-fade-in">囲</div>
          <div className="absolute bottom-20 right-20 text-9xl font-noto-serif text-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>碁</div>
          <div className="absolute top-1/3 right-1/4 text-7xl font-noto-serif text-gold animate-fade-in" style={{ animationDelay: '0.6s' }}>麻</div>
          <div className="absolute bottom-1/3 left-1/4 text-7xl font-noto-serif text-gold animate-fade-in" style={{ animationDelay: '0.9s' }}>雀</div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-scale-in">
          <div className="mb-4">
            <span className="text-6xl md:text-8xl font-noto-serif text-gold block mb-2">和</span>
            <span className="text-lg md:text-xl text-cream tracking-widest">WA - ГАРМОНИЯ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-noto-serif text-cream mb-4">
            Японские Интеллектуальные Игры
          </h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
            Познайте древнюю мудрость через Го и Маджонг
          </p>
          <div className="mt-8 h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gold text-3xl">⌄</div>
        </div>
      </section>

      {/* About Games Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-noto-serif text-dark mb-4 flex items-center justify-center gap-4">
              <span className="text-crimson">遊</span>
              <span>Игры</span>
              <span className="text-crimson">戯</span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-crimson to-transparent"></div>
          </div>

          <Tabs defaultValue="go" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-dark/5">
              <TabsTrigger value="go" className="text-lg font-noto-serif data-[state=active]:bg-crimson data-[state=active]:text-cream">
                囲碁 Го
              </TabsTrigger>
              <TabsTrigger value="mahjong" className="text-lg font-noto-serif data-[state=active]:bg-crimson data-[state=active]:text-cream">
                麻雀 Маджонг
              </TabsTrigger>
            </TabsList>

            <TabsContent value="go" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="border-2 border-dark/10 shadow-xl transition-transform duration-200 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-7xl font-noto-serif text-crimson mb-6 text-center">囲碁</div>
                    <h3 className="text-3xl font-noto-serif text-dark mb-4">Игра Го</h3>
                    <p className="text-lg text-dark/70 leading-relaxed mb-4">
                      Го (囲碁, Igo) — древнейшая стратегическая настольная игра, зародившаяся в Китае более 2500 лет назад. 
                      Целью игры является контроль большей территории на доске, чем противник.
                    </p>
                    <div className="space-y-3">
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2">
                        19×19 линий
                      </Badge>
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2 ml-2">
                        361 пересечение
                      </Badge>
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2 ml-2">
                        2 игрока
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dark/10 shadow-xl bg-dark text-cream transition-transform duration-200 hover:scale-105">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-noto-serif mb-4 text-gold">Философия Го</h4>
                    <ul className="space-y-3 text-cream/90">
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">▪</span>
                        <span>Баланс атаки и защиты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">▪</span>
                        <span>Стратегическое мышление</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">▪</span>
                        <span>Уважение к сопернику</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">▪</span>
                        <span>Постижение через практику</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gold/30">
                      <p className="italic text-gold/80">
                        "В Го, как и в жизни, важен каждый камень"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mahjong" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="border-2 border-dark/10 shadow-xl transition-transform duration-200 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-7xl font-noto-serif text-crimson mb-6 text-center">麻雀</div>
                    <h3 className="text-3xl font-noto-serif text-dark mb-4">Игра Маджонг</h3>
                    <p className="text-lg text-dark/70 leading-relaxed mb-4">
                      Маджонг (麻雀, Maajan) — традиционная китайская игра для четырёх игроков, 
                      требующая навыков, стратегии, расчёта и определённой доли везения.
                    </p>
                    <div className="space-y-3">
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2">
                        136 костей
                      </Badge>
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2 ml-2">
                        4 игрока
                      </Badge>
                      <Badge className="bg-crimson/10 text-crimson hover:bg-crimson/20 text-base px-4 py-2 ml-2">
                        Риичи правила
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dark/10 shadow-xl bg-dark text-cream transition-transform duration-200 hover:scale-105">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-noto-serif mb-4 text-gold">Масти костей</h4>
                    <ul className="space-y-3 text-cream/90">
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">🀇</span>
                        <span>Мандзу (символы)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">🀐</span>
                        <span>Пинзу (круги)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">🀙</span>
                        <span>Сōдзу (бамбук)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold text-xl">🀀</span>
                        <span>Хонорные кости</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gold/30">
                      <p className="italic text-gold/80">
                        "Удача благоволит подготовленным"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-noto-serif text-cream mb-4 flex items-center justify-center gap-4">
              <span className="text-gold">時</span>
              <span>Расписание</span>
              <span className="text-gold">間</span>
            </h2>
            <p className="text-cream/70 text-lg">Еженедельные занятия и турниры</p>
            <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card 
                key={index} 
                className="border-2 border-gold/20 bg-cream transition-transform duration-200 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-noto-serif text-crimson">
                        {item.day}
                      </div>
                      <div className="text-sm text-dark/60">{item.dayName}</div>
                    </div>
                    <div className="text-xl text-dark/80 md:text-center">
                      {item.time}
                    </div>
                    <div className="text-xl font-noto-serif text-dark md:text-right">
                      {item.activity}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-gold bg-cream/50">
              <CardContent className="p-8">
                <p className="text-lg text-dark/80 mb-2">
                  📍 Адрес: г. Токио, район Синдзюку, ул. Сакура 42
                </p>
                <p className="text-lg text-dark/80">
                  📞 Телефон: +81 3-1234-5678
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl font-noto-serif text-crimson mb-4">和</div>
          <p className="text-dark/60 mb-2">© 2025 Японский Игровой Клуб</p>
          <p className="text-dark/40 text-sm">Традиции. Мастерство. Гармония.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
