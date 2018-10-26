import { Movie } from 'src/movie.js';
import { Actor } from 'src/actor.js';
import { Logger } from 'src/logger.js';

var theDarkNight = new Movie("The Dark Night", 2012, "2hs");

theDarkNight.play;

var actor1 = new Actor("Christian Bale", 30);

var logger = new Logger();
theDarkNight.on('play',logger.log);

theDarkNight.addCast(actor1);
theDarkNight.cast;

