// Snowdrift answer lists. Each prompt has a = six tiers, from 0 (Flurry, most common) to 5 (One in a Snowstorm, rarest).
// Inside a tier: entries are separated by ";", and ways of saying the same entry by "|". The first one is what's shown.
// The matcher already ignores case, punctuation, filler words, plurals, -ing/-ed, word order and small typos,
// so aliases only need genuinely different wording (synonyms, abbreviations, brand names).
globalThis.SNOW_PROMPTS = [
{id:"m1", drift:true, q:"Name a way to calm down in under five minutes.", h:"Something you'd actually do between classes.",
 t:["When it all piles up, {a} brings me back.","Breathe first. Then {a}.","Five minutes of {a} is still a fresh start.","Slow down. {a}. You're doing fine."],
 a:[
`deep breathing|breathe|breathing|deep breaths|take a deep breath|breath|breathing exercises|breathwork|breath work|slow breathing|belly breathing|diaphragmatic breathing;
walk|go for a walk|walk around|short walk|quick walk|stroll|walk outside|walk it off|walk around campus|little walk;
music|listen to music|listen to a song|song|play music|calm music|relaxing music|put on music|chill music|calming music|soft music|headphones|put my headphones on;
meditate|meditation|mindfulness|be mindful|guided meditation|mindful breathing|quick meditation`,
`scream into a pillow|scream|yell|scream into the void|scream in the car;
touch grass|go touch grass;
cry|have a cry|good cry|cry it out|cry in the bathroom;
nap|power nap|sleep|go to sleep|lie down and sleep|snooze;
box breathing|box breaths|square breathing|4 7 8 breathing|478 breathing|4 4 4 4 breathing;
cold shower;
splash water on face|splash my face|wash my face|cold water on my face|face in ice water|ice water on face|dunk my face in cold water;
eat a snack|snack|eat something|food|eat;
eat chocolate|chocolate;
doom scroll|scroll|tiktok|scroll tiktok|instagram|reels|youtube shorts|scroll on my phone|phone`,
`stretch|stretching|stretches|quick stretch|neck stretch|neck rolls|shoulder rolls|roll my shoulders|full body stretch;
drink water|water|glass of water|hydrate|sip water|water break;
tea|drink tea|hot tea|herbal tea|cup of tea|make tea|make a cup of tea|tea break;
chamomile tea|chamomile|camomile;
peppermint tea|mint tea;
green tea|matcha;
journal|journaling|write in a journal|write it down|write down my thoughts|brain dump|write out my feelings|write a list|to do list|make a to do list;
shower|hot shower|warm shower;
yoga|do yoga|yoga poses|childs pose|downward dog;
call a friend|text a friend|talk to a friend|vent to a friend|vent|talk to someone|talk it out|facetime a friend|call my best friend|text my best friend;
call home|call mom|call my parents|call parents|call family|call dad|call my sister|call my brother|call grandma|text my mom;
hug|hug someone|get a hug|hug a friend|give someone a hug;
pet my dog|pet a dog|dog|cuddle my dog|play with my dog|hug my dog|walk my dog|walk the dog;
pet my cat|cat|cuddle my cat|play with my cat|hug my cat;
pet|cuddle my pet|pet an animal|animals|play with my pet;
count to ten|count to 10|count backwards|count down from 10|count my breaths|count;
close my eyes|close eyes|shut my eyes|eyes closed|rest my eyes;
fresh air|get fresh air|go outside|step outside|outside|open a window|sit outside|outdoors;
podcast|listen to a podcast;
read|read a book|book|read a chapter|read a few pages;
lie down|lay down|lie on the floor|lay on the floor|lie on my bed|lay in bed|starfish on the floor;
coffee|drink coffee|grab a coffee;
dance|dance it out|dance party|shake it out|shake my body|shake it off|dance in my room;
draw|doodle|sketch|sketching|colour|coloring|colouring book|adult colouring book;
play a game|game|video game|mobile game|candy crush|wordle|sudoku|crossword|connections|nyt games|chess|solitaire;
sing|sing a song|hum|humming|sing in the shower;
pray|prayer;
affirmations|positive affirmations|say affirmations|positive self talk|self talk|tell myself its okay|remind myself its okay|tell myself i got this|you got this;
gratitude|list what im grateful for|think of things im grateful for|gratitude list|count my blessings;
laugh|watch something funny|funny video|watch a funny video|memes|look at memes|comedy|stand up comedy;
tidy up|tidy my desk|clean my desk|clean|clean my room|organize|organize my desk|declutter|make my bed;
hot chocolate|hot cocoa|cocoa|warm drink|hot drink;
asmr|listen to asmr|watch asmr;
white noise|rain sounds|nature sounds|ocean sounds|listen to rain|brown noise|pink noise|wave sounds;
unplug|put my phone down|phone away|log off|turn off my phone|no screens|get off my phone`,
`progressive muscle relaxation|muscle relaxation|tense and relax|tense and release|pmr|body scan|body scan meditation;
5 4 3 2 1|54321|grounding|grounding technique|grounding exercise|name 5 things i can see|five senses|5 senses;
fidget|fidget toy|fidget spinner|fidget cube|stress ball|squeeze a stress ball|squeeze something|slime|play with slime|pop it|squishy toy|squishy|clicky pen;
chew gum|gum|bubble gum;
light a candle|candle|smell a candle|scented candle;
essential oils|lavender|smell lavender|lavender oil|aromatherapy|diffuser|smell something nice|perfume;
hand cream|lotion|put on lotion|lip balm|chapstick;
look out the window|stare out the window|look at the sky|watch the clouds|look at clouds|cloud watching|sky;
watch the snow|watch the snow fall|look at the snow|stare at the snow|snow;
look at the trees|look at nature|nature|sit in nature|be in nature|trees;
walk around the block|lap around the building|walk the hallway|walk the halls|pace|pace around|walk around the library|walk around my room;
jumping jacks|push ups|sit ups|run in place|quick workout|exercise|workout|work out|burpees|squats|plank;
run|go for a run|jog|short run|quick run|sprint|jogging;
take the stairs|stairs|walk the stairs|run the stairs|climb stairs;
cute animal videos|pet videos|cat videos|dog videos|look at cute animals|baby animals|animal videos|puppy videos;
look at old photos|photos|look at pictures|camera roll|scroll my camera roll|photo album;
calm playlist|playlist|my calm playlist|spotify playlist|spotify|apple music|my playlist;
lofi|lofi music|lofi beats|lofi hip hop|lofi girl;
classical music|piano music|classical|mozart|chopin|debussy|bach;
mantra|repeat a mantra|say a mantra;
visualize|visualization|imagine a happy place|happy place|picture a beach|daydream|daydreaming|imagine being somewhere else;
hold an ice cube|ice cube|ice pack|cold pack|hold something cold|cold can;
heating pad|hot water bottle|warm my hands|hand warmer|hold a warm mug|warm mug;
wash my hands|wash hands|warm water on my hands|run my hands under water;
brush my teeth|brush teeth|floss;
mint|eat a mint|peppermint|candy|lollipop|hard candy|sour candy|gummies;
fruit|apple|orange|clementine|peel an orange|peel a clementine|mandarin|grapes|banana;
hug myself|self hug|butterfly hug|hand on heart|hand on my chest;
smile|fake smile|smile at myself;
call my partner|text my partner|boyfriend|girlfriend|partner|call my boyfriend|call my girlfriend|husband|wife;
therapy dogs|therapy dog|pet therapy|pet the therapy dogs|puppy room|therapy animals;
student wellness centre|swc|wellness centre|mac wellness centre|student wellness|swc counselling|counselling|counseling|counsellor|counselor|talk to a counsellor|see a counsellor|therapist|therapy|talk to my therapist|mental health services`,
`walk in cootes paradise|cootes paradise|cootes|walk to cootes|cootes trail|cootes paradise trail;
sit in the arts quad|arts quad|the quad|sit on the quad;
mcmaster forest|mac forest|walk in the woods|woods|forest|forest walk;
royal botanical gardens|rbg|botanical gardens|hendrie valley|hendrie park|the gardens;
bruce trail|walk the bruce trail|the escarpment|escarpment trail;
chaplaincy centre|mac chaplaincy|chaplaincy|spiritual care|spiritual care and learning|chapel|chaplain|talk to a chaplain;
good2talk|call good2talk|good2talk helpline;
peer support line|msu peer support|msu peer support line|peer support|peer supporter;
988|call 988|text 988|crisis line|helpline|distress line|call a helpline;
meditation room|quiet room|prayer room|multi faith room|multifaith room|prayer space|musalla|wudu;
yoga at the pulse|pulse yoga|drop in yoga|mac yoga|yoga class;
swim|swimming|mac pool|go for a swim|pool|ivor wynne pool;
tai chi|qigong;
knit|knitting|crochet|crocheting|embroidery|cross stitch|sewing;
origami|fold paper|make a paper snowflake|paper snowflake|cut a snowflake|paper crane|fold a paper crane;
colour a mandala|mandala|zentangle|dot art|paint by numbers|diamond painting;
rubiks cube|solve a rubiks cube|cube;
puzzle|jigsaw puzzle|do a puzzle;
lego|build lego|lego set;
play piano|piano|play guitar|guitar|play an instrument|ukulele|play ukulele|violin|play violin|drums|play drums|keyboard;
whistle|whistling;
tapping|eft tapping|emotional freedom technique;
alternate nostril breathing|nadi shodhana|bhramari|humming bee breath|physiological sigh|double inhale|cyclic sighing|lions breath|pursed lip breathing|ujjayi;
legs up the wall|legs up wall|viparita karani;
feel my feet on the ground|feet on the floor|plant my feet|feel the floor;
warm milk|golden milk|turmeric milk|honey lemon water|hot water with lemon|haldi doodh|chai|masala chai;
frozen grapes|eat a frozen grape;
smell coffee beans|coffee beans;
massage|self massage|massage my temples|rub my temples|scalp massage|hand massage|foam roll|foam roller|massage gun;
acupressure|pressure points;
weighted blanket|blanket|wrap in a blanket|get under a blanket|cozy blanket|blanket burrito;
stuffed animal|plushie|squishmallow|hug my squishmallow|teddy bear|hug my teddy|stuffie|hug a stuffed animal|jellycat;
kinetic sand|play dough|playdough|clay|play with clay|silly putty|thinking putty;
write a letter to myself|letter to future me|note to myself|write myself a note|write a letter;
comfort show|watch one episode|rewatch a comfort show|one episode|episode of friends|episode;
poem|read a poem|poetry|write a poem;
read the bible|bible|read scripture|scripture|quran|read the quran|dua|make dua|salah|pray salah|namaz|dhikr|rosary|tasbih|psalms|devotional;
listen to the rain|rainy mood|rain app;
calm app|headspace|insight timer|balance app|breathe app|breathing app|apple watch breathe|finch|finch app|medito|smiling mind;
group chat|text my group chat|send memes to the group chat;
voice note|send a voice note|voice memo;
step away from my desk|leave the room|change rooms|get up from my desk|stand up;
sunlight|sit in the sun|get some sun|sunshine|sun on my face|vitamin d;
ice cream|eat ice cream|froyo;
gentle reminder|remind myself one exam doesnt define me|perspective|zoom out|this too shall pass|it will pass;
hum to myself|hum a song`,
`maccess|msu maccess;
pride community centre|msu pride|pride centre|pride community center;
wgen|women and gender equity network|msu wgen;
indigenous student services|iss|indigenous student centre|mac indigenous student services|smudge|smudging;
shec|student health education centre|msu shec;
equity and inclusion office|eio|equity office;
student accessibility services|sas|accessibility services;
msu spark|spark;
websters falls|tew falls|dundas peak|spencer gorge|waterfalls|waterfall|hamilton waterfalls|albion falls|devils punchbowl;
princess point|bayfront park|pier 4|pier 8|hamilton waterfront|waterfront trail|the bay;
chedoke stairs|wentworth stairs|james street stairs|escarpment stairs|dundurn stairs;
car karaoke|sing in the car|go for a drive|drive|drive around|sit in my car;
alphabet game|name animals from a to z|name all the countries|abc game|list things a to z;
balance on one foot|stand on one foot|tree pose|balance pose;
fish tank|watch fish|aquarium|feed my fish;
water my plants|water a plant|repot a plant|plants|touch a plant|plant parent|houseplants;
candle gazing|watch a candle flame|trataka;
snow angel|make a snow angel|lie in the snow|catch snowflakes|catch snowflakes on my tongue|snowflakes|snowball|throw a snowball;
hug a tree|tree hugging|forest bathing|shinrin yoku;
watch the geese|feed the geese|geese|the mac geese|ducks|feed the ducks;
watch squirrels|squirrels|black squirrels|birds|bird watching|birdwatching|watch birds;
humming|om|chant|chant om|chanting;
eat a lemon|sour candy|warheads|lemon;
smell an orange|citrus|smell citrus;
listen to my heartbeat|feel my heartbeat|hand on my heart and breathe;
blow bubbles|bubbles;
pop bubble wrap|bubble wrap;
rock back and forth|rocking|swing|swing on a swing|swingset;
look at the stars|stargazing|stars|the moon|look at the moon;
pet rock|rock collection|skip rocks|skipping stones;
cold plunge|ice bath|polar plunge;
stand in the snow barefoot|barefoot|grounding barefoot|earthing;
tell a friend a joke|joke|bad jokes|dad jokes;
smell a book|old books|bookstore;
watch a sunset|sunset|sunrise|watch the sunrise|golden hour`
 ]},

{id:"m2", drift:true, q:"Something to do on a study break that isn't your phone.", h:"The more specific, the better.",
 t:["Rest is part of the work. Today mine is {a}.","Step away. Try {a}. Come back stronger.","Breaks count too: {a}.","Ten minutes of {a}, then back at it."],
 a:[
`walk|go for a walk|walk around|stroll|walk outside|walk around campus|short walk|quick walk;
snack|eat|eat a snack|grab a snack|get food|food|eat something|lunch|dinner|breakfast|have a meal|meal;
nap|sleep|power nap|take a nap|lie down;
stretch|stretching|stretches|quick stretch`,
`touch grass|go touch grass;
stare at the wall|stare at wall|stare at the ceiling|stare into space|stare|do nothing|nothing|sit there|zone out|rot|bed rot|lie in bed;
cry|cry in the bathroom|have a breakdown;
more studying|study more|study|keep studying|different subject|switch subjects|homework;
tv|watch tv|netflix|watch netflix|watch a show|youtube|watch youtube|binge|binge watch;
laptop|go on my laptop|ipad|tablet|computer|pc`,
`exercise|workout|work out|gym|go to the gym|lift|lifting|weights|hit the gym|quick workout|push ups|sit ups|jumping jacks|squats|plank|burpees;
drink water|water|hydrate|refill my water bottle|fill my water bottle|water bottle;
read|read a book|book|read for fun|read a chapter|novel|read a novel;
talk to friends|talk to a friend|chat with friends|hang out with friends|friends|see friends|visit a friend|talk to my roommate|roommate|hang out with my roommate|socialize;
shower|take a shower|hot shower;
clean|tidy|tidy up|clean my room|clean my desk|organize|organize my desk|declutter|make my bed|vacuum|sweep;
laundry|do laundry|fold laundry|put away laundry;
dishes|do the dishes|wash dishes|load the dishwasher|empty the dishwasher;
make tea|tea|drink tea|brew tea|cup of tea;
make coffee|coffee|coffee run|grab a coffee|get coffee|coffee break|go get coffee|latte;
cook|cooking|make food|make a meal|make lunch|make dinner|make a snack|meal prep;
bake|baking|bake cookies|make cookies|bake something|banana bread;
yoga|do yoga;
draw|drawing|doodle|sketch|sketching|colour|coloring|colouring book|paint|painting|watercolor|watercolour;
dance|dance party|dance around|dance in my room;
go outside|fresh air|get fresh air|step outside|outside|sit outside|outdoors|get some air;
run|go for a run|jog|jogging;
music|listen to music|play music|put on a record|vinyl|record player;
play an instrument|guitar|play guitar|piano|play piano|ukulele|violin|drums|sing|singing|karaoke;
journal|journaling|write|writing|diary;
video game|play video games|gaming|game|play a game|switch|nintendo switch|ps5|xbox|mario kart|minecraft|stardew valley|animal crossing;
board game|card game|cards|play cards|uno|chess|play chess|checkers|monopoly|catan|scrabble;
puzzle|jigsaw puzzle|do a puzzle|crossword|sudoku|word search;
meditate|meditation|breathing|deep breathing|breathe|breathing exercises;
pet|play with my pet|play with my dog|walk my dog|walk the dog|play with my cat|pet my cat|pet my dog|cuddle my cat|dog|cat;
call my mom|call mom|call family|call home|call my parents|call a friend|phone call;
podcast|listen to a podcast|audiobook|listen to an audiobook;
get a snack from the vending machine|vending machine|vending machine snack;
make a smoothie|smoothie|smoothie bowl;
fruit|eat fruit|apple|banana|orange|clementine|grapes;
shoot hoops|basketball|play basketball|soccer|kick a ball|play soccer|volleyball|play volleyball;
skate|skating|ice skating|go skating|go for a skate;
make a paper snowflake|paper snowflake|snowflake|cut out a snowflake|paper snowflakes`,
`walk to cootes paradise|cootes paradise|cootes|walk in cootes|cootes trail;
the pulse|go to the pulse|pulse|pulse workout|pulse gym|work out at the pulse|dbac|david braley athletic centre|david braley|braley;
swim|swimming|go for a swim|mac pool|pool|swim laps|lane swim|ivor wynne pool;
climbing|rock climbing|bouldering|climbing wall|boulder|climb;
intramurals|play intramurals|intramural|mac intramurals|rec sports|drop in sports|mac rec|rec;
badminton|play badminton|table tennis|ping pong|play ping pong|squash|tennis|pickleball|play pickleball;
skipping|jump rope|skip rope|hula hoop|hula hooping;
walk around the arts quad|arts quad|the quad|sit on the quad;
walk to westdale|westdale|go to westdale|westdale village|walk to the village;
centro|go to centro|commons|the commons|bridges|bridges cafe|la piazza|union market|east meets west|east meets west bistro|williams|williams fresh cafe;
tim hortons|tims run|go to tims|get tims|iced capp|double double|timbits;
starbucks|starbucks run|go to starbucks;
musc|go to musc|student centre|mcmaster university student centre|hang out in musc|the student centre;
visit a friend in res|res|residence|go back to res|go back to my room|go home;
power walk|walk the stairs|stairs|take the stairs|climb the stairs|stair climb;
knit|knitting|crochet|crocheting|embroidery|cross stitch|sewing|needlepoint;
origami|fold origami|paper cranes|paper crane;
lego|build lego|lego set|model kit|build a model|gundam;
rubiks cube|solve a rubiks cube|cube|speedcubing;
read a magazine|magazine|newspaper|read the news|the silhouette|silhouette;
read a comic|comic|comics|manga|read manga|graphic novel;
write a letter|letter|write a card|postcard|send a postcard;
plant care|water my plants|water the plants|plants|repot a plant;
nap in the library|nap pod|nap pods|nap in thode|nap in mills;
people watch|people watching|watch people;
look out the window|stare out the window|watch the snow|watch the snow fall;
play with a fidget toy|fidget|fidget toy|stress ball|slime;
coloring book|adult coloring book|colour a mandala|mandala;
skincare|face mask|do a face mask|sheet mask|do my skincare|skin care routine|moisturize;
paint my nails|nails|nail polish|do my nails;
do my hair|braid my hair|braid|hair;
shave|pluck my eyebrows;
make a sandwich|sandwich|toast|make toast|grilled cheese|make grilled cheese|instant noodles|ramen|make ramen|cup noodles|mac and cheese|kraft dinner|kd;
popcorn|make popcorn;
chat with the barista|small talk|talk to a stranger|meet someone new;
call grandma|call my grandma|call grandpa|call my grandparents|grandparents|call my grandmother;
hug someone|hug|hug my roommate|hug a friend;
write a to do list|to do list|plan my day|planner|plan|bullet journal|bujo|make a schedule|schedule;
go to a club meeting|club|clubs|club meeting|msu club|msu clubs;
pray|prayer|salah|namaz|pray salah|church|mosque|temple|gurdwara;
stretch break|desk stretches|neck rolls|shoulder rolls|wrist stretches|eye break|20 20 20 rule|rest my eyes;
sit in the sun|sunlight|sunshine|sun|get some sun;
snowball fight|snowman|build a snowman|snow angel|make a snow angel|play in the snow|snow;
hot chocolate|make hot chocolate|get a hot chocolate|hot cocoa|cocoa;
shopping|go shopping|thrift|thrifting|thrift store|value village|mall|go to the mall|window shopping|limeridge mall|limeridge;
grocery shopping|groceries|get groceries|fortinos|no frills|food basics|walmart|metro|grocery store;
bus ride|ride the bus|hsr|take the hsr|bus|the 51|the 5|go downtown;
listen to a record|vinyl;
mindful eating|eat slowly|eat mindfully`,
`thode makerspace|makerspace|maker space|3d print|3d printing|3d printer|laser cutter;
lyons new media centre|lyons|lyons new media|new media centre;
mcmaster museum of art|museum of art|mac museum|art museum|art gallery|ago|art gallery of hamilton|agh;
mills library|walk around mills|browse the shelves|browse books|find a random book|random book|library books|browse the library;
thode library|walk around thode|thode;
innis library|innis;
health sciences library|hsl|health sci library;
board games at the library|library board games;
mac bread bin|bread bin|free bread;
food collective centre|msu food collective centre|fcc|msu fcc|food bank|mac food bank|campus food bank;
msu farmers market|farmers market|mac farmers market|hamilton farmers market|market;
phoenix|the phoenix|grad club|go to the phoenix;
twelveighty|1280|twelve eighty|1280 bar;
pinball|arcade|arcade games|claw machine|bowling;
westdale theatre|movie at westdale|movie|watch a movie|movies|cinema|go to the movies|theatre;
royal botanical gardens|rbg|botanical gardens|hendrie valley|the gardens;
bruce trail|escarpment|the escarpment|hike|hiking|short hike|go on a hike|trail|trails;
mcmaster forest|mac forest|woods|forest|walk in the forest|walk in the woods|nature walk|nature;
chedoke stairs|wentworth stairs|james street stairs|the stairs|escarpment stairs|dundurn stairs;
waterfall|waterfalls|websters falls|tew falls|dundas peak|albion falls|spencer gorge;
locke street|locke|james street north|james north|ottawa street|downtown hamilton|hamilton downtown|hess village|augusta street;
gage park|gage park greenhouse|tropical greenhouse|greenhouse;
pier 8|bayfront park|bayfront|princess point|waterfront trail|waterfront|hamilton waterfront;
dundurn castle|dundurn|bayfront|art crawl|supercrawl;
volunteer|volunteering|help a friend|help someone|help my roommate|do something kind|random act of kindness;
write a poem|poetry|poem|write a song|songwriting|write music|make music|make a beat|produce music|fl studio|garageband;
photography|take photos|take pictures|photo walk|film photography|film camera|disposable camera;
birdwatching|bird watching|watch birds|birds|watch the geese|geese|feed the ducks|ducks|squirrels|watch squirrels;
foam roll|foam roller|massage|massage gun|self massage;
pilates|wall pilates|mat pilates|barre;
tai chi|qigong;
juggle|juggling|kick a hacky sack|hacky sack|yo yo|yoyo|frisbee|throw a frisbee|catch|play catch|spikeball;
meditation room|quiet room|prayer room|multi faith room|multifaith room;
chaplaincy centre|chaplaincy|spiritual care;
pet therapy|therapy dogs|therapy dog|pet the therapy dogs;
student wellness centre|swc|wellness centre|wellness session|wellness workshop|mental health workshop;
student success centre|ssc|success centre;
calligraphy|hand lettering|lettering|brush lettering;
scrapbook|scrapbooking|collage|make a collage|junk journal|vision board|make a vision board|mood board;
learn a language|duolingo|language learning|practice french|practice spanish;
magic tricks|card tricks|learn a magic trick;
plan a trip|plan a vacation|travel plans|look at flights;
sit by the fire|fireplace|fire|campfire;
make a friendship bracelet|friendship bracelet|bracelets|beading|beads|make jewelry|jewelry making;
whittle|whittling|wood carving|woodworking;
pottery|ceramics|clay|sculpt|sculpting|air dry clay|polymer clay;
garden|gardening|weeding;
call an old friend|text an old friend|catch up with a friend|catch up|reconnect|write to a friend`,
`cut a paper snowflake for a friend;
learn to whistle;
practice a handstand|handstand|cartwheel|cartwheels|headstand|backflip|gymnastics;
speed walk|race walk|mall walk|walking pad|under desk treadmill;
sledding|go sledding|toboggan|tobogganing|sled;
cross country skiing|snowshoe|snowshoeing|snowshoes;
ice fishing|fishing|go fishing;
watch the trains|trains|train spotting|planes|plane spotting;
go to the hamilton public library|hamilton public library|hpl|public library;
volunteer at the food bank;
play the piano in musc|public piano|piano in the student centre;
pet a horse|horses|farm|petting zoo|african lion safari;
make a playlist|playlist|curate a playlist|make a mixtape;
re pot my plants|propagate plants|propagating;
make a terrarium|terrarium;
fold paper airplanes|paper airplane|paper airplanes;
learn sign language|asl|sign language;
build a blanket fort|blanket fort|pillow fort|fort;
bubble bath|bath|take a bath|soak|epsom salt bath|bath bomb;
nap outside|hammock|eno|hammock nap;
rearrange my room|rearrange furniture|redecorate|decorate my room|decorate;
iron clothes|ironing|steam clothes;
polish shoes|clean my shoes|clean my sneakers;
meal plan for the week|grocery list;
write thank you notes|thank you note|thank you card|gratitude letter;
watch the sunset|sunset|sunrise|watch the sunrise|golden hour;
stargazing|look at the stars|stars|telescope;
listen to the radio|radio|cbc radio|93.3|cfmu|cfmu 93.3|campus radio;
read poetry out loud|read out loud|read to my cat;
crossword in the newspaper|cryptic crossword;
chess on a real board|chess in the student centre;
pet rocks|paint rocks|rock painting|kindness rocks;
sit in a church|sit in the chapel|light a candle at church;
call a helpline|good2talk;
play the harmonica|harmonica|kalimba|recorder|flute|trumpet|saxophone|clarinet|cello|harp|accordion|banjo|bagpipes;
skip stones|skipping stones|throw rocks in the water;
roller skate|rollerblade|rollerblading|roller skating|skateboard|skateboarding|longboard|scooter|bike|biking|bike ride|cycling|ride my bike|sobi|hamilton bike share|bike share;
yoga nidra|nidra;
cook a family recipe|grandmas recipe|family recipe;
make dumplings|dumplings|make sushi|sushi|make pasta|homemade pasta|make bread|bread|sourdough;
brew pour over|pour over|french press|aeropress|espresso|make espresso;
make tea the slow way|gongfu tea|tea ceremony|matcha whisk|whisk matcha`
 ]},

{id:"m3", drift:false, q:"Where do you focus best?", h:"A room, a corner, a time of day.",
 t:["Find your {a} and let the world go quiet.","Somewhere like {a}, everything gets easier.","Good work grows in places like {a}."],
 a:[
`library|the library|libraries|study in the library;
home|at home|my house|house|my apartment|apartment|my place;
my room|room|bedroom|dorm|dorm room|my dorm|res room;
desk|my desk|study desk|at my desk`,
`bed|in bed|my bed|under the covers;
nowhere|i dont|anywhere but home|cant focus|i cant focus|no where;
bathroom|the bathroom|bathtub|in the bath|toilet;
car|my car|in my car|parked car;
discord call|on call with friends|facetime|on facetime;
the night before the deadline|last minute|when its due tomorrow|deadline|night before|panic mode|under pressure|right before the deadline`,
`cafe|coffee shop|a cafe|starbucks|tim hortons|second cup|coffee house;
quiet room|silent room|quiet place|somewhere quiet|quiet space|silence|silent area;
study room|study space|group study room|private study room|book a study room|study booth|study pod;
kitchen|kitchen table|dining table|dining room|table;
student centre|musc|mcmaster university student centre|the student centre|student union|msu|the msu;
classroom|empty classroom|lecture hall|empty lecture hall|class|in class;
morning|early morning|mornings|before sunrise|sunrise|6 am|5 am|first thing in the morning;
night|late night|at night|nighttime|midnight|after midnight|evening|evenings|2 am|1 am|late at night|when everyone is asleep|night owl;
afternoon|afternoons|after lunch|after class|between classes;
silent floor|quiet floor|the silent floor|silent study floor|quiet zone|silent zone;
mills|mills library|mills memorial library|mills memorial;
thode|thode library|hg thode|thode library of science and engineering|science library;
outside|outdoors|park|in the park|on the grass|patio|balcony|porch|backyard;
with friends|study group|with my friends|group study|with a study buddy|study buddy|body doubling|body double;
alone|by myself|on my own|solo|alone in my room;
couch|sofa|living room|the couch|on the couch|common room|lounge|res lounge|res common room;
headphones|noise cancelling headphones|with headphones|airpods|earplugs|ear plugs|music on;
coffee shop with background noise|background noise|white noise|cafe noise;
office|home office|work|at work|my office`,
`innis|innis library|innis business library;
health sciences library|hsl|health sci library|hsc library;
mills 6th floor|mills sixth floor|top floor of mills|mills top floor|mills 5th floor|mills fifth floor|mills 4th floor|mills fourth floor|upper floors of mills;
thode basement|basement of thode|thode 2nd floor|thode second floor|thode third floor|thode 3rd floor|top floor of thode|thode upstairs|thode main floor;
lyons new media centre|lyons|lyons new media;
pgcll|peter george centre for living and learning|peter george centre|pgcll study space;
lrw|lr wilson hall|l r wilson|wilson hall|wilson building;
etb|engineering technology building|jhe|john hodgins engineering|jhe study space|engineering building|engineering lounge|engineering study space|eng building;
bsb|burke science building|burke|bsb study space|abb|arthur bourns building|arthur bourns;
mdcl|michael degroote centre for learning and discovery|degroote|hsc|health sciences centre|health sciences building;
dsb|degroote school of business|business building|tsh|togo salmon hall|togo salmon;
hamilton hall|hh|university hall|uh|gilmour hall|gh|kenneth taylor hall|kth|chester new hall|cnh|psychology building|psyc building;
ron joyce centre|burlington campus|degroote burlington;
mary keyes|mary e keyes|keyes|bates|bates residence|brandon|brandon hall|edwards|edwards hall|hedden|hedden hall|les prince|lesprince|matthews|matthews hall|mckay|mckay hall|moulton|moulton hall|wallingford|wallingford hall|whidden|whidden hall|woodstock|woodstock hall|res study room|residence study room|res study space;
bridges|bridges cafe|centro|commons|la piazza|union market|east meets west;
the phoenix|phoenix|grad club;
hamilton public library|hpl|central library|downtown library|westdale library|public library|dundas library|terryberry library;
on the train|train|go train|on the bus|bus|hsr|go bus|commute|on my commute;
a cafe downtown|locke street cafe|james street cafe|mulberry|mulberry cafe|democracy|redchurch|redchurch cafe|smalls|smalls coffee|detour|detour coffee|mattina|bru;
my parents house|parents house|my grandmas house|grandmas house|family home|back home|my hometown|hometown;
friends house|my friends place|my friends apartment|my boyfriends place|my girlfriends place|partners place;
by a window|window|window seat|near a window|by the window|natural light|sunlight;
standing desk|standing|walking pad|treadmill desk;
gym|on the bike at the gym|on the treadmill;
in the snow|snow day|when its snowing|rainy day|rainy days|when it rains|when its raining|stormy;
weekend|weekends|sunday|sundays|saturday morning|sunday morning|sunday afternoon|monday;
after a workout|after the gym|after exercise|after a run;
after coffee|caffeinated|after my coffee;
pomodoro|in short bursts|25 minute blocks;
tidy room|clean desk|clean room|clean space|organized desk`,
`empty lecture hall at night|empty classroom at night|an empty classroom in jhe|empty room in hamilton hall;
library carrel|carrel|study carrel|cubicle|cubby|study cubby|booth;
stairwell|staircase|stairs|on the stairs;
hallway|in the hallway|hallway floor;
laundry room|laundromat|while doing laundry;
hospital|while at work|at my part time job|front desk|reception desk|on shift|work shift;
airport|on a plane|plane|airplane|layover;
church|mosque|temple|gurdwara|chapel|place of worship|chaplaincy centre|prayer room;
nature|in nature|forest|woods|by the water|lake|beach|by the lake|by the bay|waterfront|cootes paradise|cootes|rbg|botanical gardens|garden;
hammock|in a hammock;
bubble tea shop|boba shop|chatime|gong cha|coco|tea shop;
bakery|panera|panera bread|mcdonalds|mcdonalds at night|24 hour mcdonalds|denny|dennys|diner|24 hour diner|food court;
barnes and noble|indigo|chapters|bookstore|campus store|titles bookstore;
art gallery|museum|mcmaster museum of art|art gallery of hamilton;
on a walk|walking|while walking|pacing|pacing around;
in the shower|shower;
on the floor|floor|my floor|bedroom floor;
closet|walk in closet|my closet;
attic|basement|my basement|garage|shed;
music room|practice room|band room|piano room;
greenhouse|gage park greenhouse;
moving vehicle|passenger seat|road trip;
during class|in lectures|front row|front row of class|first row|back row;
office hours|in office hours|tutorial|tutorials|lab|in lab|during lab|lab room|computer lab|engineering lab;
hotel lobby|hotel|airbnb|lobby;
in my head|mental palace|daydreams|meditating;
cold room|chilly room|cold weather|winter|when its cold`,
`ice rink bleachers|bleachers|stadium|ron joyce stadium|ivor wynne|tim hortons field|arena|the stands;
the bathtub with no water|dry bathtub|empty bathtub;
under my desk|under a table|under the stairs;
a fort|blanket fort|pillow fort;
the roof|rooftop|on the roof|roof patio;
treehouse|in a tree|up a tree;
a boat|on a boat|ferry|canoe;
while babysitting|babysitting|nanny|while the kids nap;
with my dog on my lap|with my cat on my lap|cat on my lap|dog at my feet|with my pet;
at the hospital waiting room|waiting room|dentist waiting room;
in a car wash|car wash;
my grandmas kitchen|grandmas kitchen|my moms kitchen|my aunts house;
a 24 hour gym|planet fitness;
in the library elevator|elevator;
behind the counter at work|cash register|on break at work|break room;
a cabin|cottage|the cottage|camp|camping|tent;
by the fireplace|fireplace|fire|campfire;
during a thunderstorm|thunderstorm|blizzard|snowstorm;
at 4am|4 am|3 am|4am|3am|before the birds|dawn|blue hour;
when i should be sleeping|insomnia|when i cant sleep;
on discord study servers|online study room|study with me video|study with me|youtube study with me|study stream|studytube|focusmate|virtual coworking`
 ]},

{id:"m4", drift:true, q:"A snack or drink that fuels a study session.", h:"Comfort food is allowed.",
 t:["Fuelled by {a} and stubborn hope.","One more chapter, one more {a}.","Exams are temporary. {a} is forever.","Snacks are self care. Today's is {a}."],
 a:[
`coffee|cup of coffee|black coffee|coffee with milk|drip coffee;
tea|cup of tea|black tea|hot tea|herbal tea;
water|a glass of water|water bottle|h2o|ice water|cold water;
chips|potato chips|crisps|bag of chips;
chocolate|chocolate bar|dark chocolate|milk chocolate|choco;
candy|sweets|gummies|gummy bears|sour candy|sour patch kids|skittles|swedish berries|fuzzy peaches|nerds|jelly beans|candy bag`,
`energy drink|energy drinks|red bull|monster|monster energy|celsius|bang|rockstar|prime|prime energy|alani|alani nu|c4|guru|ghost energy|g fuel|reign;
tears|my tears|the tears of my enemies|tears of despair|salt water;
caffeine|pure caffeine|caffeine pills|espresso shot|shots of espresso|quad shot|triple shot|five shots of espresso;
instant noodles|ramen|cup noodles|mr noodles|cup of noodles|nongshim|shin ramyun|buldak|maggi|maggi noodles|indomie|instant ramen;
nothing|air|vibes|spite|fear|anxiety|stress|pure stress|adrenaline|hopes and dreams|copium|delusion;
pizza|slice of pizza|pizza slice|cold pizza|leftover pizza|pizza pizza|pizza hut|dominos|little caesars;
fast food|mcdonalds|mcdonalds fries|fries|french fries|chicken nuggets|nuggets|burger|wendys|frosty|a&w|burger king|kfc|popeyes|taco bell|subway|harveys;
junk food|snacks|all the snacks|everything`,
`fruit|apple|apples|banana|bananas|grapes|orange|oranges|clementine|clementines|mandarin|berries|strawberries|blueberries|raspberries|watermelon|mango|pineapple|pear|kiwi|cherries|peach|fruit cup|fruit salad;
nuts|almonds|cashews|peanuts|walnuts|pistachios|mixed nuts|trail mix|pecans|hazelnuts|sunflower seeds|pumpkin seeds|seeds;
granola bar|granola|nature valley|kind bar|clif bar|protein bar|quest bar|nut bar|fibre one|chewy bar|cereal bar|rice krispie square|rice krispies treat;
popcorn|smartfood|skinny pop|kettle corn|microwave popcorn;
pretzels|pretzel|goldfish|cheez its|cheese its|crackers|ritz|triscuits|wheat thins|rice crackers|rice cakes|veggie straws|pita chips;
cheese|cheese strings|string cheese|babybel|cheese cubes|cheese and crackers|cheddar;
yogurt|greek yogurt|yogurt cup|yogourt|activia|yop|drinkable yogurt;
gum|chewing gum|mint gum|trident|excel|bubble gum;
mints|mint|tic tacs|altoids|peppermints;
matcha|matcha latte|iced matcha|matcha tea;
latte|iced latte|cappuccino|flat white|americano|mocha|macchiato|caramel macchiato|vanilla latte|oat latte|pumpkin spice latte|psl|cold brew|iced coffee|frappuccino|frappe|cortado|espresso;
tim hortons|double double|iced capp|ice capp|french vanilla|timbits|tims coffee|tim hortons coffee|roll up the rim|steeped tea|timmies iced coffee;
starbucks|starbucks coffee|starbucks drink|pink drink|refresher|chai latte|london fog|matcha frappuccino;
smoothie|smoothies|protein shake|shake|milkshake|booster juice|smoothie bowl|acai bowl;
juice|orange juice|apple juice|oj|cranberry juice|lemonade|iced tea|nestea|fuze|arizona|arizona iced tea;
pop|soda|coke|diet coke|coke zero|pepsi|sprite|ginger ale|canada dry|root beer|dr pepper|mountain dew|fanta|cream soda;
sparkling water|bubbly|bubly|la croix|perrier|san pellegrino|soda water|carbonated water|seltzer|club soda;
cookies|cookie|chocolate chip cookies|oreos|oreo|chips ahoy|biscuits|digestive biscuits|digestives|fudgee o|fudgeos|biscoff;
muffin|muffins|blueberry muffin|banana bread|scone|croissant|donut|doughnut|bagel|cinnamon roll|danish|pastry|pastries;
toast|toast with peanut butter|peanut butter toast|avocado toast|bread|toast and jam;
peanut butter|pb|peanut butter and apples|apple slices with peanut butter|apple and peanut butter|celery and peanut butter|ants on a log|pb and j|pbj|peanut butter sandwich|nutella|nutella toast;
sandwich|sandwiches|sub|wrap|grilled cheese|panini|bagel with cream cheese;
cereal|bowl of cereal|dry cereal|cheerios|froot loops|lucky charms|frosted flakes|cinnamon toast crunch|honey nut cheerios|special k|corn flakes;
oatmeal|oats|overnight oats|porridge|quaker oats;
eggs|boiled eggs|hard boiled eggs|egg|scrambled eggs;
veggies|vegetables|carrots|baby carrots|carrot sticks|celery|cucumber|cucumbers|snap peas|cherry tomatoes|broccoli|peppers|bell peppers|veggies and dip|veggies and hummus;
hummus|hummus and pita|pita and hummus|hummus and veggies|hummus and carrots;
ice cream|gelato|froyo|frozen yogurt|ice cream sandwich|drumstick|popsicle|freezie|freezies|ice pops;
gummy worms|sour gummies|maynards|haribo|goldbears|trolli|sour keys|sour worms|fuzzy peaches|swedish fish|airheads|starburst|jolly ranchers|twizzlers|licorice|nibs|warheads;
chocolate covered almonds|chocolate almonds|chocolate covered raisins|glosettes|smarties|m&ms|m and ms|reese|reeses|reeses pieces|kitkat|kit kat|aero|coffee crisp|mars bar|snickers|twix|caramilk|wunderbar|crunchie|oh henry|mr big|kinder|kinder bueno|ferrero rocher|lindt|lindor|hersheys|toblerone|dairy milk;
doritos|cheetos|ruffles|lays|pringles|miss vickies|old dutch|zesty cheese doritos|cool ranch|ketchup chips|all dressed chips|dill pickle chips|salt and vinegar chips|sour cream and onion|tostitos|tortilla chips|nachos|chips and salsa|chips and guac|takis|hot cheetos|sun chips|kettle chips|tostitos and salsa|bugles|cheetos puffs|crunchits;
hot chocolate|hot cocoa|cocoa|hot choc|tim hortons hot chocolate;
chai|chai tea|masala chai|chai latte|dirty chai;
green tea|jasmine tea|oolong|sencha|genmaicha;
chamomile|chamomile tea|peppermint tea|mint tea|rooibos|earl grey|english breakfast|london fog|ginger tea|lemon ginger tea|hibiscus tea;
milk|chocolate milk|glass of milk|oat milk|almond milk|soy milk|strawberry milk;
dried fruit|raisins|dried mango|dried cranberries|craisins|dates|apricots|dried apricots|prunes|figs|fruit leather|fruit roll ups|fruit snacks|welchs fruit snacks|fruit by the foot;
rice|rice bowl|leftovers|leftover rice|fried rice|sushi|onigiri|rice balls|kimbap|gimbap;
pasta|mac and cheese|kraft dinner|kd|spaghetti|noodles;
soup|chicken noodle soup|miso soup|tomato soup|pho|ramen bowl;
bubble tea|boba|boba tea|milk tea|bbt|taro milk tea|brown sugar boba|chatime|gong cha|coco bubble tea|tiger sugar|the alley|kung fu tea|real fruit bubble tea|presotea;
seaweed|seaweed snacks|roasted seaweed|nori;
edamame|chickpeas|roasted chickpeas|crispy chickpeas;
jerky|beef jerky|meat sticks|pepperettes|summer sausage|salami|charcuterie;
cold brew|nitro cold brew;
coconut water|kombucha|electrolytes|gatorade|powerade|liquid iv|vitamin water|bodyarmor|propel|nuun|pedialyte;
popsicles|freezies|slushie|slurpee|slush;
cake|cupcake|brownie|brownies|cheesecake|pie|lemon square|butter tart|butter tarts|nanaimo bar|nanaimo bars|date square|beaver tail|beavertail`,
`pocky|pocky sticks|yan yan|hello panda|koala march|pepero|choco pie|lotte|meiji;
shrimp chips|prawn crackers|calbee|shrimp crackers|honey butter chips|turtle chips|kkobuk chips;
mochi|mochi ice cream|daifuku|dango|taiyaki|dorayaki|melon pan|bungeoppang;
murukku|chakli|chevda|bhujia|haldirams|namkeen|mixture|sev|chakri|banana chips|gathiya|khakhra|mathri|samosa|samosas|pakora|pakoras|bhel puri|pani puri|chaat|dhokla|kachori|vada pav;
paneer|parle g|parle g biscuits|marie biscuits|good day biscuits|rusk|toast rusk;
dates and almonds|medjool dates|stuffed dates|dates with peanut butter;
baklava|halva|halwa|turkish delight|loukoumi|ka ak|maamoul|knafeh|kunafa;
plantain chips|chin chin|puff puff|meat pie|patty|jamaican patty|beef patty|coco bread|bulla|bun and cheese;
empanada|empanadas|arepas|pupusas|tamales|churros|conchas|pan dulce|tajin|mango with tajin|chamoy|tostilocos|mazapan|de la rosa|takis fuego|duvalin|pulparindo;
pierogi|perogies|pierogies|poutine|butter chicken|naan|roti|paratha|dumplings|bao|steamed buns|spring rolls|egg rolls|potstickers|gyoza|siu mai|har gow|dim sum;
lychee|longan|rambutan|dragon fruit|jackfruit|durian|mangosteen|guava|passion fruit|persimmon|pomegranate|pomegranate seeds|asian pear|grapefruit|figs|plums|nectarine|apricot;
frozen grapes|frozen fruit|frozen blueberries|frozen mango|frozen peas;
pickles|pickle|dill pickles|kimchi|olives|marinated olives|pickled radish;
cottage cheese|ricotta|labneh|tzatziki|feta;
avocado|guacamole|guac;
tofu|tofu bites|tempeh|seitan;
energy balls|energy bites|protein balls|bliss balls|date balls|homemade granola|homemade trail mix;
cinnamon toast|french toast|waffles|pancakes|eggo|eggo waffles|crepes;
pop tarts|poptarts|toaster strudel|pizza pops|pizza rolls|hot pockets|bagel bites|mozzarella sticks|jalapeno poppers|tater tots|hash browns|onion rings;
shawarma|shawarma wrap|chicken shawarma|falafel|falafel wrap|donair|gyro|souvlaki|kebab|poutine from the truck;
tim hortons breakfast sandwich|farmers wrap|tims bagel|everything bagel|chili from tims|tim hortons chili|tims soup;
centro food|centro|bridges|bridges cafe|la piazza|union market|east meets west|williams|williams fresh cafe|pinks|food from the student centre|musc food|campus food|campus coffee|thode coffee|mills cafe|library cafe|caffeine fix at the library;
`,
`yerba mate|mate|guayaki|club mate;
golden milk|turmeric latte|haldi doodh|ginger shot|ginger shots|wellness shot|apple cider vinegar;
mushroom coffee|ryze|bulletproof coffee|butter coffee|dandelion coffee|chicory;
vietnamese coffee|ca phe sua da|thai iced tea|thai tea|hong kong milk tea|yuanyang|dalgona coffee|whipped coffee|turkish coffee|arabic coffee|qahwa|cuban coffee|cafe de olla|irish coffee;
matcha pocky|matcha kitkat|japanese kitkat;
sour patch watermelon|sour keys|fuzzy peaches|peach rings|gummy sharks|gummy rings|gummy bears|gushers;
dark chocolate almonds|chocolate covered espresso beans|espresso beans|coffee beans;
cocoa nibs|cacao|cacao nibs;
sunflower seeds|pumpkin seeds|pepitas|watermelon seeds|melon seeds|guazi;
kale chips|veggie chips|apple chips|beet chips|lentil chips|chickpea chips|popchips;
rice crispy treats|rice krispies squares|puffed rice|rice puffs|corn puffs|cheese puffs;
honey|honey sticks|spoonful of honey|spoonful of peanut butter|spoonful of nutella|nutella straight from the jar;
cereal bar|nutri grain|nutri grain bar|special k bar|belvita|belvita biscuits|breakfast biscuits;
cheese strings and grapes|grapes and cheese|apples and cheese|crackers and cheese|charcuterie board|snack plate|girl dinner|snack board;
cucumber with salt|cucumber and tajin|salted cucumber|carrot with hummus;
iced tea lemonade|arnold palmer|half and half;
bubble water with lime|lime water|lemon water|cucumber water|mint water|infused water|water with lemon|hot water|hot water with lemon|honey lemon water`,
`ube anything|ube|ube latte|ube ice cream;
sugarcane juice|sugar cane|jaggery|gur;
lassi|mango lassi|salt lassi|chaas|buttermilk|ayran|doogh|kefir|yakult|calpis|calpico|ramune|yakult drink;
sikhye|barley tea|boricha|corn tea|mugicha|genmaicha|buckwheat tea|hojicha|hojicha latte|kukicha;
yuzu tea|citron tea|jujube tea|ginseng tea|omija;
sago|tapioca|grass jelly|aiyu jelly|coconut jelly|nata de coco|halo halo|bingsu|patbingsu|shaved ice|kakigori|cendol|ais kacang;
tteokbokki|kimbap from the corner store|odeng|fish cake|hotteok|egg tart|egg tarts|pineapple bun|bolo bao|wife cake|mooncake|mooncakes|red bean bun|pork floss bun;
injera|kitfo|sambusa|mandazi|chapati|maandazi|kenyan tea|ethiopian coffee|jebena buna;
pastelitos|pastel de nata|pasteis de nata|guava pastries|cheese bread|pao de queijo|brigadeiro|brigadeiros;
pistachio baklava|dubai chocolate|dubai chocolate bar|knafeh chocolate;
ketchup chips and chocolate milk|chips and chocolate|salty and sweet|pickle and peanut butter|fries in a frosty|frosty and fries|apple and cheddar|popcorn and m&ms;
leftover birthday cake|birthday cake|cold pasta|cold rice|cold noodles|leftover takeout|leftover chinese food;
frozen peas|frozen corn|frozen edamame;
whole lemon|lemon slices|lime|sour lemon;
raw ramen|uncooked ramen|dry ramen|ramen noodles raw|crushed ramen|dry instant noodles;
plain bread|bread crusts|plain toast|saltines|saltine crackers|matzo|matzah;
dry cereal by the handful|cereal straight from the box|cheerios by the handful;
spoonful of sugar|sugar cubes|brown sugar;
ice chips|crunchy ice|chewing ice|ice;
olive oil and bread|focaccia|garlic bread|garlic knots|breadsticks;
pemmican|bannock|frybread|maple taffy|maple syrup|maple candy|maple cookies|maple leaf cookies|beaver tails|butter tarts from my grandma|sugar pie|tourtiere|nanaimo bar from home;
marshmallows|smores|campfire marshmallows|rice krispies with marshmallow;
cold soup|gazpacho|borscht|congee|jook|rice porridge|okayu|juk;
tea eggs|soy eggs|marinated eggs|ajitama;
spam musubi|spam|musubi|onigiri from the convenience store|konbini;
lunchables|dunkaroos|bear paws|teddy grahams|animal crackers|graham crackers|goldfish grahams;
mr freeze|mr freezes|kool aid|tang|crystal light|mio|water enhancer;
apple cider|hot apple cider|mulled cider|hot toddy|eggnog;
bone broth|broth|chicken broth|miso|miso broth|cup of broth;
fruit loops in milk at midnight|midnight cereal|midnight snack|4th meal|fourth meal|second dinner`
 ]},

{id:"m5", drift:true, q:"A study technique that actually works for you.", h:"Name it or describe it.",
 t:["Small steps add up. {a}, one more time.","Trust the process: {a}.","Progress looks like {a}, repeated.","You've got a method: {a}. Keep going."],
 a:[
`flashcards|flash cards|flashcard|cue cards|index cards|note cards|cards;
pomodoro|pomodoro technique|pomodoros|tomato timer|25 5|25 minutes on 5 off|25 minute blocks|study in 25 minute blocks|timed blocks|study timer|timer;
practice problems|practice questions|practice|do practice problems|problem sets|textbook problems|end of chapter questions|exercises|worksheets|do questions;
notes|take notes|note taking|making notes|write notes|good notes|review notes|reread notes|read my notes|go over my notes`,
`cramming|cram|cram the night before|last minute cramming;
pray|praying|prayer|pray to god|pray for a curve|hope|hoping|manifesting|manifest|luck|good luck charm|vibes;
all nighter|all nighters|pull an all nighter|no sleep|stay up all night;
chatgpt|ai|claude|gemini|copilot|ask chatgpt|chat gpt|ai tutor|ask ai;
youtube|youtube videos|watch youtube|khan academy|crash course|the organic chemistry tutor|organic chemistry tutor|youtube tutorials|watching videos|tiktok|study tok|studytok;
panic|stress|fear|crying|tears;
reading the textbook|read the textbook|reading|reread|rereading|reread the chapter;
highlighting|highlight|highlighter|highlighters|colourful highlighters`,
`past exams|past exam|practice exams|practice exam|past papers|past paper|old exams|old midterms|past midterms|practice tests|practice test|mock exam|mock exams|sample exam|sample questions|test bank;
rewrite notes|rewriting notes|rewrite my notes|recopy notes|copy notes|condense notes|condensed notes|handwrite notes|write notes by hand|handwritten notes;
teach someone|teaching|teach a friend|teach my friend|teach my roommate|explain it to someone|explain to a friend|explain out loud|teach it back|teach my parents|teach my mom|teach my dog|teach my cat|teach my pet|teach an imaginary class;
active recall|recall|testing myself|test myself|self testing|quiz myself|self quiz|retrieval practice|retrieval;
spaced repetition|spaced practice|spacing|spaced out studying|study a little every day|little every day|distributed practice|study over several days;
summarize|summaries|summary|write summaries|summary sheet|summary notes|one page summary|chapter summaries|summarizing;
mind map|mind maps|mind mapping|concept map|concept maps|diagrams|draw diagrams|flowcharts|flow charts;
study group|group study|study with friends|study buddy|study partner|study with a friend|discord study group|group chat study;
anki|anki cards|anki deck|ankidroid;
quizlet|quizlet cards|quizlet learn|quizlet games|gimkit|kahoot|knowt;
blurting|blurt|blurt method|brain dump|write everything i know|write down everything i remember;
feynman technique|feynman|explain it simply|explain like im 5|eli5;
colour coding|color code|colour coded notes|color coded notes|colours;
cheat sheet|formula sheet|crib sheet|aid sheet|study sheet|equation sheet;
office hours|go to office hours|ta office hours|ta hours|ask the ta|ask the professor|ask my professor|email the professor|email my ta|ask questions|ask for help;
lectures|go to lectures|go to class|attend class|attend lectures|show up to class|tutorials|go to tutorials|attend tutorials|labs;
rewatch lectures|rewatching lectures|lecture recordings|recorded lectures|watch lectures at 2x|2x speed|watch at double speed|echo360|echo 360;
study schedule|schedule|make a schedule|study plan|plan|planner|timetable|calendar|google calendar|time blocking|block schedule|to do list|to do lists|checklist;
breaks|take breaks|regular breaks|short breaks|study breaks|break it up|chunking|chunk it|small chunks|one topic at a time|bite sized pieces;
sleep|get sleep|sleep well|good sleep|sleep on it|8 hours of sleep|nap|naps;
music|study music|lofi|lofi beats|classical music|white noise|brown noise|noise cancelling headphones|instrumental music|video game music;
quiet|silence|no phone|phone away|phone in another room|turn off my phone|airplane mode|do not disturb|focus mode|app blocker|forest app|cold turkey|freedom app|website blocker;
read out loud|reading out loud|say it out loud|talk out loud|talk it out|talk to myself|record myself|voice memos|listen to my notes;
mnemonics|mnemonic|acronyms|acrostics|silly sentences|rhymes|songs|make up songs|jingles|sing it;
write it out|writing it out|write it down|write it over and over|repetition|repeat|repeating|copy it out|lines;
redo assignments|redo homework|redo the assignments|redo problems|redo the questions|do it again|redo labs|redo quizzes;
practice quizzes|online quizzes|avenue quizzes|a2l quizzes|textbook quizzes|chapter quizzes|mastering|pearson mastering|webassign|connect quizzes|mcgraw hill connect|achieve;
whiteboard|whiteboards|white board|use a whiteboard|chalkboard|write on the window|write on the mirror|dry erase|dry erase markers;
outline|outlines|course outline|syllabus|learning objectives|go through the learning objectives|study guide|study guides|make a study guide|review sheet;
textbook|read the chapter|pre read|preread|preview the chapter|skim|skimming|sq3r|survey question read recite review;
reward myself|rewards|treat myself|gummy bear per page|candy reward|reward system|bribe myself;
study at the library|library|change locations|change study spots|new study spot;
cornell notes|cornell method|cornell note taking|outline method|charting method|boxing method;
interleaving|interleave|mix topics|mixed practice|switch topics|alternate subjects;
elaboration|elaborative interrogation|ask why|ask myself why|connect ideas|make connections|real life examples|examples;
visual aids|visuals|pictures|drawings|draw it|sketch notes|sketchnotes|doodle notes;
eat the frog|hardest thing first|hardest subject first|start with the hardest|do the worst first;
2 minute rule|5 minute rule|just start|start small|start with 5 minutes;
goodnotes|notability|onenote|notion|obsidian|ipad notes|digital notes|google docs|microsoft word|study app|remnote;
study with me videos|study with me|study stream|body doubling|body double|focusmate|study together on discord;
coffee|caffeine|tea|snacks|gum|chewing gum|mint gum`,
`student success centre|ssc|success centre|ssc workshops|academic skills|academic skills workshop|study skills workshop|learning strategies|academic coaching|ssc academic coaching|learning strategist|ssc learning strategist;
writing support|ssc writing support|writing centre|writing center|writing help|writing tutor|essay help;
math help centre|math help center|math help|math centre|math center|math learning centre|mathematics help centre;
peer tutoring|peer tutor|tutor|tutoring|private tutor|hire a tutor|tutors|tutoring centre|mcmaster tutoring|engineering tutoring;
peer mentoring|archway|archway mentor|archway mentors|mentor|upper year|ask an upper year|upper years|senior students|older students;
supplemental instruction|pass|pass sessions|review sessions|exam review|exam review session|review session|review lecture|exam jams|exam jam|msu exam jam;
library workshop|library research help|ask a librarian|librarian|research help|library help|lyons|lyons new media centre;
student accessibility services|sas|accommodations|exam accommodations|academic accommodations|extra time;
book a study room|study room|library study room|thode study room|mills study room|group study room;
study in thode|thode|study in mills|mills|innis|study in innis|health sciences library|hsl;
learn the format|know the exam format|exam format|ask about the exam format|ask what is on the exam|study what is on the outline;
make my own exam|write my own questions|make my own quiz|make up questions|create questions|predict exam questions|guess exam questions|make my own test;
teach the wall|teach to an empty room|teach my stuffed animals|teach my plants|teach a rubber duck|rubber duck|rubber duck debugging|rubber ducking;
2 column notes|split page|question and answer notes|q and a notes;
leitner system|leitner box|leitner method|box system;
`,
`memory palace|method of loci|mind palace|loci;
chunking information|chunk information|group information|categorize|categories;
dual coding|pictures and words|words and pictures;
concrete examples|worked examples|study the solutions|go through solutions|solution manual|answer key|work backwards|reverse engineering|look at the answer first;
error log|mistake log|mistake journal|review my mistakes|analyze my mistakes|learn from mistakes|go over mistakes|redo mistakes;
exam wrapper|post exam review|review old tests|go over my midterm;
timed practice|time myself|simulate the exam|exam conditions|mock exam conditions|practice under exam conditions|sit a practice exam;
walk and study|study while walking|pace while studying|walking flashcards|study on the treadmill;
standing desk|study standing up|change positions;
record lectures|record myself reading|listen while walking|audio notes|podcast notes|text to speech|speechify|notebooklm|notebook lm;
sticky notes|post it notes|post its|sticky notes on the wall|notes on the wall|notes on the mirror|notes on the fridge|notes around the room|notes on the bathroom door|notes on the ceiling;
study backwards|start at the end|reverse order;
mini goals|small goals|daily goals|set goals|goal setting|smart goals|study goals;
morning studying|study in the morning|study early|early bird;
night studying|study at night|night owl|study late;
gamify|gamification|habitica|study bunny|forest|focus to do|flora app|finch;
accountability|accountability buddy|accountability partner|tell a friend my goals|check ins;
voice memos of notes|record notes and listen|listen to recordings|recordings;
youtube at 2x|speed up lectures|1.5x speed|1.5x;
textbook practice questions with answers|odd numbered questions|odd questions|back of the book;
study by topic|topic by topic|unit by unit|week by week|one unit at a time;
past assignments|old assignments|redo old quizzes|redo tutorials|tutorial sheets|tutorial questions|lab manual;
flashcards on my phone|flashcards on the bus|study on the bus|study on the hsr|study on my commute|commute studying;
study at the same time every day|routine|study routine|habit|consistency|consistent|daily studying|study every day;
pretend im the professor|act like the prof|role play|pretend im teaching|pretend to be the teacher;
write a song about it|make a rap|rap it|song about the material|parody song|sing the notes;
draw it out|draw the process|comics|draw comics|storyboard|story|turn it into a story|storytelling;
exercise before studying|work out first|walk first|movement breaks|move between topics|jumping jacks between topics`,
`52 17|52 17 method|52 minutes on 17 off|90 minute blocks|ultradian rhythm|flowtime|flowmodoro|the 50 10 rule|50 10|animedoro|animedoro method;
sq4r|pqrst|kwl chart|kwl|frayer model|zettelkasten|slip box|slipbox|progressive summarization;
retrieval grid|retrieval grids|brain dump grid|blank page method|blank page|white paper method|empty page recall;
feynman plus flashcards|anki plus past papers|active recall plus spaced repetition;
the protege effect|protege effect;
teach a lecture to an empty classroom in jhe|teach in an empty lecture hall|lecture to an empty room;
write notes in another language|translate my notes|notes in french|notes in my first language|study in my first language;
talk to chatgpt as a tutor|socratic method|socratic questioning|ask myself questions|question everything;
explain it to my grandma|explain it to my little brother|explain it to my little sister|explain it to a kid|explain it to a child|teach my little sibling;
make a podcast|podcast my notes|record a podcast|make a video|make a tiktok|film myself teaching|youtube video of myself;
whiteboard on the wall|cover my wall in notes|write on my windows|write on the shower wall|bath crayons|shower notes;
study in different rooms for different subjects|one room per subject|location based memory|context dependent memory;
chew the same gum during the exam|same gum|same scent|same perfume|study with the same smell|smell peppermint while studying|same playlist as studying;
study before bed and sleep|study then sleep|sleep after studying|review before sleep|review right before bed;
handwrite then type|type then handwrite|write notes twice;
colour per subject|one colour per topic|colour code by topic;
make a mind map on a huge sheet|giant poster|poster|chart paper|bristol board;
draw the textbook|textbook drawings|picture notes;
study in a costume|dress up to study|dress for success|get ready like i am going to class|dress up;
lock my phone in a box|kitchen safe|timelock box|phone jail|give my phone to my roommate|give my phone to my mom;
study while doing a puzzle|study while knitting|study with a fidget|fidget while studying|fidgeting;
write the answers on a mirror|lipstick on the mirror|eyeliner on the mirror;
past exam bank from the msu|msu exam bank|faculty society exam bank|exam bank|mes exam bank|mcmaster engineering society exam bank|mcmaster students union exam bank;
mosaic schedule check|plan around mosaic exam schedule|exam schedule|check the exam schedule;
review after every lecture|review the same day|review within 24 hours|same day review|weekly review|sunday review;
read the papers|primary sources|read research papers|journal articles;
game of jeopardy|jeopardy review|make a jeopardy game|trivia|trivia night with friends|quiz bowl;
bet with friends|wager|loser buys coffee|competition|compete with friends|leaderboard;
teach a study group|lead a study group|host a review session|be a tutor|tutor others|tutor someone else|volunteer tutoring;
study abroad style|immersion|study in a cafe in westdale|study at a cafe on locke;
reverse outline|backwards outline;
memorize by walking routes|walk the route|walk around campus reciting;
anki plus youtube plus past exams|everything|all of them|combination|mix of everything`
 ]},

{id:"c1", drift:true, q:"A McMaster service or resource that helps during exam season.", h:"On campus, online, or run by students.",
 t:["You don't have to do it alone. {a} is there for you.","Asking for help is a strength. Start with {a}.","Lean on {a}. That's what it's for.","Support is closer than you think: {a}."],
 a:[
`library|the library|mills|mills library|mills memorial library|thode|thode library|innis|innis library|health sciences library|hsl|libraries|mac library|mcmaster library|study space;
student wellness centre|swc|wellness centre|student wellness|mac wellness|wellness center|counselling|counseling|mental health services|swc counselling|swc counseling|swc doctor|campus doctor|campus clinic|health clinic|swc clinic;
office hours|professor office hours|prof office hours|ta office hours|ta hours|my ta|tas|my professor|the professor|my prof|instructor|teaching assistant`,
`chatgpt|ai|google|youtube|reddit|r mcmaster|the subreddit|mcmaster reddit|r slash mcmaster;
tim hortons|tims|starbucks|coffee|the coffee shops|caffeine|centro|bridges|food;
my friends|friends|my roommate|classmates|group chat|the group chat|discord|discord server|course discord|class discord;
sleep|naps|nap pods|my bed;
the pulse|pulse|gym|the gym|dbac|david braley athletic centre`,
`student success centre|ssc|success centre|academic skills|academic skills workshops|study skills workshops|ssc workshops|learning strategies|academic coaching|learning strategist|ssc academic coaching|student success;
student accessibility services|sas|accessibility services|accommodations|exam accommodations|academic accommodations|sas accommodations|sas testing centre|accommodated exams|accommodated testing;
writing support|writing support services|ssc writing support|writing centre|writing center|writing help|writing tutor;
math help centre|math help center|math help|math centre|math center|math learning centre|mathematics help centre;
peer tutoring|tutoring|tutor|peer tutor|msu tutoring|tutoring services|mcmaster tutoring|engineering tutoring|mes tutoring;
msaf|mcmaster student absence form|absence form|student absence form|self reported absence|sick note|deferral|exam deferral|defer an exam|deferred exam|petition|academic petition|relief for missed academic work|rmaw;
therapy dogs|therapy dog|pet therapy|pet therapy dogs|st john ambulance therapy dogs|puppy room|paws;
counsellor|counselor|therapist|therapy|talk to a counsellor|see a counsellor|book a counselling appointment|single session counselling|drop in counselling|wellness appointment;
academic advisor|advisor|academic advising|faculty advisor|program advisor|academic counsellor|associate dean|faculty office|level advisor;
avenue to learn|avenue|a2l|avenue to learn quizzes|course website|course page|course notes|lecture slides|slides;
mosaic|exam schedule|mosaic exam schedule|check mosaic|final exam schedule;
study rooms|book a study room|library study rooms|group study rooms|thode study room|mills study room|library booking|room booking;
exam review sessions|review sessions|review session|exam review|exam jams|exam jam|msu exam jam|review lecture;
past exams|exam bank|past exam bank|old exams|mes exam bank|msu exam bank|society exam bank|mcmaster engineering society|mes|faculty society;
msu|mcmaster students union|student union|msu services|msu service;
food collective centre|fcc|msu food collective centre|msu fcc|food bank|campus food bank|mac food bank|free food|food centre;
mac bread bin|bread bin|free bread|msu bread bin;
good2talk|good2talk helpline|good2talk line|ontario student helpline|helpline|crisis line;
peer support line|msu peer support line|msu peer support|peer support|peer supporters;
archway|archway mentors|archway mentor|archway program|first year mentor|mentorship|peer mentor|peer mentors|mentoring;
thode makerspace|makerspace|lyons new media centre|lyons|lyons new media|ask a librarian|librarians|research help|subject librarian|liaison librarian|library help|library workshops;
student centre|musc|mcmaster university student centre|quiet spaces|study spaces|silent study|silent floor|24 hour study space|24 hour library|extended library hours|late night library;
chaplaincy centre|chaplaincy|mac chaplaincy|spiritual care|spiritual care and learning|chaplain|multi faith prayer room|prayer room|multifaith room|muslim prayer space|musalla;
residence life|res life|community advisor|ca|cas|my ca|residence advisor|ra|res don|don|residence staff|res staff;
campus security|security|special constables|mcmaster security|student walk home attendant team|swhat|walk home|walk safe|safe walk|msu swhat;
emergency first response team|efrt|msu efrt|first aid|campus first aid;
campus health|health services|nurse|campus nurse|walk in clinic|campus walk in|doctor|physician|psychiatrist;
pulse|the pulse|pulse fitness|mac rec|recreation|intramurals|drop in rec|fitness classes|yoga classes|dbac|david braley|ivor wynne|mac pool;
academic peer mentors|academic peer mentor|ssc peer mentors|ssc mentors|study mentor;undergrad peer tutoring network|peer tutoring network|tutorocean|tutor ocean;sas study space|sas study hall|sas study room|accessibility study space;wellness cafe|swc wellness cafe|exam productivity cafe|productivity cafe;exam snacks|swc exam snacks|free exam snacks|free snacks;rapid access counselling|rapid access counseling|same day counselling|same day counseling|walk in counselling|walk in counseling;writing and academic skills|writing and academic skills hub|academic skills hub|ssc hub;get help now|swc crisis support|crisis support|after hours support`,
`wgen|women and gender equity network|msu wgen;
pride community centre|msu pride|pride centre|pcc;
maccess|msu maccess|disability peer support;
shec|student health education centre|msu shec;
msu diversity services|diversity services;
msu spark|spark|first year transition|welcome week|welcome week reps;
indigenous student services|iss|indigenous student centre|mac indigenous student services|indigenous students|elders|elder;
international student services|iss international|international student support|international student office|international office;
black student success centre|bssc|black student success|black student services;
equity and inclusion office|eio|equity office|human rights office|equity and inclusion;
sexual violence prevention and response office|svpro|sexual violence response;
student support and case management|case management|student support case manager|case manager|student support;
office of the registrar|registrar|registrars office|ssc front desk|gilmour hall;
financial aid|student financial aid|scholarships|bursary|bursaries|emergency bursary|emergency funds|osap|student aid|awards office;
career access professional and experiential learning|career services|career counselling|career counsellor|careers;
mental health peer support|mental health workshops|wellness workshops|mindfulness sessions|swc workshops|swc groups|group therapy|wellness education;
spiritual care and learning centre|sclc|spiritual care and learning|spiritual care centre;student case management|scm;housing and conference services|hcs|housing services|off campus housing|macrezlife|mac rez life|rez life events;financial wellness|financial wellness program|money coaching|budgeting help|budget help;first year experience|first year experience office|fye;international and exchange student experience|iese|exchange student office|international students office;access program|ssc access program;oscarplus|oscar plus|oscar;career counselling and job search|job search help|resume help|career centre;student mental health support|mental health support|mental health resources|mcmaster mental health strategy;engineering talkspot|talkspot|talk spot|engineering counsellor|engineering counselor|engineering wellness;macademics|macademics hub|msu macademics;health promotion|peer health educators|peer health education|swc health promotion|wellness peer educators;a student club|my club|club|clubs|* club|* * club|* * * club|* society|* * society|* association|* * association|* students association|* student association|* * students association|chem club|chemistry club|chemistry society|bio club|biology club|biology society|bio society|biochem society|psych society|psychology society|psych club|math society|math club|physics club|physics society|engineering society|commerce society|dcs|degroote commerce society|science society|mcmaster science society|mss|health sci society|health sciences society|hsss|bhsc society|kin society|kinesiology society|nursing society|arts and science society|arts sci society|social sciences society|humanities society|life sci society|life sciences society|compsci club|computer science club|cs club|coding club|deltahacks|pre med society|premed club|pre med club|pre law society|indian students association|chinese students association|korean students association|caribbean students association|african students association|filipino students association|vietnamese students association|pakistani students association|tamil students association|sikh students association|hindu students association|muslim students association|hillel|latin american students association|arab students association|iranian students association|black students association|study club|anime club|board games club|chess club|dance club|kpop club|choir|band|theatre club|drama club|film club|book club|knitting club|crochet club|art club|photography club|hiking club|outdoors club|climbing club|running club|yoga club|meditation club|mindfulness club|mental health club|jack org|active minds|debate club|model un|investment club|consulting club|robotics club|rocketry club|ultimate frisbee club|badminton club|volleyball club|basketball club|soccer club|cricket club|cooking club|baking club|gaming club|esports club|music club`,
`the silhouette|silhouette|campus newspaper|cfmu|campus radio|93.3 cfmu;
telus health student support|telus health|keep me safe|keep.me safe|kms app|mysupport|my ssp|student support program|24 7 counselling|online counselling|virtual counselling;
988|suicide crisis helpline|call 988|text 988;
hamilton public library|hpl|central library|westdale library;
twelveighty|1280|the phoenix|phoenix|grad club;
bookstore|campus store|titles bookstore|mcmaster campus store;
lockers|library lockers|charging stations|laptop loans|laptop lending|calculator loan|borrow a calculator|borrow a laptop|tech loans|device lending|chromebook loan;
printing|campus printing|library printing|printers;
uts|university technology services|it help|it services|tech support|wifi|eduroam;
mcmaster app|mcmaster mobile app|mac app|mcmaster mobile;
course reserves|reserves|textbook reserves|reserve books|library reserves;
msu bike shop|bike shop|macycle|ma cycle;
msu farmers market|farmers market|mac farmers market;
ombuds|ombuds office|ombudsperson|student ombuds;
legal clinic|msu legal|legal aid;
student health insurance|msu health plan|health plan|student insurance|dental plan|student benefits;
gender inclusive washrooms|period products|free menstrual products|free pads|free tampons;
childcare|mcmaster childcare|mcmaster childrens centre;
mcmaster sport|marauders|marauders game|sports games|athletics;
mcmaster museum of art|museum of art|mac museum;
ron joyce centre|burlington campus;
the exam hall|burridge gym|burridge|ivor wynne centre|iwc|exam centre|exam locations;
campus events|destress events|de stress events|exam destress|destress week|wellness week|this event|this station|destress station|snowflake station|ornament station|free hot chocolate;
the mac geese|geese;
campus squirrels|squirrels|black squirrels;
chaplaincy exam hospitality|exam hospitality|chaplaincy lounge|chaplaincy drop in;fuel for finals;write night|writing night|write nights;10 days of wellness|ten days of wellness;exam stress relief yoga|exam yoga|pulse yoga|stress relief yoga;swc text reminders|exam wellness texts|wellness texts|swc texts;degroote academic advising table|exam support table|degroote advising|dsb advising;olas study sessions|olas|organization of latin american students;tim nolan testing centre|tim nolan|testing centre|sas testing;burnout workshop|burnout workshops;command your calendar|studying in university workshop|time management workshop;avtek|msu avtek;the grind|grind|msu grind;hotspot|msu hotspot;maroons|msu maroons|mac maroons;student market|union market|msu union market|msu student market;underground media and design|underground media design;campus events|msu campus events;first year council|fyc|msu first year council;msu child care centre|msu childcare;hamilton bike share|sobi|bike share|msu bike share;campus connect|campus connect bookings;student savings|student discounts|msu discounts;macgreen|msu macgreen;horizons|msu horizons;shinerama|msu shinerama`,
`mcmaster indigenous health learning lodge|learning lodge|ihll|indigenous health learning lodge;
macpherson institute|paul r macpherson institute|macpherson;
lyons media lab|digital scholarship hub|sherman centre|sherman centre for digital scholarship|sherman centre for digital scholarship and research;
maps and data|map library|lloyd reeds map collection|lloyd reeds|map collection|data services|gis help;
archives|william ready division of archives|ready archives|archives and research collections;
student life enhancement fund|sief|swc nutrition|dietitian|nutritionist|campus dietitian;
recreation wellness passport|pulse wellness|wellness passport;
peer mentoring for grad students|grad students association|gsa|graduate students association|school of graduate studies|sgs|grad club;
macpap|mac pap|mcmaster physically active|macfit|pulse personal trainer|personal trainer|personal training;
mcmaster faculty of health sciences wellness|fhs wellness|medical student wellness|resident wellness|program wellness|program lead;
engineering co op|co op office|co op and career services|eng co op|eng career;
lincoln alexander hall|lincoln alexander;
cootes paradise|cootes|royal botanical gardens|rbg|mcmaster forest;
campus chaplain dog|chaplaincy dog;
the egg room|leap|mcmaster leap|mcmaster continuing education|continuing education|mce;
the harry lyman hooker|hooker room|mcmaster innovation park|mip;
peer support groups|support groups|grief support|loss support;
exam cram jam|stress less|stressless|study smarter|study smart;
msu underground|underground|msu underground print|underground printing;
msu clubs fair|clubsfest|clubfest;
msu lyceum|lyceum;
mcmaster students union pharmacy|pharmacy|campus pharmacy|shoppers in the hospital|hospital pharmacy;
hamilton health sciences|mcmaster childrens hospital|mumc|mcmaster university medical centre|st joes|st josephs|st josephs healthcare;
coast|coast hamilton|barrett centre|hamilton crisis|crisis outreach|st josephs urgent care|urgent care;
trans peer support|queer support|2slgbtqia support|rainbow support;
grief and loss counselling|bereavement;
spiritual care dog|faith groups|campus ministry|muslim students association|msa|hillel|catholic students|christian club|sikh students association|hindu students association|campus crusade|power to change;
mcmaster sustainability|sustainability office|community garden|campus garden|mac farm|macgardens;
the student walk home team at night|night walk home;
mac pride month|pride events;
the bus pass|presto|hsr pass|upass|u pass|bus pass;
riso|religious indigenous and spiritual observances|religious accommodation|religious accommodations|spiritual observance accommodation;maccard counter|replacement student card|maccard|student card|student id;virtual campus map|campus map|navigating exams video|exam room map;mend your mood|mend your mood group;food for thought|food for thought cooking sessions|swc cooking sessions|cooking sessions;the forge|forge|mcmaster forge;nature at mcmaster|nature at mac|mcmaster nature;model service|english language practice|conversation practice|english conversation;student assistance plan|sap|24 7 support line;david braley sport medicine|sport medicine|sport med clinic|physio|physiotherapy|campus physio;it support|campus it help|uts help desk;campus safety services|campus safety`
 ]},

{id:"m6", drift:true, q:"Something that makes you smile on a hard day.", h:"Big or tiny.",
 t:["On the heavy days, there's still {a}.","Hold on to {a}.","Even in a snowstorm: {a}.","Little things count. Today it's {a}."],
 a:[
`friends|my friends|friend|my best friend|best friend|bestie|my bff|good friends;
family|my family|parents|my parents|mom|my mom|dad|my dad|home;
dog|my dog|dogs|puppy|puppies|seeing a dog|pet a dog|my puppy;
cat|my cat|cats|kitten|kittens|my kitty;
pets|my pet|my pets|animals|cute animals;
music|good music|a good song|my favourite song|songs|favorite song|playlist|my playlist`,
`memes|meme|a good meme|funny memes|reels|tiktoks|tiktok|funny tiktoks|instagram reels|youtube shorts|shitposts;
food|good food|eating|snacks|a snack|free food|a good meal|a hot meal|warm meal|hot food|a warm meal;
sleep|bed|my bed|naps|nap|going to bed|bedtime;
payday|getting paid|money|cash|osap|osap money|refund|tax refund|e transfer;
cancelled class|class cancelled|class is cancelled|no class|snow day|lecture cancelled|professor cancelled class|prof cancels class|exam cancelled;
the weekend|weekends|friday|its friday|fridays|reading week|winter break|christmas break|holidays|vacation|summer|summer break|no school;
being done|finishing|submitting|hitting submit|submitted|done with exams|last exam|end of the term`,
`sunshine|sun|sunny day|sunny days|the sun|sunlight|blue sky|nice weather|good weather;
snow|first snow|fresh snow|snowfall|snowflakes|snowy day|the first snowfall;
siblings|sibling|my sister|sister|my brother|brother|little brother|little sister|big sister|big brother|my siblings|my twin|twin|cousins|my cousins|cousin;
partner|my partner|boyfriend|my boyfriend|girlfriend|my girlfriend|husband|wife|significant other|so|my person|fiance|fiancee;
grandma|my grandma|grandpa|my grandpa|grandparents|my grandparents|nani|nana|dadi|lola|lolo|halmeoni|baba|my baba|my grandmother|my grandfather;
hug|hugs|a hug|a good hug|a big hug|warm hug|getting a hug|my moms hugs|moms hugs;
coffee|a good coffee|my coffee|morning coffee|iced coffee|latte|tea|a cup of tea|chai|matcha;
babies|baby|a baby smiling|baby laughing|baby videos|my niece|my nephew|niece|nephew|nieces and nephews|kids|little kids;
sunsets|sunset|sunrise|golden hour|pretty sky|the sky|clouds|rainbow|rainbows|the moon|full moon|stars;
funny videos|funny video|comedy|stand up|stand up comedy|funny shows|cat videos|dog videos|animal videos|cute animal videos|puppy videos|bloopers;
laughing|laughter|a good laugh|laughing with friends|inside jokes|jokes|dad jokes|puns|bad puns|my friends being stupid;
a text from a friend|texts|a good text|good morning text|message from my mom|call from my mom|call from home|calls with my family|facetime|facetime with family|voice notes|voice memos from friends;
compliments|a compliment|being complimented|someone complimenting me|nice comments|kind words|encouragement|praise;
kindness|a stranger being nice|strangers being kind|kind strangers|someone holding the door|random acts of kindness|someone smiling at me|smiles|a smile;
good grades|a good grade|good mark|good marks|passing|an a|getting an a|acing a test|good midterm mark|bell curve|curved exam|getting a curve|the curve;
flowers|fresh flowers|tulips|roses|sunflowers|peonies|plants|my plants|a new leaf on my plant|houseplants;
books|a good book|reading|my favorite book|a good chapter;
shows|my favorite show|a good show|comfort show|netflix|tv|movies|a good movie|comfort movie|anime|kdrama|kdramas;
video games|gaming|games|my switch|minecraft|stardew|stardew valley|animal crossing|mario kart|zelda|pokemon;
sports|my team|hockey|the leafs|leafs win|leafs|raptors|raptors win|blue jays|jays|bluejays|tiger cats|ticats|hamilton tiger cats|toronto fc|maple leafs|oilers|canucks|habs|canadiens|senators|flames|jets|nba|nfl|soccer|football|basketball|f1|formula 1|world cup|champions league|cricket|ipl;
chocolate|ice cream|candy|dessert|desserts|cake|cookies|baked goods|donuts|timbits|bubble tea|boba|sweets|a sweet treat|treat|treats;
pizza|pizza night|takeout|shawarma|sushi|ramen|fries|tacos|burgers|butter chicken|biryani|pho|dumplings|my moms cooking|home cooking|home cooked meal|my dads cooking|grandmas cooking;
my bed after a long day|warm bed|cozy bed|fresh sheets|clean sheets|blanket|warm blanket|weighted blanket|hoodie|cozy hoodie|sweatpants|pajamas|pyjamas|fuzzy socks|warm socks|slippers;
hot shower|warm shower|shower|bath|bubble bath|a long shower;
dancing|dance|singing|karaoke|singing in the car|car karaoke|concerts|a concert|live music;
nature|trees|the forest|the lake|the beach|the ocean|walks|a walk|going outside|fresh air|hiking|mountains|rain|the rain|rainy days|thunderstorms;
my teddy bear|teddy bear|stuffed animal|stuffed animals|plushie|squishmallow|squishmallows|jellycat|my stuffie|stuffies;
photos|old photos|pictures|my camera roll|memories|throwbacks|old videos|home videos|scrapbook;
god|faith|prayer|praying|church|mosque|temple|gurdwara|jesus|allah|bhagwan|waheguru|my faith;
myself|me|being proud of myself|progress|small wins|tiny wins|little wins|checking things off|a clean room|crossing things off my list|getting things done|productivity`,
`therapy dogs|therapy dog|pet therapy|puppy room|dogs on campus|campus dogs|dogs at mac|seeing dogs on campus|petting dogs on campus;
the mac geese|geese|canada geese|baby geese|goslings|ducks|ducklings|the ducks|squirrels|black squirrels|campus squirrels|chipmunks|bunnies|rabbits|campus bunnies|birds|cardinals|blue jays the bird|chickadees|robins|pigeons|crows|deer|raccoons;
cootes paradise|cootes|royal botanical gardens|rbg|mcmaster forest|the escarpment|bruce trail|waterfalls|websters falls|dundas peak|tew falls|bayfront park|pier 8|princess point|lake ontario|the waterfront;
arts quad|the quad|mcmaster in the fall|mac in the snow|campus in the snow|mac campus|campus at night|campus lights|the mcmaster sign|mcmaster sign|university hall|hamilton hall|the gates|mcmaster gates|campus;
marauders|mac marauders|marauders game|mac football|mac basketball|mac hockey|homecoming|mac homecoming|welcome week|mac welcome week|reps|welcome week reps|spirit|mac spirit|maroon|maroon and gold;
free food on campus|free pizza|club free food|free pizza at club events|free coffee|free hot chocolate|free cookies|free snacks|free swag|free stuff|freebies|free t shirts|bread bin|mac bread bin|free bread;
centro|centro cookies|bridges|bridges cafe|la piazza|union market|east meets west|pinks|williams|tim hortons on campus|tims line|tims|the starbucks line|starbucks|double double|iced capp|timbits|roll up the rim;
the phoenix|phoenix|twelveighty|1280|thursday nights|trivia night|bar trivia;
a good lecture|a good professor|my favourite professor|my favorite prof|a nice ta|nice tas|a prof who cares|professor jokes|a prof saying good job|getting it|understanding something|when it clicks|aha moment|lightbulb moment|eureka;
my study group|study buddies|classmates|my lab partner|lab partner|lab partners|my program|my cohort|my res floor|floormates|floor mates|my roommates|roommates|roommate|my housemates|housemates|res friends;
club|my club|clubs|my team|teammates|my dance team|choir|band|orchestra|improv|my improv team|intramurals|intramural team|my intramural team|rec league;
a clean desk|a fresh notebook|new stationery|stationery|new pens|good pens|new highlighters|stickers|washi tape|a new planner|planner;
coffee shops|cafes|cafe|the smell of coffee|bakery|bakeries|the smell of bread|fresh bread|cinnamon buns|cinnamon rolls;
sunlight through the window|warm sunlight|sun on my face|morning light|light;
the first warm day|spring|blossoms|cherry blossoms|fall leaves|autumn|autumn leaves|crunchy leaves|halloween|christmas lights|holiday lights|decorations|christmas|diwali|eid|lunar new year|hanukkah|holidays at home|going home for the holidays;
snowmen|building a snowman|snowball fights|snow angels|sledding|skating|hot chocolate|cocoa|marshmallows|candy canes|gingerbread|gingerbread cookies|christmas movies|holiday movies|christmas music|mariah carey|holiday music;
crafts|art|drawing|painting|crochet|knitting|making something|baking|cooking|lego;
a good hair day|good hair day|new haircut|outfit|a good outfit|new clothes|new shoes|my favourite hoodie|thrifting finds|thrift finds;
my future|the future|my goals|dreams|my dream job|graduating|graduation|convocation|summer plans|plans|travel|trips|travelling|upcoming trip|vacation plans;
past me|future me|my younger self|little me|inner child|the kid in me;
memories with friends|memories|good memories|nostalgia|childhood|childhood shows|old cartoons|disney|pixar|ghibli|studio ghibli|totoro|spongebob|phineas and ferb|bluey;
taylor swift|harry styles|beyonce|drake|the weeknd|bts|blackpink|kpop|olivia rodrigo|sabrina carpenter|chappell roan|sza|bad bunny|ed sheeran|one direction|frank ocean|tyler the creator|kendrick|kendrick lamar|the beatles|abba|queen;
the office|friends the show|brooklyn 99|brooklyn nine nine|parks and rec|new girl|modern family|schitts creek|ted lasso|the good place|abbott elementary|bobs burgers|the simpsons|family guy|gilmore girls|grey s anatomy|greys anatomy|suits|bluey the show`,
`a stranger complimenting my outfit|stranger compliment|compliment from a stranger;
a kid waving at me|kids waving|babies on the bus|a baby on the bus|a toddler waving|toddlers;
dogs in coats|dogs in sweaters|dogs in boots|dog boots|dogs playing in snow|dogs in the snow|dog zoomies|zoomies|cat zoomies;
the hsr bus coming on time|bus on time|catching the bus|when the bus is on time|green lights|all green lights|parking spot|finding a parking spot|no line at tims|short line|no line;
an empty study room|getting a study room|finding a seat in thode|finding a seat in mills|outlet near my seat|a free outlet|outlets|charger|fully charged phone;
a perfect cup of tea|the first sip of coffee|first sip|warm mug|holding a warm mug;
a clean inbox|inbox zero|cleared to do list|empty to do list|no notifications;
a long distance call|calls from abroad|my family back home|whatsapp calls|video calls with family|calls with grandma|grandmas voice|my moms voice|hearing my moms voice;
a letter|letters|snail mail|care package|a care package|package|packages|mail|online order arriving|amazon package|parcel;
my moms texts with emojis|my dads texts|boomer texts|dad emails|my grandparents texting|grandma on facebook;
old voicemails|saved voicemails|voicemail;
a handwritten note|sticky note from a friend|notes from friends|cards|birthday cards|letters from friends;
smell of rain|petrichor|smell of snow|smell of christmas|cinnamon|vanilla|lavender|candles|scented candles|fresh laundry|clean laundry|laundry smell;
warm laundry out of the dryer|warm clothes from the dryer|dryer sheets|towels fresh from the dryer;
crunchy snow|snow crunching|walking in fresh snow|first footprints|untouched snow|snow globe|snow globes|frost on the window|frosty windows|icicles;
the sound of rain|rain on the window|thunder|thunderstorms at night|white noise|fan noise;
a perfect avocado|perfectly ripe banana|ripe mango|a good apple|honeycrisp|honeycrisp apples|clementine season|mandarin oranges;
peeling an orange in one piece|orange peel in one piece|perfect toast|the crispy edges|crispy fries|corner brownie piece|the end piece of bread;
my plants growing|a new leaf|seedlings|my sourdough starter|sourdough;
lego flowers|lego bonsai|building lego;
watching my fish|fish|my fish|hamster|my hamster|guinea pig|my guinea pig|rabbit|my bunny|bunny|lizard|gecko|leopard gecko|my gecko|bearded dragon|parrot|budgie|my bird|turtle|my turtle|snake|my snake|horse|my horse|chickens|goats|cows|alpacas|capybara|capybaras|otters|sea otters|red pandas|penguins|pandas|quokkas|hedgehogs|axolotl|axolotls|frogs|ducks with hats;
moo deng|pesto the penguin|pygmy hippo|fiona the hippo;
my old diary|old diaries|childhood drawings|my baby pictures|baby photos|baby pictures;
a good stretch|stretching|yoga|a long walk|running|a run|runners high|the gym|working out|a good workout|lifting|pr|hitting a pr|new pr;
crossword|wordle|wordle in 2|getting wordle|connections|nyt games|the mini|sudoku|chess wins|chess|duolingo streak|my streak|streaks;
fun facts|random facts|learning something new|science|space|nasa|space photos|the james webb telescope|jwst|planets|the northern lights|aurora|northern lights|meteor shower|eclipse;
my journal|journaling|gratitude|gratitude journal|writing|poetry|poems|quotes|motivational quotes|a good quote|affirmations|positive affirmations;
volunteering|helping people|helping others|helping a friend|making someone laugh|making someone smile|making other people smile|being kind|giving gifts|gift giving;
going home|my hometown|my house|my childhood home|my own bed at home|my moms house|my dads house|grandmas house;
my cultural food|my moms biryani|dal|dal chawal|rice and beans|jollof|jollof rice|adobo|pancit|kimchi jjigae|congee|pierogies|my grandmas soup|chicken soup|matzo ball soup|pho|bun cha|ramen night|hot pot|hotpot|korean bbq|kbbq|dim sum|sunday dim sum|roti|curry|samosas|gulab jamun|jalebi|mithai|baklava|churros|tres leches|pan dulce|empanadas|arepas|plantains|fried plantains|oxtail|jerk chicken|patties|poutine|beavertails|butter tarts|nanaimo bars|maple syrup|maple taffy;
spotify wrapped|on repeat|a new album|album drop|new music|concert tickets|getting concert tickets;
podcasts|my favorite podcast|audiobooks|a good audiobook;
the moon|crescent moon|harvest moon|supermoon|the stars at night|stargazing`,
`the floor plan of my future apartment|apartment hunting|interior design|pinterest|pinterest boards|vision board|mood boards;
my favourite mug|favorite mug|my mug|a good pen|the perfect pen|muji pens|pilot g2|my water bottle|stanley cup|my stanley|owala|hydroflask|my hydro flask;
my lucky socks|lucky charm|good luck charm|my lucky pencil|lucky pen|my bracelet|my necklace|jewelry|my ring;
people falling in public|fail videos|my own clumsiness|my friends fails|tripping|bloopers;
silly dances|my roommate singing|my roommate dancing|roommate shenanigans|my friends singing badly|my family group chat|family group chat|cousins group chat|group chat memes;
dad bod dogs|chonky cats|chonk|fat cats|fluffy cows|highland cows|cows|baby goats|goats in pajamas|ducks|ducklings following their mom;
pigeons at the bus stop|seagulls|that one goose|mac goose|the goose that chases people|geese chasing people;
the escalator in the hospital|tunnel to the hospital|mumc tunnels|the tunnels;
the smell of tim hortons|the tims line|the tim hortons in the hospital|tims in mdcl|tims in thode;
thode lights|mills at night|library at night|the mills view|view from mills|view from the top of mills|view of cootes|sunset over cootes|sunrise over the escarpment;
snowy arts quad|arts quad in the snow|quad snow|quad in the snow|snowball fight in the quad;
convocation photos|grad photos|my grad photo|mcmaster convocation;
the ironing board in my res|res pranks|floor cheers|res cheers|welcome week chants|res spirit|res formal;
twelveighty wings|phoenix poutine|centro pasta bar|centro pizza|centro grill|centro breakfast|east meets west curry|la piazza pizza|union market sandwiches|williams cookies;
the willow|the willow tree in the arts quad|the tree in the quad|the old tree;
seeing my breath in the cold|seeing my breath|cold air|cold crisp air|crisp air|frosty mornings;
the snowplow|snowplows|plows|shovelling snow|shoveling snow;
my nan's knitted scarf|knitted scarf|handmade gifts|homemade gifts;
my dog when i get home|dog greeting me|pets greeting me|my cat waiting at the door;
a good cry|crying|having a cry|letting it out;
cold pillow|the cold side of the pillow|flipping my pillow|clean pillowcase;
a fresh start|tomorrow|tomorrow is a new day|new day|new week|mondays|monday|fresh notebook;
the bus driver saying hi|bus drivers waving|bus drivers|the hsr driver|nice bus driver|cashiers|nice cashiers|the tims lady|the tims cashier|the barista knowing my order|baristas|barista;
people watching|strangers|old couples|old couples holding hands|couples|weddings|proposals|love|being loved;
making paper snowflakes|paper snowflakes|ornaments|decorating ornaments|crafts at this event|this station|destress events`
 ]},

{id:"m7", drift:true, one:true, q:"One word for how you want to feel after exams.", h:"Just one word.",
 t:["I'm working toward feeling {a}.","Every page gets me closer to {a}.","Future me will feel {a}.","Exams end. {a} lasts."],
 a:[
`relieved|relief;
free|freedom|liberated|liberation;
happy|happiness|glad;
done|finished|over|complete|completed`,
`alive|living|human|reborn|resurrected|revived;
asleep|sleepy|unconscious|comatose|hibernating|eepy|sleeping;
rich|wealthy|loaded;
nothing|numb|empty|blank|void;
smart|genius|brilliant|intelligent|einstein;
famous|legendary|iconic|goated|goat|slay|slayed|ate|immaculate|unbeatable;
invincible|unstoppable|untouchable|superhuman|godlike|powerful|mighty|strong|stronger|indestructible`,
`proud|pride;
relaxed|relaxing|chill|chilled|chillin|chilling|mellow|laidback|unwind|unwound;
calm|serene|serenity|tranquil|tranquility;
accomplished|accomplishment|achieved|successful|success|triumphant|victorious|victory|winning|winner|champion;
rested|refreshed|recharged|restored|rejuvenated|energized|reenergized|revitalized|renewed;
peaceful|peace|zen|centered|centred|grounded|balanced;
confident|assured|certain|sure|secure|self assured;
light|lighter|weightless|floating|buoyant|airy|unburdened;
satisfied|satisfaction|fulfilled|fulfillment|content|contented|contentment;
excited|thrilled|pumped|hyped|stoked|elated|ecstatic|euphoric|overjoyed|giddy|jubilant;
grateful|thankful|blessed|appreciative;
joyful|joy|joyous|cheerful|merry|jolly|delighted|glee|gleeful|bubbly;
carefree|careless|stressless|stressfree|worryfree|untroubled|unbothered|unworried|easygoing|breezy;
amazing|awesome|great|fantastic|wonderful|incredible|good|fine|okay|ok|alright|nice|better|best;
comfortable|comfy|cozy|cosy|snug|warm;
safe|sheltered|protected;
loved|cherished|appreciated|valued|seen|heard;
hopeful|hope|optimistic|positive;
energetic|lively|vibrant|bouncy|peppy;
motivated|inspired|driven|determined|ambitious|ready|prepared|eager;
capable|competent|able|smart|clever|knowledgeable;
validated|vindicated|justified|worthy|deserving;
fearless|brave|bold|courageous|daring;
whole|complete|healed|healthy|well|recovered`,
`blissful|bliss|heavenly|paradise|nirvana|rapture;
weightless|untethered|unchained|unshackled|released|emancipated|unleashed|unburdened;
lighthearted|playful|silly|goofy|carefree;
vacationing|holiday|holidaying|festive|celebratory|celebrating|partying|party;
sunny|radiant|glowing|shining|sparkly|sparkling|dazzling|luminous|bright|brilliant;
fluffy|soft|squishy|cuddly;
breezy|airy|floaty|floaty;
balanced|steady|stable|even|level;
present|mindful|aware|awake|clearheaded|clear|focused|sharp|lucid;
humble|grounded|modest;
mature|grown|wiser|wise|enlightened|knowledgeable|learned;
connected|together|social|reunited;
unhurried|leisurely|idle|lazy|slothful|vegging|loafing;
spontaneous|adventurous|wild|free spirited|curious;
creative|artsy|imaginative;
sated|full|nourished|fed;
cleansed|clean|fresh|crisp|new|renewed|reset|rebooted;
settled|resolved|closure|finality;
optimistic|bright|promising;
untroubled|unfazed|stoic|composed|collected|poised|cool|unflappable;
fulfilled|purposeful|meaningful;
appreciated|acknowledged|recognized|rewarded;
spoiled|pampered|treated|indulged;
gleeful|merry|chipper|perky;
smug|cocky|superior|unmatched;
awesome|epic|legendary|mythic;
glorious|majestic|regal|royal|queenly|kingly`,
`effervescent;ebullient;exuberant;exhilarated;rhapsodic;halcyon;beatific;sanguine;insouciant;nonchalant;blithe;serendipitous;resplendent;transcendent;ethereal;incandescent;jubilant;mellifluous;elysian;felicitous;placid;languid;unflustered;imperturbable;equanimous;unencumbered;untrammeled;reinvigorated;redeemed;absolved;exonerated;rejuvenescent;buoyed;galvanized;emboldened;invigorated;vivacious;ecstatically;euphoria;catharsis;cathartic;relish;hygge;cozily;snowy;wintry;frosty;sparkly;toasty;marshmallowy;cocoa;fireside;snowglobe;snowflake;sledding;hibernating;melty;gooey;thawed;defrosted;unfrozen;slushy;hiberated`,
`ikigai;gezellig;gemutlich;gemuetlich;sobremesa;lagom;sisu;jayus;meraki;saudade;wabi;wabisabi;kintsugi;mudita;eudaimonia;ataraxia;apricity;fernweh;wanderlust;komorebi;heimat;shinrin;petrichor;hiraeth;hyggelig;koselig;mangata;sukha;ananda;shanti;sukoon;aman;salaam;shalom;pura;vida;hakuna;matata;fiero;elevation;flow;flourishing;thriving;blooming;blossoming;sprouting;growing;evolving;transformed;metamorphosed;butterfly;phoenix;risen;soaring;flying;ascended;stellar;cosmic;astronomical;galactic;celestial;starry;supernova;lunar;solar;aurora`
 ]},

{id:"e1", q:"A song or artist that gets you through a study session.", h:"Lyrics or no lyrics.",
 t:["Press play on {a} and keep going.","Some days the only plan is {a} and one more page.","Turn up {a}. You're almost there."],
 a:[
`lofi|lofi beats|lofi hip hop|lofi girl|lofi music|chillhop|study beats|lofi playlist;
taylor swift|taylor|swift|tswift|taylors version;
classical|classical music|orchestra|orchestral|symphony;
piano|piano music|instrumental|instrumentals|instrumental music`,
`silence|nothing|no music|quiet|the sound of my own tears|my thoughts|my own voice;
white noise|brown noise|pink noise|green noise|rain sounds|rain|thunderstorm sounds|ocean sounds|waves|nature sounds|fan noise|fan|cafe sounds|coffee shop ambience|fireplace sounds|crackling fire;
my professor|lecture recordings|the lecture|my lectures|lectures at 2x|youtube lectures|the textbook audiobook;
binaural beats|40hz|40 hz|alpha waves|theta waves|brain waves|focus frequencies|432 hz|528 hz|solfeggio;
the jeopardy theme|jeopardy music|elevator music|waiting music|hold music;
mission impossible theme|eye of the tiger|rocky theme|gonna fly now|final countdown|we will rock you|we are the champions|survivor;
my own playlist|my playlist|on shuffle|shuffle|spotify|spotify daily mix|daylist|my daylist|spotify radio|apple music|discover weekly|release radar|liked songs|my liked songs`,
`jazz|smooth jazz|cafe jazz|coffee shop jazz|jazz piano|bossa nova;
ambient|ambient music|brian eno|drone|space ambient;
video game music|game soundtracks|minecraft music|c418|minecraft|zelda music|zelda|stardew valley music|stardew|animal crossing music|animal crossing|pokemon music|mario music|undertale|toby fox|celeste|hollow knight|genshin|genshin music|skyrim|halo|nintendo music|8 bit;
film score|movie soundtracks|soundtracks|hans zimmer|interstellar|inception|john williams|star wars|harry potter soundtrack|ludovico einaudi|einaudi|max richter|yiruma|river flows in you|joe hisaishi|ghibli music|studio ghibli|ramin djawadi|game of thrones|ennio morricone|howard shore|lord of the rings|ludwig goransson|nicholas britell|succession theme|justin hurwitz|la la land;
drake|drizzy|the weeknd|weeknd|abel|justin bieber|bieber|shawn mendes|tate mcrae|daniel caesar|alessia cara|carly rae jepsen|avril lavigne|celine dion|michael buble|buble|nelly furtado|the tragically hip|tragically hip|arkells|metric|grimes|kaytranada|partynextdoor|nav|majid jordan|charlotte day wilson|ruth b|loud luxury|deadmau5|lights|feist|tegan and sara|joni mitchell|neil young|leonard cohen|rush|arcade fire|broken social scene|badbadnotgood|caribou;
sza|frank ocean|kendrick lamar|kendrick|j cole|tyler the creator|tyler|travis scott|kanye|kanye west|ye|playboi carti|carti|lil uzi vert|21 savage|future|metro boomin|lil baby|gunna|young thug|post malone|mac miller|childish gambino|kid cudi|cudi|chance the rapper|eminem|jay z|nas|lauryn hill|outkast|a tribe called quest|mf doom|madvillain|nujabes|j dilla;
beyonce|rihanna|ariana grande|ariana|dua lipa|billie eilish|billie|olivia rodrigo|olivia|sabrina carpenter|sabrina|chappell roan|gracie abrams|conan gray|lana del rey|lana|lorde|harry styles|one direction|1d|ed sheeran|adele|sam smith|bruno mars|lady gaga|gaga|katy perry|miley cyrus|selena gomez|doja cat|doja|nicki minaj|cardi b|megan thee stallion|charli xcx|charli|troye sivan|benson boone|noah kahan|zach bryan|morgan wallen|luke combs|kacey musgraves|dolly parton|shania twain|hozier|mitski|phoebe bridgers|boygenius|clairo|beabadoobee|laufey|reneé rapp|renee rapp|tv girl|the 1975|arctic monkeys|the neighbourhood|the neighborhood|cigarettes after sex|mac demarco|rex orange county|steve lacy|daniel caesar|giveon|brent faiyaz|summer walker|jhene aiko|h e r|her|kehlani|victoria monet|tems|wizkid|burna boy|rema|ayra starr|davido|asake|tyla;
bts|blackpink|kpop|k pop|newjeans|new jeans|twice|stray kids|seventeen|txt|enhypen|ateez|le sserafim|aespa|ive|itzy|red velvet|exo|bigbang|iu|jungkook|jimin|v|taehyung|suga|agust d|rm|jin|j hope|rose|lisa|jennie|jisoo|katseye|illit|babymonster|nct|nct 127|nct dream|g idle|gidle|mamamoo|shinee|super junior|got7|monsta x;
bad bunny|benito|karol g|j balvin|rosalia|shakira|peso pluma|feid|rauw alejandro|daddy yankee|ozuna|maluma|selena quintanilla|grupo frontera;
arijit singh|arijit|ar rahman|a r rahman|shreya ghoshal|diljit dosanjh|diljit|ap dhillon|karan aujla|sidhu moose wala|sidhu|badshah|atif aslam|nusrat fateh ali khan|nusrat|lata mangeshkar|kishore kumar|bollywood|bollywood music|punjabi music|desi music|anirudh|sid sriram|coke studio|kumar sanu|pritam;
the beatles|beatles|queen|abba|fleetwood mac|the rolling stones|led zeppelin|pink floyd|the eagles|elton john|david bowie|bowie|prince|michael jackson|mj|whitney houston|stevie wonder|marvin gaye|frank sinatra|elvis|bob dylan|bob marley|the beach boys|simon and garfunkel|billy joel|bruce springsteen|ac dc|acdc|guns n roses|nirvana|radiohead|coldplay|oasis|the killers|red hot chili peppers|rhcp|green day|blink 182|linkin park|my chemical romance|mcr|paramore|fall out boy|panic at the disco|twenty one pilots|imagine dragons|the strokes|tame impala|glass animals|vampire weekend|bon iver|fleet foxes|the lumineers|mumford and sons|of monsters and men|florence and the machine|florence|cage the elephant|foo fighters|metallica|daft punk|gorillaz|muse|u2|the cure|the smiths|joy division|new order|depeche mode|talking heads|the police|sting|phil collins|genesis|toto|journey|bon jovi|hall and oates|earth wind and fire|the weather girls|bee gees|kiss|black sabbath|iron maiden|system of a down|slipknot|deftones;
mozart|beethoven|bach|chopin|debussy|vivaldi|four seasons|tchaikovsky|liszt|rachmaninoff|satie|gymnopedie|schubert|brahms|handel|haydn|mendelssohn|dvorak|grieg|ravel|clair de lune|moonlight sonata|canon in d|pachelbel|fur elise|the nutcracker|swan lake;
edm|house|house music|deep house|techno|trance|drum and bass|dnb|dubstep|electronic|electronic music|synthwave|retrowave|vaporwave|chillwave|future bass|lofi house|avicii|calvin harris|martin garrix|zedd|kygo|odesza|porter robinson|madeon|illenium|flume|skrillex|fred again|fred again..|disclosure|rufus du sol|bonobo|tycho|four tet|jamie xx|swedish house mafia|the chainsmokers|marshmello|alan walker|aphex twin|boards of canada;
anime music|anime openings|anime soundtracks|anime ost|attack on titan|naruto|demon slayer|jujutsu kaisen|your name|radwimps|yoasobi|ado|lisa the singer|aimer|kenshi yonezu|fujii kaze|joji|city pop|mariya takeuchi|plastic love|j pop|jpop|j rock;
k drama ost|kdrama ost|cdrama ost|c pop|cpop|jay chou|faye wong|teresa teng|mandopop|cantopop;
musicals|broadway|hamilton|hamilton the musical|wicked|les mis|les miserables|phantom of the opera|dear evan hansen|six|six the musical|mamma mia|abba gold|hadestown|heathers|be more chill|in the heights|lin manuel miranda|the greatest showman|la la land|disney songs|disney|encanto|frozen|moana|tangled|lion king|disney soundtracks|pixar soundtracks;
country|country music|folk|indie folk|indie|indie pop|bedroom pop|alt rock|rock|classic rock|punk|pop punk|emo|metal|heavy metal|grunge|shoegaze|dream pop|soul|neo soul|motown|r&b|rnb|rap|hip hop|trap|drill|afrobeats|amapiano|reggaeton|salsa|bachata|cumbia|latin|reggae|dancehall|soca|gospel|worship music|hillsong|christian music|hymns|nasheeds|nasheed|kirtan|bhajans|qawwali|carnatic|hindustani classical|sufi|kpop instrumentals|opera|choir|choral|acapella|a cappella|barbershop|blues|delta blues|ska|funk|disco|gregorian chant|baroque|romantic era|minimalism|philip glass|steve reich;
christmas music|holiday music|christmas songs|mariah carey|all i want for christmas|michael buble christmas|vince guaraldi|charlie brown christmas|jingle bells|last christmas|wham|winter playlist`,
`dark academia playlist|dark academia|light academia|cottagecore playlist|cozy playlist|cozy autumn|cozy winter|study playlist on youtube|pinterest playlist|youtube playlists|aesthetic playlists|the coffee shop playlist|rainy day jazz;
harry potter ambience|hogwarts library ambience|hogwarts ambience|ambience videos|ambience|asmr rooms|cozy ambience|library ambience|rainy cafe ambience|medieval tavern music|tavern music|bardcore|medieval music|celtic music|irish folk|sea shanties|wellerman|viking music|nordic folk|wardruna;
lofi versions of songs|lofi covers|piano covers|string covers|vitamin string quartet|the piano guys|2cellos|lindsey stirling|rockabye baby|instrumental covers|8d audio|slowed and reverb|slowed reverb|sped up songs|nightcore;
the 1975 late night|keshi|joji|niki|rich brian|88rising|wave to earth|hyukoh|jannabi|dean|crush|heize|colde|offonoff|zion t|epik high|tablo;
mac miller circles|frank ocean blonde|blonde|channel orange|kendrick good kid maad city|to pimp a butterfly|sza sos|sos|ctrl|igor|flower boy|call me if you get lost|the weeknd after hours|after hours|starboy|house of balloons|trilogy|beauty behind the madness|views|take care|nothing was the same|if youre reading this its too late|for all the dogs|scorpion|certified lover boy|honestly nevermind|her loss|so far gone|thank me later|1989|folklore|evermore|red|midnights|reputation|lover|fearless|speak now|the tortured poets department|ttpd|the life of a showgirl|showgirl|guts|sour|short n sweet|emails i cant send|hit me hard and soft|happier than ever|when we all fall asleep where do we go|positions|sweetener|thank u next|future nostalgia|radical optimism|renaissance|lemonade|cowboy carter|anti|melodrama|pure heroine|solar power|virgin|born to die|ultraviolence|norman fucking rockwell|nfr|harrys house|fine line|abbey road|rumours|dark side of the moon|wish you were here|ok computer|in rainbows|kid a|currents|lonerism|an awesome wave|how big how blue how beautiful|parachutes|a rush of blood to the head|viva la vida|ghost stories|am|favourite worst nightmare|whatever people say i am thats what im not|the car|tranquility base|sundays at the oc;
youtube ambience channels|the ambient zone|lofi girl channel|chillhop music|chilledcow|college music|the jazz hop cafe|steezyasfuck|lofi fruits|dreamy|tunnel music|cafe music bgm channel|mellow beat seeker;
synthwave on youtube|outrun|the midnight|carpenter brut|kavinsky|nightcall|perturbator|gunship|fm 84|timecop1983;
bossa nova covers|antonio carlos jobim|joao gilberto|astrud gilberto|stan getz|the girl from ipanema|cafe bossa;
jazz greats|miles davis|kind of blue|john coltrane|a love supreme|bill evans|thelonious monk|duke ellington|ella fitzgerald|billie holiday|nina simone|chet baker|dave brubeck|take five|herbie hancock|oscar peterson|charles mingus|louis armstrong|count basie|nat king cole|sarah vaughan|norah jones|diana krall|esperanza spalding|robert glasper|kamasi washington|snarky puppy|jacob collier|vulfpeck|cory wong;
lo fi piano covers of anime|anime lofi|anime piano|animenz|theishter|kyle landry|kyle landry piano|sheet music boss|rousseau|patrik pietschmann;
soft piano by yiruma|kiss the rain|river flows in you by yiruma|nuvole bianche|experience by einaudi|una mattina|divenire|comptine dune autre ete|amelie soundtrack|yann tiersen|o dulcemente|on the nature of daylight|max richter sleep|sleep album|nils frahm|olafur arnalds|olafur|johann johannsson|hania rani|jon hopkins|keaton henson|balmorhea|explosions in the sky|sigur ros|mogwai|god is an astronaut|this will destroy you|post rock|math rock|tera melos|covet|chon|polyphia|toe|american football|midwest emo;
the album i always study to|one album on repeat|same song on repeat|one song on loop|one song for 4 hours|10 hour version|10 hour loop|1 hour loop|songs on loop;
my friends band|my friends music|local bands|hamilton bands|hamilton music|supercrawl lineup|campus band|mac band|msu band|mac marching band|mac choir|mac jazz band|mcmaster jazz;
cfmu|cfmu 93.3|93.3|campus radio|cbc music|cbc radio 2|radio|the radio|chfi|virgin radio|kiss 92.5|z103.5|1050 chum|102.1 the edge|the edge|indie88|indie 88|jack fm;
podcasts|podcast|audiobook|audiobooks|true crime|true crime podcasts|ted talks|ted|philosophy lectures|lex fridman|joe rogan|call her daddy|smartless|armchair expert|the daily|radiolab|serial|this american life|freakonomics|hidden brain|stuff you should know|sysk|99 percent invisible|crime junkie|the rest is history|the rest is politics|my favorite murder|conan obrien needs a friend|las culturistas|dumb blonde|the mel robbins podcast|mel robbins|huberman lab|huberman|diary of a ceo;
asmr|asmr videos|asmr typing|keyboard sounds|typing asmr|pencil writing sounds|page turning sounds|tapping asmr|whisper asmr|gibi asmr|asmr darling|asmr glow;
gregorian chants|monks chanting|tibetan singing bowls|singing bowls|sound bath|meditation music|crystal bowls|om chanting|handpan|hang drum|kalimba music|flute music|native american flute|shakuhachi|guzheng|erhu|pipa|koto|sitar|ravi shankar|tabla|oud|santoor|veena|duduk|didgeridoo`,
`the windows startup sound|windows xp sounds|the wii shop channel|wii shop music|wii music|mii channel music|mii channel|the nintendo ds menu|ds menu|3ds music|nintendo eshop music|wii sports theme|the gamecube intro;
club penguin music|club penguin|webkinz music|webkinz|poptropica music|neopets|habbo|moshi monsters|fanfare|old flash games music|the coffee shop club penguin;
the mcmaster fight song|mac fight song|marauders fight song|o canada|the national anthem|my school anthem|my high school anthem;
cheese touch|the 1 hour minecraft sweden loop|sweden by c418|subwoofer lullaby|wet hands|minecraft mice on venus|mice on venus|aria math|haggstrom|danny|living mice;
stardew valley spring theme|stardew spring|cloud country|spring it's a big world outside|summer nature's crescendo|fall the smell of mushroom;
animal crossing hourly music|ac 5pm|5pm animal crossing|animal crossing 5pm|animal crossing 7pm|kk slider|k k slider|kk bossa|bubblegum kk;
zelda lost woods|lost woods|great fairy fountain|kakariko village|gerudo valley|song of storms|zeldas lullaby|breath of the wild piano|tears of the kingdom|hyrule field;
undertale fallen down|megalovania|hopes and dreams|his theme|snowdin|snowdin town;
pokemon center music|pokecenter|lavender town|route 1|pallet town;
halo theme|halo 3 ost|skyrim far horizons|skyrim ambience|elder scrolls|witcher 3 soundtrack|witcher|toss a coin to your witcher|red dead redemption soundtrack|rdr2|journey soundtrack|austin wintory|ori and the blind forest|gareth coker|outer wilds|travelers|ffxiv|final fantasy|nobuo uematsu|final fantasy x|to zanarkand|kingdom hearts|dearly beloved|yoko shimomura|persona 5|persona|shoji meguro|nier automata|keiichi okabe|weight of the world|cuphead|celeste lena raine|lena raine|resurrections|hollow knight greenpath|christopher larkin|hades|darren korb|bastion|transistor|terraria|tetris theme|korobeiniki|sonic green hill zone|green hill zone|mario kart wii coconut mall|coconut mall|super mario galaxy|gusty garden galaxy|mario 64|dire dire docks|bob omb battlefield|donkey kong country|aquatic ambience|gangplank galleon|chrono trigger|corridors of time|secret of mana|earthbound|mother 3|portal|still alive|want you gone|half life|doom eternal|mick gordon|rip and tear|fortnite lobby music|fortnite|among us music|geometry dash|stereo madness|osu|rhythm games|beat saber|guitar hero;
the sound of the hsr bus|construction noise|my roommate snoring|my neighbours arguing|the hum of my fridge|fridge hum|air conditioner|radiator noise|the radiator|my cat purring|cat purring|purring|dog snoring|my dog snoring;
the thode hum|the mills hum|library silence|the quiet of the library|library sounds|keyboard clacking in thode|other people typing|people studying|study ambience in the library;
mamma mia on repeat|the abba gold album|hamilton soundtrack on repeat|the full hamilton soundtrack|wicked soundtrack|the greatest showman soundtrack|high school musical|camp rock|hannah montana|jonas brothers|disney channel songs|cheetah girls|lemonade mouth|teen beach movie|descendants|kidz bop|barney|wiggles|the wiggles|baby shark|bluey theme|cocomelon;
my moms playlist|my dads music|my dads playlist|my parents music|old bollywood songs|old songs my mom listens to|music from my childhood|childhood songs|songs from home|music from home|folk songs from home|my culture's music|lullabies|my grandmas songs;
gregorian chant remixes|monk mode|lofi monks;
the grinch soundtrack|you're a mean one mr grinch|home alone soundtrack|somewhere in my memory|polar express|believe josh groban|trans siberian orchestra|carol of the bells|nutcracker suite|dance of the sugar plum fairy|silent night|little drummer boy|pentatonix|pentatonix christmas;
pavarotti|andrea bocelli|bocelli|la boheme|carmen|the magic flute|queen of the night|nessun dorma|ave maria|o mio babbino caro|figaro|the barber of seville|wagner|ride of the valkyries|holst|the planets|jupiter|mars bringer of war|mahler|bruckner|sibelius|finlandia|shostakovich|prokofiev|peter and the wolf|stravinsky|rite of spring|copland|gershwin|rhapsody in blue|bernstein|west side story|barber|adagio for strings|arvo part|spiegel im spiegel|gorecki|john cage|4 33|43344;
gamelan|throat singing|tuvan throat singing|inuit throat singing|tanya tagaq|the halluci nation|a tribe called red|jeremy dutcher|buffy sainte marie|susan aglukark|powwow music|drumming|hand drumming|taiko|african drumming|djembe|steel drums|steel pan|calypso|mbira|kora|toumani diabate|ali farka toure|tinariwen|fado|amalia rodrigues|flamenco|paco de lucia|tango|astor piazzolla|klezmer|polka|yodeling|mongolian folk|the hu|bulgarian choir|sami joik|joik`,
`my own humming|me humming|me singing|my own singing|singing to myself|i sing my notes|my notes as a song;
the sound of my professor saying this will be on the exam|this will be on the exam;
my roommates guitar practice|my roommate practicing piano|someone practicing piano down the hall|piano in musc|the piano in the student centre|the piano in thode;
church bells|the bells|carillon|wind chimes|chimes|birdsong|birds chirping|crickets|frogs|loons|loon calls|whale songs|whale sounds|wolf howls|rain on a tent|rain on a tin roof|creek sounds|stream|brook|waterfall sounds|campfire crackle|snow falling sounds|blizzard sounds|winter wind|howling wind|arctic wind|train sounds|train journey ambience|airplane cabin noise|plane noise|car ride sounds|bus sounds|subway sounds|city sounds|city rain|tokyo rain|new york ambience|paris cafe|london rain|street sounds|market sounds|kitchen sounds|cooking sounds|laundromat sounds|washing machine|dryer sounds|vacuum sounds|hair dryer sounds|heartbeat sounds|womb sounds|underwater sounds|submarine sounds|spaceship ambience|star trek engine|enterprise engine hum|millennium falcon|nostromo|alien isolation;
arkells knocking at the door|arkells leather jacket|arkells and hamilton|knocking at the door|leather jacket|a little rain|relentless|years in the making|the tragically hip bobcaygeon|bobcaygeon|ahead by a century|wheat kings|courage|new orleans is sinking|grace too|the national|bon iver holocene|holocene|skinny love|re stacks;
supercrawl|hamilton supercrawl|the casbah|casbah|mills hardware|hamilton concerts|first ontario concert hall|first ontario centre|tim hortons field concert|bridgeworks;
the canadian national anthem in french|o canada in french|la marseillaise|hockey night in canada theme|the hockey theme|the leafs goal horn|the raptors theme|we the north|the tim hortons jingle|tim hortons commercials|heritage minutes|the log driver's waltz|log drivers waltz|the hinterland whos who|hinterland who's who|degrassi theme|fresh prince theme|friends theme|ill be there for you|the office theme|suits theme|the succession theme|game of thrones theme|stranger things theme|the white lotus theme|severance theme|the bear soundtrack|euphoria soundtrack|labrinth|bridgerton string covers|bridgerton quartet|duomo|max richter bridgerton|vitamin string quartet bridgerton`
 ]},

{id:"e2", q:"One piece of advice for a first-year during exam season.", h:"What you wish someone told you.",
 t:["Advice for the road: {a}.","Remember: {a}.","Note to self, and to you: {a}."],
 a:[
`sleep|get sleep|get enough sleep|sleep well|go to bed|prioritize sleep|sleep is important|dont skip sleep|get 8 hours|8 hours of sleep|rest;
start early|start studying early|dont procrastinate|dont leave it to the last minute|dont wait|plan ahead|start ahead|study early|begin early|start now;
study|study hard|study a lot|actually study|work hard|do the work|put in the work;
breathe|relax|dont stress|dont panic|stay calm|chill|calm down|dont worry|its going to be okay|it will be okay|youll be fine|you will be fine`,
`drop out|give up|run|run away|switch majors|change programs|transfer|leave|quit;
just pass|cs get degrees|c s get degrees|cs get degrees;|50 is a pass|50 percent is a pass|ps get degrees|d for diploma|d for degree;
dont|dont do it|good luck|pray|good luck lol|youre doomed|abandon hope|its over|lol;
cram|cram everything|all nighters|pull all nighters|caffeine|drink coffee|energy drinks|red bull;
dont trust the bell curve|theres no curve|the curve wont save you|dont count on the curve;
ask chatgpt|use ai|use chatgpt|chatgpt;
dont take 8 30s|no 8 30s|avoid 8 30 classes|never take 8 30s|8 30s are a trap|avoid 8ams|no 8 am classes`,
`office hours|go to office hours|use office hours|visit office hours|ta office hours|talk to your ta|talk to your professor|talk to your prof|email your professor|email your prof|email your ta|ask your ta;
eat|eat breakfast|eat well|eat real food|dont skip meals|eat something|eat properly|eat healthy|nourish yourself|eat vegetables|eat your veggies;
drink water|hydrate|stay hydrated|water;
take breaks|take regular breaks|breaks are important|rest is productive|dont burn out|avoid burnout|pace yourself|balance|find balance|work life balance;
past exams|do past exams|practice exams|do practice exams|do old exams|do practice problems|practice|practice questions|do the practice questions|test yourself|quiz yourself|active recall;
ask for help|its okay to ask for help|reach out|ask questions|dont be afraid to ask|ask for support|ask a friend|lean on friends|talk to someone;
make a schedule|make a study schedule|plan your studying|study plan|use a planner|make a plan|write a to do list|calendar|use a calendar|google calendar|time management|manage your time;
go to class|go to lectures|attend class|attend lectures|show up|dont skip class|dont skip lectures|go to tutorials|attend tutorials|go to every class|go to lecture;
you got this|you can do it|believe in yourself|trust yourself|have confidence|be confident|youre smarter than you think|you belong here|you are capable|youre capable;
your grades dont define you|grades arent everything|a bad grade isnt the end|its just one exam|one exam doesnt define you|you are not your grades|gpa isnt everything|marks dont matter that much|first year doesnt count|its first year;
be kind to yourself|self compassion|be gentle with yourself|go easy on yourself|forgive yourself|dont be hard on yourself|give yourself grace|grace;
exercise|move your body|go to the gym|go for a walk|walk|go for walks|get outside|fresh air|go outside|stretch;
dont compare yourself|stop comparing|everyone is struggling|everyone feels lost|everyone is in the same boat|youre not alone|you are not alone|comparison is the thief of joy|run your own race;
put your phone away|phone away|no phone|turn off your phone|delete tiktok|delete instagram|limit social media|log off|stay off your phone;
find a study group|study with friends|study buddy|make friends in class|study groups|join a study group|find your people|make friends;
read the syllabus|read the course outline|check the outline|know the exam format|know what is on the exam|ask what is on the exam|check the weighting|know your weighting;
know your exam room|find your exam room|check your exam room|check the exam location|find your exam location early|know where your exam is|visit the exam room|scout the exam room;
check the exam schedule|check mosaic|check your exam schedule|know your exam dates|double check exam times|check the time|dont miss your exam|set alarms|set multiple alarms|set 3 alarms;
bring your student card|bring your id|bring your mcmaster id|bring your student id|bring pencils|bring a calculator|bring a casio|bring an approved calculator|casio fx 991|bring a pen|bring water|pack the night before|pack your bag;
dont pull all nighters|no all nighters|sleep before exams|sleep the night before|dont cram the night before|rest the night before;
quality over quantity|study smarter not harder|work smarter|efficient studying|focus on understanding|understand dont memorize|understand the concepts|learn the concepts;
do your readings|keep up with readings|stay on top of things|keep up|dont fall behind|stay organized|stay ahead|review every week|review notes weekly|review after class;
take care of yourself|self care|prioritize your health|health first|mental health first|mental health matters|your health matters most;
call home|call your parents|call your family|talk to your family|stay in touch with home;
have fun|enjoy it|enjoy first year|make memories|live a little|go out|have a social life|enjoy university|enjoy the experience|its supposed to be fun;
start assignments early|start your assignments early|dont leave assignments|do assignments on time|submit on time|hand things in on time|check due dates|check deadlines;
it gets better|it gets easier|this will pass|this too shall pass|its temporary|one day at a time|one step at a time|take it one day at a time|take it one exam at a time|one exam at a time;
youre doing great|proud of you|keep going|dont give up|keep pushing|keep at it|persevere|push through|stay strong|stay positive|hang in there`,
`use the student success centre|ssc|student success centre|academic skills workshops|ssc workshops|academic coaching|learning strategist|study skills workshop;
use the student wellness centre|go to the swc|swc|student wellness centre|wellness centre|counselling|see a counsellor|book a counselling appointment|therapy|get therapy|talk to a therapist|mental health services;
use sas|student accessibility services|get accommodations|register with sas|accommodations|ask for accommodations|youre allowed accommodations;
use your msaf|msaf|mcmaster student absence form|use an msaf|file an msaf|submit an msaf|absence form|its okay to use an msaf|defer if you need to|exam deferral|deferral|defer an exam|petition|petition if you need to;
know your drop deadline|check the drop deadline|drop a course if you need to|drop the course|its okay to drop a course|withdraw from a course|late withdrawal|drop date|drop deadline;
talk to an academic advisor|academic advisor|advisor|see an advisor|faculty office|go to your faculty office|talk to your faculty;
join a club|join clubs|get involved|join an msu club|clubs|msu clubs|intramurals|join intramurals|play intramurals;
archway|use your archway mentor|talk to your archway mentor|archway mentors|find a mentor|mentor|talk to upper years|ask upper years|upper years|ask an upper year|ask older students;
book a study room early|book study rooms|study rooms|book a room in thode|book a room in mills|reserve a study room;
study in thode|thode|study in mills|mills|go to the library|study at the library|library|innis|health sciences library|find your study spot|find a good study spot|change your study spot;
use the exam bank|exam bank|mes exam bank|past exam bank|msu exam bank|faculty society exam bank;
go to review sessions|review sessions|exam jams|exam jam|msu exam jam|exam review|exam review sessions;
use the food collective centre|food collective centre|fcc|food bank|mac bread bin|bread bin|free food|free bread|eat at centro|dont live on tims|stop eating tim hortons|dont just eat timbits|meal plan|use your meal plan|dont waste your meal plan|use your meal plan dollars|eat a vegetable;
use avenue to learn|check avenue|check a2l|avenue|a2l|check your email|check your mac email|read your emails|check announcements;
write down your exam schedule|put exams in your calendar|exam calendar|count backwards from exams|reverse plan|plan backwards;
the pulse|go to the pulse|use the pulse|work out at the pulse|swim at the pool|use the gym|go to the gym on campus;
walk to cootes|go to cootes|cootes paradise|walk in cootes|nature walk|walk the trails|walk around campus|explore campus|go to the arts quad;
make one friend in each class|make friends in every class|sit with someone new|talk to the person beside you|talk to classmates|get a class contact|get someones number|join the class discord|join the course discord|group chat|join the group chat;
the geese are not your friends|watch out for the geese|avoid the geese|respect the geese|dont mess with the geese|beware of the geese|stay away from the geese;
bring layers|wear layers|dress warm|wear boots|winter boots|bring a jacket|exam rooms are cold|exam rooms are hot|burridge gym is cold|bring a sweater;
arrive early to your exam|get there early|be early|show up early|leave early|be on time|plan your bus route|check the hsr|the bus will be late|buses are late in the snow|give yourself extra time;
read the whole exam first|read every question|read the questions carefully|read instructions|skim the exam first|do the easy questions first|answer what you know first|dont spend too long on one question|budget your time|watch the clock|time management on the exam|show your work|write something|never leave anything blank|dont leave blanks|guess|always guess;
dont study the morning of|light review only|dont learn new things the night before|review your cheat sheet|review your formula sheet|make an aid sheet|make a good cheat sheet;
dont talk about the exam after|dont compare answers|dont discuss answers after|let it go after|move on after each exam|forget it after|celebrate each exam|treat yourself after each exam|reward yourself;
sleep is better than studying|sleep over cramming|a nap is better than an all nighter|naps are underrated|power naps;
dont buy the textbook|check the library for the textbook|textbook reserves|course reserves|used textbooks|buy used|share textbooks|older editions are fine`,
`find your own method|everyone studies differently|figure out how you learn|learn how you learn|try different study methods|experiment|what works for others might not work for you;
treat it like a job|9 to 5|study 9 to 5|study like its a job|schedule study like a class|routine|build a routine|consistency|consistency is key|show up every day|little by little|small steps;
your first exam is a learning experience|learn from your mistakes|mistakes are okay|failure is part of learning|failing is okay|its okay to fail|you can retake|courses can be retaken|you can always redo it|theres always summer school|summer courses|there are other paths|there is more than one path;
remember why you came|remember your why|your why|keep your goals in mind|think long term|big picture|zoom out|in 5 years it wont matter|it wont matter in a year|nobody will ask your first year gpa|no one cares about first year;
sit in the front|sit at the front|front row|sit near the front|front of the class;
learn to say no|say no|its okay to say no|set boundaries|boundaries|protect your time|protect your peace;
wash your sheets|do your laundry|clean your room|tidy your space|organize your desk|clear your desk|clean space clear mind;
get a flu shot|wash your hands|take vitamins|vitamin d|dont get sick|exam season flu|rest if youre sick|stay home if sick;
learn to cook|meal prep|cook on sundays|batch cook|bring snacks|pack snacks|pack a lunch|bring a lunch|bring a water bottle|bring a reusable bottle;
write it by hand|handwrite your notes|pen and paper|use paper|print your notes;
teach it to someone|explain to a friend|teach a friend|if you can teach it you know it;
dont be afraid of your professors|professors are people|profs are human|profs want you to succeed|your profs want to help|tas want to help|tas are nice|ask the ta;
dont skip tutorials|tutorials matter|labs matter|participation marks count|bonus marks|do the bonus|do the extra credit;
read reddit for course tips|r mcmaster|check the subreddit|ask on reddit|ratemyprof|rate my prof|rmp|ratemyprofessors|check rate my prof;
volunteer|get a campus job|work study|work on campus|join efrt|join swhat|join welcome week|be a rep|become a rep|apply to be a welcome week rep;
stay in on thursdays|skip the phoenix before exams|1280 can wait|twelveighty after exams|party after exams not before|celebrate after;
go home for a weekend|visit home|home cooked meal|go home if you can|call grandma;
keep a notebook of wins|write down small wins|celebrate small wins|track your progress|progress not perfection|done is better than perfect|perfect is the enemy of good|b work is good work|good enough is good enough;
notice how you feel|check in with yourself|listen to your body|feelings are valid|its okay to not be okay|its okay to cry|cry it out|let yourself feel|vent|journal|write it down;
believe in the process|trust the process|the process works|stay the course|steady wins|slow and steady wins the race|tortoise and the hare|its a marathon not a sprint|marathon not a sprint`,
`get a casio fx 991ms|the approved calculator is the casio fx 991|bring the mcmaster approved calculator|only casio fx 991ms is allowed|calculator rules|approved calculator only|buy the approved calculator early|check the calculator policy;
dont bring your phone into the exam|phones go in your bag|no smart watches|no apple watches in exams|leave your watch at home|exam rules|read the exam rules|know the academic integrity policy|academic integrity|dont cheat|cheating is not worth it|integrity matters|be honest;
exam rooms in burridge are freezing|burridge gym|ivor wynne exam room|iwc exams|bring a hoodie to burridge|bring layers to iwc|the gym exams are cold;
write your name on everything|write your student number|bubble your student number|fill in the scantron properly|scantron|bring an hb pencil|hb pencils|bring a good eraser|eraser;
sleep in your own bed|dont sleep in the library|leave the library at a reasonable time|thode is not a bedroom|go home from thode|mills closes eventually;
eat a real meal before your exam|eat breakfast on exam day|dont skip breakfast before exams|banana before exams|bananas help with nerves|eat protein before exams;
peppermint gum during exams|chew gum during the exam|same gum you studied with|peppermint helps memory;
listen to your favourite song before the exam|hype song|pump up song|power pose|power pose before exams|superman pose|wonder woman pose|positive self talk before exams;
deep breaths before you open the exam|box breathing before exams|breathe before you start|breathe during the exam|close your eyes for a minute|reset during the exam;
look at the clock less|dont look at others|ignore people who leave early|people leaving early doesnt mean anything|dont panic when people finish early;
write a brain dump at the start of the exam|write formulas first|dump formulas on the back|memory dump at the start;
use the good2talk line if you need it|good2talk|call good2talk|1 866 925 5454|988|text 988|call 988|crisis line|peer support line|msu peer support line|telus health student support|keep me safe app;
visit the therapy dogs|pet therapy|therapy dogs|go see the dogs|the dogs at mills|dog visits;
go to destress events|destress events|this event|events like this|come to this station|make a snowflake|decorate an ornament|make paper snowflakes;
first year counts towards your gpa but your gpa can rise|gpa can recover|you can raise your gpa|upward trend|grad schools like an upward trend|it is not the end of the world|not the end of the world`
 ]},

{id:"e3", q:"A small reward after finishing an assignment.", h:"Keep it small.",
 t:["Finish strong. Then {a}.","{a} is waiting on the other side.","Done is a big deal. Go get {a}."],
 a:[
`sleep|nap|a nap|power nap|go to bed|sleep in|early bedtime;
food|snack|a snack|treat|a treat|good food|eat;
netflix|an episode|one episode|watch an episode|watch a show|tv|tv show|youtube|watch youtube|watch a movie|movie;
candy|chocolate|a chocolate bar|sweets|gummies|dessert|sugar`,
`another assignment|more work|the next assignment|starting the next one|more homework|studying|the next deadline;
cry|a good cry|crying|tears of joy;
doom scroll|scroll|scrolling|tiktok|instagram|reels|social media|my phone|phone time|screen time;
nothing|the satisfaction|satisfaction|the feeling of being done|being done|freedom;
shopping|online shopping|buy something|amazon|retail therapy|shein|aritzia|sephora|lululemon|add to cart`,
`bubble tea|boba|boba tea|milk tea|bbt|chatime|gong cha|coco|the alley|tiger sugar|kung fu tea|real fruit bubble tea;
ice cream|gelato|froyo|frozen yogurt|ice cream cone|dairy queen|dq|blizzard|mcflurry|sundae|cold stone|baskin robbins|menchies|marble slab;
walk|a walk|go for a walk|walk outside|stroll|fresh air|go outside;
bath|bubble bath|long shower|hot shower|shower|face mask|skincare|sheet mask|pamper myself|spa night|self care night;
video games|gaming|play video games|game|play a game|one round|one match|switch|ps5|xbox|valorant|league|league of legends|minecraft|stardew|fortnite|mario kart|animal crossing;
coffee|a fancy coffee|latte|iced coffee|starbucks|starbucks drink|tim hortons|tims|iced capp|double double|french vanilla|a coffee;
takeout|order food|order in|uber eats|skip the dishes|skip|doordash|delivery|fast food|mcdonalds|mcflurry|fries|chicken nuggets|wendys|frosty|a&w|popeyes|taco bell|chipotle|subway|harveys|kfc;
pizza|a slice|slice of pizza|pizza night|pizza pizza|dominos|pizza hut|little caesars|gino s|ginos;
call a friend|hang out with friends|see friends|friends|facetime|text my friends|tell my friends|celebrate with friends|call my mom|call home|tell my mom;
read|read a book|a chapter|book|read for fun|new book|buy a book|indigo|chapters|bookstore;
music|listen to music|dance|dance party|sing|karaoke|blast music;
cookie|cookies|a cookie|baked goods|cupcake|brownie|cake|donut|timbits|a donut|cinnamon roll|croissant|pastry|muffin;
nap with my cat|cuddle my pet|cuddle my dog|pet my cat|play with my dog|walk my dog;
hot chocolate|hot cocoa|cocoa|a hot chocolate|tims hot chocolate;
tea|cup of tea|chai|matcha|matcha latte|london fog;
chips|bag of chips|popcorn|doritos|ketchup chips|pringles|cheetos|takis;
gym|work out|go to the gym|workout|run|go for a run|yoga|exercise;
sushi|ramen|pho|shawarma|burrito|tacos|poutine|wings|burger|butter chicken|dumplings|hot pot|korean bbq|kbbq|dim sum;
crossword|wordle|sudoku|puzzle|connections;
lie in bed|lay in bed|bed rot|do nothing|relax|chill|rest|veg out|lounge|lie on the couch|couch time;
nap in the sun|sun|sunshine|sit in the sun;
long weekend|day off|evening off|night off|a free evening|free time|time off|break|a break`,
`centro|centro dessert|centro cookies|bridges|bridges cafe|la piazza|union market|east meets west|williams|williams fresh cafe|williams cookie|pinks|campus food|food from musc|a treat from musc|starbucks in musc;
the phoenix|phoenix|a pint at the phoenix|grad club|twelveighty|1280|wings at 1280|trivia night;
westdale|walk to westdale|food in westdale|westdale village|bean bar|the bean bar|snooty fox|westdale theatre|movie at westdale|the westdale|westdale cinema;
locke street|james street north|food downtown|hess village|hamilton food|ottawa street|augusta street;
shawarma royale|osmows|osmow s|lazeez|paramount|basha|hakim|barburrito|mucho burrito|burrito boyz|hero burger|five guys|smoke s poutinerie|smokes poutine|chuck e cheese|wild wing|st louis wings|mary browns|church s|pita pit|pita land|pita lite|thai express|mr sub|freshii|tim hortons timbits|tims donut;
fried chicken|chicken wings|nashville hot chicken|korean fried chicken|kfc bucket|popcorn chicken;
a new candle|candle|light a candle|new stationery|new pens|stickers|washi tape|a new notebook|journal|sticky notes;
plant|a new plant|buy a plant|flowers|buy myself flowers|tulips|grocery store flowers;
a new episode of my show|an episode of friends|an episode of the office|one episode of anime|anime|kdrama|kdrama episode|reality tv|love island|the bachelor|survivor|drag race|rupauls drag race|the great british bake off|bake off;
a long walk to cootes|cootes|cootes paradise|walk in the snow|walk in the woods|nature walk|hike|bruce trail|dundas peak|waterfalls;
craft|crochet|knitting|painting|drawing|draw|doodle|colouring|coloring|lego|build lego|puzzle|jigsaw puzzle|diamond painting|paint by numbers;
bake|baking|bake cookies|bake something|make cookies|make brownies|make banana bread|cook a nice dinner|cook|make dinner|make a nice meal;
sleep in tomorrow|no alarm|turn off my alarm|sleep without an alarm|lie in;
tell my mom|call grandma|text my group chat|brag to my friends|post about it|post on my story|instagram story|bereal;
check it off my list|cross it off|cross it off my list|tick the box|check mark|the checklist|to do list satisfaction;
pet the therapy dogs|therapy dogs|pet a dog|dog videos|cat videos|cute animal videos;
skate|skating|go skating|sledding|snowball fight|build a snowman|play in the snow;
stretch|foam roll|massage|massage gun|stretching session;
clean my room|tidy up|organize|reset my room|make my bed|fresh sheets|clean sheets|do laundry;
plan a trip|look at flights|daydream about summer|plan summer|pinterest|browse pinterest;
listen to an album|new album|my favorite album|a podcast|podcast episode|audiobook;
journal|write|write a poem|write in my diary;
a fancy drink|mocktail|smoothie|milkshake|slushie|slurpee|frappuccino|booster juice|pop|a can of pop|coke|ginger ale|sparkling water;
a cheat meal|cheat day|big meal|a feast|all you can eat|ayce|ayce sushi|buffet|brunch|breakfast for dinner|pancakes|waffles|french toast|eggs benedict;
paint my nails|do my nails|manicure|nails|get my nails done|pedicure;
haircut|get a haircut|do my hair;
board game|card game|uno|chess|monopoly|catan|game night;
the gym sauna|sauna|hot tub|steam room;
music practice|play guitar|play piano|play an instrument;
nap in thode|nap pod|nap in mills|nap on the couch in musc|nap in the student centre`,
`a sticker for myself|gold star|give myself a gold star|sticker chart|sticker on my calendar|star on my calendar|stamp;
one m&m per paragraph|gummy bear per page|candy per page|skittle per question|one chip per problem|reward per page;
ten minutes of nothing|stare at the ceiling for ten minutes|lie on the floor|starfish on the bed|lie in the snow|snow angel;
a victory dance|victory lap|happy dance|celebration dance|fist pump|scream yay|yell im done|shout from the rooftops|ring a bell|air guitar|jump around|jump on my bed;
the slow walk home|walk home the long way|scenic route|take the long way home|bus ride home with music|window seat on the bus;
throw out my rough notes|burn my notes|rip up my notes|shred my notes|delete the draft folder|close all my tabs|close all the tabs|delete all my tabs|clear my desktop;
a new playlist|make a playlist|spotify playlist|discover weekly;
buy a lottery ticket|scratch ticket|lotto max|lottery;
treat my roommate|buy a friend a coffee|bake for my floor|share snacks|buy snacks for my study group|pay it forward|surprise a friend|send a care package;
a timbit for every page|timbits|20 pack of timbits|40 pack of timbits|a box of timbits;
bubble wrap|pop bubble wrap|play with slime|fidget toy|squishmallow|buy a squishmallow|jellycat|new plushie|buy a plushie|build a bear;
blind box|smiski|sonny angel|labubu|pop mart|gacha|gachapon|capsule toy|claw machine|arcade|play the claw machine|kinder egg|kinder surprise|lego minifigure|blind bag|trading cards|pokemon cards|buy pokemon cards|booster pack|open a pack of pokemon cards|magic the gathering|yugioh cards|sports cards|hockey cards;
fancy chocolate|lindt truffles|lindor|ferrero rocher|godiva|purdys|laura secord|rocky mountain chocolate factory|hersheys kisses|kinder bueno|dubai chocolate bar|ritter sport|toblerone|cadbury|caramilk|aero|coffee crisp|smarties|reeses cup;
a fancy cheese|charcuterie|charcuterie board|cheese board|brie|camembert|a fancy snack plate|girl dinner;
a fruit i love|mango|a whole mango|cherries|strawberries|a pomegranate|dragon fruit|lychees|a clementine|honeycrisp apple|watermelon;
a bowl of cereal at night|midnight cereal|late night snack|4th meal|second dinner;
a fancy water|sparkling water|perrier|san pellegrino|la croix|bubly|kombucha;
a nap with a face mask|eye mask|cucumber eye patches|under eye patches|hair mask|scalp massage|hot towel;
fresh air on the balcony|balcony|porch|sit outside|patio;
look at the stars|stargazing|watch the sunset|sunset|watch the sunrise|sunrise|golden hour walk;
a thrift trip|thrift store|value village|goodwill|the salvation army thrift store|vintage shopping|vintage store|antique store;
browse indigo|browse a bookstore|browse the library|library visit|borrow a book for fun|hpl|hamilton public library|westdale library;
mcmaster museum of art|art gallery|art gallery of hamilton|museum|go to a museum|royal botanical gardens|rbg|gage park greenhouse|greenhouse|conservatory;
a new game|buy a new game|steam sale|nintendo eshop|play a new game|download a game;
movie theatre|go to the movies|cineplex|landmark|westdale theatre|imax|a movie with popcorn|movie popcorn;
pet store|visit the pet store|look at puppies|pet smart|petsmart|pet valu|humane society|visit the shelter|hamilton burlington spca|cat cafe|dog park|dog cafe;
bowling|mini golf|laser tag|escape room|axe throwing|go karts|trampoline park|sky zone|skating rink|roller rink;
karaoke night|karaoke room|noraebang;
spa day|massage appointment|get a massage|sauna day|nordic spa|scandinave spa|thermal spa|float tank|float spa;
paint night|pottery class|art class|dance class|drop in class;
watch the leafs game|watch the raptors|watch the jays|watch the ticats|go to a ticats game|go to a mac game|marauders game|watch hockey|watch basketball|watch football|watch soccer|watch f1|watch a game;
buy the fancy coffee beans|fancy coffee beans|third wave coffee|pour over|espresso machine|nespresso|keurig pod|fancy tea|tea shop|davids tea|davidstea|teavana;
a candle bath|candlelit bath|bath bomb|lush|lush bath bomb|bath with music;
bake bread|sourdough|focaccia|make pizza from scratch|homemade pasta|homemade dumplings|make sushi|make ramen from scratch`,
`the smallest reward ever|a single grape|one grape|one almond|one gummy bear|one sip of coffee|a sip of water|one chip|one skittle;
a nap under my desk|nap on the library floor|nap in a study room|nap in my car|nap on the bus|bus nap|commute nap|hsr nap;
stare at the geese|watch the geese|feed the ducks|watch squirrels|bird watching|watch the birds|feed the birds;
pat myself on the back|pat on the back|high five myself|high five|fist bump|hug myself|self hug|tell myself good job|good job me|proud of me|im proud of myself|mirror pep talk;
ring the gong|hit the gong|virtual confetti|confetti|party popper|throw confetti|pop a party popper;
a nap with white noise|asmr nap|sleep story|bedtime story|calm sleep story;
learn something useless|wikipedia rabbit hole|wikipedia|youtube rabbit hole|video essay|watch a video essay|documentary|nature documentary|planet earth|david attenborough;
fall asleep to a comfort show|fall asleep to friends|fall asleep to the office|fall asleep watching tv;
draw on my hand|doodle on my notes|draw a little picture|draw a cat|draw a flower;
change into pyjamas|put on pjs|pajamas|comfy clothes|sweatpants|my favourite hoodie|fuzzy socks|slippers|fresh pajamas;
light the fireplace|fireplace|youtube fireplace|fireplace video|sit by the fire;
make a snowman|tiny snowman|mini snowman|snowman on my windowsill;
make tea in my favourite mug|favourite mug|fancy mug|tea ceremony|matcha whisking|gongfu tea;
write a thank you note to my ta|thank my ta|thank my professor|email my prof thanks|thank you email;
call my grandma and tell her|call grandma|grandmas cooking|visit grandma|go home for dinner|home cooked meal|my moms food|moms cooking|dads cooking;
buy a coffee for the next person|pay for the person behind me|pay it forward at tims|roll up the rim;
water my plants and talk to them|talk to my plants|sing to my plants|name my plant;
chocolate milk from the vending machine|vending machine|vending machine snack|vending machine treat|thode vending machine|mills vending machine;
upgrade to a large|large coffee|extra shot|whipped cream|extra whipped cream|extra boba|extra toppings|add cheese|add a cookie;
a mini road trip|drive to the lake|drive to the beach|drive to the escarpment|drive around hamilton|go to niagara|niagara falls|niagara on the lake|go to toronto|day trip|go to burlington beach|burlington pier;
a long distance call home|call my family abroad|whatsapp my family|video call my grandparents;
go to the chaplaincy for a quiet moment|chaplaincy|prayer|pray|go to the prayer room|go to the mosque|go to church|go to the temple|go to the gurdwara|thank god|gratitude prayer;
make a paper snowflake|cut out snowflakes|snowflake for my window|decorate my room|christmas lights|fairy lights|put up decorations|ornaments|decorate an ornament`
 ]},

{id:"e4", q:"A smell that makes you feel calm.", h:"Close your eyes for this one.",
 t:["Breathe in {a}. Breathe out the stress.","Calm smells like {a}.","Somewhere out there is {a}. Hold on to that."],
 a:[
`lavender|lavender oil|lavender candle|lavender spray|lavender fields;
vanilla|vanilla candle|vanilla extract|vanilla perfume|vanilla bean;
coffee|fresh coffee|brewing coffee|coffee beans|ground coffee|coffee shop smell|cafe smell;
rain|after rain|the rain|rainy days|rain smell|petrichor`,
`gasoline|gas|gas station|petrol;
sharpie|sharpies|markers|dry erase markers|whiteboard markers|scented markers|mr sketch|mr sketch markers;
new book|new books|new book smell|old book|old books|old book smell|library smell|library|books|paper;
new car smell|new car;
nothing|my own fear|exam stress|stress sweat|my roommates cooking|the subway|the hsr bus|the bus;
play doh|playdough|crayons|crayola|chlorine|pool chlorine|sunscreen|band aids|skunk|nail polish|nail polish remover|bleach|sawdust|permanent marker|rubber cement|glue|glue sticks|elmers glue|tires|asphalt|tar|wet paint;
my bed|my pillow|my blanket|my own bed|my sheets;
my dog|wet dog|dog paws|corn chips paws|frito feet|puppy breath|cat|my cat|cat fur|kitten`,
`pine|pine trees|christmas tree|christmas trees|pine needles|fir|balsam fir|evergreen|spruce|forest|the forest|woods;
cinnamon|cinnamon sticks|cinnamon rolls|cinnamon buns|cinnabon|cinnamon toast;
fresh laundry|laundry|clean laundry|clean clothes|laundry detergent|tide|gain|downy|fabric softener|dryer sheets|bounce|bounce sheets|fresh sheets|clean sheets|warm laundry|laundry out of the dryer;
candle|candles|scented candles|bath and body works|bath and body works candles|yankee candle|candle shop|a lit candle|candle burning;
baking|baked goods|bakery|fresh bread|bread|baking bread|bread baking|cookies|baking cookies|fresh cookies|chocolate chip cookies|brownies|cake|banana bread|muffins|pie|apple pie|pumpkin pie;
eucalyptus|eucalyptus shower|eucalyptus oil|vicks|vicks vaporub;
ocean|the ocean|beach|the beach|sea|sea air|salt water|ocean breeze|sea salt|the lake|lake water;
campfire|bonfire|fire|wood smoke|smoke|fireplace|burning wood|woodsmoke|a crackling fire;
cedar|cedar wood|sandalwood|wood|woody|oud|agarwood|palo santo|incense|agarbatti|dhoop|sage|burning sage|smudge|sweetgrass;
citrus|orange|oranges|orange peel|lemon|lemons|lime|grapefruit|clementine|mandarin|tangerine|bergamot|yuzu;
mint|peppermint|spearmint|fresh mint|mint leaves|peppermint oil|candy canes|mint gum|toothpaste;
snow|fresh snow|winter air|cold air|crisp air|winter|first snow|snowy air|frosty air|the cold;
flowers|roses|rose|jasmine|lilac|lilacs|lily|lilies|peony|peonies|gardenia|tulips|hyacinth|orange blossom|cherry blossom|lotus|honeysuckle|magnolia|sweet pea|carnation|freesia|daisy|lily of the valley|marigold|tuberose|mogra|plumeria|frangipani|hibiscus|wildflowers|flower shop|florist;
fresh cut grass|cut grass|grass|lawn|mowed lawn|summer grass;
tea|chamomile|chamomile tea|green tea|black tea|earl grey|chai|masala chai|jasmine tea|herbal tea|mint tea|tea leaves;
hot chocolate|cocoa|chocolate|melted chocolate;
my mom|moms perfume|my moms perfume|mom|my moms hugs|my mothers perfume|my dad|my dads cologne|dads cologne|cologne|perfume|my partners hoodie|my boyfriends hoodie|my girlfriends perfume|my partners cologne|my partner|grandma|my grandmas house|grandmas perfume|grandpas pipe|my grandparents house|home|my house|my childhood home;
soap|clean soap|hand soap|bar soap|dove soap|ivory soap|irish spring|shampoo|conditioner|body wash|lotion|baby lotion|baby powder|baby shampoo|johnsons baby shampoo|babies|baby smell|new baby smell;
popcorn|movie theatre popcorn|buttered popcorn|butter;
garlic|onion|garlic and onion|frying onions|cooking|home cooking|my moms cooking|dinner cooking|soup|chicken soup|curry|biryani|rice cooking|basmati rice|jasmine rice|toast|toast in the toaster|bacon|pancakes|maple syrup|waffles|pizza|bbq|barbecue|grilling;
apple|apples|apple cider|mulled cider|hot apple cider|apple orchard|apple picking|pumpkin spice|pumpkin|pumpkin spice latte|psl|nutmeg|clove|cloves|ginger|gingerbread|cardamom|star anise|chai spices|allspice|spices;
coconut|coconut oil|sunscreen|suntan lotion|tropical|pineapple|mango|banana|strawberry|strawberries|peach|peaches|watermelon|cherry|raspberry|blueberry|fruit|berries;
honey|beeswax|maple|maple syrup|caramel|brown sugar|butterscotch|toffee|marshmallow|toasted marshmallow|smores|cotton candy|vanilla frosting|frosting|sugar cookies|birthday cake;
leather|old leather|leather jacket|saddle|horse|horses|barn|hay|farm;
rosemary|basil|thyme|herbs|fresh herbs|tomato leaves|tomato plants|garden|gardening|soil|dirt|earth|wet earth|moss|mushrooms;
clean|clean house|clean room|fresh air|open window|fresh linen|linen|cotton|clean cotton|ironing|steam|shower steam`,
`the forest after rain|forest after rain|woods after rain|trees after rain|wet leaves|wet pine|rainy forest|cootes after rain|cootes paradise|cootes|the trail after rain|the escarpment after rain|the bruce trail;
fall leaves|autumn leaves|dry leaves|crunchy leaves|leaf pile|autumn|fall|september air|october|halloween|first day of school|back to school;
a library|thode|mills|mills library|thode library|old library|university library|the stacks|study room smell;
the coffee in thode|the tim hortons in thode|tims|tim hortons|tim hortons coffee|tims coffee|timbits|donuts|fresh donuts|krispy kreme|the tims in mdcl|starbucks|starbucks in musc|centro breakfast|centro|bridges|bridges cafe|the student centre;
chlorine at the mac pool|mac pool|swimming pool|indoor pool|the pulse|gym smell|rubber gym mats|yoga studio|yoga mat;
the hospital hallway|the hospital|mumc|hospital soap|hand sanitizer|purell|sanitizer|isopropyl alcohol|rubbing alcohol|antiseptic|clean hospital smell|dentist office;
my grandmas kitchen|grandmas kitchen|grandmas cooking|my nanis kitchen|dadis kitchen|lolas kitchen|my abuelas kitchen|my halmeonis kitchen|my babas kitchen|my grandmas soup|my grandmas bread|sunday dinner|holiday dinner|thanksgiving|thanksgiving dinner|christmas dinner|turkey roasting|roast chicken|roast;
dal|daal|tadka|tempering spices|curry leaves|cumin|ghee|ghee and rice|roti|roti on the tawa|chapati|paratha|jalebi|incense at the temple|mandir|gurdwara|langar|karah prashad|attar|ittar|bakhoor|bukhoor|oud perfume|frankincense|myrrh|church incense|candles at church|holy water|mosque carpet|mosque|masjid|prayer mat;
kimchi|sesame oil|soy sauce|ramen broth|miso|dashi|rice cooker|steamed rice|bao|dumplings|hot pot|star anise and cinnamon|five spice|pho broth|lemongrass|kaffir lime|galangal|pandan|coconut rice|nasi lemak|adobo|sinigang|jollof|plantain|fried plantain|suya|jerk|allspice|scotch bonnet|sofrito|arepa|tortillas|fresh tortillas|corn tortillas|masa|tamales|churros|pan dulce|cafe de olla|cardamom coffee|turkish coffee|arabic coffee|qahwa|baklava|rose water|orange blossom water|zaatar|za atar|fresh pita|manakish|shawarma|falafel|sumac|saffron|berbere|injera|coffee ceremony|jebena buna|frankincense at a coffee ceremony;
ginger tea|honey lemon tea|lemon ginger|turmeric|golden milk;
rose water|rosewater|rose oil|rose petals|rose garden|royal botanical gardens|rbg|rose garden at rbg|the rock garden|the gardens|greenhouse|gage park greenhouse|tropical greenhouse|garden centre|plant nursery|flower market|farmers market;
lake ontario|the bay|hamilton harbour|the beach at burlington|burlington beach|wasaga|sauble beach|the cottage|the lake at the cottage|cottage country|muskoka|algonquin|a canoe trip|camping|tent|sleeping bag|bug spray|deep woods off|citronella|citronella candle|mosquito coils;
the first snow|snowfall|snowstorm|blizzard|ice|frost|frozen air|minus 20|minus 30|cold morning|crisp morning|winter morning|cold winter night|ice rink|zamboni|arena|hockey arena|skates|hockey gear;
christmas|christmas morning|christmas cookies|gingerbread house|candy cane|eggnog|mulled wine|holiday candles|christmas candles|christmas spices|pine and cinnamon|orange and clove|pomander|christmas market|chestnuts|roasted chestnuts|roasting nuts|candied nuts|candied almonds;
a new notebook|stationery|stationery store|paper smell|pencil shavings|pencils|freshly sharpened pencils|erasers|scented erasers|crayons|chalk|chalkboard|art supplies|paint|oil paint|watercolour paper|clay|kiln;
vinyl records|record store|old records|cassette tapes|vintage store|thrift store|antique store|cedar chest|cedar closet|attic|old house|cottage|cabin|log cabin|wood stove|wood burning stove;
sunshine on clothes|clothes dried outside|line dried laundry|sun warmed skin|sunscreen at the beach|summer|summer night|summer air|warm summer rain|thunderstorm|ozone|lightning|storm coming|before a storm`,
`my dogs paws|dog paws|frito feet|my cats fur|cat fur|my cats head|cat head|kitten fur|bunny fur|rabbit|hamster|guinea pig|horse barn|stable|chicken coop|farm animals|my pets bed;
my childhood stuffed animal|stuffed animal|teddy bear|my teddy|my blankie|baby blanket|my baby blanket|my old blanket;
the inside of my moms purse|moms purse|my moms makeup|lipstick|old makeup|powder|face powder|my dads aftershave|aftershave|old spice|axe body spray|axe|lynx|brut|drakkar|polo|cool water|acqua di gio|dior sauvage|sauvage|bleu de chanel|chanel no 5|chanel|tom ford|tobacco vanille|le labo|santal 33|baccarat rouge|baccarat rouge 540|br540|glossier you|glossier|ariana grande cloud|cloud|sol de janeiro|cheirosa|bombshell|victorias secret|bath and body works mist|body mist|pink sugar|black opium|marc jacobs daisy|daisy|ysl libre|libre|mon paris|good girl|flowerbomb|la vie est belle|j adore|miss dior|coco mademoiselle|gucci bloom|burberry|her by burberry|kayali|vanilla 28|maison margiela|replica|lazy sunday morning|by the fireplace|jazz club|coffee break|when the rain stops|beach walk|bubble bath replica;
lush store|lush|bath bombs|lush bath bomb|the body shop|sephora|perfume store|candle store|yankee candle store|bath and body works store|davids tea|davidstea|tea store|spice market|kensington market|st lawrence market|the hamilton farmers market|jamesville|james street north;
pencil shavings and eraser|number 2 pencils|exam rooms|the burridge gym|burridge|hockey arenas in winter|ice resurfacing|the zamboni;
old churches|stone churches|cathedral|cathedral incense|candles in a church|chapel|the chaplaincy;
mcmaster in the fall|mac in fall|arts quad in fall|the quad after rain|campus after rain|campus in the snow|mac in winter|walking to class in the snow|walking to class in the morning;
the botanical gardens greenhouse|rbg greenhouse|tropical plants|orchids|orchid house|butterfly conservatory|cambridge butterfly conservatory;
wet stone|wet pavement|wet concrete|wet asphalt|wet sidewalk|the street after rain|summer rain on pavement|hot pavement after rain|steam on pavement;
fresh paper towels|warm toast|cereal|cheerios|cinnamon toast crunch|honey nut cheerios|froot loops|cereal milk|warm milk|milk tea|hong kong milk tea|condensed milk|dulce de leche|cajeta|brigadeiro|caramel corn|kettle corn|fresh popcorn at the fair|cotton candy at the fair|the fair|the cne|cne|funnel cake|mini donuts|beaver tails|maple taffy on snow|sugar shack|cabane a sucre|maple bush|sugar bush|maple syrup boiling|maple sap;
fresh tortilla chips|warm croissants|croissants|bakery at 6am|bakery in the morning|baguette|sourdough|focaccia|garlic bread|garlic knots|pizza oven|wood fired pizza|wood fired oven|charcoal|charcoal grill|campfire smores;
sandalwood incense|nag champa|chandan|camphor|kapoor|dhoop sticks|agarbatti at home|incense at home|puja|aarti|diya|ghee lamp|oil lamp|kerosene lamp|candle wax|beeswax candle|blown out candle|blown out birthday candles|matches|struck match|lit match;
a babys head|newborn|baby head|my niece|my nephew|my little sibling|babies after a bath;
sunscreen and chlorine|summer camp|camp|cottage dock|lake water|fish|fishing boat|boat engine|marina|harbour|sea salt and seaweed|seaweed|tide pools|low tide|mangroves`,
`the smell right before snow|snow is coming|the air before snowfall|smells like snow|it smells like snow;
the first day of summer break|last day of school|last day of exams|after the last exam|freedom smell|summer vacation;
the inside of a canoe|canoe|kayak|paddle|life jacket|wet life jacket;
my old school hallway|elementary school|kindergarten|crayons and glue|school gym|gym class|school cafeteria|school buses|school bus|lockers|school lockers|chalk dust;
the mcmaster bookstore|campus store|titles|textbooks|new textbooks|highlighters|new highlighters|sticky notes;
the hamilton steel mills|steel mills|hamilton air|hamilton|stelco|dofasco|the industrial smell|the north end|bayfront industrial;
a grow op|weed|cannabis|skunk|marijuana;
a dentist's office|fluoride|dentist mint|mint mouthwash|listerine|mouthwash;
a new phone|electronics|new tech|new laptop|apple store|unboxing smell|new shoes|new sneakers|shoe store|leather shoes|new clothes|clothing store|abercrombie|hollister|hollister store;
ink|printer|printer paper|warm paper from the printer|photocopier|toner|laminator|laminating;
the hsr bus in winter|bus heater|car heater|heater|radiator|furnace|first time the heat turns on|dusty heater|space heater;
hot glue gun|hot glue|soldering|solder|flux|engineering lab|chem lab|organic chemistry lab|ochem lab|acetone|ethanol|lab coat|bunsen burner|agar|bio lab|formaldehyde|dissection lab;
a fresh tennis ball|tennis balls|new basketball|soccer ball|baseball glove|hockey tape|ice skates|skate sharpening|bowling alley|laser tag|arcade|movie theatre|movie theater carpet|hotel lobby|hotel|hotel room|airport|airplane|plane food|duty free|duty free perfume|cruise ship|cruise;
sunscreen on a hot day|aloe vera|aloe|after sun|tiger balm|zam buk|white flower oil|axe oil|amrutanjan|vapor rub|menthol|camphor oil|eucalyptus balm|deep heat|icy hot|bengay;
fresh ink on a tattoo|tattoo shop|barbershop|barber|barber shop talc|hair salon|salon|hair dye|hairspray|perm|keratin|blow dryer|hot straightener|flat iron|burnt hair|curling iron;
gas lamp|oil lantern|kerosene|old car|old truck|diesel|tractor|lawn mower|chainsaw|sawmill|lumber|lumberyard|home depot|hardware store|rona|canadian tire|canadian tire smell|bike shop|bike tires|bike grease|wd 40|wd40`
 ]},

{id:"e5", q:"Something to do the night before an exam.", h:"Besides panic.",
 t:["Tonight: {a}. Tomorrow: you've got this.","The night before is for {a}.","You've done the work. Now {a}."],
 a:[
`sleep|go to sleep|get sleep|sleep early|go to bed early|early night|get a good sleep|good night sleep|rest|go to bed|8 hours|get 8 hours;
study|review|last review|review notes|read notes|light review|quick review|go over notes|look over notes|skim my notes|review my cheat sheet|review flashcards|flashcards;
relax|chill|unwind|calm down|stay calm|take it easy|be calm|wind down`,
`panic|cry|freak out|have a breakdown|spiral|stress|worry|overthink|pace|scream;
cram|cram everything|cram all night|all nighter|pull an all nighter|stay up|stay up all night|learn everything|study all night|no sleep|redbull;
pray|praying|pray for a curve|manifest|manifesting|light a candle|good luck ritual|wear my lucky socks|lucky charm|lucky pencil|lucky shirt|rub a rabbits foot|four leaf clover;
accept my fate|accept fate|give up|make peace|write my will|write a will|say goodbye|goodbye letter|existential crisis;
party|go out|go to the phoenix|twelveighty|1280|drink|drinks|go clubbing|hess village`,
`pack my bag|pack|pack my backpack|get my bag ready|pack the night before|prep my bag|bag ready;
lay out clothes|lay out my outfit|pick my outfit|choose an outfit|plan my outfit|comfy clothes|clothes ready|outfit ready;
eat a good dinner|eat dinner|good dinner|eat well|eat a real meal|healthy dinner|big dinner|pasta|carb load|eat something healthy|eat protein;
shower|hot shower|take a shower|bath|bubble bath|warm bath|take a bath;
stretch|stretching|yoga|light yoga|bedtime yoga|gentle stretching;
call family|call my mom|call home|call my parents|talk to my mom|talk to family|call my grandma|call a friend|talk to a friend|facetime my family|text my mom;
watch a movie|movie|watch a show|an episode|watch something light|comfort show|watch friends|watch the office|netflix|youtube|watch tv;
read|read a book|read for fun|read something fun|novel;
meditate|meditation|breathing|breathing exercises|deep breathing|calm app|headspace|mindfulness|body scan;
set alarms|set an alarm|set multiple alarms|set 3 alarms|set my alarm|backup alarm|ask someone to wake me|wake up call|alarm clock;
charge my calculator|check my calculator|new batteries|calculator batteries|pack my calculator|approved calculator|casio|bring my casio;
pack my student card|student card|student id|bring my id|mcmaster id|id card|photo id;
pencils|sharpen pencils|pack pencils|pens|pack pens|eraser|hb pencils|pencil case|stationery ready;
water bottle|fill my water bottle|pack water|pack snacks|snacks for tomorrow|prepare breakfast|plan breakfast|make breakfast for tomorrow|overnight oats|meal prep breakfast;
check the exam room|check my exam room|find the exam room|check the location|check exam location|look up my exam room|exam room|check my seat|check mosaic|check the time|double check the time|check the exam schedule;
plan my route|check the bus|check the hsr|bus schedule|plan the bus|check transit|leave early|plan to leave early|figure out parking|parking;
practice problems|a few practice questions|do some practice problems|one practice exam|practice exam|do a past exam|past paper;
summary sheet|look over my summary|review my summary|review my formula sheet|formula sheet|cheat sheet|aid sheet|make my aid sheet|finish my aid sheet|crib sheet;
no screens|turn off my phone|put my phone away|phone away|no phone|no social media|log off|airplane mode;
early dinner|tea|chamomile tea|herbal tea|warm milk|hot chocolate|decaf;
journal|journaling|write down worries|write out my worries|brain dump|write a list|gratitude list;
walk|go for a walk|evening walk|night walk|fresh air|walk outside|walk around campus;
light exercise|workout|gym|go to the gym|run|go for a run|light jog|exercise|swim;
hang out with friends|friends|chill with friends|see my friends|game night|cook with friends|eat with friends|have dinner with friends;
play video games|gaming|video games|one round|minecraft|stardew|animal crossing|switch;
listen to music|music|calm music|chill playlist|lofi|piano music|classical music|my favourite songs;
tidy up|tidy my room|clean my desk|clean my room|organize my space|make my bed|fresh sheets|change sheets|clean sheets;
skincare|skin care|face mask|sheet mask|pamper myself|self care|nails|paint my nails;
cuddle my pet|cuddle my dog|cuddle my cat|pet my cat|walk my dog|play with my dog;
early bedtime routine|bedtime routine|routine|wind down routine|nighttime routine|night routine|my usual routine|stick to my routine|normal night;
eat a snack|snack|snacks|late snack|bedtime snack|cookies|chocolate|ice cream;
dont study|stop studying|no studying|take the night off|no more studying|put the books away|close the laptop|stop at 8|stop at 9|stop by 10;
positive self talk|affirmations|tell myself i got this|you got this|believe in myself|visualize success|visualize the exam|visualize doing well|visualization|confidence|remind myself i studied;
pray|prayer|salah|namaz|isha|church|read the bible|read the quran|dua|devotional|meditate and pray`,
`teach my notes to my roommate|teach someone|explain to my roommate|explain to a friend|teach my mom|teach my dog|teach my cat|teach my stuffed animal;
blurt|blurting|brain dump everything i know|write out everything i know|blank page recall|write from memory|active recall|quiz myself|test myself|have someone quiz me|ask my roommate to quiz me|quizlet|anki|anki review|quick anki review;
read through the learning objectives|check the learning objectives|learning objectives|course outline|syllabus|review the outline|study guide|review the study guide;
email my professor|email my ta|ask a last question|post on avenue|post on piazza|piazza|course forum|ed discussion|discord question|ask the group chat|ask my study group;
review my mistakes|review my past mistakes|go over my midterm|review old quizzes|review old assignments|review the practice exam solutions|check my weak spots|weak areas|focus on weak areas;
listen to my recorded notes|listen to lectures|rewatch a lecture|rewatch key lectures|watch a youtube review|watch a summary video|crash course video|khan academy|organic chemistry tutor;
sleep by 11|bed by 11|bed by 10|asleep by midnight|in bed by 10|sleep by 10;
no caffeine after 3|no coffee|skip caffeine|cut caffeine|no energy drinks|decaf tea;
eat my comfort food|comfort food|my moms cooking|home cooking|make my favourite meal|order my favourite food|pizza|takeout|sushi|ramen|pasta night|mac and cheese|kraft dinner|soup;
lay out everything|prep everything|checklist|exam checklist|make a checklist|write a to do list for the morning|morning plan|plan the morning;
iron my clothes|wash my lucky shirt|wear comfy clothes|comfy socks|layers|pack a sweater|pack a hoodie|pack a jacket|winter boots;
take a melatonin|melatonin|sleepy tea|sleepytime tea|celestial seasonings|magnesium|white noise|earplugs|eye mask|sleep mask|blackout curtains|fan on;
get my nails done|do my hair|braid my hair|wash my hair|hair mask;
walk to the exam room|visit the exam room|go see the exam room|scope out the room|find burridge|find the burridge gym|find ivor wynne|find iwc|find the exam hall|find the room in jhe|find the room in mdcl|walk the route|practice the route;
light a candle|candle|lavender|lavender spray|pillow spray|essential oils|diffuser|aromatherapy;
reset my room|clean my desk for tomorrow|clear my desk|organize my notes|put away notes|organize my bag;
tell myself its just one exam|perspective|reality check|its just one exam|it doesnt define me|one exam wont ruin my life|zoom out|remind myself of past successes|look at past wins|reread old compliments|read kind messages|read my notes from friends|read encouraging texts;
a cozy night in|cozy night|blanket and tea|blanket burrito|pajamas early|pjs at 7;
wish my friends good luck|good luck texts|text my study group|send good vibes|cheer up a friend|hype my friends up|group chat pep talk;
sleep in my own bed|stay home|dont go out|dont sleep at a friends;
eat a banana|bananas|almonds|dark chocolate|blueberries|brain food|fish|omega 3|walnuts|eggs|oatmeal;
light dinner|dont eat too late|dont eat anything new|stick to familiar food|no spicy food|avoid heavy food|no takeout;
plan a reward for after|plan something fun for after|book something for after|plan a celebration|reward for after|look forward to after|plan post exam treat;
use the therapy dogs|therapy dogs|pet therapy|visit the dogs|dog cuddles`,
`watch a stand up special|stand up comedy|comedy special|funny videos|funny youtube|watch bloopers|laugh|laugh it off|memes|send memes;
watch a ted talk|motivational video|motivational speech|watch a pep talk|kid president|watch rocky|rocky training montage|hype video|sports highlights|watch a leafs game|watch the raptors|watch hockey night in canada;
bake something|bake cookies|bake banana bread|baking|bake for my exam group|bake for my floor;
crochet|knit|knitting|crocheting|sew|embroidery|craft|crafts|origami|paper snowflakes|make a snowflake|cut snowflakes|colour|colouring book|paint by numbers|lego|build lego|puzzle|jigsaw;
take a long walk to cootes|cootes paradise|walk in the snow|walk to westdale|walk around the quad|walk around campus at night|look at the stars|stargazing|look at the moon|moon;
make a playlist for tomorrow|exam day playlist|hype playlist|bus playlist|walk to the exam playlist|pump up songs;
go to a destress event|destress event|this event|snowflake station|ornament station|decorate an ornament|make ornaments|craft night|study break event;
write a letter to future me|letter to myself|note to tomorrow me|sticky note for the morning|motivational note on my mirror|write a quote on my mirror|post it on my mirror|quote on my door;
sleep with my notes under my pillow|notes under my pillow|textbook under my pillow|osmosis|absorb by osmosis|sleep on my textbook|sleep on my notes;
watch study with me videos|study with me|study stream;
write the exam formula sheet from memory|write formulas on a whiteboard|write the key ideas on my window|write on the mirror|whiteboard review|whiteboard;
sit in the chapel|chaplaincy|quiet prayer|go to mass|go to the mosque|isha prayer|evening prayers|temple|gurdwara|meditation group;
call grandma for a blessing|ask my parents for blessings|blessings|get blessings|touch my parents feet|ask for dua|ask for prayers|light a diya|tie a red string|eat curd and sugar|dahi cheeni|dahi shakkar|wear something red|wear my lucky color|lucky color|lucky number|lucky ritual;
eat kit kats|eat a kit kat for luck|eat a pass|eat a tai|tai for luck|kit kat japan|kitto katsu|eat katsu|katsudon|katsu for luck|eat seaweed soup|miyeokguk|dont eat seaweed soup|dont wash my hair|dont wash hair before exams|yeot|yeot for luck|chapssal tteok;
sleep with the window open|cold room|fresh air while sleeping|turn down the heat|cool room;
play my instrument|play guitar|play piano|sing|karaoke|dance it out|dance party|shake it off;
a hot chocolate from tims|tims hot chocolate|tim hortons|timbits|a donut|tims run|starbucks run|centro|bridges cafe;
pet videos on youtube|cat videos|puppy videos|baby animal videos|otters holding hands|red pandas|capybaras;
play chess|chess puzzles|wordle|connections|crossword|sudoku|mini crossword|nyt games;
hug someone|hug my roommate|hug my mom|cuddle|cuddles|hug my partner|hug my stuffed animal|squishmallow;
journal three good things|three good things|what went well|gratitude journal|gratitude|count my blessings`,
`practice writing in exam conditions|timed practice|time myself|mock exam at the same time as the real one|simulate the exam|sit in a quiet room and time myself;
sleep at the library|sleep in thode|nap in mills|study in thode until close|close down the library|stay at mills until it closes;
memorize the first answer|plan my first question|plan the order i will answer|exam strategy|exam plan|plan my time per question|budget time;
eat dinner with my floor|res dinner|centro dinner|floor dinner|family dinner|sunday dinner|dinner with roommates|potluck|cook together|group dinner|make dumplings together|hot pot night;
make a vision board|vision board|future plans|plan summer|look at summer plans|book a summer trip|dream about vacation|look at flights|plan a trip|daydream;
go skating at pier 8|pier 8|skating|ice skate|go sledding|sledding|toboggan|snowball fight|snowman|build a snowman|snow angel|make a snow angel|catch snowflakes;
take a bath with a bath bomb|bath bomb|lush|epsom salt bath|epsom salt|bath salts|bubble bath with candles|candlelit bath|bath with music;
pet my plants|water my plants|talk to my plants|plant care;
watch the sunset from the escarpment|sunset from the escarpment|sunset|the escarpment|the mountain|sam lawrence park|sam lawrence|the mountain brow|mountain brow|dundas peak at sunset;
listen to an audiobook|audiobook|podcast|sleep story|sleep podcast|nothing much happens|get sleepy|sleep with me podcast|boring sleep podcast|sleep meditation;
clean my glasses|charge my laptop|charge my phone|charge everything|update my laptop|restart my laptop|check my login|test my login|check my exam portal|check respondus|lockdown browser|install lockdown browser|test the online exam|check proctoring|test my webcam|online exam check;
eat a fortune cookie|fortune cookie|read my horoscope|horoscope|tarot|tarot reading|pull a tarot card|crystals|charge my crystals|crystal|manifestation journal|369 method|scripting;
write the exam in my head|imagine walking into the room|picture myself calm|mental rehearsal|imagine acing it|picture the a;
put my notes away and trust myself|trust myself|trust the process|i did my best|ive done enough|enough is enough|its out of my hands|let it go|surrender;
nothing new|no new material|dont learn new stuff|stick to what i know|stop learning new things`
 ]},

{id:"e6", q:"A way to stay off your phone while studying.", h:"What actually works?",
 t:["Out of reach, out of mind: {a}.","Focus starts with {a}.","Your phone can wait. Try {a}."],
 a:[
`turn it off|turn off my phone|power off|phone off|shut it off|switch it off;
airplane mode|aeroplane mode|flight mode;
put it away|phone away|put my phone away|put it in my bag|in my bag|in my backpack|in a drawer|drawer|put it in a drawer|out of sight|hide it|hide my phone;
do not disturb|dnd|silent mode|silence it|on silent|mute notifications|turn off notifications|no notifications|notifications off`,
`throw it|throw it out the window|throw it in the lake|throw it in cootes|throw it into the sea|smash it|break it|destroy it|bury it|feed it to the geese|give it to the geese;
give it to my mom|give it to my roommate|give it to a friend|give my phone away|hand it to someone|give it to my sibling|let someone hold it|give it to my partner;
flip it over|face down|phone face down|turn it face down|upside down;
delete social media|delete tiktok|delete instagram|delete all my apps|delete snapchat|uninstall tiktok|get rid of social media|log out of everything|log out|delete apps;
let it die|let it die|let the battery die|dead battery|dont charge it|leave my charger at home|forget my charger;
i dont|i cant|nothing works|willpower|pure willpower|discipline|self control|sheer will|i dont stay off|lol i dont|its impossible|im addicted`,
`another room|put it in another room|leave it in another room|phone in another room|leave it in the kitchen|leave it in my room|leave it in the bedroom|out of the room|other room|different room|separate room|leave it at home|leave it in my car|leave it in my locker|locker|leave it in my coat|coat pocket;
app timer|app limits|screen time|screen time limits|set screen time|downtime|time limits|app blocker|block apps|block social media|site blocker|website blocker;
forest app|forest|flora|flora app|focus plant|plant a tree|grow a tree;
lock box|phone lock box|kitchen safe|timelock box|time lock box|phone jail|phone box|lock it up|locked box|phone safe;
study with a friend|study buddy|study with friends|study group|accountability buddy|accountability partner|have a friend watch me|tell a friend to keep me accountable;
library|go to the library|study in the library|study at the library|quiet floor|silent floor|thode|mills;
focus mode|focus|study focus|work focus|sleep focus|iphone focus|android focus|digital wellbeing|bedtime mode;
grayscale|greyscale|black and white|black and white screen|grayscale mode;
pomodoro|pomodoro timer|timer|use a timer|set a timer|study timer|25 minutes then phone|phone breaks only|phone as a reward|reward myself with phone time|5 minute phone break|check it on breaks|only on breaks;
put it on charge across the room|charge it across the room|charger across the room|charge it in another room|charge it far away|leave it charging;
headphones|noise cancelling headphones|music on my laptop|play music from my laptop|music from a speaker|ipod|use an ipod|mp3 player;
log out of social media|log out of instagram|log out of tiktok|sign out of apps|sign out;
turn off wifi|no wifi|turn off data|disconnect from wifi|mobile data off|data off|wifi off;
use a real alarm clock|alarm clock|analog alarm clock|real clock|watch|wear a watch|kitchen timer|egg timer|hourglass|sand timer|visual timer|time timer;
use paper|paper notes|write by hand|print my notes|textbook only|physical textbook|offline studying|paper planner|paper calendar|notebook;
cold turkey|cold turkey blocker|freedom|freedom app|one sec|one sec app|opal|opal app|brick|the brick|unpluq|clearspace|appblock|stay focused app|offtime|blocksite|leechblock|self control app|selfcontrol;
hide the apps|move apps off home screen|hide instagram|hide tiktok|put apps in a folder|last page folder|remove from home screen|delete the shortcut|minimalist home screen|blank home screen|dumbphone launcher|minimalist launcher;
turn off face id|long password|complicated password|password i cant remember|give my roommate the password|screen time passcode|let my friend set the passcode;
study in a group study room|book a study room|study room|study pods;
put it under my pillow|put it under my bed|put it under a book|under a pile of clothes|behind me|on the floor behind me|on a high shelf|top shelf|out of reach|across the room|far away;
reward system|earn my phone|earn screen time|phone after the chapter|phone after the assignment|scroll after|no phone until done;
bribe myself|pay a friend|bet with a friend|lose money if i check|pay a fine|swear jar|phone jar|put money in a jar;
phone stack|phone stacking|phone stack game|pile phones|first to grab pays|whoever checks buys coffee|last one to touch their phone wins;
set an intention|write down why|reminder note|sticky note on my phone|note on my lock screen|lock screen wallpaper|motivational wallpaper|study wallpaper|exam countdown wallpaper|wallpaper that says study;
phone on the other side of the room|across the room;
study on a computer with no internet|offline computer|disconnect my laptop|no internet|turn off router|unplug the router|unplug the internet;
leave it with the librarian|leave it at the front desk|give it to the ta|give it to the security desk;
ask my mom to change my password|ask my mom to hide it|mom hides it|parents keep it;
bedtime mode|wind down mode|sleep mode|night mode;
keep it in my car|lock it in the car|leave it in the trunk|in the glove box|glove compartment;
study somewhere without signal|no signal|basement|dead zone|parts of thode with no signal|the mills basement|the bunker|study in the basement|underground|no service`,
`study with me video|study with me|youtube study with me|study stream|watch someone study|body doubling|body double|focusmate|virtual coworking|discord study call|study on facetime|study on call|camera on study|study live stream|stream myself studying;
tell my friends to roast me if i post|public accountability|post my phone in a box|bereal accountability|share my screen time|screen time leaderboard|compete for lowest screen time|screen time competition;
use the phone for flashcards only|quizlet only|anki only|use my phone for studying|study apps only|phone in study mode|guided access|guided access mode|app pinning|screen pinning|single app mode;
put it in a ziplock|put it in a bag|seal it in an envelope|tape it shut|lock it in a suitcase|put it in a shoebox|put it in the freezer|put it in the fridge|put it in the oven|put it in the microwave|put it in the cupboard|put it in the closet|put it in the laundry basket|hide it in the laundry|hide it in my sock drawer;
leave it at the front of the class|leave it at the exam bag drop|bag area|leave it in my bag at the front;
`,
`use a dumbphone|dumb phone|flip phone|nokia|light phone|the light phone|old phone|brick phone|basic phone|landline;
wear gloves|study with gloves on|winter gloves|mittens|oven mitts;
put my phone in a jar|phone jar|mason jar|pickle jar|cookie jar|candy jar;
change the language|phone in another language|change my phone language|set it to french|set it to japanese;
turn the brightness down|lowest brightness|dim the screen|dark screen;
low power mode|battery saver|ultra battery saver;
make my lock screen ugly|ugly wallpaper|scary wallpaper|picture of my professor|picture of my exam date|picture of my parents|parents watching|my moms face|my moms face as wallpaper|wallpaper of my mom|disappointed parent wallpaper;
rubber band around my phone|rubber band|hair tie around my phone|sticker over the camera|phone case that locks|pause case|yondr|yondr pouch|faraday bag|signal blocking bag|faraday pouch;
think about my goals|remember my why|long term goals|visualize my future|my future self|future me|future me is watching|shame;
make studying fun|gamify studying|study game|make it a game|study bingo|study streaks|study streak app|habit tracker|habitica|duolingo streak style;
kitchen timer on the desk|tomato timer|physical timer|analog timer|tick tock timer|hourglass on my desk;
read a physical book between sessions|book breaks|paper breaks|stretch breaks|walk breaks|snack breaks instead|tea breaks instead;
reward with tims|tims after|starbucks after|bubble tea after|treat after|snack after;
have my sibling change my screen time passcode|sibling passcode|roommate passcode|partner passcode;
put it in a locker at the pulse|pulse locker|gym locker|locker at mills|locker at thode|library lockers|day lockers|coin lockers|airport locker`,
`go somewhere my phone dies|cold weather kills it|leave it outside in the cold|winter mode|let the cold drain it;
study in a cabin with no wifi|cottage|go to the cottage|the woods|camping|no service zone|off the grid|cabin in the woods|go north;
mail it to myself|mail my phone|send it away|courier it|fedex it|ship it home|give it to canada post;
give it to my dog|give it to my cat|my cat sits on it|put my cat on my phone|cat guard|dog guard|guard dog|let my dog guard it|train my dog to bark;
freeze it in ice|ice cube phone|freeze my phone|put it in the snow|bury it in the snow|snowbank;
give it to the therapy dogs|hand it to a goose|let the geese keep it|leave it with the mac geese|let a squirrel take it;
tape a note on it that says no|sticky note that says no|sign that says not now|guilt note|note from my mom|note from future me|note from my therapist|photo of my grades on the back;
switch phones with a friend|swap phones|trade phones|someone elses phone|use my friends phone|phone swap;
only use it while standing on one foot|phone only in the bathroom|phone only in the hallway|phone only outside|phone only in the cold|phone only while doing planks|planks for scrolling|pushups for scrolling|10 pushups per check|burpee per check|squats for screen time|exercise for screen time;
hold an ice cube until i want to check|ice cube in my hand|snap a rubber band|rubber band on my wrist|elastic on wrist;
count to 100 before checking|wait 10 minutes|10 minute rule|urge surfing|delay|delay tactic|ride the urge|notice the urge|mindful pause|breathe first;
meditate before studying|meditate|meditation|mindfulness|mindful studying|deep work|deep work blocks|cal newport|monk mode|monk mode challenge|dopamine detox|dopamine fasting|digital detox|digital minimalism;
read atomic habits|atomic habits|habit stacking|implementation intentions|james clear|make it invisible|make it difficult|habit friction|add friction|friction;
think about the environment|save the planet|less screen time for my eyes|protect my eyes|eye strain|blue light|20 20 20 rule|blue light glasses;
ask the chaplaincy|pray|prayer|fasting from my phone|phone fast|lent phone fast|ramadan detox|sabbath|digital sabbath|tech shabbat|shabbat;
lock it in the ta's office|give it to my professor|leave it with the prof|give it to the librarian|leave it at the circulation desk|leave it with security`
 ]},

{id:"e7", q:"A cozy winter activity.", h:"Snow is optional.",
 t:["Winter is for {a}, and so is rest.","Let it snow. I'll be {a}.","Cold outside, cozy inside: {a}."],
 a:[
`hot chocolate|drink hot chocolate|hot cocoa|cocoa|make hot chocolate|hot chocolate with marshmallows|hot choc;
skating|ice skating|go skating|skate|skating outside|outdoor skating|skating rink|rink;
sledding|go sledding|toboggan|tobogganing|sled|sledging|sledding hill;
build a snowman|snowman|make a snowman|snowmen;
movie|watch a movie|movie night|movies|christmas movie|watch christmas movies|holiday movies|netflix|watch netflix|tv|binge a show|watch tv|watch shows`,
`hibernate|hibernating|hibernation|stay in bed|bed|sleep|sleep all day|sleep in|nap|naps|bed rot|rot in bed|stay inside|never leave the house|stay home|stay indoors|stay in;
complain about the cold|complain|complaining|whine|be cold|shiver|suffer|freeze|cry about the snow|cry;
shovel snow|shoveling|shovelling|shovelling snow|shovel the driveway|clear the driveway|scrape my car|scrape ice|scrape the windshield;
study|studying|exams|studying for exams|homework|assignments|finals;
move somewhere warm|go to mexico|go to florida|book a vacation|go south|cuba|dominican|jamaica|all inclusive|beach vacation|go to the beach|vacation|leave canada|fly south;
nothing|stay under a blanket|blanket|blankets|under a blanket|wrapped in a blanket|blanket burrito`,
`read by the fire|fireplace|sit by the fire|fire|cozy fire|campfire|bonfire|read by the fireplace|fireplace reading|wood stove|fire pit|log fire|crackling fire|fireplace video|youtube fireplace|yule log;
read|reading|read a book|book|cozy book|curl up with a book|read in bed|read with tea|read with a blanket;
baking|bake|bake cookies|cookies|baking cookies|christmas cookies|sugar cookies|gingerbread|gingerbread cookies|bake bread|banana bread|bake a pie|pie|make muffins|cinnamon rolls|baking with family;
knitting|knit|crochet|crocheting|knit a scarf|crochet a scarf|knit a hat|knit socks|yarn|sewing|embroidery|cross stitch|quilting;
puzzle|puzzles|jigsaw puzzle|do a puzzle|1000 piece puzzle|jigsaw;
snowball fight|snowballs|throw snowballs|snowball;
skiing|ski|go skiing|downhill skiing|snowboarding|snowboard|go snowboarding|ski trip|ski hill|blue mountain|blue mountain ski|glen eden|horseshoe valley|mount st louis|mount st louis moonstone|chicopee|chedoke|whistler|mont tremblant|tremblant;
candles|light candles|light a candle|candle|candlelight|scented candles;
soup|make soup|hot soup|eat soup|cook soup|chili|make chili|stew|beef stew|chicken noodle soup|ramen|pho|hot pot|hotpot|fondue|cheese fondue|chocolate fondue|raclette;
board games|board game|game night|card games|cards|play cards|uno|monopoly|catan|scrabble|chess|jenga|clue|cranium|codenames|exploding kittens|cards against humanity|game night with friends;
tea|drink tea|hot tea|cup of tea|warm tea|chai|london fog|matcha|herbal tea|apple cider|hot apple cider|mulled cider|cider|eggnog|mulled wine|hot toddy|warm milk|coffee|latte|peppermint mocha|gingerbread latte|chestnut praline latte;
snow angels|snow angel|make snow angels;
walk in the snow|snow walk|winter walk|walk outside|walk in the woods|walk at night|walk under the lights|night walk;
christmas lights|look at christmas lights|holiday lights|light displays|drive around and look at lights|decorate|decorating|decorate the tree|christmas tree|decorate for christmas|decorations|put up lights|string lights|fairy lights|ornaments|decorate ornaments|make ornaments|wreath|make a wreath;
cuddle|cuddling|cuddle under a blanket|cuddles|snuggle|snuggling|cuddle with my partner|cuddle with my pet|cuddle my dog|cuddle my cat;
video games|gaming|play video games|minecraft|stardew valley|stardew|animal crossing|zelda|pokemon|mario kart|cozy games|cozy gaming|sims|the sims;
cook|cooking|make dinner|cook a big meal|family dinner|holiday dinner|christmas dinner|thanksgiving|potluck|friendsgiving;
music|christmas music|holiday music|listen to music|jazz|christmas songs|mariah carey|michael buble|vinyl|records;
bath|bubble bath|hot bath|warm bath|long bath|take a bath|hot shower;
pajamas|pjs|pyjamas|onesie|fuzzy socks|warm socks|slippers|hoodie|cozy sweater|sweater|ugly sweater|wool socks|flannel;
draw|drawing|paint|painting|art|crafts|craft|crafting|scrapbook|scrapbooking|colouring|coloring|paper snowflakes|make paper snowflakes|cut snowflakes|snowflakes;
write|writing|journal|journaling|write letters|write cards|christmas cards|holiday cards;
hot tub|sauna|spa|steam room|nordic spa|scandinave|thermal spa;
shopping|christmas shopping|holiday shopping|mall|gift shopping|wrapping presents|wrap gifts|gift wrapping|make gifts|homemade gifts|secret santa`,
`snowshoeing|snowshoe|snowshoes|go snowshoeing|cross country skiing|cross country ski|nordic skiing|xc skiing|skate skiing;
ice fishing|ice fish|ice hut|fishing on the ice;
pond hockey|shinny|outdoor hockey|street hockey|ball hockey|road hockey|play hockey|hockey|backyard rink|make a rink|flood the backyard;
pier 8 skating|pier 8|waterfront skating trail|skating at pier 8|hamilton waterfront|skating at the waterfront|skate at bayfront|natural ice;
skating at city hall|nathan phillips square|nathan phillips|the bentway|harbourfront|rideau canal|the canal|skate the canal|winterlude|ottawa winterlude|ice castles|ice sculptures|ice hotel|hotel de glace|quebec winter carnival|carnaval;
christmas market|holiday market|distillery district|distillery christmas market|toronto christmas market|winter market|farmers market;
gingerbread house|gingerbread houses|make a gingerbread house|decorate gingerbread|build a gingerbread house|gingerbread village;
watch christmas movies|home alone|elf|the grinch|how the grinch stole christmas|love actually|the holiday|polar express|its a wonderful life|a christmas story|miracle on 34th street|the santa clause|christmas vacation|national lampoons christmas vacation|klaus|arthur christmas|the muppet christmas carol|a christmas carol|die hard|nightmare before christmas|frozen|the holiday movie|hallmark movies|hallmark christmas movies|hallmark|rudolph|frosty the snowman|charlie brown christmas|a charlie brown christmas;
drink cider|apple cider|cider|hot cider|spiced cider|mulled cider;
reading under a blanket|read under a blanket|blanket and book|book and tea|tea and a book|book and hot chocolate|book in bed;
cozy cafe|cafe|coffee shop|go to a cafe|study at a cafe|cafe hopping|bakery|go to a bakery;
dog walk in the snow|walk my dog in the snow|dog in the snow|dogs in the snow|play with my dog in the snow;
feed the birds|bird feeder|birdwatching|bird watching|winter birds|cardinals|chickadees|blue jays;
watch the snow fall|watch snow|watch it snow|snowfall|look out the window|window watching|watch a snowstorm|watch the storm|storm watching|blizzard;
stargazing|winter stars|look at the stars|northern lights|aurora|orion|the moon;
nap by the fire|nap under blankets|nap in the afternoon|winter nap|cat nap;
sledding at chedoke|chedoke hill|sledding at the mountain|sledding on the escarpment|tobogganing at chedoke|sledding at gage park|gage park|sledding at the quad|sledding behind res|sledding on a lunch tray|centro tray sledding|tray sledding;
mcmaster in the snow|campus in the snow|snowy campus|walk around campus in the snow|the arts quad in the snow|snowball fight on the quad|snowman on the quad|snowman in the arts quad;
cootes paradise in winter|cootes in winter|winter hike|hike in the snow|winter hiking|bruce trail in winter|dundas peak in winter|frozen waterfall|frozen waterfalls|websters falls in winter|ice climbing;
royal botanical gardens|rbg|gage park greenhouse|tropical greenhouse|greenhouse|conservatory|plant greenhouse|winter garden;
make a fort|blanket fort|pillow fort|snow fort|igloo|build an igloo|quinzee|snow cave|snow castle;
tea party|high tea|afternoon tea|tea time|tea ceremony;
movie marathon|harry potter marathon|lord of the rings marathon|star wars marathon|marvel marathon|disney marathon|ghibli marathon|binge watch|binge|tv marathon;
crafts with friends|craft night|paint night|wine and paint|sip and paint|pottery|pottery class|ceramics|candle making|make candles|soap making|make soap;
make tea blends|tea blending|make chai from scratch|masala chai|kadak chai|kahwa|kashmiri chai|noon chai|pink tea|sheer chai;
make dumplings|dumpling party|dumpling making|make pierogies|pierogi|perogies|make tamales|tamalada|make samosas|make momos|momos|make bao|make mandu|mandu|make gyoza|make wontons;
diwali|lights for diwali|light diyas|diyas|rangoli|hanukkah|light the menorah|menorah|latkes|make latkes|sufganiyot|dreidel|play dreidel|christmas|christmas eve|christmas morning|open presents|stockings|kwanzaa|lunar new year|chinese new year|red envelopes|lucky money|winter solstice|solstice|dongzhi|tangyuan|yule|new years eve|new years|nye|countdown|fireworks|boxing day|boxing day sales;
cozy gaming|stardew valley with friends|animal crossing in winter|minecraft in the snow|cozy grove|unpacking|spiritfarer|a short hike|alba|cozy games on the switch|ooblets|coral island|fae farm|slime rancher|dorfromantik|townscaper|wylde flowers|disney dreamlight valley|dreamlight valley|palia|ooblets|wholesome games;
watching hockey|watch hockey|hockey night in canada|hockey game|leafs game|go to a hockey game|watch the leafs|world juniors|watch the world juniors|junior hockey|bulldogs game|hamilton bulldogs|marauders hockey|mac hockey|watch the raptors|raptors game|basketball game|nfl|super bowl|watch football|nba|march madness|watch sports;
spa night|face masks|face mask|sheet masks|nails|paint my nails|self care night|pamper|pamper night|skincare night;
journal by candlelight|candlelight journaling|write poetry|poetry|write a poem|write a story|creative writing|write a novel|nanowrimo`,
`ice sculpting|ice sculptures|carve ice|ice carving|snow sculpture|snow sculptures|snow art|snow painting|paint the snow|spray paint the snow|food colouring in the snow|colour the snow;
maple taffy on snow|tire sur la neige|maple taffy|sugar shack|cabane a sucre|sugar bush|maple syrup festival|maple festival|sugaring|sugaring off;
winter camping|camping in the snow|winter tent|hot tent|quinzee camping|igloo camping;
dog sledding|dogsledding|dog sled|mushing|husky|huskies|husky ride|sleigh ride|horse drawn sleigh|sleigh|hayride|horse drawn wagon|carriage ride;
fat biking|fat bike|winter biking|winter cycling|winter running|run in the snow|run in the cold|polar bear dip|polar bear swim|polar plunge|cold plunge|ice bath|winter swimming|lake swim in winter|cold water swim|wim hof|wim hof breathing|wim hof method;
curling|go curling|curling club|watch curling|brier|the brier|scotties|scotties tournament of hearts|curling on tv;
snow tubing|tubing|tube park|snow tube|snowmobile|snowmobiling|skidoo|ski doo;
winter photography|photograph snowflakes|snowflake photography|macro snowflakes|catch snowflakes on black paper|look at snowflakes under a microscope|snowflake microscope|snowflake under a magnifying glass;
catch snowflakes on my tongue|catch snowflakes|taste snow|eat snow|snow cream|snow ice cream|make snow ice cream|snow cone|maple snow;
make paper snowflakes and hang them|snowflake garland|paper snowflake garland|paper chains|popcorn garland|string popcorn|cranberry garland|orange slice garland|dried orange garland|pomanders|clove oranges|salt dough ornaments|ornament making|hand painted ornaments|decorate ornaments with friends|ornament exchange;
cookie exchange|cookie swap|cookie decorating|decorate sugar cookies|royal icing|piping|bake for neighbours|bake for my floor|bake for friends|cookie boxes;
read a christmas book|a christmas carol book|the night before christmas|the polar express book|the snowy day|dr seuss|holiday books|reread harry potter|harry potter|winter books|read a cozy mystery|cozy mystery|agatha christie|murder on the orient express|sherlock holmes|little women|anne of green gables|narnia|the lion the witch and the wardrobe|the hobbit|lord of the rings;
listen to the snow|silent snow|quiet snowfall|snow silence|the hush of snow;
skate under the stars|night skating|skating at night|skate with music|disco skate|skating date|skate date;
watch the leafs lose|watch the leafs in the playoffs|leafs playoffs|hope for the leafs|leafs nation;
sit in a warm car|car with the heat on|heated seats|seat warmers|heated blanket|electric blanket|heating pad|hot water bottle|hand warmers|toe warmers|heat packs;
warm cookies and milk|milk and cookies|cookies for santa|leave cookies for santa|carrots for the reindeer|write to santa|letter to santa|santa letters|canada post santa letters|h0h 0h0|hoh oho;
hamilton santa claus parade|santa claus parade|the santa claus parade|christmas parade|winterfest|hamilton winterfest|light up the night|festival of lights|niagara festival of lights|niagara falls lights|winter festival of lights|niagara in winter|ice wine|icewine|icewine festival|niagara icewine festival;
cottage in winter|winter cottage|cabin weekend|chalet|chalet weekend|airbnb cabin|cabin in the woods|log cabin|ski chalet;
play in the snow with my siblings|snow day with family|snow day|snow days|school closures|day off for snow|snowed in|snowed in at home|stuck inside;
snow forts with kids|babysit in the snow|play with my niece in the snow|make snowmen with my nephew`,
`frozen bubbles|blow bubbles in the cold|freeze bubbles|frozen bubble photography|boiling water into snow|throw boiling water|mpemba|instant snow|frozen t shirt|freeze a wet t shirt|frozen jeans|freeze my hair|frozen hair|hair freezing contest;
snow candy|snow taffy|icicle candy|eat an icicle|icicles|break icicles|icicle sword|icicle fight;
build a snow luge|snow luge|sled ramp|sled jump|ski jump|backyard sled hill|snow slide|snow ramp;
snow maze|snow labyrinth|stomp a maze|snow art stomping|snow stomping art|giant snowflake in the snow|stomp a snowflake|snow drawing;
snow bowling|snow golf|snow volleyball|snow soccer|snow football|snow frisbee|snow mini golf;
ice lanterns|make ice lanterns|ice candles|frozen lanterns|luminaries|snow lanterns|snow candle holders;
ice ornaments|frozen ornaments|frozen suncatchers|ice suncatchers|frozen flowers|freeze flowers in ice;
winter picnic|hot chocolate picnic|thermos|thermos of tea|thermos of soup|winter bbq|bbq in the snow|grill in the snow;
snowball target practice|snowball catapult|snowball launcher|snowball maker|perfect snowball|snowball cannon;
igloo dinner|dinner in an igloo|eat in a snow fort|bubble dome dinner|dining dome|igloo restaurant;
chess by the fire|scrabble by the fire|crossword by the fire|sudoku by the fire|wordle in bed;
make a snow cat|snow dog|snow animals|snow dragon|snow sculpture of a goose|snow goose|snow squirrel|snow penguin|snow bear|snow turtle|snow octopus|snow dinosaur|snow pikachu|snow totoro|snow sculpture of my professor;
watch the plows|plow watching|snowplow|snow removal|watch the zamboni|zamboni|zamboni ride|drive the zamboni;
hot chocolate bombs|cocoa bombs|make hot chocolate bombs|cocoa bomb|marshmallow bomb|hot chocolate bar|cocoa bar|hot chocolate toppings|whipped cream|candy cane stir sticks|peppermint bark|make peppermint bark|fudge|make fudge|toffee|make toffee|brittle|peanut brittle|caramels|make caramels|truffles|make truffles|bark|chocolate bark;
roast chestnuts|chestnuts on an open fire|roasted chestnuts|candied nuts|sugared almonds|spiced nuts;
make snow globes|snow globe|mason jar snow globe|diy snow globe;
watch a hockey game at the mac rink|mac hockey game|burridge gym basketball|marauders basketball|mac sports in winter;
the mcmaster winter destress|this station|destress event|snowflake station|ornament decorating|decorating ornaments|making snowflakes here|snowdrift`
 ]},

{id:"e8", q:"Something you're proud of this term.", h:"Any size counts.",
 t:["I'm proud of {a}. More to come.","Look back at {a} and keep going.","{a}. That was you."],
 a:[
`grades|good grades|my grades|good marks|marks|a good grade|my gpa|gpa|high gpa|passing|passing my classes|passing everything|i passed|passed;
surviving|survived|still here|making it|i made it|getting through|got through it|made it through|staying alive|surviving first year;
going to class|attending class|going to every class|going to lectures|showing up|showed up|attendance|perfect attendance;
friends|making friends|made friends|new friends|my friends|a new friend|making a new friend|friendship|found my people|finding my people`,
`being alive|breathing|existing|still breathing|i exist|staying sane|not dropping out|didnt drop out|not crying|not crying in class|only cried once|crying less;
nothing|not much|idk|i dont know|hmm|nothing yet|nothing really|im not;
sleeping in|sleeping|naps|my nap game|napping|sleep schedule|fixing my sleep schedule;
my screen time|my tiktok|my doom scrolling|reading reddit|memes|my meme collection;
being here|coming to this event|showing up today|this snowflake|my snowflake|making a snowflake|the ornament|my ornament|this game|my score;
eating|feeding myself|not starving|i cooked once|cooking once|i ate a vegetable|eating vegetables|ate a vegetable`,
`joined a club|joining a club|club|clubs|my club|msu club|joined an msu club|got involved|getting involved|joined a team|team|my team|joined intramurals|intramurals|joined a society|student society|faculty society;
gym|going to the gym|working out|work out|workout|fitness|exercise|consistent at the gym|lifting|getting stronger|strength|running|my running|ran|ran a 5k|5k|10k|half marathon|marathon|getting fit|getting healthier|health|my health|losing weight|gaining weight|gaining muscle|muscle|pr|new pr|personal record;
cooking|learning to cook|cooked|meal prep|meal prepping|cooking for myself|cooking real meals|cooking for friends|baking|learned to bake;
asked for help|asking for help|going to office hours|office hours|talking to my prof|talking to my professor|emailing my prof|asking questions in class|asking questions|speaking up|participating|participating in class|answering in class|talking in tutorial;
a presentation|my presentation|presenting|public speaking|giving a presentation|speaking in front of people|gave a speech|speech|debate|my seminar|leading a tutorial;
first a|my first a|got an a|an a|a plus|a+|got an a+|12|a 12|11|a 10|got a 12|got an 11|aced|aced a test|aced an exam|aced my midterm|perfect score|100|got 100|full marks|top of the class|highest mark;
midterm|my midterm|my midterms|did well on my midterm|passing my midterm|midterm grade|good midterm|beat the average|above average|above the class average|class average;
job|got a job|a job|part time job|working|working while studying|balancing work and school|my job|campus job|work study|keeping a job|got hired;
internship|got an internship|summer internship|co op|got a co op|co op placement|landing a co op|research position|summer research|nserc|usra|research assistant|ra position|research lab|joined a lab|lab position|lab;
saving money|saved money|budgeting|sticking to a budget|budget|paying rent|paid my rent|financial independence|paying my own way|paying tuition|paid tuition|scholarship|got a scholarship|bursary|award|an award|deans list|deans honour list|got on the deans list|made the deans list|honour roll;
showing up for myself|consistency|being consistent|staying consistent|routines|my routine|building a routine|habits|good habits|discipline|staying disciplined|self discipline|motivation|staying motivated|keeping up|keeping up with readings|staying on top of things|staying organized|being organized|organization|planner|using a planner;
mental health|my mental health|therapy|going to therapy|starting therapy|counselling|going to counselling|getting help|taking care of myself|self care|prioritizing myself|setting boundaries|boundaries|saying no;
sleep|sleeping better|good sleep|8 hours|fixed my sleep schedule|consistent sleep|going to bed on time;
not procrastinating|procrastinating less|starting early|starting assignments early|handing things in on time|no late submissions|on time|meeting deadlines|all my deadlines|never missed a deadline|submitting everything;
moving out|living alone|living on my own|independence|being independent|moving away|moved to hamilton|moving to res|living in res|adjusting|adjusting to university|adapting|transition|making the transition|getting used to uni|finding my way|finding my way around campus|finding my classes|learning the bus|taking the hsr;
my essay|my research paper|an essay|essay|my paper|my lab report|lab report|final project|my project|group project|my design project|cornerstone|my poster|a poster|my thesis|thesis|my capstone|capstone|my code|coding project|hackathon|won a hackathon|my portfolio|my art|my design;
learning something new|learned a lot|growth|personal growth|growing|growing up|maturing|changing|improving|getting better|progress|making progress|small progress|tiny wins|small wins;
being kind|being a good friend|helping others|helping my friends|helping a classmate|volunteering|volunteered|giving back|community service|charity|donating blood|blood donation|donated blood;
reading|reading for fun|reading books|finished a book|read a book|books i read|reading more|my reading goal|goodreads|goodreads goal;
staying positive|positivity|optimism|resilience|being resilient|bouncing back|not giving up|perseverance|grit|pushing through|keeping going|kept going|kept trying|trying|trying my best|my best|doing my best|effort|hard work|working hard|putting in the work;
my relationship|my partner|relationships|my family|calling home|staying in touch|keeping in touch|reconnecting|my friendships|keeping friendships|long distance|making long distance work;
learning new skills|new skills|new skill|learned new skills|learned a new skill|picked up a new skill|learned something new`,
`welcome week|being a welcome week rep|welcome week rep|rep|being a rep|became a rep|frosh|spirit;
efrt|joined efrt|msu efrt|first aid|first aid certification|cpr|cpr certified|lifeguard|lifeguarding|nl|national lifeguard;
swhat|joined swhat|walk home team|msu swhat|walk safe;
archway|being an archway mentor|archway mentor|mentoring|mentoring first years|mentor|being a mentor|tutoring|tutoring others|being a tutor|peer tutor|ta|being a ta|teaching assistant|got a ta position;
going to the swc|using the swc|booking a counselling appointment|seeing a counsellor|reaching out to the swc|student wellness centre|got accommodations|sas|registering with sas|using sas|using my accommodations|advocating for myself|self advocacy|standing up for myself;
using an msaf|asking for an extension|getting an extension|dropping a course|dropping a class|withdrawing from a course|knowing my limits|knowing when to stop|taking a lighter course load|reduced course load|part time studies|switching programs|changing my major|choosing my program|picking my major|getting into my program|getting into level 2|level 2 program|program acceptance;
going to the food collective centre|using the food bank|asking for support|reaching out|telling someone|opening up|being vulnerable|vulnerability|honesty|being honest|being authentic|being myself|self acceptance|accepting myself|self love|loving myself|confidence|more confident|being confident|self esteem;
coming out|came out|pride|being proud of who i am|my identity|embracing my identity|my culture|embracing my culture|learning my language|speaking my language|staying connected to my culture|my faith|staying connected to my faith|praying regularly|going to church|going to the mosque|going to the temple|fasting|ramadan|completing ramadan|ramadan fasting|keeping my faith;
the pulse|going to the pulse|pulse membership|swimming|learned to swim|swim lessons|climbing|rock climbing|bouldering|got better at climbing|climbing v4|climbing v5|yoga|doing yoga|yoga practice|pilates|dance|dancing|joined a dance team|dance team|dance competition|performance|performing|a performance|my recital|recital|concert|my concert|solo|a solo|singing solo|choir|joined choir|band|joined a band|orchestra|joined orchestra|theatre|acting|a play|being in a play|musical|improv|joined improv|stand up|did stand up|open mic|went to an open mic;
played a sport|varsity|making varsity|made varsity|marauders|playing for the marauders|making the marauders|varsity team|club team|intramural championship|won intramurals|intramural champs|championship|winning a game|winning|won|won a medal|medal|trophy|competition|won a competition|case competition|won a case competition|debate competition|model un|mun|moot court|hackathon win|science fair|robotics|formula sae|mcmaster formula electric|mac formula|baja|mcmaster baja|rocketry|mcmaster rocketry|solar car|mcmaster solar car|ieee|mes|engineering competition|design competition;
my first real job|first job|promotion|got promoted|raise|got a raise|side hustle|small business|my business|started a business|entrepreneurship|startup|my startup|freelance|freelancing|commissions|art commissions|selling my art|etsy shop|my etsy|selling crafts|reselling|depop|my depop shop;
my youtube channel|content creation|my tiktok account|my blog|my podcast|starting a podcast|writing a book|my novel|my poetry|publishing|getting published|my article|the silhouette|writing for the silhouette|my column|cfmu|my radio show|radio show;
travelling alone|first solo trip|solo travel|studying abroad|exchange|going on exchange|international student|moving countries|moving to canada|immigrating|my english|improving my english|speaking up in english|learning french|learning a language|duolingo streak|my duolingo streak|my streak;
driving|getting my license|got my license|g2|got my g2|got my g|passed my driving test|learning to drive|bought a car|my first car;
quitting a bad habit|quit smoking|quit vaping|stopped vaping|cut back on caffeine|less caffeine|drinking less|sober|sobriety|clean|days sober|being sober|quitting social media|less screen time|lower screen time|deleting tiktok|deleted tiktok|digital detox;
my plants|keeping my plants alive|my plant is alive|plant parent|my cat|adopting a cat|adopted a pet|adopting|rescue dog|fostering|fostering animals|taking care of my pet|my fish|keeping my fish alive;
cleaning my room|clean room|keeping my room clean|laundry|doing my laundry|doing laundry on time|keeping my space clean|decluttering|minimalism`,
`asking a question in a 500 person lecture|asking a question in a big lecture|raising my hand in a huge class|asking in lecture|speaking up in a lecture hall;
going to a party alone|going to events alone|going alone|sitting with strangers|talking to strangers|making the first move|introducing myself|saying hi|starting conversations|small talk|networking|going to a networking event|career fair|going to the career fair|talking to recruiters|linkedin|my linkedin|making a linkedin|resume|my resume|updating my resume|cover letter|writing a cover letter|applying to jobs|job applications|interviews|my first interview|interviewing|getting an interview|getting a callback;
being on time to my 8 30s|8 30s|going to my 8 30|never missing an 8 30|waking up for 8 30s|my 8 30 class|morning classes|waking up early|early riser|5 am club|morning routine;
my sourdough starter|sourdough|learning to make bread|making pasta from scratch|making dumplings|my moms recipe|cooking my moms recipe|cooking food from home|cooking my culture|my grandmas recipe|recreating grandmas recipe;
learned to knit|knitting a sweater|crocheted a blanket|crocheting a sweater|my first crochet project|my amigurumi|amigurumi|sewing my own clothes|sewed a dress|thrifting and upcycling|upcycling|thrift flip|my embroidery;
my art|art project|painting|my painting|my drawing|my sketchbook|filling a sketchbook|finished a sketchbook|digital art|my animation|animation|my film|short film|my photography|photo project|photography|film photography|darkroom|my zine|making a zine;
finally fixing my posture|stretching every day|flexibility|doing the splits|splits|learned a handstand|handstand|pull ups|my first pull up|first pull up|push ups|my first push up|running without stopping|couch to 5k|c25k;
my skin|my skincare routine|my hair|growing my hair|growing out my hair|cutting my own hair|my new haircut|my glow up|glow up|my style|my outfits|dressing up|my wardrobe;
journaling every day|my journal|gratitude journal|writing every day|meditating every day|meditation streak|meditation practice|my morning pages|morning pages;
standing up for a friend|defending someone|being an ally|allyship|speaking up for others|reporting something|doing the right thing|integrity|honesty|being a good roommate|good roommate|resolving a conflict|apologizing|forgiving|forgiving someone|letting go|letting go of someone|ending a toxic friendship|leaving a bad relationship|breaking up|getting through a breakup|healing|moving on;
my grandparents|spending time with my grandparents|visiting family|visiting home|going home|calling my mom every week|weekly calls|family dinners|helping my family|helping my parents|translating for my parents|supporting my family|taking care of my siblings|being a good sibling|being a good older sibling|role model|being a role model for my siblings|first gen|first generation student|first in my family to go to university|first in my family|making my parents proud|my parents being proud|immigrant parents|for my parents;
my research|my first research paper|getting published|conference|presenting at a conference|poster presentation|research poster|undergrad research|my lab work|my experiment|experiment worked|my code works|debugged my code|finished my thesis|defended my thesis;
learning to say no|saying no to things|cutting back|doing less|resting|taking rest seriously|taking breaks|not burning out|avoiding burnout|recovering from burnout|healing from burnout|work life balance|balance|finding balance`,
`keeping a cactus alive|my cactus|keeping a succulent alive|my succulent survived|my plant bloomed|my orchid rebloomed|growing a plant from seed|growing an avocado tree|avocado pit|regrowing green onions|green onions;
learning to unclog a drain|fixing my sink|fixing my bike|fixing my laptop|building a pc|built a pc|built my own computer|built a keyboard|mechanical keyboard|soldering|3d printing|thode makerspace|makerspace project|my 3d print|arduino|raspberry pi|my robot|built a robot|my app|built an app|launched an app|my website|built a website|my game|made a game|game jam;
memorizing all the bones|memorizing the krebs cycle|krebs cycle|learning ochem|passing ochem|surviving ochem|ochem|organic chemistry|passing calculus|calc|surviving calc|calculus|math 1za3|math 1zb3|math 1a03|chem 1a03|chem 1aa3|bio 1a03|bio 1m03|physics 1d03|phys 1d03|eng 1p13|1p13|1d04|engineering 1|iarc|isci|health sci|health sciences|level 1|first year engineering|getting through 1p13|surviving physics|surviving organic chemistry;
learning to ride the hsr|figuring out the 51|taking the go train alone|navigating toronto|navigating hamilton|exploring hamilton|exploring the city|finding new spots|trying new restaurants|trying new food|trying sushi|trying something new|trying new things|stepping out of my comfort zone|comfort zone|being brave|bravery|courage;
not getting chased by a goose|surviving the geese|befriending a goose|befriending a squirrel|feeding the ducks|naming the campus squirrels|naming a goose;
beating my high score|beating a game|finishing elden ring|beat elden ring|elden ring|hollow knight|beat hollow knight|silksong|celeste|beating celeste|100 percent|100 percenting a game|platinum trophy|platinumed a game|my rank|ranking up|reached diamond|reached plat|ranked|immortal in valorant|radiant|global elite|chess rating|my chess elo|elo|reaching 1000 elo|1000 elo|1500 elo|my lichess rating|beat my dad at chess|beat my friend at chess|rubiks cube under a minute|solving a rubiks cube|sub 20|my cube time;
learning to skate|skating without holding on|skating backwards|learned to ski|skiing a blue run|black diamond|skiing a black diamond|first time skiing|first time snowboarding|snowboarding|first time skating|learned to swim this term|swimming a length|swimming a lap;
my lego set|finishing a 1000 piece puzzle|1000 piece puzzle|3000 piece puzzle|my puzzle;
calling the doctor myself|booking my own appointments|making phone calls|phone calls|calling to book things|ordering on the phone|ordering at a restaurant|ordering food without anxiety|going to the dentist|going to the doctor|getting my flu shot|flu shot|getting a vaccine|vaccines|taking my meds|taking my medication|staying on my meds|going to my appointments|getting diagnosed|my diagnosis|adhd diagnosis|getting an adhd diagnosis|figuring out my adhd|managing my adhd|managing my anxiety|managing my depression|managing my chronic illness|chronic illness|managing my diabetes|my health journey;
snowflakes i made today|this snowflake right here|the ornament i'm about to decorate|this ornament|coming to this station|playing snowdrift|getting a deep freeze|getting one in a snowstorm|my snowdrift score|record snowfall`
 ]},

{id:"e9", q:"A hobby that has nothing to do with school.", h:"What do you do just for you?",
 t:["Don't forget the you outside of school: {a}.","Make room for {a}.","You're more than your grades. You're also {a}."],
 a:[
`gaming|video games|games|playing games|playing video games|pc gaming|console gaming|mobile games|gamer|videogames;
reading|read|books|reading books|reading for fun|novels|fiction|fantasy books|romance books|romantasy|booktok|book club;
music|listening to music|playing music|making music|singing|instruments|an instrument;
drawing|draw|sketching|sketch|art|doodling|doodle|making art|digital art|illustration;
sports|playing sports|sport|athletics`,
`sleeping|sleep|napping|naps|my bed|lying down|resting|rotting|bed rotting;
scrolling|doom scrolling|tiktok|instagram|social media|reels|youtube shorts|my phone|twitter|x|reddit|pinterest|tumblr|discord;
procrastinating|procrastination|avoiding homework|stress|overthinking|worrying|crying|existential dread;
eating|food|snacking|snacks|eating out|trying restaurants|going to restaurants|food tasting|foodie|mukbangs|watching mukbangs;
shopping|online shopping|buying things|spending money|retail therapy|amazon|shein|temu|aliexpress;
watching tv|netflix|tv shows|binge watching|youtube|watching youtube|streaming|twitch|watching streamers|movies|watching movies|anime|watching anime|kdramas|watching kdramas|reality tv;
studying|homework|school|more school|learning|nothing|i dont have one|no hobbies|idk|what hobbies|i dont have time;
gossip|gossiping|tea|spilling tea|drama|watching drama|people watching|stalking|lurking`,
`guitar|playing guitar|acoustic guitar|electric guitar|bass|bass guitar|ukulele|uke;
piano|playing piano|keyboard|keys|synth;
painting|paint|watercolor|watercolour|acrylic painting|oil painting|gouache|canvas painting|paint by numbers;
photography|taking photos|taking pictures|photos|camera|film photography|film camera|35mm|digital photography|street photography|nature photography|portrait photography|astrophotography|phone photography;
cooking|cook|making food|recipes|trying new recipes|cooking new recipes|home cooking|meal prep;
baking|bake|cakes|cake decorating|cookies|bread|sourdough|pastry|making desserts|desserts|cupcakes|macarons|pies;
hiking|hike|trails|walking trails|bruce trail|nature walks|walking|long walks|going for walks|walks|walk;
running|run|jogging|marathon|half marathon|5k|10k|trail running|track|cross country;
knitting|knit|crochet|crocheting|amigurumi|yarn|fibre arts|fiber arts;
climbing|rock climbing|bouldering|indoor climbing|top rope|lead climbing|climb;
dance|dancing|ballet|hip hop dance|contemporary|jazz dance|tap|salsa|bachata|ballroom|kpop dance|kpop dance covers|bhangra|garba|bollywood dance|irish dance|breakdancing|breaking|swing dancing|latin dance|tiktok dances|pole dancing|pole;
writing|creative writing|write|poetry|poems|writing poetry|short stories|writing stories|fiction writing|fanfiction|fanfic|writing fanfiction|screenwriting|songwriting|journaling|journal|blogging|blog;
chess|playing chess|chess.com|lichess|chess puzzles|speed chess|blitz chess|bullet chess;
basketball|soccer|hockey|volleyball|baseball|softball|football|flag football|rugby|ultimate frisbee|ultimate|frisbee|disc golf|badminton|tennis|table tennis|ping pong|squash|pickleball|cricket|lacrosse|golf|field hockey|water polo|handball|dodgeball|curling|wrestling|fencing|archery|rowing|cycling|biking|mountain biking|skiing|snowboarding|skating|figure skating|speed skating|gymnastics|cheer|cheerleading|track and field|swimming|diving|surfing|skateboarding|longboarding|rollerblading|roller skating|martial arts|karate|taekwondo|judo|jiu jitsu|bjj|brazilian jiu jitsu|boxing|kickboxing|muay thai|mma|kung fu|aikido|krav maga|capoeira|kendo|weightlifting|lifting|powerlifting|bodybuilding|crossfit|calisthenics|yoga|pilates|barre|spin|spin class|gym|going to the gym|working out|fitness;
gardening|garden|plants|houseplants|plant care|growing plants|indoor plants|succulents|bonsai|plant parent|propagating|growing herbs|vegetable garden;
lego|legos|building lego|lego sets|lego technic|model building|model kits|gundam|gunpla|miniatures|painting miniatures|warhammer|warhammer 40k|model trains|model planes|diorama|dioramas;
singing|sing|choir|karaoke|vocals|singing lessons|acapella|a cappella;
movies|film|watching films|cinema|letterboxd|film buff|film critic|film analysis|going to the movies|indie films|horror movies|watching horror movies;
sewing|sew|embroidery|cross stitch|quilting|needlepoint|making clothes|fashion design|cosplay|cosplaying|costume making;
swimming|swim|lane swimming|laps;
yoga|meditation|mindfulness|breathwork|tai chi|qigong;
board games|tabletop games|card games|magic the gathering|mtg|pokemon cards|pokemon tcg|yugioh|catan|board game nights|dungeons and dragons|d and d|dnd|d&d|ttrpg|tabletop rpg|pathfinder|warhammer|game nights;
puzzles|jigsaw puzzles|crosswords|sudoku|wordle|word games|rubiks cube|cubing|speedcubing|logic puzzles|escape rooms;
skincare|makeup|doing makeup|nails|nail art|doing my nails|hair|hairstyling|braiding|fashion|style|outfits|thrifting|thrift shopping|vintage shopping|sneakers|sneaker collecting|streetwear;
travel|travelling|traveling|exploring|road trips|exploring new places|backpacking|camping|going camping|outdoors|being outside|nature|fishing|hunting|kayaking|canoeing|paddleboarding|sailing|boating;
volunteering|volunteer|community service|helping people|charity work|mentoring|coaching|coaching kids|refereeing|ref;
cars|working on cars|car meets|f1|formula 1|watching f1|racing|sim racing|karting|go karting|motorcycles|motorbikes|dirt biking;
collecting|collecting things|collections|stamps|coins|stamp collecting|coin collecting|vinyl|vinyl records|collecting vinyl|records|cds|figurines|funko pops|plushies|squishmallows|collecting squishmallows|jellycats|sonny angels|smiskis|labubus|blind boxes|cards|trading cards|sports cards|hockey cards|basketball cards|comics|comic books|manga|collecting manga|books|first editions|crystals|rocks|fossils|shells|keychains|pins|enamel pins|stickers|stationery|pens|fountain pens|journals|perfume|fragrances|candles|mugs|snow globes;
anime|manga|reading manga|webtoons|manhwa|light novels|cosplay|conventions|anime conventions|fan expo|comic con;
podcasts|listening to podcasts|audiobooks|true crime|true crime podcasts;
coding|programming|making websites|web design|game development|game dev|making games|making apps|app development|tech|tinkering|electronics|arduino|raspberry pi|building computers|building pcs|pc building|mechanical keyboards|keyboards|3d printing|3d modeling|blender|cad|robotics;
youtube|making videos|video editing|editing|vlogging|filmmaking|making films|tiktoks|making tiktoks|content creation|streaming|twitch streaming|podcasting|making a podcast;
learning languages|languages|language learning|duolingo|learning japanese|learning korean|learning spanish|learning french|learning mandarin|learning arabic|learning hindi|learning punjabi|learning tagalog|learning italian|learning german|learning portuguese|learning asl|sign language|linguistics|conlangs|making languages`,
`drums|drumming|percussion|violin|fiddle|viola|cello|double bass|flute|clarinet|saxophone|sax|trumpet|trombone|french horn|tuba|oboe|bassoon|harp|harmonica|accordion|banjo|mandolin|sitar|tabla|harmonium|dhol|erhu|guzheng|pipa|koto|shamisen|kalimba|ocarina|recorder|bagpipes|steel drums|handpan|theremin|turntables|djing|dj|dj ing|beat making|making beats|producing|music production|fl studio|ableton|logic pro|garageband|composing|composition|arranging|music theory|songwriting;
pottery|ceramics|throwing pottery|wheel throwing|hand building|clay|sculpting|sculpture|air dry clay|polymer clay|clay earrings|making earrings|jewelry making|jewellery making|beading|beads|friendship bracelets|bracelets|making bracelets|macrame|weaving|tapestry|rug tufting|tufting|punch needle|felting|needle felting|wet felting|spinning yarn|dyeing yarn|tie dye|batik|block printing|linocut|printmaking|screen printing|screenprinting;
calligraphy|hand lettering|lettering|brush lettering|bullet journaling|bujo|journaling with stickers|scrapbooking|scrapbook|junk journaling|collage|collaging|zines|making zines|mixed media|art journaling|sticker making|making stickers;
woodworking|wood carving|whittling|carpentry|furniture making|furniture restoration|restoring furniture|upcycling furniture|diy|diy projects|home improvement|interior design|decorating|redecorating|room makeovers|home decor|candle making|soap making|resin art|resin|epoxy;
birdwatching|bird watching|birding|bird photography|nature journaling|foraging|mushroom foraging|mushroom hunting|mycology|mushrooms|botany|plant identification|herbalism|beekeeping|astronomy|stargazing|telescopes|space|astrology|tarot|tarot cards|crystals|witchcraft|spirituality;
geocaching|orienteering|metal detecting|treasure hunting|urban exploring|urbex|parkour|freerunning|tricking|slacklining|juggling|unicycling|yo yo|kendama|hacky sack|footbag|frisbee freestyle|magic|magic tricks|card tricks|cardistry|lockpicking|knots|knot tying;
fishing|fly fishing|ice fishing|fly tying|hunting|archery|bowhunting|camping|backpacking|canoe tripping|canoe camping|winter camping|survival skills|bushcraft|wilderness|outdoor skills;
cosplay|larping|larp|renaissance faire|ren faire|medieval reenactment|historical reenactment|hema|sword fighting|fencing|stage combat;
theatre|acting|drama|improv|stand up|stand up comedy|sketch comedy|musical theatre|musicals|broadway|opera|ballet|going to shows|going to concerts|concerts|live music|festivals|music festivals|raves|edm shows;
genealogy|family history|family tree|history|reading about history|history youtube|military history|ancient history|mythology|greek mythology|norse mythology|philosophy|reading philosophy|debate|politics|current events|the news|economics|investing|stocks|crypto|personal finance|real estate|entrepreneurship|side hustles|reselling|flipping|thrift flipping|sneaker reselling;
trivia|pub trivia|quiz nights|jeopardy|watching jeopardy|game shows|geography|geoguessr|maps|map making|cartography|flags|vexillology|wikipedia|wikipedia rabbit holes|documentaries|video essays|learning random facts;
volunteering at an animal shelter|animal shelter|fostering animals|fostering cats|fostering dogs|dog walking|pet sitting|horses|horseback riding|equestrian|riding|dressage|show jumping;
competitive gaming|esports|valorant|league of legends|league|csgo|counter strike|cs2|overwatch|apex|apex legends|fortnite|minecraft|roblox|genshin|genshin impact|honkai star rail|zelda|pokemon|smash|smash bros|super smash bros|mario kart|animal crossing|stardew valley|the sims|sims|elden ring|dark souls|souls games|speedrunning|speedruns|retro games|retro gaming|game collecting|chess.com puzzles|rhythm games|osu|beat saber|vr|vr games|virtual reality|sim racing|flight simulator|msfs|kerbal space program|factorio|civilization|civ|strategy games|crusader kings|europa universalis|hearts of iron|paradox games|rimworld|terraria|tetris|tetris 99|tetris effect|puzzle games|cozy games|visual novels|indie games|game design|level design|modding|game mods|minecraft mods|redstone|minecraft redstone|minecraft building;
fantasy sports|fantasy football|fantasy hockey|fantasy basketball|sports betting|sports stats|sports analytics|watching sports|watching hockey|watching basketball|watching soccer|watching football|leafs|raptors|blue jays|ticats|nba|nhl|nfl|mlb|premier league|champions league|la liga|serie a|bundesliga|mls|ufc|wwe|wrestling|pro wrestling|boxing matches|tennis matches|cricket matches|ipl|formula 1|nascar|indycar|motogp|cycling races|tour de france|the olympics|olympics`,
`competitive yo yo|competitive rubiks cube|competitive eating|competitive cup stacking|cup stacking|sport stacking|competitive jump rope|double dutch|jump rope|hula hooping|poi|poi spinning|flow arts|fire spinning|staff spinning|baton twirling|color guard|marching band|drum corps|drumline;
falconry|beekeeping|keeping chickens|raising chickens|aquariums|fishkeeping|aquascaping|reef tanks|shrimp keeping|terrariums|vivariums|reptiles|keeping reptiles|snakes|geckos|tarantulas|isopods|keeping isopods|ant farms|ant keeping|antkeeping|insects|entomology|bug collecting|butterfly gardening|moth watching;
amateur radio|ham radio|radio|shortwave|morse code|cryptography|ciphers|codes|puzzle hunts|alternate reality games|args|escape room design|crosswords construction|making crosswords|cryptic crosswords;
competitive debate|model un|mun|mock trial|public speaking|toastmasters|spoken word|slam poetry|poetry slams|open mics|storytelling|the moth|podcasting|radio hosting|cfmu|campus radio|radio dj;
bonsai|ikebana|flower arranging|floristry|pressed flowers|flower pressing|dried flowers|terrarium building|kokedama|moss balls|herb gardens|hydroponics|microgreens|composting|vermicomposting|worm composting|sourdough baking|fermentation|fermenting|kombucha|brewing kombucha|kimchi making|pickling|canning|preserving|jam making|cheese making|chocolate making|candy making|coffee|home barista|latte art|espresso|pour over|tea|tea ceremony|gongfu cha|tea tasting|matcha|mixology|mocktails|cocktails|wine tasting|cooking competitions|food photography|food blogging|restaurant reviews|reviewing restaurants|google reviews|hot sauce|making hot sauce|spicy food challenges|ramen hunting|bubble tea tasting;
kite flying|kites|paper airplanes|origami|paper crafts|papercraft|paper snowflakes|quilling|paper quilling|pop up books|bookbinding|book binding|making books|book restoration|book repair|book collecting|bookstores|library visits|book reviews|bookstagram|booktube|annotating books|reading challenges;
watching planes|plane spotting|train spotting|trains|model railways|bus spotting|transit|public transit|transit maps|urban planning|cities skylines|city building games|architecture|architecture photography|sketching buildings|urban sketching|plein air painting|plein air;
skiing in the backcountry|backcountry skiing|ski touring|splitboarding|ice climbing|mountaineering|alpine climbing|via ferrata|canyoning|caving|spelunking|scuba diving|scuba|freediving|snorkeling|sailing|windsurfing|kitesurfing|wakeboarding|water skiing|whitewater rafting|whitewater kayaking|sea kayaking|stand up paddleboarding|sup|dragon boat|dragon boating|rowing|crew;
genealogy research|ancestry|23andme|dna testing|heraldry|calligraphy in arabic|arabic calligraphy|chinese calligraphy|shodo|japanese calligraphy|sumi e|ink painting|henna|mehndi|henna art|rangoli|kolam|madhubani|warli|mandala art|dot painting|aboriginal art|indigenous beadwork|beadwork|quillwork|porcupine quillwork|birch bark|dreamcatchers|making dreamcatchers|moccasins|ribbon skirts|making ribbon skirts|drumming circle|powwow dancing|jingle dress|fancy shawl|hoop dancing|throat singing|inuit games;
classic cars|car restoration|restoring cars|detailing cars|car detailing|car photography|car spotting|carspotting|motorcycles restoration|bike repair|bike mechanics|fixing bikes|building bikes|fixies|bmx|bmx riding|scooters|scooter tricks|skate parks|skatepark;
collecting rocks|rockhounding|gemstones|minerals|fossil hunting|paleontology|dinosaurs|meteorites|shell collecting|beachcombing|sea glass|sea glass collecting|metal detecting at the beach|mudlarking;
thrifting for vintage|vintage clothing|vintage fashion|vintage furniture|antiques|antiquing|estate sales|garage sales|yard sales|flea markets|vinyl digging|crate digging|record shopping|cd collecting|cassette collecting|vhs collecting|dvd collecting|retro tech|vintage computers|old cameras|camera collecting|polaroids|instax|disposable cameras|film developing|darkroom|darkroom printing|cyanotype|pinhole photography|lomography`,
`competitive scrabble|scrabble tournaments|crossword tournaments|spelling bees|quiz bowl|reach for the top|trivia leagues|pub quiz leagues|jeopardy tryouts|game show auditions;
taxidermy|bone collecting|vulture culture|skull collecting|insect pinning|butterfly pinning|herbarium|pressed plant collection;
lockpicking sport|locksport|escape artistry|ventriloquism|puppetry|puppets|marionettes|clowning|mime|circus|circus arts|aerial silks|silks|aerial hoop|lyra|trapeze|acrobatics|acro|acroyoga|contortion|stilts|stilt walking|unicycle|fire breathing|sword swallowing|knife throwing|axe throwing|whip cracking|lasso|rodeo|bull riding|barrel racing;
competitive dog sports|dog agility|agility|dog training|training my dog|dog tricks|teaching my dog tricks|dog shows|cat shows|horse shows|rabbit hopping|chicken shows|pigeon racing|pigeons|homing pigeons|falcons|owls|bird rescue|wildlife rehab|wildlife rehabilitation|turtle rescue|frog surveys|citizen science|inaturalist|ebird|bird counts|christmas bird count|bioblitz;
whistling|beatboxing|throat singing|overtone singing|yodelling|yodeling|kazoo|spoons|playing the spoons|washboard|jug band|handbells|bell ringing|change ringing|carillon|organ|pipe organ|church organ|harpsichord|mbira|didgeridoo|bagpipe|hurdy gurdy|nyckelharpa|lute|oud|santur|qanun|duduk|shakuhachi|taiko|gamelan;
miniature painting|dollhouses|dollhouse miniatures|miniature food|tiny food|tiny cooking|doll collecting|american girl dolls|bjd|ball jointed dolls|doll customizing|toy customizing|action figure collecting|hot wheels|matchbox cars|die cast|diecast cars|rc cars|remote control cars|drones|drone racing|fpv drones|model rockets|rocketry|kites;
making perfume|perfumery|fragrance making|candle pouring|incense making|natural dyes|indigo dyeing|shibori|marbling|paper marbling|suminagashi|bookbinding by hand|leatherworking|leather crafting|blacksmithing|forging|knife making|metalworking|silversmithing|glassblowing|stained glass|mosaic|mosaics|lampworking|enamelling|chainmail|chainmaille|armour making|cosplay armour|foam smithing|prop making|special effects makeup|sfx makeup|drag|doing drag|drag makeup|ballroom culture|voguing;
writing letters|pen pals|penpals|postcrossing|postcards|sending postcards|snail mail|stamp art|mail art|wax seals|writing to strangers|letters to my future self;
memorizing pi|pi digits|mental math|speed math|abacus|soroban|rubiks cube blindfolded|blindfold cubing|memory sports|memory championships|card memorization;
making snowflakes|paper snowflakes|ornament making|making ornaments|gingerbread houses|gingerbread house building|ice sculpting|snow sculpting|building snowmen|snow forts|igloo building`
 ]},
];
