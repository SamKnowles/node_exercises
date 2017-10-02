/*
EXERCISE 7:

        Write a small function called "getDanceStyle" that takes a parameter called "time" and a parameter called "tempo" and returns the dance style that corresponds to both. If no style matches perfectly, then return the string "no match found".

        Dance Style Table:

                     +------------------------------------------+
                     |               TIME SIGNAURE              |
                     +-----------+-----------+------------------+
                     |    4/4    |    2/4    |        3/4       |
                     +-----------+-----------+------------------+
             84-93   |           |           | 'Waltz'          |
                     +-----------+-----------+------------------+
             150-180 |           |           | 'Viennese Waltz' |
                     +-----------+-----------+------------------|
     TEMPO   112-128 | 'Cha-Cha' |           |                  |
                     +-----------+-----------+------------------+
             152-176 | 'Jive'    |           |                  |
                     +-----------+-----------+------------------+
             120-132 |           | 'Tango'   |                  |
                     +-----------+-----------+------------------+


        For example:

        getDanceStyle('4/4',120) should return 'Cha-Cha'
        getDanceStyle('2/4',120) should return 'Tango'
        getDanceStyle('3/4',94) should return 'no match found'
*/

function getDanceStyle(time, tempo) {
	var danceStyle = 'no match found';
  if ( time === '4/4' && tempo <= 128 && tempo >= 112) {
			danceStyle = 'Cha-Cha';
	}
	else if ( time === '4/4' && tempo >= 152 && tempo <= 176 ) {
		danceStyle = 'Jive';
	}
	else if ( time === '2/4' && tempo >= 120 && tempo <= 132 ) {
		danceStyle = 'Tango';
	}
	else if ( time === '3/4' && tempo >= 84 && tempo <= 93 ) {
		danceStyle = 'Waltz';
	}
	else if ( time === '3/4' && tempo >= 150 && tempo <= 180 ) {
		danceStyle = 'Viennese Waltz';
	}
	return danceStyle;
}
