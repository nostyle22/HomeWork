var a = 10;
b = 20;
c = 30;
d = 40;



console.log('a=', a, 'b=', b, 'c=', c, 'd=', d);

if (a > b, a > c, a > d) {
	a *= 1000;
	if (b > c, b > d) {
		b *= 100;
		if (c > d) {
			c *= 10;
		}
		if (d > c) {
			d *= 10;
		}
	}

	if (c > b, c > d) {
		c *= 100;
		if (b > d) {
			b *= 10;
		}
		if (d > b) {
			d *= 10;
		}
	}

	if (d > b, d > c) {
		d *= 100;
		if (b > c) {
			b *= 10;
		}
		if (c > b) {
			c *= 10;
		}
	}
}

if (b > a, b > c, b > d) {
	b *= 1000;
	if (a > c, a > d) {
		a *= 100;
		if (c > d) {
			c *= 10;
		}
		if (d > c) {
			d *= 10;
		}
	}

	if (c > a, c > d) {
		c *= 100;
		if (a > d) {
			a *= 10;
		}
		if (d > a) {
			d *= 10;
		}
	}

	if (d > a, d > c) {
		d *= 100;
		if (a > c) {
			a *= 10;
		}
		if (c > a) {
			c *= 10;
		}
	}
}

if (c > b, c > a, c > d) {
	c *= 1000;
	if (b > a, b > d) {
		b *= 100;
		if (a > d) {
			a *= 10;
		}
		if (d > a) {
			d *= 10;
		}
	}

	if (a > b, a > d) {
		a *= 100;
		if (b > d) {
			b *= 10;
		}
		if (d > b) {
			d *= 10;
		}
	}

	if (d > b, d > a) {
		d *= 100;
		if (b > a) {
			b *= 10;
		}
		if (a > b) {
			a *= 10;
		}
	}
}

if (d > b, d > c, d > a) {
	d *= 1000;
	if (b > c, b > a) {
		b *= 100;
		if (c > a) {
			c *= 10;
		}
		if (a > c) {
			a *= 10;
		}
	}

	if (c > b, c > a) {
		c *= 100;
		if (b > a) {
			b *= 10;
		}
		if (a > b) {
			a *= 10;
		}
	}

	if (a > b, a > c) {
		a *= 100;
		if (b > c) {
			b *= 10;
		}
		if (c > b) {
			c *= 10;
		}
	}
}
console.log('a=', a, 'b=', b, 'c=', c, 'd=', d);