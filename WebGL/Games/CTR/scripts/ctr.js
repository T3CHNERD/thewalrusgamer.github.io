(function() {
 function da() {
  return function() {}
 }

 function ja(X) {
  return function(aa) {
   this[X] = aa
  }
 }

 function Ea(X) {
  return function() {
   return this[X]
  }
 }

 function Ia(X) {
  return function() {
   return X
  }
 }
 (function() {
  var X = function() {
    var a;
    (function() {
     var c = !1,
      d = /var xyz/.test(da()) ? /\b_super\b/ : /.*/;
     a = da();
     a.extend = function(b) {
      function f() {
       !c && this.init && this.init.apply(this, arguments)
      }
      var a = this.prototype;
      c = !0;
      var g = new this;
      c = !1;
      for (var h in b) g[h] = "function" == typeof b[h] && "function" == typeof a[h] && d.test(b[h]) ? function(b, f) {
       return function() {
        var c = this.n;
        this.n = a[b];
        var d = f.apply(this, arguments);
        this.n = c;
        return d
       }
      }(h, b[h]) : b[h];
      f.prototype = g;
      f.extend = arguments.callee;
      return f
     }
    })();
    return a
   }(),
   aa =
   function() {
    function a(a, d, b, f) {
     this.I = a;
     this.L = d;
     this.K = b;
     this.F = f
    }
    a.prototype.Xh = function() {
     return "rgba(" + (255 * this.I >> 0) + "," + (255 * this.L >> 0) + "," + (255 * this.K >> 0) + "," + this.F.toFixed(2) + ")"
    };
    a.prototype.jj = function(a) {
     return this.I === a.I && this.L === a.L && this.K === a.K && this.F === a.F
    };
    a.prototype.copy = function() {
     return new a(this.I, this.L, this.K, this.F)
    };
    a.prototype.qa = function(a) {
     this.I = a.I;
     this.L = a.L;
     this.K = a.K;
     this.F = a.F
    };
    a.prototype.add = function(a) {
     this.I += a.I;
     this.L += a.L;
     this.K += a.K;
     this.F += a.F
    };
    a.prototype.multiply =
     function(a) {
      this.I *= a;
      this.L *= a;
      this.K *= a;
      this.F *= a
     };
    a.Fb = new a(0, 0, 0, 0);
    a.lb = new a(1, 1, 1, 1);
    a.red = new a(1, 0, 0, 1);
    a.blue = new a(0, 0, 1, 1);
    a.green = new a(0, 1, 0, 1);
    a.zD = new a(0, 0, 0, 1);
    a.Xu = a.lb;
    a.tk = {
     Qi: "rgba(255,255,255,1)",
     nD: "rgba(0,0,0,0)"
    };
    return a
   }(),
   Q = function() {
    return {
     j: 0,
     mb: 1,
     Ub: 2,
     Lf: 4,
     Jb: 8,
     Mf: 16,
     Bf: 32,
     T: 18,
     parse: function(a) {
      var c = this.j;
      0 < a.indexOf("LEFT") ? c = this.mb : 0 < a.indexOf("HCENTER") || "CENTER" === a ? c = this.Ub : 0 < a.indexOf("RIGHT") && (c = this.Lf);
      0 < a.indexOf("TOP") ? c |= this.Jb : 0 < a.indexOf("VCENTER") ||
       "CENTER" === a ? c |= this.Mf : 0 < a.indexOf("BOTTOM") && (c |= this.Bf);
      return c
     }
    }
   }(),
   O = function() {
    function a(a, d) {
     this.x = a;
     this.y = d
    }
    a.prototype.add = function(a) {
     this.x += a.x;
     this.y += a.y
    };
    a.prototype.Za = function(a) {
     this.x -= a.x;
     this.y -= a.y
    };
    a.prototype.multiply = function(a) {
     this.x *= a;
     this.y *= a
    };
    a.prototype.Xm = function(a) {
     this.x /= a;
     this.y /= a
    };
    a.prototype.Ma = function(a) {
     var d = this.x - a.x;
     a = this.y - a.y;
     return Math.sqrt(d * d + a * a)
    };
    a.prototype.kd = function() {
     return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    a.prototype.Nn = function() {
     return 0 ===
      this.x && 0 === this.y
    };
    a.prototype.jj = function(a) {
     return this.x === a.x && this.y === a.y
    };
    a.prototype.normalize = function() {
     this.multiply(1 / this.kd())
    };
    a.prototype.a = function() {
     return Math.atan(this.y / this.x)
    };
    a.prototype.gg = function() {
     return Math.atan2(this.y, this.x)
    };
    a.prototype.copy = function() {
     return new a(this.x, this.y)
    };
    a.prototype.qa = function(a) {
     this.x = a.x;
     this.y = a.y
    };
    a.prototype.round = function() {
     this.x = Math.round(this.x);
     this.y = Math.round(this.y)
    };
    a.prototype.rotate = function(a) {
     var d = Math.cos(a);
     a =
      Math.sin(a);
     var b = this.x * a + this.y * d;
     this.x = this.x * d - this.y * a;
     this.y = b
    };
    a.prototype.pa = function(a, d, b) {
     this.x -= d;
     this.y -= b;
     this.rotate(a);
     this.x += d;
     this.y += b
    };
    a.prototype.toString = function() {
     return "[" + this.x + ", " + this.y + "]"
    };
    a.Qa = function() {
     return new a(0, 0)
    };
    a.iF = new a(0, 0);
    a.Gh = function() {
     return new a(2147483647, 2147483647)
    };
    a.GB = a.Gh();
    a.add = function(c, d) {
     return new a(c.x + d.x, c.y + d.y)
    };
    a.Za = function(c, d) {
     return new a(c.x - d.x, c.y - d.y)
    };
    a.multiply = function(c, d) {
     return new a(c.x * d, c.y * d)
    };
    a.Xm = function(c,
     d) {
     return new a(c.x / d, c.y / d)
    };
    a.Ma = function(a, d, b, f) {
     a -= b;
     d -= f;
     return Math.sqrt(a * a + d * d)
    };
    a.ut = function(c) {
     return new a(-c.y, c.x)
    };
    a.gA = function(c) {
     return new a(c.y, -c.x)
    };
    a.normalize = function(a) {
     return this.multiply(a, 1 / a.kd())
    };
    a.wE = function(c) {
     return new a(-c.x, -c.y)
    };
    a.Hw = Array(64);
    a.Iw = Array(64);
    a.ex = function(c, d) {
     var b = new a(0, 0);
     a.Wt(c, d, b);
     return b
    };
    a.Wt = function(c, d, b) {
     var f = c.length;
     if (1 >= f) b.x = b.y = 0;
     else {
      for (var e = a.Hw, g = a.Iw, h = 1 - d, l = 0; l < f; l++) {
       var n = c[l];
       e[l] = n.x;
       g[l] = n.y
      }
      for (c = f - 1; 0 <
       c; f--, c--)
       for (l = 0, n = 1; l < c; l++, n++) e[l] = e[l] * h + e[n] * d, g[l] = g[l] * h + g[n] * d;
      b.x = e[0];
      b.y = g[0]
     }
    };
    a.Tx = function(c) {
     return new a(Math.cos(c), Math.sin(c))
    };
    return a
   }(),
   K = {
    $c: 5,
    Kk: 0.15,
    j: -1,
    Df: 1E-6,
    Ri: 1,
    ew: 80,
    XB: 0.15,
    SC: 10,
    ev: -2,
    If: 2147483647
   },
   Y = function(a) {
    return {
     jb: function(a) {
      this.Zh(document.getElementById(a))
     },
     Zh: function(c) {
      this.element = this.id = c;
      this.context = this.element.getContext("2d");
      this.eB(a.Xu)
     },
     eB: function(a) {
      a = a.Xh();
      this.context.fillStyle = a;
      this.context.strokeStyle = a
     },
     YE: function(a) {
      this.context.fillStyle =
       a;
      this.context.strokeStyle = a
     },
     Sx: function(a, d) {
      var b = this.context,
       f = a[0];
      b.fillStyle = d;
      b.beginPath();
      b.moveTo(f.x, f.y);
      for (var e = 1, g = a.length; e < g; e += 2) f = a[e], b.lineTo(f.x, f.y);
      for (e = a.length - 2; 0 <= e; e -= 2) f = a[e], b.lineTo(f.x, f.y);
      b.fill()
     }
    }
   }(aa),
   va = {
    Ji: "ACTION_SET_VISIBLE",
    Jl: "ACTION_SET_TOUCHABLE",
    Kl: "ACTION_SET_UPDATEABLE",
    Ii: "ACTION_SET_DRAWQUAD",
    yl: "ACTION_PLAY_TIMELINE",
    yq: "ACTION_PAUSE_TIMELINE",
    sw: "ACTION_STOP_TIMELINE",
    Pv: "ACTION_JUMP_TO_TIMELINE_FRAME"
   },
   Ja = function() {
    function a(a, b, f) {
     this.Hr =
      a;
     this.Ir = b;
     this.Rg = f
    }

    function c(a, b) {
     this.Kw = a;
     this.data = b
    }
    c.create = function(d, b, f, e) {
     return new c(d, new a(b, f, e))
    };
    return c
   }(),
   Ka = {
    $d: 0,
    Me: 1,
    Le: 2,
    De: 3,
    zd: 4,
    gC: 5
   },
   pa = function(a, c, d, b) {
    function f() {
     this.b = a.Qa();
     this.scale = a.Qa();
     this.Sa = 0;
     this.color = c.lb.copy();
     this.Ne = []
    }

    function e(b, a, f, e) {
     this.Rc = b;
     this.fi = a;
     this.ug = f;
     this.value = e
    }
    f.prototype.copy = function() {
     var b = new f;
     b.b = this.b.copy();
     b.scale = this.scale.copy();
     b.Sa = this.Sa;
     b.color = this.color.copy();
     b.Ne = this.Ne.slice(0);
     return b
    };
    e.prototype.copy =
     function() {
      return new e(this.Rc, this.fi, this.ug, this.value.copy())
     };
    e.D = {
     LINEAR: 0,
     PC: 1,
     Ad: 2,
     Hb: 3
    };
    e.Zn = function() {
     return new e(0, b.$d, e.D.LINEAR, new f)
    };
    e.Oa = function(a, c, d, n) {
     var q = new f;
     q.b.x = a;
     q.b.y = c;
     return new e(n, b.$d, d, q)
    };
    e.Cj = function(a, c, d, n) {
     var q = new f;
     q.scale.x = a;
     q.scale.y = c;
     return new e(n, b.Me, d, q)
    };
    e.re = function(a, c, d) {
     var n = new f;
     n.Sa = a;
     return new e(d, b.Le, c, n)
    };
    e.za = function(a, c, d) {
     var n = new f;
     n.color = a;
     return new e(d, b.De, c, n)
    };
    e.Eh = function(a, c) {
     var d = new f;
     d.Ne = a;
     return new e(c,
      b.zd, e.D.LINEAR, d)
    };
    e.bz = function(a, c) {
     var l = new f,
      n = d.create(a, c, 0, 0);
     l.Ne = [n];
     return new e(0.04, b.zd, e.D.LINEAR, l)
    };
    return e
   }(O, aa, Ja, Ka),
   rb = function(a, c, d, b) {
    return a.extend({
     init: function(a, e) {
      this.type = e;
      this.state = 0;
      this.Yj = !1;
      this.ke = this.startTime = 0;
      this.ma = [];
      this.ub = a;
      this.da = b.j;
      this.ee = c.Zn();
      this.$g = c.Zn();
      this.hh = c.Zn();
      this.kb = this.Da = 0;
      e === d.zd && (this.Jw = [])
     },
     hd: function() {
      this.state = 0
     },
     C: function(a) {
      this.hk(a, this.ma.length)
     },
     hk: function(a, b) {
      this.ma[b] = a;
      this.type === d.zd && this.Jw.push(a.value.Ne)
     },
     mn: function(a) {
      for (var b = 0, c = 0; c <= a; c++) b += this.ma[c].Rc;
      return b
     },
     OB: function() {
      this.startTime = this.mn(0);
      this.ke = this.mn(this.ma.length - 1)
     },
     Ou: function(a) {
      0 === this.state ? this.ub.xd ? this.ub.time + a < this.startTime || this.ub.time > this.ke || (1 < this.ma.length ? (this.state = 1, this.da = this.ma.length - 1, this.kb = this.ke - this.ub.time, this.da--, this.bg(this.ma[this.da + 1], this.ma[this.da].Rc)) : this.bg(this.ma[0], 0)) : this.ub.time - a > this.ke || this.ub.time < this.startTime || (1 < this.ma.length ? (this.state = 1, this.da = 0, this.kb =
       this.ub.time - this.startTime, this.da++, this.bg(this.ma[this.da - 1], this.ma[this.da].Rc)) : this.bg(this.ma[0], 0)) : (this.Da -= a, this.Da <= b.Df && (this.ub.Hh && this.ub.Hh(this.ub, this.ma[this.da], this.da), this.kb = -this.Da, this.da === this.ma.length - 1 ? (this.ng(this.ma[this.da]), this.state = 0) : 0 === this.da ? (this.ng(this.ma[this.da]), this.state = 0) : this.ub.xd ? (this.da--, a = this.ma[this.da + 1], this.bg(a, a.Rc)) : (this.da++, this.bg(this.ma[this.da - 1], this.ma[this.da].Rc))))
     },
     Su: function(a) {
      var e = this.ub,
       g;
      if (0 === this.state) e.time >=
       this.startTime && e.time <= this.ke && (this.state = 1, e.xd ? (this.da = this.ma.length - 1, this.kb = this.ke - e.time, this.da--, g = this.ma[this.da + 1], this.qj(g, this.ma[this.da], g.Rc)) : (this.da = 0, this.kb = e.time - this.startTime, this.da++, g = this.ma[this.da], this.qj(this.ma[this.da - 1], g, g.Rc)));
      else {
       this.Da -= a;
       g = this.ma[this.da];
       if (g.ug === c.D.Ad || g.ug === c.D.Hb) switch (this.type) {
        case d.$d:
         var h = this.$g.value.b;
         g = h.x * a;
         var h = h.y * a,
          l = this.ee.value.b,
          n = l.x,
          q = l.y;
         l.x += g;
         l.y += h;
         e.element.x += (n + g / 2) * a;
         e.element.y += (q + h / 2) * a;
         break;
        case d.Me:
         h = this.$g.value.scale;
         g = h.x * a;
         h = h.y * a;
         l = this.ee.value.scale;
         n = l.x;
         q = l.y;
         l.x += g;
         l.y += h;
         e.element.Y += (n + g / 2) * a;
         e.element.fa += (q + h / 2) * a;
         break;
        case d.Le:
         g = this.$g.value.Sa * a;
         h = this.ee.value.Sa;
         this.ee.value.Sa += g;
         e.element.rotation += (h + g / 2) * a;
         break;
        case d.De:
         var m = this.ee.value.color;
         g = m.I;
         var h = m.L,
          l = m.K,
          n = m.F,
          p = this.$g.value.color,
          q = p.I * a,
          u = p.L * a,
          v = p.K * a,
          p = p.F * a;
         m.I += 2 * q;
         m.L += 2 * u;
         m.K += 2 * v;
         m.F += 2 * p;
         m = e.element.color;
         m.I += (g + q / 2) * a;
         m.L += (h + u / 2) * a;
         m.K += (l + v / 2) * a;
         m.F += (n + p / 2) * a
       } else if (g.ug ===
        c.D.LINEAR) switch (g = e.element, h = this.ee.value, this.type) {
        case d.$d:
         g.x += h.b.x * a;
         g.y += h.b.y * a;
         break;
        case d.Me:
         g.Y += h.scale.x * a;
         g.fa += h.scale.y * a;
         break;
        case d.Le:
         g.Sa += h.Sa * a;
         break;
        case d.De:
         g.color.I += h.color.I * a, g.color.L += h.color.L * a, g.color.K += h.color.K * a, g.color.F += h.color.F * a
       }
       this.Da <= b.Df && (e.Hh && e.Hh(e, this.ma[this.da], this.da), this.kb = -this.Da, this.da === this.ma.length - 1 ? (this.ng(this.ma[this.da]), this.state = 0) : 0 === this.da ? (this.ng(this.ma[this.da]), this.state = 0) : e.xd ? (this.da--, g = this.ma[this.da +
        1], this.qj(g, this.ma[this.da], g.Rc)) : (this.da++, g = this.ma[this.da], this.qj(this.ma[this.da - 1], g, g.Rc)))
      }
     },
     bg: function(a, b) {
      this.Da = b;
      this.ng(a);
      0 < this.kb && (this.Ou(this.kb), this.kb = 0)
     },
     ng: function(a) {
      switch (this.type) {
       case d.$d:
        var b = this.ub.element;
        a = a.value.b;
        if (this.Yj) {
         var c = this.hh.value.b;
         b.x = c.x + a.x;
         b.y = c.y + a.y
        } else b.x = a.x, b.y = a.y;
        break;
       case d.Me:
        a = a.value.scale;
        b = this.ub.element;
        this.Yj ? (c = this.hh.value.scale, b.Y = c.x + a.x, b.fa = c.y + a.y) : (b.Y = a.x, b.fa = a.y);
        break;
       case d.Le:
        this.ub.element.rotation =
         this.Yj ? this.hh.value.Sa + a.value.Sa : a.value.Sa;
        break;
       case d.De:
        b = this.ub.element.color;
        a = a.value.color;
        this.Yj ? (c = this.hh.value.color, b.I = c.I + a.I, b.L = c.L + a.L, b.K = c.K + a.K, b.F = c.F + a.F) : b.qa(a);
        break;
       case d.zd:
        for (b = a.value.Ne, a = 0, c = b.length; a < c; a++) {
         var h = b[a];
         h.Kw.Hs(h.data)
        }
      }
     },
     QA: function(a) {
      a = a.value;
      var b = this.ub.element;
      switch (this.type) {
       case d.$d:
        a.b.x = b.x;
        a.b.y = b.y;
        break;
       case d.Me:
        a.scale.x = b.Y;
        a.scale.y = b.fa;
        break;
       case d.Le:
        a.Sa = b.rotation;
        break;
       case d.De:
        a.color.qa(b.color)
      }
     },
     qj: function(a,
      b, g) {
      this.Da = g;
      this.QA(this.hh);
      this.ng(a);
      g = this.ee.value;
      var h = this.$g.value;
      switch (this.type) {
       case d.$d:
        var l = g.b,
         n = b.value.b;
        a = a.value.b;
        l.x = (n.x - a.x) / this.Da;
        l.y = (n.y - a.y) / this.Da;
        break;
       case d.Me:
        l = g.scale;
        n = b.value.scale;
        a = a.value.scale;
        l.x = (n.x - a.x) / this.Da;
        l.y = (n.y - a.y) / this.Da;
        break;
       case d.Le:
        g.Sa = (b.value.Sa - a.value.Sa) / this.Da;
        break;
       case d.De:
        l = g.color, n = b.value.color, a = a.value.color, l.I = (n.I - a.I) / this.Da, l.L = (n.L - a.L) / this.Da, l.K = (n.K - a.K) / this.Da, l.F = (n.F - a.F) / this.Da
      }
      a = b.ug === c.D.Ad;
      b = b.ug == c.D.Hb;
      if (a || b) switch (this.type) {
       case d.$d:
        l = g.b;
        b = h.b;
        l.multiply(2);
        b.x = l.x / this.Da;
        b.y = l.y / this.Da;
        a ? (l.x = 0, l.y = 0) : b.multiply(-1);
        break;
       case d.Me:
        l = g.scale;
        b = h.scale;
        l.multiply(2);
        b.x = l.x / this.Da;
        b.y = l.y / this.Da;
        a ? (l.x = 0, l.y = 0) : b.multiply(-1);
        break;
       case d.Le:
        g.Sa *= 2;
        h.Sa = g.Sa / this.Da;
        a ? g.Sa = 0 : h.Sa *= -1;
        break;
       case d.De:
        l = g.color, b = h.color, l.multiply(2), b.I = l.I / this.Da, b.L = l.L / this.Da, b.K = l.K / this.Da, b.F = l.F / this.Da, a ? l.multiply(0) : b.multiply(-1)
      }
      0 < this.kb && (this.Su(this.kb), this.kb = 0)
     }
    })
   }(X,
    pa, Ka, K),
   ma = function(a, c, d, b) {
    var f = a.extend({
     init: function() {
      this.length = this.time = 0;
      this.gf = b.j;
      this.state = f.ba.Og;
      this.Bj = f.ja.Wa;
      this.Tc = [];
      this.Hh = this.ab = null;
      this.xd = !1;
      this.element = null
     },
     C: function(a) {
      var b = this.Tc[a.fi];
      this.hk(a, null == b ? 0 : b.ma.length)
     },
     hk: function(a, b) {
      var f = this.Tc[a.fi];
      f || (this.Tc[a.fi] = f = new c(this, a.fi));
      f.hk(a, b)
     },
     Es: function(a) {
      return this.Tc[a]
     },
     play: function() {
      if (this.state !== f.ba.Kg) {
       this.time = 0;
       this.xd = !1;
       for (var a = this.length = 0, b = this.Tc.length; a < b; a++) {
        var c =
         this.Tc[a];
        c && (c.OB(), c.ke > this.length && (this.length = c.ke))
       }
      }
      this.state = f.ba.Aq;
      this.update(0)
     },
     pause: function() {
      this.state = f.ba.Kg
     },
     Ps: function(a, b) {
      this.state === f.ba.Og && (this.state = f.ba.Kg);
      this.update(this.Tc[a].mn(b) - this.time)
     },
     stop: function() {
      this.state = f.ba.Og;
      this.tx()
     },
     tx: function() {
      for (var a = 0, b = this.Tc.length; a < b; a++) {
       var f = this.Tc[a];
       f && f.hd()
      }
     },
     update: function(a) {
      if (this.state === f.ba.Aq) {
       this.time = this.xd ? this.time - a : this.time + a;
       for (var c = 0, h = this.Tc.length; c < h; c++) {
        var l = this.Tc[c];
        null != l && (l.type === d.zd ? l.Ou(a) : l.Su(a))
       }
       switch (this.Bj) {
        case f.ja.zq:
         !1 === this.xd && this.time >= this.length - b.Df ? (this.time = Math.max(0, this.length - (this.time - this.length)), this.xd = !0) : this.xd && this.time <= b.Df && (0 < this.gf && (this.gf--, 0 === this.gf && (this.stop(), this.ab && this.ab(this))), this.time = Math.min(-this.time, this.length), this.xd = !1);
         break;
        case f.ja.vb:
         this.time >= this.length - b.Df && (0 < this.gf && (this.gf--, 0 === this.gf && (this.stop(), this.ab && this.ab(this))), this.time = Math.min(this.time - this.length,
          this.length));
         break;
        case f.ja.Wa:
         this.time >= this.length - b.Df && (this.stop(), this.ab && this.ab(this))
       }
      }
     }
    });
    f.ja = {
     Wa: 0,
     vb: 1,
     zq: 2
    };
    f.ba = {
     Og: 0,
     Aq: 1,
     Kg: 2
    };
    return f
   }(X, rb, Ka, K),
   ia = function() {
    return {
     LD: 6.283185307179586,
     ec: function(a) {
      return 0.017453292519943295 * a
     },
     tg: function(a) {
      return 57.29577951308232 * a
     }
    }
   }(),
   ea = function(a, c, d, b, f, e, g, h) {
    return a.extend({
     init: function() {
      this.parent = null;
      this.hi = this.Zb = this.visible = !0;
      this.name = null;
      this.mg = this.Sd = this.rotation = this.height = this.width = this.ha = this.ga = this.y =
       this.x = 0;
      this.fa = this.Y = 1;
      this.color = c.lb.copy();
      this.Ku = this.Ju = 0;
      this.anchor = d.Jb | d.mb;
      this.oa = d.j;
      this.Nh = this.te = !0;
      this.Nj = !1;
      this.children = [];
      this.ze = [];
      this.Tf = b.j;
      this.yb = null
     },
     Ug: function() {
      var a = this.oa,
       b = this.parent,
       f = this.anchor;
      a !== d.j ? (a & d.mb ? this.ga = b.ga + this.x : a & d.Ub ? this.ga = b.ga + this.x + b.width / 2 : a & d.Lf && (this.ga = b.ga + this.x + b.width), a & d.Jb ? this.ha = b.ha + this.y : a & d.Mf ? this.ha = b.ha + this.y + b.height / 2 : a & d.Bf && (this.ha = b.ha + this.y + b.height)) : (this.ga = this.x, this.ha = this.y);
      f & d.Jb || (f & d.Mf ?
       this.ha -= this.height / 2 : f & d.Bf && (this.ha -= this.height));
      f & d.mb || (f & d.Ub ? this.ga -= this.width / 2 : f & d.Lf && (this.ga -= this.width))
     },
     wc: function() {
      this.Ug();
      var a = 0 !== this.Y && 0 !== this.fa && (1 !== this.Y || 1 !== this.fa),
       b = 0 !== this.rotation,
       c = 0 !== this.Ju || 0 !== this.Ku,
       d = f.context;
      d.save();
      if (a || b) {
       var e = this.ga + this.width / 2 + this.Sd,
        g = this.ha + this.height / 2 + this.mg,
        v = 0 !== e || 0 !== g;
       v && d.translate(e, g);
       b && d.rotate(h.ec(this.rotation));
       a && d.scale(this.Y, this.fa);
       v && d.translate(-e, -g)
      }
      c && d.translate(this.Ju, this.Ku);
      this.Tj =
       d.globalAlpha;
      1 !== this.color.F && this.color.F !== this.Tj && (d.globalAlpha = this.color.F)
     },
     B: function() {
      this.wc();
      this.vc()
     },
     Vf: function() {
      var a = f.context;
      a.strokeStyle = "red";
      a.strokeRect(this.ga, this.ha, this.width, this.height)
     },
     vc: function() {
      var a = f.context,
       b = 1 !== this.color.F && this.color.F !== this.Tj;
      if (this.QD) {
       var c = this.ga + (this.width >> 1) + this.Sd,
        d = this.ha + (this.height >> 1) + this.mg;
       a.save();
       a.lineWidth = 5;
       a.strokeStyle = "#ff0000";
       a.beginPath();
       a.moveTo(c, d);
       a.lineTo(c, d - 100);
       a.closePath();
       a.stroke();
       a.restore()
      }
      this.te ?
       !this.Nh && b && (f.context.globalAlpha = this.Tj) : (this.Ms && this.Vf(), a.restore(), this.Nh && b && (f.context.globalAlpha = this.color.F));
      for (var c = this.children, d = c.length, e = 0; e < d; e++) {
       var g = c[e];
       g.visible && g.B()
      }
      this.te ? (this.Ms && this.Vf(), a.restore()) : this.Nh && b && (f.context.globalAlpha = this.Tj)
     },
     update: function(a) {
      for (var b = this.children, f = b.length, c = 0; c < f; c++) {
       var d = b[c];
       d.hi && d.update(a)
      }
      this.yb && this.yb.update(a)
     },
     ay: function(a) {
      for (var b = this.children, f = b.length, c = 0; c < f; c++) {
       var d = b[c];
       if (d.name === a) return d;
       d = d.ay(a);
       if (null !== d) return d
      }
      return null
     },
     XE: function() {
      this.Ug();
      for (var a = this.ga, b = this.ha, f = this.ga + this.width, c = this.ha + this.height, d = this.children, e = d.length, g = 0; g < e; g++) {
       var h = d[g];
       h.Ug();
       h.ga < a && (a = h.ga);
       h.ha < b && (b = h.ha);
       var r = h.ga + h.width,
        h = h.ha + h.height;
       r > f && (f = r);
       h > c && (c = h)
      }
      this.width = f - a;
      this.height = c - b
     },
     Hs: function(a) {
      switch (a.Hr) {
       case e.Ji:
        this.visible = 0 !== a.Rg;
        break;
       case e.Kl:
        this.hi = 0 !== a.Rg;
        break;
       case e.Jl:
        this.Zb = 0 !== a.Rg;
        break;
       case e.yl:
        this.S(a.Rg);
        break;
       case e.yq:
        this.Sz();
        break;
       case e.sw:
        this.uu();
        break;
       case e.Pv:
        this.yb.Ps(a.Ir, a.Rg);
        break;
       default:
        return !1
      }
      return !0
     },
     U: function(a) {
      this.children.push(a);
      a.parent = this;
      return this.children.length - 1
     },
     ce: function(a, b) {
      this.children[b] = a;
      a.parent = this
     },
     Ht: function(a) {
      this.children.splice(a, 1).parent = null
     },
     Gt: function() {
      this.children = []
     },
     removeChild: function(a) {
      for (var b = this.children, f = b.length, c = 0; c < f; c++)
       if (a === b[c]) {
        this.Ht(c);
        break
       }
     },
     eb: function(a) {
      return this.children[a]
     },
     GD: function() {
      return this.children.length
     },
     getChildren: Ea("children"),
     Mr: function(a) {
      var b = this.ze.length;
      this.Kb(a, b);
      return b
     },
     Kb: function(a, b) {
      a.element = this;
      this.ze[b] = a
     },
     oA: function(a) {
      this.Tf === a && this.uu();
      a < this.ze.length && this.ze.splice(a, 1)
     },
     S: function(a) {
      this.yb && this.yb.state !== g.ba.Og && this.yb.stop();
      this.Tf = a;
      this.yb = this.ze[a];
      this.yb.play()
     },
     Sz: function() {
      this.yb.pause()
     },
     uu: function() {
      this.yb.stop();
      this.yb = null;
      this.Tf = b.j
     },
     qc: function(a) {
      return this.ze[a]
     },
     Kj: function(a, b) {
      for (var c = !1, f = this.children.length - 1; 0 <= f; f--) {
       var d =
        this.children[f];
       if (d && d.Zb && d.Kj(a, b) && !1 === c && (c = !0, !this.Nj)) break
      }
      return c
     },
     Lj: function(a, b) {
      for (var c = !1, f = this.children.length - 1; 0 <= f; f--) {
       var d = this.children[f];
       if (d && d.Zb && d.Lj(a, b) && !1 === c && (c = !0, !this.Nj)) break
      }
      return c
     },
     io: function(a, b) {
      for (var c = !1, f = this.children.length - 1; 0 <= f; f--) {
       var d = this.children[f];
       if (d && d.Zb && d.io(a, b) && !1 === c && (c = !0, !this.Nj)) break
      }
      return c
     },
     lt: function(a, b) {
      for (var c = !1, f = this.children.length - 1; 0 <= f; f--) {
       var d = this.children[f];
       if (d && d.Zb && d.lt(a, b) && !1 === c &&
        (c = !0, !this.Nj)) break
      }
      return c
     },
     setEnabled: function(a) {
      this.hi = this.Zb = this.visible = a
     },
     isEnabled: function() {
      return this.visible && this.Zb && this.hi
     },
     show: function() {
      for (var a = this.children, b = a.length, c = 0; c < b; c++) {
       var f = a[c];
       f.visible && f.show()
      }
     },
     hide: function() {
      for (var a = this.children, b = a.length, c = 0; c < b; c++) {
       var f = a[c];
       f.visible && f.hide()
      }
     }
    })
   }(X, aa, Q, K, Y, va, ma, ia),
   S = function(a) {
    function c(a, b, c, f) {
     this.x = a;
     this.y = b;
     this.N = c;
     this.V = f
    }

    function d(a, c, d, q, m) {
     return (m.x < a ? b : 0) + (m.x > d ? f : 0) + (m.y < c ? e : 0) + (m.y >
      q ? g : 0)
    }
    c.copy = function(a) {
     return new c(a.x, a.y, a.N, a.V)
    };
    c.Td = function(a, b) {
     return new c(a.x * b, a.y * b, a.N * b, a.V * b)
    };
    c.Sh = function(a, b, c, f, d, e, g, v) {
     return !(a > g || c < d || b > v || f < e)
    };
    c.Ft = function(a, b, f, d, e, g, u, v) {
     a = new c(e - a, g - b, u, v);
     0 > a.x && (a.N += a.x, a.x = 0);
     a.x + a.N > f && (a.N = f - a.x);
     0 > a.y && (a.V += a.y, a.y = 0);
     a.y + a.V > d && (a.V = d - a.y);
     return a
    };
    c.Db = function(a, b, c, f, d, e) {
     return a >= c && a < c + d && b >= f && b < f + e
    };
    var b = 1,
     f = 2,
     e = 4,
     g = 8;
    c.ff = function(c, l, n, q, m, p, u, v) {
     var B, r, x = new a(c, l),
      k = new a(n, q),
      D;
     u = m + u;
     var C = p + v;
     v = d(m, p,
      u, C, x);
     for (B = d(m, p, u, C, k); v || B;) {
      if (v & B) return !1;
      v ? (r = v, D = x) : (r = B, D = k);
      r & b ? (D.y += (l - q) * (m - D.x) / (c - n), D.x = m) : r & f && (D.y += (l - q) * (u - D.x) / (c - n), D.x = u);
      r & e ? (D.x += (c - n) * (p - D.y) / (l - q), D.y = p) : r & g && (D.x += (c - n) * (C - D.y) / (l - q), D.y = C);
      r == v ? v = d(m, p, u, C, x) : B = d(m, p, u, C, k)
     }
     return !0
    };
    return c
   }(O),
   La = function(a, c, d, b) {
    return a.extend({
     init: function(a) {
      this.n();
      this.M = a;
      this.Hj = d.j;
      this.uf = [];
      this.Ae = [];
      this.Pf = []
     },
     Ua: function(a, b, c, d) {
      this.uf[a] = b;
      this.Ae[a] = c;
      this.Pf[a] = null != d ? d : 1
     },
     nA: function(a) {
      this.uf.splice(a,
       1);
      this.Ae.splice(a, 1);
      this.Pf.splice(a, 1)
     },
     Dj: function(a, c, d, h) {
      this.uf[h] = b.copy(this.M.l[a]);
      var l = this.M.u[a];
      a = this.M.l[a];
      this.Ae[h] = new b(c + l.x, d + l.y, a.N, a.V);
      this.Pf[h] = 1
     },
     ps: function(a) {
      a > this.uf.length && (a = this.uf.length);
      for (var b = c.context, d = 0; d < a; d++) {
       var h = this.uf[d],
        l = this.Ae[d],
        n = this.Pf[d],
        q = b.globalAlpha,
        m = Math.ceil(h.N),
        p = Math.ceil(h.V);
       if (0 !== m && 0 !== p) {
        if (null == n) n = 1;
        else if (0 >= n) continue;
        else 1 > n && (b.globalAlpha = n);
        var u = this.lg && this.lg.length > d;
        if (u) {
         var v = this.lg[d],
          B = this.dk[d],
          r = 0 !== B.x || 0 !== B.y;
         0 !== v && (r && b.translate(B.x, B.y), b.rotate(v), r && b.translate(-B.x, -B.y))
        }
        var x, k, D;
        this.Ha ? (x = Math.round(l.x / this.Ha) * this.Ha, k = Math.round(l.y / this.Ha) * this.Ha, D = Math.round(l.N / this.Ha) * this.Ha, l = Math.round(l.V / this.Ha) * this.Ha) : (x = Math.round(l.x), k = Math.round(l.y), D = Math.ceil(l.N), l = Math.ceil(l.V));
        b.drawImage(this.M.rc, h.x, h.y, m, p, x, k, D, l);
        u && 0 !== v && (r && b.translate(B.x, B.y), b.rotate(-v), r && b.translate(-B.x, -B.y));
        1 !== n && (b.globalAlpha = q)
       }
      }
     },
     B: function() {
      this.wc();
      if (0 !== this.color.F) {
       var a =
        c.context,
        b = 0 !== this.ga || 0 !== this.ha;
       b && a.translate(this.ga, this.ha);
       this.ps(this.Hj === d.j ? this.uf.length : this.Hj);
       b && a.translate(-this.ga, -this.ha)
      }
      this.vc()
     }
    })
   }(ea, Y, K, S),
   w = {
    uC: 0,
    xC: 1,
    sC: 2,
    BC: 3,
    Ef: 4,
    Bg: 5,
    GC: 6,
    ka: 7,
    lD: 8,
    Ol: 9,
    Nl: 10,
    Ml: 11,
    Pl: 12,
    Tl: 13,
    Vl: 14,
    Wl: 15,
    Xl: 16,
    Zq: 17,
    $l: 18,
    $q: 19,
    ar: 20,
    br: 21,
    am: 22,
    gm: 23,
    cr: 24,
    dr: 25,
    Cd: 26,
    Yl: 27,
    Xq: 28,
    Yq: 29,
    Zl: 30,
    dm: 31,
    em: 32,
    fm: 33,
    hm: 34,
    im: 35,
    Li: 36,
    Mi: 37,
    Ql: 38,
    Ll: 39,
    yC: 40,
    zC: 41,
    KC: 42,
    AC: 43,
    HC: 44,
    FC: 45,
    IC: 46,
    DC: 47,
    EC: 48,
    CC: 49,
    vC: 50,
    Cc: 51,
    Ig: 52,
    tC: 53,
    JC: 54,
    LC: 55,
    Nk: 56,
    wC: 57,
    MC: 58,
    kl: 59,
    Gg: 60,
    al: 61,
    Ai: 62,
    jl: 63,
    yi: 64,
    bl: 65,
    cl: 66,
    Zc: 67,
    xi: 68,
    il: 69,
    hl: 70,
    gl: 71,
    Gf: 73,
    zi: 74,
    He: 75,
    Ci: 76,
    ll: 77,
    Hf: 78,
    Zk: 79,
    $k: 80,
    kc: 81,
    bm: 82,
    cm: 83,
    Ki: 84,
    Mg: 85,
    Sl: 105,
    Rl: 106,
    mw: 107,
    Yk: 108,
    Di: 111,
    dl: 112,
    el: 113,
    fl: 114,
    Hg: 115,
    Fg: 116,
    Bi: 117,
    Ni: 118,
    Oi: 119,
    wi: 120,
    Tk: 121,
    Qp: 122,
    Uk: 123,
    Rp: 124,
    Sp: 125,
    Tp: 126,
    Vk: 127,
    Up: 128,
    Vp: 129,
    Wp: 130,
    Wk: 131,
    Xp: 132,
    Yp: 133,
    Zp: 134,
    Xk: 135,
    $p: 136,
    aq: 137,
    bq: 138,
    cq: 139,
    dq: 140,
    fq: 141,
    gq: 142,
    iq: 143,
    jq: 144,
    kq: 145,
    lq: 146,
    nq: 147,
    oq: 148,
    pq: 149,
    ov: 150,
    pv: 151,
    qv: 152,
    rv: 153,
    uv: 154,
    vv: 155,
    wv: 156,
    xv: 157,
    yv: 158,
    zv: 159,
    Av: 160,
    Bv: 161,
    Cv: 162,
    Dv: 163,
    Ev: 164,
    Fv: 165,
    Gv: 166,
    Hv: 167,
    Iv: 168,
    Jv: 169,
    Lv: 170,
    Mv: 171,
    Nv: 172,
    Ov: 173,
    Sq: 174,
    Tq: 175,
    Vq: 176,
    Uq: 177,
    Wq: 178,
    er: 179,
    Kv: 180,
    jc: 72,
    Ge: 181,
    Eg: 182,
    Ul: 183,
    YC: 183
   },
   sb = [{
    id: w.Ef,
    fd: -1,
    tc: -42,
    gc: 20,
    Qe: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a9\u00c0\u00e0\u00c2\u00e2\u00c6\u00e6\u00c7\u00e7\u00c8\u00e8\u00c9\u00e9\u00ca\u00ea\u00cb\u00eb\u00ce\u00ee\u00cf\u00ef\u00d4\u00f4\u0152\u0153\u00d9\u00f9\u00db\u00fb\u00dc\u00fc\u00ab\u00bb\u20ac\u00c4\u00e4\u00c9\u00e9\u00d6\u00f6\u00dc\u00fc\u00df\u201e\u201c\u201d\u00b0\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",
    cf: {},
    l: [4, 4, 33, 156, 41, 4, 38, 156, 83, 4, 61, 156, 148, 4, 41, 156, 193, 4, 73, 156, 270, 4, 38, 156, 312, 4, 19, 156, 335, 4, 44, 156, 383, 4, 41, 156, 428, 4, 54, 156, 486, 4, 43, 156, 533, 4, 22, 156, 559, 4, 46, 156, 609, 4, 23, 156, 636, 4, 51, 156, 691, 4, 54, 156, 749, 4, 23, 156, 776, 4, 53, 156, 833, 4, 44, 156, 881, 4, 48, 156, 933, 4, 51, 156, 4, 164, 49, 156, 57, 164, 52, 156, 113, 164, 55, 156, 172, 164, 41, 156, 217, 164, 24, 156, 245, 164, 24, 156, 273, 164, 59, 156, 336, 164, 36, 156, 376, 164, 51, 156, 431, 164, 44, 156, 479, 164, 62, 156, 545, 164, 51, 156, 600, 164, 51, 156, 655, 164, 58, 156, 717, 164, 48, 156, 769,
     164, 46, 156, 819, 164, 45, 156, 868, 164, 50, 156, 922, 164, 49, 156, 975, 164, 24, 156, 4, 324, 45, 156, 53, 324, 45, 156, 102, 324, 54, 156, 160, 324, 73, 156, 237, 324, 43, 156, 284, 324, 63, 156, 351, 324, 59, 156, 414, 324, 54, 156, 472, 324, 51, 156, 527, 324, 57, 156, 588, 324, 56, 156, 648, 324, 59, 156, 711, 324, 52, 156, 767, 324, 74, 156, 845, 324, 63, 156, 912, 324, 47, 156, 4, 484, 67, 156, 75, 484, 65, 156, 144, 484, 54, 156, 202, 484, 56, 156, 262, 484, 40, 156, 306, 484, 74, 156, 384, 484, 24, 156, 412, 484, 45, 156, 461, 484, 51, 156, 516, 484, 49, 156, 569, 484, 48, 156, 621, 484, 43, 156, 668, 484, 47, 156, 719,
     484, 42, 156, 765, 484, 43, 156, 812, 484, 25, 156, 841, 484, 39, 156, 884, 484, 50, 156, 938, 484, 22, 156, 4, 644, 69, 156, 77, 644, 40, 156, 121, 644, 37, 156, 162, 644, 45, 156, 211, 644, 63, 156, 278, 644, 43, 156, 325, 644, 44, 156, 373, 644, 52, 156, 429, 644, 46, 156, 479, 644, 54, 156, 537, 644, 73, 156, 614, 644, 59, 156, 677, 644, 54, 156, 735, 644, 58, 156, 797, 644, 57, 156, 858, 644, 25, 156, 887, 644, 42, 156, 933, 644, 49, 156, 4, 804, 75, 156, 83, 804, 51, 156, 138, 804, 44, 156, 186, 804, 51, 156, 241, 804, 47, 156, 292, 804, 83, 156, 379, 804, 62, 156, 445, 804, 54, 156, 503, 804, 43, 156, 550, 804, 45, 156, 599,
     804, 45, 156, 648, 804, 45, 156, 697, 804, 45, 156, 746, 804, 45, 156, 795, 804, 45, 156, 844, 804, 45, 156, 893, 804, 45, 156, 942, 804, 41, 156, 4, 964, 41, 156, 49, 964, 33, 156, 86, 964, 34, 156, 124, 964, 63, 156, 191, 964, 48, 156, 243, 964, 82, 156, 329, 964, 61, 156, 394, 964, 53, 156, 451, 964, 44, 156, 499, 964, 53, 156, 556, 964, 43, 156, 603, 964, 53, 156, 660, 964, 43, 156, 707, 964, 53, 156, 764, 964, 59, 156, 827, 964, 65, 156, 896, 964, 51, 156, 951, 964, 44, 156, 4, 1124, 45, 156, 53, 1124, 45, 156, 102, 1124, 63, 156, 169, 1124, 48, 156, 221, 1124, 53, 156, 278, 1124, 43, 156, 325, 1124, 53, 156, 382, 1124, 43,
     156, 429, 1124, 43, 156, 476, 1124, 43, 156, 523, 1124, 40, 156, 567, 1124, 65, 156, 636, 1124, 47, 156, 687, 1124, 50, 156, 741, 1124, 49, 156, 794, 1124, 64, 156, 862, 1124, 46, 156, 912, 1124, 46, 156, 4, 1284, 73, 156, 81, 1284, 46, 156, 131, 1284, 54, 156, 189, 1284, 54, 156, 247, 1284, 62, 156, 313, 1284, 62, 156, 379, 1284, 64, 156, 447, 1284, 52, 156, 503, 1284, 59, 156, 566, 1284, 53, 156, 623, 1284, 48, 156, 675, 1284, 49, 156, 728, 1284, 59, 156, 791, 1284, 55, 156, 850, 1284, 59, 156, 913, 1284, 55, 156, 4, 1444, 58, 156, 66, 1444, 49, 156, 119, 1444, 72, 156, 195, 1444, 83, 156, 282, 1444, 62, 156, 348, 1444,
     58, 156, 410, 1444, 50, 156, 464, 1444, 48, 156, 516, 1444, 67, 156, 587, 1444, 51, 156, 642, 1444, 44, 156, 690, 1444, 41, 156, 735, 1444, 39, 156, 778, 1444, 37, 156, 819, 1444, 41, 156, 864, 1444, 40, 156, 908, 1444, 40, 156, 952, 1444, 61, 156, 4, 1604, 38, 156, 46, 1604, 43, 156, 93, 1604, 43, 156, 140, 1604, 44, 156, 188, 1604, 45, 156, 237, 1604, 62, 156, 303, 1604, 42, 156, 349, 1604, 40, 156, 393, 1604, 49, 156, 446, 1604, 46, 156, 496, 1604, 38, 156, 538, 1604, 69, 156, 611, 1604, 42, 156, 657, 1604, 61, 156, 722, 1604, 43, 156, 769, 1604, 45, 156, 818, 1604, 40, 156, 862, 1604, 63, 156, 929, 1604, 65, 156, 4,
     1764, 51, 156, 59, 1764, 51, 156, 114, 1764, 40, 156, 158, 1764, 39, 156, 201, 1764, 60, 156, 265, 1764, 40, 156, 309, 1764, 112, 156
    ]
   }, {
    id: w.Bg,
    fd: 2,
    tc: -90,
    gc: 15,
    Qe: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a9\u00c0\u00e0\u00c2\u00e2\u00c6\u00e6\u00c7\u00e7\u00c8\u00e8\u00c9\u00e9\u00ca\u00ea\u00cb\u00eb\u00ce\u00ee\u00cf\u00ef\u00d4\u00f4\u0152\u0153\u00d9\u00f9\u00db\u00fb\u00dc\u00fc\u00ab\u00bb\u20ac\u00c4\u00e4\u00c9\u00e9\u00d6\u00f6\u00dc\u00fc\u00df\u201e\u201c\u201d\u00b0\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",
    cf: {},
    l: [4, 4, 16, 156, 24, 4, 19, 156, 47, 4, 35, 156, 86, 4, 21, 156, 111, 4, 43, 156, 158, 4, 19, 156, 181, 4, 7, 156, 192, 4, 24, 156, 220, 4, 23, 156, 247, 4, 30, 156, 281, 4, 24, 156, 309, 4, 9, 156, 322, 4, 25, 156, 351, 4, 10, 156, 365, 4, 28, 156, 397, 4, 31, 156, 432, 4, 10, 156, 446, 4, 29, 156, 479, 4, 24, 156, 507, 4, 26, 156, 537, 4, 29, 156, 570, 4, 28, 156, 602, 4, 29, 156, 635, 4, 31, 156, 670, 4, 21, 156, 695, 4, 10, 156, 709, 4, 10, 156, 723, 4, 33, 156, 760, 4, 19, 156, 783, 4, 28, 156, 815, 4, 24, 156, 843, 4, 36, 156, 883, 4, 28, 156, 915, 4, 28, 156, 947, 4, 32, 156, 983, 4, 27, 156, 4, 164, 25, 156, 33, 164, 24, 156, 61, 164,
     28, 156, 93, 164, 28, 156, 125, 164, 10, 156, 139, 164, 25, 156, 168, 164, 24, 156, 196, 164, 31, 156, 231, 164, 43, 156, 278, 164, 24, 156, 306, 164, 37, 156, 347, 164, 34, 156, 385, 164, 30, 156, 419, 164, 29, 156, 452, 164, 32, 156, 488, 164, 31, 156, 523, 164, 34, 156, 561, 164, 29, 156, 594, 164, 43, 156, 641, 164, 36, 156, 681, 164, 26, 156, 711, 164, 39, 156, 754, 164, 38, 156, 796, 164, 30, 156, 830, 164, 32, 156, 866, 164, 22, 156, 892, 164, 44, 156, 940, 164, 11, 156, 955, 164, 25, 156, 984, 164, 29, 156, 4, 324, 27, 156, 35, 324, 26, 156, 65, 324, 24, 156, 93, 324, 26, 156, 123, 324, 23, 156, 150, 324, 24, 156, 178, 324,
     11, 156, 193, 324, 20, 156, 217, 324, 28, 156, 249, 324, 9, 156, 262, 324, 41, 156, 307, 324, 21, 156, 332, 324, 20, 156, 356, 324, 25, 156, 385, 324, 36, 156, 425, 324, 22, 156, 451, 324, 24, 156, 479, 324, 29, 156, 512, 324, 26, 156, 542, 324, 31, 156, 577, 324, 43, 156, 624, 324, 34, 156, 662, 324, 30, 156, 696, 324, 33, 156, 733, 324, 32, 156, 769, 324, 12, 156, 785, 324, 22, 156, 811, 324, 27, 156, 842, 324, 45, 156, 891, 324, 29, 156, 924, 324, 24, 156, 952, 324, 29, 156, 985, 324, 26, 156, 4, 484, 49, 156, 57, 484, 36, 156, 97, 484, 30, 156, 131, 484, 23, 156, 158, 484, 24, 156, 186, 484, 24, 156, 214, 484, 24, 156, 242,
     484, 24, 156, 270, 484, 24, 156, 298, 484, 24, 156, 326, 484, 24, 156, 354, 484, 24, 156, 382, 484, 22, 156, 408, 484, 22, 156, 434, 484, 17, 156, 455, 484, 17, 156, 476, 484, 36, 156, 516, 484, 27, 156, 547, 484, 50, 156, 601, 484, 35, 156, 640, 484, 29, 156, 673, 484, 24, 156, 701, 484, 29, 156, 734, 484, 23, 156, 761, 484, 29, 156, 794, 484, 23, 156, 821, 484, 30, 156, 855, 484, 34, 156, 893, 484, 37, 156, 934, 484, 29, 156, 967, 484, 24, 156, 995, 484, 24, 156, 4, 644, 24, 156, 32, 644, 36, 156, 72, 644, 27, 156, 103, 644, 29, 156, 136, 644, 23, 156, 163, 644, 30, 156, 197, 644, 23, 156, 224, 644, 23, 156, 251, 644, 23, 156,
     278, 644, 22, 156, 304, 644, 38, 156, 346, 644, 26, 156, 376, 644, 28, 156, 408, 644, 28, 156, 440, 644, 38, 156, 482, 644, 25, 156, 511, 644, 25, 156, 540, 644, 44, 156, 588, 644, 26, 156, 618, 644, 30, 156, 652, 644, 30, 156, 686, 644, 37, 156, 727, 644, 36, 156, 767, 644, 37, 156, 808, 644, 29, 156, 841, 644, 34, 156, 879, 644, 30, 156, 913, 644, 28, 156, 945, 644, 27, 156, 976, 644, 34, 156, 4, 804, 31, 156, 39, 804, 34, 156, 77, 804, 31, 156, 112, 804, 33, 156, 149, 804, 28, 156, 181, 804, 43, 156, 228, 804, 51, 156, 283, 804, 36, 156, 323, 804, 33, 156, 360, 804, 28, 156, 392, 804, 27, 156, 423, 804, 40, 156, 467, 804, 29,
     156, 500, 804, 24, 156, 528, 804, 22, 156, 554, 804, 20, 156, 578, 804, 19, 156, 601, 804, 22, 156, 627, 804, 21, 156, 652, 804, 21, 156, 677, 804, 36, 156, 717, 804, 20, 156, 741, 804, 24, 156, 769, 804, 24, 156, 797, 804, 24, 156, 825, 804, 25, 156, 854, 804, 35, 156, 893, 804, 24, 156, 921, 804, 22, 156, 947, 804, 28, 156, 979, 804, 26, 156, 4, 964, 20, 156, 28, 964, 41, 156, 73, 964, 23, 156, 100, 964, 36, 156, 140, 964, 24, 156, 168, 964, 25, 156, 197, 964, 22, 156, 223, 964, 37, 156, 264, 964, 38, 156, 306, 964, 30, 156, 340, 964, 29, 156, 373, 964, 22, 156, 399, 964, 21, 156, 424, 964, 35, 156, 463, 964, 22, 156, 489, 964,
     112, 156
    ]
   }, {
    id: w.Cc,
    H: 393,
    G: 418,
    l: [2, 2, 218, 226, 224, 2, 151, 151, 2, 232, 157, 158, 224, 157, 98, 62, 326, 157, 48, 45, 379, 2, 49, 59, 432, 2, 55, 57, 379, 65, 53, 63, 163, 232, 146, 147, 2, 394, 153, 163, 2, 561, 153, 166, 2, 731, 156, 169, 2, 904, 163, 175, 169, 904, 159, 175, 159, 394, 159, 159, 313, 232, 150, 150, 322, 394, 144, 150, 159, 561, 138, 146, 2, 1083, 302, 303, 301, 561, 107, 158, 412, 561, 96, 157, 2, 1390, 252, 268, 2, 1662, 278, 305, 2, 1971, 371, 397, 2, 2372, 385, 396, 2, 2772, 377, 386],
    u: [103, 130, 122, 133, 119, 131, 145, 176, 168, 182, 171, 177, 168, 182, 160, 176, 119, 128, 115, 115, 115, 112,
     115, 112, 115, 112, 119, 115, 122, 134, 131, 143, 137, 143, 140, 147, 47, 56, 143, 133, 155, 133, 69, 83, 50, 37, 6, -2, 0, -5, 8, 2
    ]
   }, {
    id: 52,
    H: 552,
    G: 552,
    l: [0, 0, 88, 85, 0, 85, 46, 152, 46, 85, 106, 149, 0, 237, 78, 162, 78, 237, 93, 155, 0, 399, 88, 158, 152, 85, 46, 152, 88, 399, 144, 145, 0, 557, 138, 141, 0, 698, 145, 145, 0, 843, 146, 141, 0, 984, 161, 140, 0, 1124, 130, 155],
    u: [235, 190, 256, 121, 226, 124, 240, 111, 233, 118, 235, 115, 256, 121, 213, 220, 219, 232, 212, 220, 211, 232, 203, 178, 211, 273]
   }, {
    id: 56,
    fd: 2,
    tc: 2,
    gc: 10,
    Qe: "0123456789",
    cf: {},
    l: [5, 5, 49, 156, 59, 5, 16, 156, 80, 5, 48, 156, 133,
     5, 38, 156, 176, 5, 41, 156, 222, 5, 45, 156, 272, 5, 43, 156, 320, 5, 47, 156, 372, 5, 49, 156, 426, 5, 35, 156
    ]
   }, {
    id: 59,
    H: 552,
    G: 552,
    l: [0, 0, 246, 268, 0, 268, 334, 370, 246, 0, 205, 231, 0, 638, 308, 353, 0, 991, 387, 461, 0, 1452, 324, 399, 0, 1851, 335, 328, 0, 2179, 296, 266, 0, 2445, 240, 230, 296, 2179, 207, 217, 308, 638, 204, 205, 240, 2445, 200, 194, 308, 843, 195, 133],
    u: [145, 116, 76, 38, 166, 132, 113, 56, 75, -2, 113, 34, 87, 82, 102, 114, 128, 124, 148, 130, 149, 134, 151, 138, 153, 141]
   }, {
    id: 60,
    H: 250,
    G: 250,
    l: [0, 0, 139, 170, 139, 0, 142, 169, 281, 0, 148, 163, 429, 0, 155, 155, 584, 0, 163, 148, 747,
     0, 169, 142, 584, 148, 171, 139, 584, 287, 169, 141, 755, 148, 165, 145, 755, 293, 159, 151, 429, 155, 153, 159, 281, 163, 147, 164, 139, 169, 141, 169, 0, 170, 139, 170
    ],
    u: [55, 40, 54, 41, 51, 44, 47, 48, 43, 51, 40, 54, 39, 56, 40, 55, 42, 53, 46, 50, 48, 46, 51, 44, 54, 41, 55, 40]
   }, {
    id: 61,
    H: 449,
    G: 446,
    l: [0, 0, 308, 285, 0, 285, 302, 282, 0, 567, 297, 281, 0, 848, 296, 277, 0, 1125, 293, 274, 0, 1399, 293, 273, 0, 1672, 295, 271, 0, 1943, 297, 269, 0, 2212, 239, 226, 239, 2212, 241, 223, 0, 2438, 244, 221, 244, 2438, 249, 219],
    u: [83, 82, 87, 84, 90, 86, 91, 90, 93, 94, 92, 99, 90, 104, 88, 111, 101, 119, 97, 128, 92, 138,
     86, 148
    ]
   }, {
    id: 62,
    H: 275,
    G: 275,
    l: [0, 0, 140, 144, 0, 144, 42, 37],
    u: [69, 62, 117, 119]
   }, {
    id: 63,
    H: 833,
    G: 250,
    l: [0, 0, 566, 93],
    u: [133, 76]
   }, {
    id: 64,
    H: 250,
    G: 250,
    l: [0, 0, 155, 154, 0, 154, 181, 210, 0, 364, 185, 180, 0, 544, 183, 178],
    u: [47, 50, 32, 36, 35, 40, 35, 40]
   }, {
    id: 65,
    H: 275,
    G: 275,
    l: [0, 0, 125, 126, 0, 126, 37, 35],
    u: [78, 76, 122, 121]
   }, {
    id: 66,
    H: 275,
    G: 275,
    l: [0, 0, 125, 126, 0, 126, 37, 35],
    u: [75, 76, 119, 121]
   }, {
    id: 67,
    H: 552,
    G: 552,
    l: [2, 2, 234, 221, 240, 2, 77, 76, 240, 82, 70, 76, 321, 2, 64, 76, 321, 82, 58, 76, 389, 2, 51, 76, 389, 82, 46, 76, 444, 2, 40, 77, 444, 83, 34, 77, 488, 2, 28,
     78, 488, 84, 28, 78, 520, 2, 35, 77, 559, 2, 42, 77, 605, 2, 48, 77, 657, 2, 56, 77, 717, 2, 63, 77, 784, 2, 69, 77, 857, 2, 76, 77, 857, 83, 83, 78, 2, 227, 175, 175, 181, 227, 175, 175, 360, 227, 175, 175, 539, 227, 175, 175, 718, 227, 175, 175, 2, 406, 175, 175, 181, 406, 175, 175, 360, 406, 175, 175, 539, 406, 175, 175, 718, 406, 175, 175, 2, 585, 175, 175, 181, 585, 175, 175, 360, 585, 175, 175, 539, 585, 175, 175, 718, 585, 175, 175, 2, 764, 175, 175, 181, 764, 175, 175, 360, 764, 175, 175, 539, 764, 175, 175, 718, 764, 175, 175, 2, 943, 175, 175, 181, 943, 175, 175, 360, 943, 175, 175, 539, 943, 175, 175, 718, 943, 175, 175,
     2, 1122, 175, 175, 2, 1301, 175, 175, 2, 1480, 175, 175, 2, 1659, 175, 175, 2, 1838, 175, 175, 181, 1122, 175, 175, 360, 1122, 175, 175, 539, 1122, 175, 175, 718, 1122, 175, 175, 181, 1301, 175, 175, 181, 1480, 175, 175, 181, 1659, 175, 175, 360, 1301, 229, 231, 593, 1301, 229, 231, 360, 1536, 490, 492
    ],
    u: [156, 156, 233, 231, 236, 231, 239, 231, 242, 231, 246, 231, 248, 231, 251, 231, 254, 231, 257, 231, 257, 231, 253, 231, 250, 231, 247, 231, 243, 231, 240, 231, 237, 231, 234, 231, 230, 230, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184,
     184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 155, 159, 155, 159, 27, 21
    ]
   }, {
    id: w.xi,
    H: 100,
    G: 100,
    l: [0, 0, 84, 85, 84, 0, 58, 85, 142, 0, 32, 85, 174, 0, 12, 85, 186, 0, 28, 85, 214, 0, 44, 85, 258, 0, 60, 85, 318, 0, 70, 85, 388, 0, 78, 85, 466, 0, 84, 85, 550, 0, 84, 85],
    u: [6, 5, 19, 5, 32, 5, 42, 5, 34, 5, 26, 5, 18, 5, 13, 5, 9, 5, 6, 5, 6, 5]
   }, {
    id: 69,
    H: 833,
    G: 250,
    l: [0, 0, 453, 93],
    u: [191, 76]
   }, {
    id: 70,
    H: 833,
    G: 250,
    l: [0, 0,
     333, 93
    ],
    u: [251, 79]
   }, {
    id: 71,
    H: 833,
    G: 250,
    l: [0, 0, 212, 93],
    u: [310, 79]
   }, {
    id: 72,
    H: 640,
    G: 640,
    l: [0, 0, 291, 302, 291, 0, 363, 409, 654, 0, 383, 309, 1037, 0, 314, 335, 1351, 0, 326, 334, 1677, 0, 374, 330, 291, 409, 405, 492, 2051, 0, 350, 334, 0, 302, 201, 207, 0, 509, 201, 206, 0, 715, 201, 207, 0, 922, 201, 207, 0, 1129, 201, 206, 0, 1335, 201, 210, 0, 1545, 201, 213, 0, 1758, 201, 215, 0, 1973, 201, 219, 0, 2192, 201, 222, 0, 2414, 201, 223, 0, 2637, 201, 222, 0, 2859, 201, 224, 0, 3083, 201, 224, 0, 3307, 201, 224, 0, 3531, 201, 221, 0, 3752, 201, 218, 2401, 0, 201, 214, 2602, 0, 201, 211, 2803, 0, 222, 196, 2803,
     196, 210, 201, 3025, 0, 203, 209, 3228, 0, 197, 214, 3425, 0, 193, 217, 3618, 0, 194, 219, 3812, 0, 197, 210, 291, 901, 200, 202, 3812, 210, 204, 197, 291, 1103, 208, 199, 291, 1302, 212, 202, 291, 1504, 214, 205, 291, 1709, 216, 206, 291, 1915, 204, 226, 291, 2141, 203, 213, 495, 1915, 201, 210, 494, 2141, 201, 208, 291, 2354, 201, 203, 3025, 209, 201, 200, 491, 901, 201, 200, 492, 2354, 201, 200, 291, 2557, 201, 200, 291, 2757, 201, 207, 291, 2964, 201, 216, 492, 2557, 204, 194, 291, 3180, 221, 171, 291, 3351, 249, 197, 291, 3548, 225, 201, 291, 3749, 205, 205, 492, 2964, 202, 213, 696, 409, 201, 222, 897, 409, 201,
     222, 1098, 409, 205, 221, 1303, 409, 229, 213, 1532, 409, 243, 205, 0, 3970, 153, 86, 654, 309, 140, 89, 1775, 409, 212, 196, 1987, 409, 208, 209, 496, 3749, 197, 233, 696, 631, 186, 247, 882, 631, 181, 245, 1063, 631, 186, 243, 1249, 631, 194, 234, 1443, 631, 199, 230, 2195, 409, 199, 221, 1642, 631, 199, 223, 1841, 631, 199, 226, 2040, 631, 199, 228, 2239, 631, 199, 230, 2438, 631, 199, 230, 2637, 631, 199, 230, 2836, 631, 195, 234, 3031, 631, 190, 238, 3221, 631, 194, 231, 2394, 409, 201, 217, 2595, 409, 207, 209, 2802, 409, 218, 202, 3020, 409, 211, 206, 3231, 409, 206, 210, 3437, 409, 210, 213, 3647, 409, 215,
     218, 3415, 631, 220, 223, 3862, 409, 224, 216, 3635, 631, 219, 212, 492, 2757, 195, 205, 3854, 631, 195, 207, 696, 878, 195, 210, 891, 878, 217, 214, 891, 1092, 225, 215, 891, 1307, 219, 215, 696, 1088, 195, 215, 696, 1303, 195, 215, 696, 1518, 195, 215, 891, 1522, 217, 215, 891, 1737, 225, 215, 891, 1952, 223, 218, 891, 2170, 219, 222, 891, 2392, 215, 224, 891, 2616, 216, 216, 1108, 878, 210, 206, 1318, 878, 218, 202, 1536, 878, 205, 190, 1741, 878, 203, 194, 1944, 878, 202, 206, 2146, 878, 203, 214, 891, 2832, 204, 217, 891, 3049, 204, 216, 2349, 878, 204, 213, 2553, 878, 205, 204, 2758, 878, 205, 192, 2401, 214,
     201, 195, 2963, 878, 201, 206, 3164, 878, 204, 212, 3368, 878, 205, 214, 891, 3265, 207, 215, 891, 3480, 208, 216, 3573, 878, 205, 205, 3778, 878, 226, 202, 891, 3696, 212, 204, 696, 1733, 195, 210, 696, 1943, 189, 213, 696, 2156, 190, 218, 696, 2374, 193, 222, 1116, 1092, 198, 213, 1314, 1092, 203, 210, 1517, 1092, 207, 202, 1724, 1092, 211, 204, 1935, 1092, 214, 207, 2149, 1092, 216, 211, 2365, 1092, 216, 212, 2581, 1092, 216, 212, 2797, 1092, 216, 212, 3013, 1092, 216, 212, 3229, 1092, 216, 212, 3445, 1092, 216, 212, 3661, 1092, 216, 212, 3877, 1092, 216, 212, 1116, 1305, 216, 212, 1116, 1517, 212, 216, 1116,
     1733, 206, 222, 1116, 1955, 202, 225, 1116, 2180, 205, 222, 1116, 2402, 210, 213, 1116, 2615, 212, 208, 1116, 2823, 198, 223, 1116, 3046, 196, 232, 696, 2596, 195, 236, 1116, 3278, 198, 236, 1116, 3514, 206, 238, 1116, 3752, 211, 226, 1332, 1305, 217, 207, 891, 3900, 213, 195, 1549, 1305, 212, 179, 1761, 1305, 221, 178, 1982, 1305, 221, 181, 2203, 1305, 215, 180, 2418, 1305, 212, 179, 2630, 1305, 221, 177, 2851, 1305, 221, 180, 3072, 1305, 215, 180, 3287, 1305, 212, 179, 3499, 1305, 221, 177, 3720, 1305, 221, 180, 1332, 1512, 215, 180, 1332, 1692, 212, 179, 1547, 1512, 216, 176, 1332, 1871, 213, 175, 696,
     2832, 194, 205, 696, 3037, 188, 236, 696, 3273, 194, 233, 1332, 2046, 210, 202, 1332, 2248, 204, 194, 1332, 2442, 202, 204
    ],
    u: [173, 274, 137, 156, 133, 207, 152, 237, 154, 244, 134, 240, 107, 104, 148, 242, 220, 227, 220, 227, 220, 227, 220, 227, 220, 227, 220, 224, 220, 221, 220, 218, 220, 215, 220, 212, 220, 211, 220, 211, 220, 210, 220, 210, 220, 210, 220, 213, 220, 216, 220, 220, 220, 223, 211, 238, 216, 233, 220, 225, 223, 220, 225, 217, 224, 215, 223, 224, 221, 232, 219, 237, 217, 235, 215, 232, 214, 229, 213, 228, 217, 208, 218, 221, 219, 224, 219, 226, 219, 231, 219, 234, 219, 234, 219, 234, 219, 234, 219,
     226, 219, 218, 218, 240, 210, 263, 192, 237, 204, 233, 217, 229, 220, 221, 220, 212, 220, 212, 217, 212, 202, 221, 195, 229, 240, 264, 249, 265, 215, 238, 217, 225, 223, 201, 228, 187, 231, 189, 228, 191, 223, 200, 220, 204, 220, 213, 220, 211, 220, 208, 220, 206, 220, 204, 220, 204, 220, 204, 222, 200, 225, 196, 223, 203, 220, 217, 216, 225, 211, 232, 216, 228, 218, 224, 212, 221, 208, 216, 205, 211, 202, 218, 208, 222, 232, 229, 232, 227, 232, 224, 210, 220, 202, 219, 208, 219, 232, 219, 232, 219, 232, 219, 210, 219, 202, 219, 202, 216, 205, 212, 207, 210, 208, 218, 217, 228, 211, 232, 216, 244, 218, 240, 219, 227, 220,
     219, 220, 216, 220, 217, 220, 221, 218, 230, 216, 242, 220, 239, 220, 228, 217, 222, 216, 220, 214, 219, 213, 218, 216, 229, 207, 232, 214, 230, 224, 224, 227, 221, 226, 216, 225, 212, 222, 220, 219, 224, 218, 231, 216, 229, 214, 226, 213, 222, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 215, 217, 218, 211, 220, 208, 218, 212, 216, 221, 215, 226, 222, 210, 223, 201, 223, 197, 222, 197, 219, 195, 216, 206, 211, 225, 213, 238, 213, 254, 207, 255, 207, 252, 210, 253, 213, 254, 207, 256, 207, 253, 210, 253, 213, 254, 207, 256, 207, 253, 210, 253, 213, 254, 211, 257, 214, 258, 227,
     227, 230, 195, 226, 199, 215, 232, 218, 239, 220, 230
    ]
   }, {
    id: 73,
    H: 275,
    G: 275,
    l: [0, 0, 137, 139, 137, 0, 105, 100, 0, 139, 235, 235, 0, 374, 240, 246],
    u: [65, 70, 84, 86, 18, 19, 13, 14]
   }, {
    id: 74,
    H: 833,
    G: 250,
    l: [0, 0, 507, 85, 0, 85, 507, 100, 0, 185, 507, 100, 0, 285, 507, 97, 0, 382, 507, 92],
    u: [163, 82, 163, 73, 163, 71, 163, 70, 163, 75]
   }, {
    id: 75,
    H: 276,
    G: 276,
    l: [0, 0, 84, 128, 84, 0, 68, 109, 152, 0, 50, 109, 0, 128, 140, 121, 0, 249, 148, 147]
   }, {
    id: 76,
    H: 761,
    G: 761,
    l: [0, 0, 220, 239, 0, 239, 206, 290, 0, 529, 205, 290, 0, 819, 220, 246, 0, 1065, 237, 219, 0, 1284, 226, 231, 220, 0, 18, 17, 238, 0, 11, 11, 206,
     239, 38, 39
    ],
    u: [271, 262, 286, 232, 287, 232, 271, 249, 262, 272, 268, 266, 382, 376, 385, 379, 372, 365]
   }, {
    id: 77,
    H: 998,
    G: 1058,
    l: [3, 3, 148, 12, 3, 21, 39, 187, 48, 21, 182, 150, 236, 21, 144, 130, 3, 214, 244, 233, 253, 214, 159, 143, 157, 3, 49, 9, 386, 21, 89, 84, 3, 453, 102, 148, 3, 607, 260, 315],
    u: [585, 767, 160, 241, 412, 548, 307, 397, 184, 663, 530, 224, 676, 540, 540, 425, 351, 211, 684, 200]
   }, {
    id: 78,
    H: 431,
    G: 431,
    l: [0, 0, 294, 335, 294, 0, 297, 336, 0, 335, 291, 252, 591, 0, 307, 293, 0, 587, 276, 224],
    u: [53, 6, 51, 3, 55, 78, 47, 57, 63, 98]
   }, {
    id: 79,
    H: 833,
    G: 250,
    l: [0, 0, 194, 127, 0, 127, 201, 103,
     0, 230, 204, 96, 0, 326, 193, 142, 0, 468, 194, 111
    ],
    u: [319, 69, 316, 81, 314, 87, 319, 55, 319, 77]
   }, {
    id: 80,
    H: 833,
    G: 250,
    l: [0, 0, 302, 123, 302, 0, 319, 99, 621, 0, 322, 95, 302, 99, 292, 136, 0, 123, 302, 111],
    u: [268, 70, 260, 85, 258, 87, 273, 58, 268, 77]
   }, {
    id: 108,
    l: [0, 0, 198, 194, 0, 194, 198, 194, 0, 388, 198, 194]
   }, {
    id: 111,
    l: [0, 0, 202, 81],
    u: [316, 87],
    H: 833,
    G: 250
   }, {
    id: 112,
    l: [0, 0, 319, 83],
    u: [260, 87],
    H: 833,
    G: 250
   }, {
    id: 113,
    l: [0, 0, 444, 86],
    u: [195, 81],
    H: 833,
    G: 250
   }, {
    id: 114,
    l: [0, 0, 559, 89],
    u: [137, 77],
    H: 833,
    G: 250
   }, {
    id: 115,
    l: [0, 0, 101, 102, 0, 102, 101, 102, 0, 204, 101, 102,
     0, 306, 101, 102
    ],
    u: [219, 29, 218, 29, 219, 29, 219, 29],
    H: 534,
    G: 160
   }, {
    id: 116,
    H: 275,
    G: 275,
    l: [0, 0, 4, 4, 2, 2, 89, 116, 95, 2, 177, 37, 276, 2, 187, 77, 95, 43, 87, 61],
    u: [143, 196, 93, 75, 50, 84, 45, 39, 95, 35]
   }, {
    id: 117,
    H: 25,
    G: 25,
    l: [0, 0, 25, 25]
   }, {
    id: w.wi,
    l: [0, 0, 291, 302, 0, 302, 363, 409, 363, 302, 383, 309, 0, 711, 405, 492, 405, 711, 374, 330, 0, 1203, 350, 334, 0, 1537, 314, 335, 350, 1203, 326, 334, 291, 0, 339, 288, 630, 0, 275, 162, 350, 1537, 372, 317],
    u: [173, 274, 137, 156, 133, 207, 107, 104, 134, 240, 148, 242, 152, 237, 154, 244, 145, 259, 181, 392, 123, 236],
    H: 640,
    G: 640
   }, {
    id: w.kc,
    l: [1, 1, 1064, 1064, 1067, 1, 532, 495, 1601, 1, 145, 286, 1601, 289, 38, 38, 1748, 1, 204, 174, 1748, 177, 183, 154],
    u: [55, 154, 55, 686, 442, 543, 568, 667, 484, 1083, 493, 1093],
    H: 1174,
    G: 1498
   }, {
    id: w.jc,
    wa: 1,
    l: [1, 1, 201, 207, 1, 210, 201, 205, 1, 417, 201, 206, 1, 625, 201, 207, 1, 834, 201, 207, 1, 1043, 201, 211, 1, 1256, 201, 214, 1, 1472, 201, 218, 1, 1692, 201, 220, 204, 1, 201, 222, 204, 225, 201, 224, 204, 451, 201, 224, 204, 677, 201, 225, 204, 904, 201, 226, 204, 1132, 201, 226, 407, 1, 201, 221, 610, 1, 201, 217, 813, 1, 201, 213, 1016, 1, 201, 210, 407, 225, 204, 225, 1219, 1, 203, 213, 1424, 1, 201,
     210, 1627, 1, 201, 207, 1830, 1, 201, 203, 204, 1360, 201, 200, 204, 1562, 201, 200, 204, 1764, 201, 200, 613, 225, 201, 200, 816, 225, 201, 208, 1019, 225, 201, 216, 1222, 225, 204, 193, 1428, 225, 221, 171, 1651, 225, 249, 196, 407, 452, 225, 197, 407, 651, 205, 204, 407, 857, 201, 216, 407, 1075, 202, 222, 407, 1299, 202, 225, 407, 1526, 205, 224, 407, 1752, 223, 213, 634, 452, 242, 203, 1, 1914, 153, 86, 1902, 225, 140, 89, 878, 452, 218, 201, 634, 657, 211, 205, 634, 864, 205, 210, 634, 1076, 211, 214, 847, 657, 214, 217, 847, 876, 220, 223, 1063, 657, 224, 216, 1289, 657, 219, 212, 634, 1292, 195, 206, 634, 1500,
     195, 207, 634, 1709, 195, 211, 1510, 657, 217, 214, 1729, 657, 225, 215, 847, 1101, 219, 215, 847, 1318, 195, 215, 847, 1535, 195, 215, 847, 1752, 195, 215, 1069, 876, 217, 215, 1288, 876, 225, 215, 1069, 1093, 224, 219, 1069, 1314, 219, 222, 1069, 1538, 215, 225, 1069, 1765, 215, 217, 1515, 876, 210, 205, 1098, 452, 218, 201, 1318, 452, 206, 193, 1526, 452, 201, 195, 1727, 876, 201, 206, 1295, 1093, 204, 212, 1295, 1307, 206, 214, 1503, 1307, 208, 215, 1503, 1524, 208, 216, 1501, 1093, 206, 205, 1729, 452, 206, 191, 1709, 1093, 204, 194, 1295, 1523, 202, 206, 1295, 1731, 202, 214, 1503, 1742, 203, 217, 1713,
     1524, 204, 216, 1713, 1307, 204, 212, 1713, 1742, 204, 204
    ],
    u: [220, 227, 220, 228, 220, 228, 220, 227, 220, 227, 220, 223, 220, 220, 220, 216, 220, 214, 220, 212, 220, 210, 220, 210, 220, 209, 220, 208, 220, 208, 220, 213, 220, 217, 220, 221, 220, 224, 217, 209, 218, 221, 219, 224, 219, 227, 219, 231, 219, 234, 219, 234, 219, 234, 219, 234, 219, 226, 219, 218, 218, 241, 210, 263, 191, 238, 203, 237, 216, 230, 220, 218, 219, 212, 219, 209, 216, 210, 204, 221, 195, 231, 240, 264, 249, 265, 210, 232, 216, 228, 218, 223, 211, 220, 208, 216, 204, 211, 201, 218, 207, 222, 231, 228, 231, 227, 231, 223, 209, 220, 201, 219,
     207, 219, 231, 219, 231, 219, 231, 219, 209, 219, 201, 219, 201, 215, 204, 212, 207, 209, 208, 217, 216, 228, 210, 232, 215, 240, 220, 238, 220, 227, 217, 221, 215, 219, 213, 218, 213, 217, 215, 228, 215, 242, 217, 239, 219, 226, 220, 218, 220, 215, 220, 216, 219, 220, 218, 229
    ],
    H: 640,
    G: 640
   }, {
    id: w.Ge,
    wa: 1,
    l: [1, 1, 213, 196, 1, 199, 207, 209, 1, 410, 197, 232, 1, 644, 186, 246, 1, 892, 181, 246, 1, 1140, 186, 244, 1, 1386, 195, 232, 1, 1620, 200, 229, 210, 199, 200, 219, 210, 420, 200, 221, 210, 643, 200, 224, 210, 869, 200, 227, 210, 1098, 200, 229, 210, 1329, 200, 229, 210, 1560, 200, 229, 210, 1791, 195, 234, 412,
     199, 190, 238, 604, 199, 194, 230, 800, 199, 202, 215, 1004, 199, 207, 207, 1213, 199, 225, 202, 1440, 199, 213, 205, 1655, 199, 195, 209, 1852, 199, 189, 213, 412, 439, 190, 217, 604, 439, 193, 221, 799, 439, 198, 213, 999, 439, 203, 208, 1204, 439, 207, 202, 1413, 439, 211, 204, 1626, 439, 215, 207, 604, 662, 216, 210, 604, 874, 216, 211, 604, 1087, 216, 211, 604, 1300, 216, 211, 604, 1513, 216, 211, 604, 1726, 216, 211, 822, 662, 216, 211, 1040, 662, 216, 211, 1258, 662, 216, 211, 1476, 662, 216, 211, 822, 875, 212, 215, 822, 1092, 205, 222, 822, 1316, 202, 225, 822, 1543, 205, 220, 1694, 662, 210, 211, 1036, 875,
     213, 207, 1843, 439, 201, 207, 822, 1765, 198, 222, 1036, 1084, 195, 232, 1036, 1318, 195, 235, 1233, 1084, 199, 236, 1233, 1322, 206, 238, 1434, 1084, 211, 226, 1251, 875, 217, 207, 216, 1, 213, 195, 431, 1, 212, 179, 645, 1, 221, 178, 868, 1, 221, 180, 1091, 1, 215, 180, 1308, 1, 212, 179, 1522, 1, 221, 177, 1745, 1, 221, 180, 1470, 875, 215, 180, 1687, 875, 212, 179, 1647, 1084, 221, 177, 1441, 1322, 221, 180, 1664, 1322, 215, 180, 1441, 1504, 212, 179, 1655, 1504, 216, 176, 1655, 1682, 213, 174, 1036, 1555, 193, 204, 412, 658, 188, 237, 1036, 1761, 194, 233, 1441, 1685, 210, 202, 1, 1851, 205, 194, 1233, 1562,
     202, 204
    ],
    u: [214, 238, 217, 225, 222, 202, 228, 188, 230, 188, 227, 190, 222, 202, 219, 205, 219, 215, 219, 213, 219, 210, 219, 207, 219, 205, 219, 205, 219, 205, 222, 200, 225, 196, 223, 204, 219, 219, 216, 227, 207, 232, 213, 229, 223, 224, 226, 221, 226, 216, 224, 212, 221, 220, 219, 225, 217, 231, 215, 229, 213, 226, 213, 223, 213, 222, 213, 222, 213, 222, 213, 222, 213, 222, 213, 222, 213, 222, 213, 222, 213, 222, 215, 218, 218, 211, 219, 208, 218, 213, 215, 222, 214, 226, 219, 227, 221, 211, 223, 201, 222, 198, 220, 197, 218, 195, 215, 206, 210, 225, 212, 238, 212, 254, 206, 255, 206, 253, 209, 253, 212, 254, 206,
     256, 206, 253, 209, 253, 212, 254, 206, 256, 206, 253, 209, 253, 212, 254, 210, 257, 213, 259, 226, 228, 229, 195, 225, 199, 214, 232, 217, 240, 219, 230
    ],
    H: 640,
    G: 640
   }, {
    id: w.Eg,
    wa: 1,
    l: [1, 1, 222, 196, 1, 199, 209, 201, 1, 402, 203, 209, 1, 613, 197, 215, 1, 830, 193, 218, 1, 1050, 194, 219, 200, 613, 197, 210, 206, 402, 201, 202, 212, 199, 204, 198, 196, 830, 208, 200, 197, 1050, 212, 204, 1, 1271, 215, 207, 1, 1480, 216, 208],
    u: [211, 238, 216, 233, 219, 225, 222, 219, 224, 216, 224, 215, 222, 224, 220, 232, 219, 236, 217, 235, 215, 231, 213, 228, 213, 227],
    H: 640,
    G: 640
   }, {
    id: w.Tk,
    wa: 1.25,
    Ea: !0,
    l: [0, 0,
     2048, 1152
    ],
    u: [0, 0],
    H: 2048,
    G: 2305
   }, {
    id: w.Qp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 708],
    u: [0, 896],
    H: 2048,
    G: 2305
   }, {
    id: w.Uk,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.Rp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 874],
    u: [0, 835],
    H: 2048,
    G: 2304
   }, {
    id: w.Sp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.Tp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1052],
    u: [0, 756],
    H: 2048,
    G: 2304
   }, {
    id: w.Vk,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.Up,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1072],
    u: [0, 768],
    H: 2048,
    G: 2304
   }, {
    id: w.Vp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.Wp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1124],
    u: [0, 624],
    H: 2048,
    G: 2304
   }, {
    id: w.Wk,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.Xp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 948],
    u: [0, 760],
    H: 2048,
    G: 1866
   }, {
    id: w.Yp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.Zp,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 886],
    u: [0, 881],
    H: 2048,
    G: 2304
   }, {
    id: w.Xk,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152, 0, 0, 4, 3],
    u: [0, 0, 1028.5, 581],
    H: 2048,
    G: 2304
   }, {
    id: w.$p,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 642, 0, 0, 4, 3],
    u: [0, 889, 1028.5, 581],
    H: 2048,
    G: 2304
   }, {
    id: w.aq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.bq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 858],
    u: [0, 780],
    H: 2048,
    G: 1638
   }, {
    id: w.cq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 2304
   }, {
    id: w.dq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 887],
    u: [0, 792],
    H: 2048,
    G: 2304
   }, {
    id: w.fq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1153],
    u: [0, -1],
    H: 2048,
    G: 2304
   }, {
    id: w.gq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 980],
    u: [0, 802],
    H: 2048,
    G: 2304
   }, {
    id: w.iq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.jq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.kq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.lq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.nq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.oq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }, {
    id: w.pq,
    wa: 1.25,
    Ea: !0,
    l: [0, 0, 2048, 1152],
    u: [0, 0],
    H: 2048,
    G: 1866
   }],
   db = {
    s: 0,
    W: 1,
    ri: 2,
    kD: 3
   },
   Ma = function(a, c, d) {
    var b = [];
    b[d.Ef] = new a("big_font.png", c.ri);
    b[d.Bg] = new a("small_font.png", c.ri);
    b[d.Nk] = new a("font_numbers_big.png",
     c.ri);
    b[d.ka] = new a("tap", c.W);
    b[d.Ol] = new a("button", c.W);
    b[d.Nl] = new a("bubble_break", c.W);
    b[d.Ml] = new a("bubble", c.W);
    b[d.Pl] = new a("candy_break", c.W);
    b[d.Tl] = new a("monster_chewing", c.W);
    b[d.Ul] = new a("monster_chewing", c.W);
    b[d.Vl] = new a("monster_close", c.W);
    b[d.Wl] = new a("monster_open", c.W);
    b[d.Xl] = new a("monster_sad", c.W);
    b[d.Zq] = new a("ring", c.W);
    b[d.$l] = new a("rope_bleak_1", c.W);
    b[d.$q] = new a("rope_bleak_2", c.W);
    b[d.ar] = new a("rope_bleak_3", c.W);
    b[d.br] = new a("rope_bleak_4", c.W);
    b[d.am] = new a("rope_get",
     c.W);
    b[d.gm] = new a("star_1", c.W);
    b[d.cr] = new a("star_2", c.W);
    b[d.dr] = new a("star_3", c.W);
    b[d.Cd] = new a("electric", c.W);
    b[d.Yl] = new a("pump_1", c.W);
    b[d.Xq] = new a("pump_2", c.W);
    b[d.Yq] = new a("pump_3", c.W);
    b[d.Zl] = new a("pump_4", c.W);
    b[d.dm] = new a("spider_activate", c.W);
    b[d.em] = new a("spider_fall", c.W);
    b[d.fm] = new a("spider_win", c.W);
    b[d.hm] = new a("wheel", c.W);
    b[d.im] = new a("win", c.W);
    b[d.Li] = new a("gravity_off", c.W);
    b[d.Mi] = new a("gravity_on", c.W);
    b[d.Ql] = new a("candy_link", c.W);
    b[d.Ll] = new a("bouncer",
     c.W);
    b[d.Cc] = new a("obj_candy_01.png", c.s);
    b[d.Ig] = new a("obj_spider.png", c.s);
    b[d.kl] = new a("obj_star_disappear.png", c.s);
    b[d.Gg] = new a("obj_bubble_flight.png", c.s);
    b[d.al] = new a("obj_bubble_pop.png", c.s);
    b[d.Ai] = new a("obj_hook_auto.png", c.s);
    b[d.jl] = new a("obj_spikes_04.png", c.s);
    b[d.yi] = new a("obj_bubble_attached.png", c.s);
    b[d.bl] = new a("obj_hook_01.png", c.s);
    b[d.cl] = new a("obj_hook_02.png", c.s);
    b[d.Zc] = new a("obj_star_idle.png", c.s);
    b[d.xi] = new a("hud_star.png", c.s);
    b[d.il] = new a("obj_spikes_03.png",
     c.s);
    b[d.hl] = new a("obj_spikes_02.png", c.s);
    b[d.gl] = new a("obj_spikes_01.png", c.s);
    b[d.jc] = new a("char_animations.png", c.s);
    b[d.Ge] = new a("char_animations2.png", c.s);
    b[d.Eg] = new a("char_animations3.png", c.s);
    b[d.Gf] = new a("obj_hook_regulated.png", c.s);
    b[d.zi] = new a("obj_electrodes.png", c.s);
    b[d.He] = new a("obj_hook_movable.png", c.s);
    b[d.Ci] = new a("obj_pump.png", c.s);
    b[d.ll] = new a("tutorial_signs.png", c.s);
    b[d.Hf] = new a("obj_hat.png", c.s);
    b[d.Zk] = new a("obj_bouncer_01.png", c.s);
    b[d.$k] = new a("obj_bouncer_02.png",
     c.s);
    b[d.Sl] = new a("menu_music", c.W);
    b[d.Rl] = new a("game_music", c.W);
    b[d.mw] = new a("game_music2", c.W);
    b[d.Yk] = new a("obj_drawing_hidden.png", c.s);
    b[d.Di] = new a("obj_rotatable_spikes_01.png", c.s);
    b[d.dl] = new a("obj_rotatable_spikes_02.png", c.s);
    b[d.el] = new a("obj_rotatable_spikes_03.png", c.s);
    b[d.fl] = new a("obj_rotatable_spikes_04.png", c.s);
    b[d.Hg] = new a("obj_rotatable_spikes_button.png", c.s);
    b[d.Fg] = new a("obj_bee_hd.png", c.s);
    b[d.Bi] = new a("obj_pollen_hd.png", c.s);
    b[d.Ni] = new a("spike_rotate_in",
     c.W);
    b[d.Oi] = new a("spike_rotate_out", c.W);
    b[d.wi] = new a("char_supports.png", c.s);
    b[d.kc] = new a("obj_vinil.png", c.s);
    b[d.bm] = new a("scratch_in", c.W);
    b[d.cm] = new a("scratch_out", c.W);
    b[d.Ki] = new a("buzz", c.W);
    b[d.Mg] = new a("teleport", c.W);
    b[d.Tk] = new a("bgr_01_p1.jpg", c.s);
    b[d.Qp] = new a("bgr_01_p2.jpg", c.s);
    b[d.Uk] = new a("bgr_02_p1.jpg", c.s);
    b[d.Rp] = new a("bgr_02_p2.jpg", c.s);
    b[d.Sp] = new a("bgr_03_p1.jpg", c.s);
    b[d.Tp] = new a("bgr_03_p2.jpg", c.s);
    b[d.Vk] = new a("bgr_04_p1.jpg", c.s);
    b[d.Up] = new a("bgr_04_p2.jpg",
     c.s);
    b[d.Vp] = new a("bgr_05_p1.jpg", c.s);
    b[d.Wp] = new a("bgr_05_p2.jpg", c.s);
    b[d.Wk] = new a("bgr_06_p1.jpg", c.s);
    b[d.Xp] = new a("bgr_06_p2.jpg", c.s);
    b[d.Yp] = new a("bgr_07_p1.jpg", c.s);
    b[d.Zp] = new a("bgr_07_p2.jpg", c.s);
    b[d.Xk] = new a("bgr_08_p1.png", c.s);
    b[d.$p] = new a("bgr_08_p2.png", c.s);
    b[d.aq] = new a("bgr_09_p1.jpg", c.s);
    b[d.bq] = new a("bgr_09_p2.jpg", c.s);
    b[d.cq] = new a("bgr_10_p1.jpg", c.s);
    b[d.dq] = new a("bgr_10_p2.jpg", c.s);
    b[d.fq] = new a("bgr_11_p1.jpg", c.s);
    b[d.gq] = new a("bgr_11_p2.jpg", c.s);
    b[d.iq] =
     new a("bgr_ie.jpg", c.s);
    b[d.jq] = new a("bgr_time1.jpg", c.s);
    b[d.kq] = new a("bgr_time2.jpg", c.s);
    b[d.lq] = new a("bgr_time3.jpg", c.s);
    b[d.nq] = new a("bgr_time4.jpg", c.s);
    b[d.oq] = new a("bgr_time5.jpg", c.s);
    b[d.pq] = new a("bgr_time6.jpg", c.s);
    b[d.ov] = new a("Caesar_animations_1_hd.png", c.s);
    b[d.pv] = new a("Caesar_animations_2_hd.png", c.s);
    b[d.qv] = new a("Caesar_animations_3_hd.png", c.s);
    b[d.rv] = new a("Caesar_animations_4_hd.png", c.s);
    b[d.uv] = new a("Painter_animations_1_hd.png", c.s);
    b[d.vv] = new a("Painter_animations_2_hd.png",
     c.s);
    b[d.wv] = new a("Painter_animations_3_hd.png", c.s);
    b[d.xv] = new a("Painter_animations_4_hd.png", c.s);
    b[d.yv] = new a("Pharaoh_animations_1_hd.png", c.s);
    b[d.zv] = new a("Pharaoh_animations_2_hd.png", c.s);
    b[d.Av] = new a("Pharaoh_animations_3_hd.png", c.s);
    b[d.Bv] = new a("Pharaoh_animations_4_hd.png", c.s);
    b[d.Cv] = new a("Pirate_animations_1_hd.png", c.s);
    b[d.Dv] = new a("Pirate_animations_2_hd.png", c.s);
    b[d.Ev] = new a("Pirate_animations_3_hd.png", c.s);
    b[d.Fv] = new a("Pirate_animations_4_hd.png", c.s);
    b[d.Gv] = new a("Prehistoric_animations_1_hd.png",
     c.s);
    b[d.Hv] = new a("Prehistoric_animations_2_hd.png", c.s);
    b[d.Iv] = new a("Prehistoric_animations_3_hd.png", c.s);
    b[d.Jv] = new a("Prehistoric_animations_4_hd.png", c.s);
    b[d.Lv] = new a("Viking_animations_1_hd.png", c.s);
    b[d.Mv] = new a("Viking_animations_2_hd.png", c.s);
    b[d.Nv] = new a("Viking_animations_3_hd.png", c.s);
    b[d.Ov] = new a("Viking_animations_4_hd.png", c.s);
    b[d.Sq] = new a("candy_hit", c.W);
    b[d.Tq] = new a("prehistoric_monster_chewing", c.W);
    b[d.Uq] = new a("prehistoric_monster_close", c.W);
    b[d.Vq] = new a("prehistoric_monster_open",
     c.W);
    b[d.Wq] = new a("prehistoric_monster_sad", c.W);
    b[d.er] = new a("time_menu", c.W);
    b[d.Kv] = new a("time-stands.png", c.s);
    return b
   }(function() {
    return function(a, c) {
     this.path = a;
     this.type = c
    }
   }(), db, w),
   tb = function(a, c) {
    function d(a, c) {
     return Math.round(1E4 * a * c) / 1E4
    }
    return {
     FA: function(a, c) {
      var e, g, h;
      g = 0;
      for (h = a.length; g < h; g++) e = a[g], e = e.wa || 1, this.EA(a[g], d(c, e))
     },
     EA: function(a, c) {
      a.fd && (a.fd = d(a.fd, c));
      a.tc && (a.tc = d(a.tc, c));
      a.gc && (a.gc = d(a.gc, c));
      a.H && (a.H = Math.ceil(d(a.H, c)));
      a.G && (a.G = Math.ceil(d(a.G,
       c)));
      a.l && (a.pt = this.Oz(a.l), a.l = this.DA(a.pt, c));
      a.de = 0;
      a.de = 0;
      a.u && (a.ot = this.Nz(a.u), this.CA(a, c))
     },
     Oz: function(a) {
      for (var f = 0, d = a.length, g = []; f < d;) {
       var h = new c(a[f++], a[f++], a[f++], a[f++]);
       g.push(h)
      }
      return g
     },
     DA: function(a, f) {
      var e = [],
       g = 0,
       h = 0,
       l = 0,
       n = a.length,
       q = Math.ceil(Math.sqrt(n)),
       m = 0,
       p, u;
      for (u = 0; u < n; u++) p = a[u], m = (m + 1) % q, 1 === m && (g += l + 2, h = 2, l = 0), p = new c(g, h, d(p.N, f), d(p.V, f)), e.push(p), h += Math.ceil(p.V) + 2, l = Math.max(l, Math.ceil(p.N));
      return e
     },
     Nz: function(b) {
      for (var c = 0, d = b.length, g = []; c < d;) {
       var h =
        new a(b[c++], b[c++]);
       g.push(h)
      }
      return g
     },
     CA: function(b, c) {
      var e = [],
       g = b.ot,
       h = [],
       l, n, q, m;
      q = 0;
      for (m = g.length; q < m; q++) l = g[q].copy(), l.x = d(l.x, c), l.y = d(l.y, c), n = new a(0, 0), e.push(n), h.push(l);
      b.u = h;
      b.lz = e;
      delete b.ot
     }
    }
   }(O, S),
   sa = function(a) {
    var c = {};
    c.zw = [a.Sl, a.Ol, a.ka];
    c.rD = [a.er, a.Ol, a.ka];
    c.ww = [a.jc, a.Ge, a.Eg, a.bl, a.cl, a.Ai, a.Cc, a.Zk, a.$k, a.yi, a.Gg, a.al, a.Ci, a.Ig, a.gl, a.hl, a.il, a.jl, a.Zc, a.kl, a.xi, a.ll, a.Yk, a.wi];
    c.dD = [a.Fg, a.Bi];
    c.eD = [a.Ki, a.Li, a.Mi];
    c.pD = [a.Hf, a.He, a.Di, a.dl, a.el, a.fl, a.Hg];
    c.qD = [a.Ul, a.Ni, a.Oi, a.Mg, a.Sq, a.Tq, a.Vq, a.Uq, a.Wq];
    c.nC = [a.He, a.Gf, a.zi, a.Hf, a.Di, a.dl, a.el, a.fl, a.Hg, a.Fg, a.Bi, a.kc];
    c.hv = [a.Hf, a.He, a.zi];
    c.iv = [a.Mg, a.Cd];
    c.vw = [a.Bg, a.Ef, a.Nk];
    c.xw = [a.Rl, a.Ll, a.Ml, a.Nl, a.Pl, a.Ql, a.Tl, a.Vl, a.Wl, a.Xl, a.Yl, a.Xq, a.Yq, a.Zl, a.$l, a.$q, a.ar, a.br, a.am, a.dm, a.em, a.fm, a.gm, a.cr, a.dr, a.im];
    c.oC = [a.Cd, a.Li, a.Mi, a.Zq, a.hm, a.Ni, a.Oi, a.bm, a.cm, a.Ki, a.Mg];
    c.yw = "bBtn_bgd.png box_lock.png box_nav_menu.png box_omnom.png boxcutter.png boxmore_bgd.png buttonsprite.png fb.png fBtn_bgd.png flags.png fun-omnom.png gamecomplete.jpg lBtn_bgd.png level_bgd.png level_bgd_small.png leveltape.png leveltape_left.png leveltape_right.png mBtn_bgd.png menu_result_en.png menu_result_fr.png menu_result_gr.png menu_result_ru.png menubg.jpg options_stars_bgd.png options_stars_bgd_small.png perfect_mark.png ph_logo.png result_line.png sBtn_bgd.png shadow.png star_result.png star_result_small.png startbg.jpg taperoll.png".split(" ");
    c.iC = ["drawing-bg.png"];
    c.cw = "android.png box.png comic.png facebook.png footer_dot.png footer_finger.png full_version_bg.png full_version_text.png game_bg.png ipad.png iphone.png more_close.png more_text.png more_wallpaper.png more_window_bg.png more.png papercraft.png privacy.png shop.png terms.png twitter.png video_bg.png youtube.png zepto.png zeptologo.png".split(" ");
    return c
   }(w),
   qa = {
    Je: "NORMAL",
    nv: "IEPINNED",
    sl: "MORECOMING",
    Cq: "PURCHASE",
    vm: "TIME"
   },
   fa = function() {
    var a = {
     Cf: 0,
     Cg: 1,
     Ag: 2,
     Lg: 3,
     ol: 4,
     Bm: 5,
     nl: 6,
     Mk: 7,
     ml: 8,
     ul: 9,
     ep: 10,
     hn: function(c) {
      switch (c) {
       case "de":
        return a.Ag;
       case "fr":
        return a.Cg;
       case "ru":
        return a.Lg;
       case "en":
       case "en_GB":
       case "en_US":
        return a.Cf;
       case "ko":
        return a.ol;
       case "zh":
        return a.Bm;
       case "ja":
        return a.nl;
       case "es":
        return a.Mk;
       case "it":
        return a.ml;
       case "nl":
        return a.ul;
       case "br":
        return a.ep
      }
      if (3 <= c.length) switch (c.substr(0, 3)) {
       case "de-":
        return a.Ag;
       case "fr-":
        return a.Cg;
       case "ru-":
        return a.Lg;
       case "en-":
        return a.Cf;
       case "ko-":
        return a.ol;
       case "zh-":
        return a.Bm;
       case "ja-":
        return a.nl;
       case "es-":
        return a.Mk;
       case "it-":
        return a.ml;
       case "nl-":
        return a.ul;
       case "br-":
        return a.ep
      }
      return null
     },
     zB: function(c) {
      switch (c) {
       case a.Ag:
        return "de";
       case a.Cg:
        return "fr";
       case a.Lg:
        return "ru";
       case a.ol:
        return "ko";
       case a.Bm:
        return "zh";
       case a.nl:
        return "ja";
       case a.Mk:
        return "es";
       case a.ml:
        return "it";
       case a.ul:
        return "nl";
       default:
        return "en"
      }
     }
    };
    return a
   }(),
   V = function(a) {
    a.Mu = [0, 25, 50, 75, null];
    return a
   }({
    ok: "http://www.cuttherope.net",
    wx: !0,
    Lm: [{
      w: "Easiest Levels",
      p: "Box",
      o: "ThiKKK Box",
      r: "Vodka Storage"
     },
     {
      w: "Easier Levels",
      p: "Fur",
      o: "Plush Bear of Death",
      r: "Vodka Holder"
     }, {
      w: "Easy Levels",
      p: "Toy",
      o: "Gun Box",
      r: "Vodka Bottle"
     }, {
      w: "Somewhat Thought Provoking Levels",
      p: "MAGICAL MOTHERLOVER",
      o: "Great Magicians Are Great Liars",
      r: "Vodka Pool"
     }, {
      w: "MORE LEVELS COMING ONE DAY",
      p: "Il n'y a plus",
      o: "Do you have all z starz?",
      r: "Im Out of Vodka..."
     }
    ],
    On: [fa.Cf, fa.Cg, fa.Ag, fa.Lg],
    Vr: ["box1_bgd.png", "box2_bgd.png", "box6_bgd.png", "box4_bgd.png", "boxmore_bgd.png"],
    Tr: [],
    Km: ["levelbg1.jpg", "levelbg2.jpg", "levelbg6.jpg", "levelbg4.jpg"],
    cx: [qa.Je, qa.Je, qa.Je, qa.Je, qa.sl],
    Mu: [0, 20, 40, 60, null],
    supports: [0, 1, 5, 3, null],
    iB: [!1, !1, !1, !1, !1],
    $s: sa.zw,
    ys: sa.xw.concat(sa.iv),
    cz: sa.yw,
    sE: ["loader-bg.jpg", "loader-logo.png"],
    Yx: sa.ww.concat(sa.hv),
    Tg: [{
     Dh: [{
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
        name: 52,
        x: 156,
        y: 139
       }, {
        name: 100,
        x: 159,
        y: 51,
        length: 90,
        d: !1,
        t: !1,
        e: -1,
        f: -1,
        h: !1,
        g: 0,
        c: !1,
        m: "L"
       }, {
        name: 2,
        x: 161,
        y: 427
       }, {
        name: 3,
        x: 162,
        y: 230,
        timeout: -1
       }, {
        name: 3,
        x: 161,
        y: 295,
        timeout: -1
       }, {
        name: 3,
        x: 161,
        y: 361,
        timeout: -1
       }, {
        name: 4,
        x: 177,
        y: 31,
        locale: "en",
        text: "Your Cursor's a Blade",
        width: 130
       }, {
        name: 4,
        x: 182,
        y: 335,
        locale: "en",
        text: "Deliver candy to the green thing",
        width: 130
       }, {
        name: 5,
        x: 57,
        y: 119,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 8,
        x: 231,
        y: 416,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 5,
        x: 109,
        y: 119,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 5,
        x: 161,
        y: 119,
        locale: "en",
        k: 100,
        q: 100
       },
       {
        name: 5,
        x: 213,
        y: 119,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 5,
        x: 265,
        y: 119,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 14,
        x: 73,
        y: 145,
        locale: "en",
        k: 100,
        q: 100,
        J: 2
       }
      ],
      r: [{
       name: 14,
       x: 73,
       y: 153,
       locale: "ru",
       k: 100,
       q: 100,
       J: 2
      }, {
       name: 5,
       x: 109,
       y: 130,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 57,
       y: 130,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 161,
       y: 130,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 213,
       y: 130,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 265,
       y: 130,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 177,
       y: 0,
       locale: "ru",
       text: "VODKA-Burp",
       width: 130
      }, {
       name: 8,
       x: 231,
       y: 415,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 196,
       y: 312,
       locale: "ru",
       text: "STALIN 4 LIEF",
       width: 100
      }],
      p: [{
       name: 14,
       x: 73,
       y: 150,
       locale: "fr",
       k: 100,
       q: 100,
       J: 2
      }, {
       name: 5,
       x: 109,
       y: 124,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 57,
       y: 124,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 161,
       y: 124,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 213,
       y: 124,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 265,
       y: 124,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 177,
       y: 31,
       locale: "fr",
       text: "Hon Hon Oui Oui",
       width: 130
      }, {
       name: 8,
       x: 231,
       y: 415,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 196,
       y: 311,
       locale: "fr",
       text: "Baguette!",
       width: 100
      }],
      o: [{
       name: 14,
       x: 73,
       y: 155,
       locale: "de",
       k: 100,
       q: 100,
       J: 2
      }, {
       name: 5,
       x: 109,
       y: 129,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 57,
       y: 129,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 161,
       y: 129,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 213,
       y: 129,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 5,
       x: 265,
       y: 129,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 175,
       y: 15,
       locale: "de",
       text: "SIEG HEIL!",
       width: 120
      }, {
       name: 8,
       x: 231,
       y: 416,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 200,
       y: 312,
       locale: "de",
       text: "HAIL HITLER!!",
       width: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 69,
       y: 203
      }, {
       name: 100,
       x: 52,
       y: 70,
       length: 90,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 162,
       y: 69,
       length: 170,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 2,
       x: 264,
       y: 419
      }, {
       name: 3,
       x: 54,
       y: 250,
       timeout: -1
      }, {
       name: 3,
       x: 53,
       y: 369,
       timeout: -1
      }, {
       name: 3,
       x: 280,
       y: 250,
       timeout: -1
      }, {
       name: 100,
       x: 275,
       y: 69,
       length: 320,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 4,
       x: 133,
       y: 285,
       locale: "en",
       text: "Collect as many stars as you want, I dont give a crap",
       width: 150
      }, {
       name: 13,
       x: 113,
       y: 321,
       locale: "en",
       k: 100,
       q: 100
      }],
      r: [{
       name: 13,
       x: 94,
       y: 315,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 103,
       y: 278,
       locale: "ru",
       text: "Get all the Vodka",
       width: 210
      }],
      p: [{
       name: 4,
       x: 137,
       y: 285,
       locale: "fr",
       text: "Hmm Shinies, JE VEUX",
       width: 200
      }, {
       name: 13,
       x: 113,
       y: 321,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 4,
       x: 126,
       y: 285,
       locale: "de",
       text: "GRAB THE GOLD FOR THE FÜHRER",
       width: 170
      }, {
       name: 13,
       x: 106,
       y: 321,
       locale: "de",
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       J: 1,
       Q: 1
      }],
      $: [{
       name: 52,
       x: 158,
       y: 187
      }, {
       name: 2,
       x: 262,
       y: 362
      }, {
       name: 100,
       x: 161,
       y: 315,
       length: 93,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 289,
       y: 186,
       length: 105,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 162,
       y: 57,
       length: 93,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 33,
       y: 186,
       length: 105,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 3,
       x: 159,
       y: 226,
       timeout: -1
      }, {
       name: 3,
       x: 32,
       y: 312,
       timeout: -1
      }, {
       name: 3,
       x: 161,
       y: 434,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 101,
       y: 238
      }, {
       name: 2,
       x: 219,
       y: 431
      }, {
       name: 3,
       x: 102,
       y: 326,
       timeout: -1
      }, {
       name: 3,
       x: 217,
       y: 209,
       timeout: -1
      }, {
       name: 3,
       x: 217,
       y: 74,
       timeout: -1
      }, {
       name: 100,
       x: 96,
       y: 139,
       length: 90,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 54,
       x: 99,
       y: 391
      }, {
       name: 100,
       x: 219,
       y: 252,
       length: 140,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 4,
       x: 50,
       y: 44,
       locale: "en",
       text: "BUBBLESSSSSZZZZZ!",
       width: 120,
       J: 1
      }, {
       name: 4,
       x: 157,
       y: 293,
       locale: "en",
       text: "It Brakes Physics and makes the candy float or something, idk",
       width: 120
      }, {
       name: 8,
       x: 167,
       y: 391,
       locale: "en",
       a: 15,
       k: 100,
       q: 100
      }, {
       name: 9,
       x: 218,
       y: 78,
       locale: "en",
       k: 100,
       q: 10,
       J: 1
      }, {
       name: 102,
       x: 269,
       y: 426,
       a: 10,
       Zm: 1
      }],
      r: [{
       name: 8,
       x: 167,
       y: 391,
       locale: "ru",
       a: 20,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 138,
       y: 315,
       locale: "ru",
       text: "\u041f\u0443\u0437\u044b\u0440\u044c \u043f\u043e\u0434\u044b\u043c\u0435\u0442 \u043b\u0435\u0434\u0435\u043d\u0435\u0446 \u0432\u0432\u0435\u0440\u0445",
       width: 160
      }, {
       name: 4,
       x: 21,
       y: 44,
       locale: "ru",
       text: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043b\u043e\u043f\u043d\u0443\u0442\u044c \u043f\u0443\u0437\u044b\u0440\u044c",
       width: 160,
       J: 1
      }, {
       name: 9,
       x: 218,
       y: 78,
       locale: "ru",
       k: 100,
       q: 100,
       J: 1
      }],
      p: [{
       name: 4,
       x: 121,
       y: 311,
       locale: "fr",
       text: "La bulle fera monter le bonbon",
       width: 150
      }, {
       name: 8,
       x: 167,
       y: 386,
       locale: "fr",
       a: 15,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 10,
       y: 45,
       locale: "fr",
       text: "\u00c9clate la bulle avec ton doigt",
       width: 160,
       J: 1
      }, {
       name: 9,
       x: 217,
       y: 78,
       locale: "fr",
       k: 100,
       q: 100,
       J: 1
      }],
      o: [{
       name: 4,
       x: 25,
       y: 15,
       locale: "de",
       text: "Klicke, um die Seifenblase platzen zu lassen",
       width: 140,
       J: 1
      }, {
       name: 9,
       x: 217,
       y: 77,
       locale: "de",
       k: 100,
       q: 10,
       J: 1
      }, {
       name: 4,
       x: 138,
       y: 308,
       locale: "de",
       text: "Die Seifenblase l\u00e4sst den Bonbon schweben",
       width: 170
      }, {
       name: 8,
       x: 166,
       y: 390,
       locale: "de",
       a: 15,
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 266,
       y: 161
      }, {
       name: 100,
       x: 155,
       y: 250,
       length: 95,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 153,
       y: 110,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 2,
       x: 155,
       y: 430
      }, {
       name: 3,
       x: 37,
       y: 264,
       timeout: -1
      }, {
       name: 3,
       x: 152,
       y: 70,
       timeout: -1
      }, {
       name: 3,
       x: 276,
       y: 264,
       timeout: -1
      }, {
       name: 54,
       x: 252,
       y: 367
      }, {
       name: 4,
       x: 17,
       y: 301,
       locale: "en",
       text: "You could restart the level by pressing this",
       width: 200
      }, {
       name: 12,
       x: 88,
       y: 377,
       locale: "en",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 85,
       y: 348,
       locale: "en",
       text: "BOI",
       width: 100
      }],
      r: [{
       name: 4,
       x: 17,
       y: 304,
       locale: "ru",
       text: "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u043d\u0430\u0436\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443",
       width: 200
      }, {
       name: 12,
       x: 188,
       y: 376,
       locale: "ru",
       k: 100,
       q: 100
      }],
      p: [{
       name: 4,
       x: 27,
       y: 285,
       locale: "fr",
       text: "Tu peux recommencer le niveau en touchant le bouton",
       width: 180
      }, {
       name: 12,
       x: 175,
       y: 361,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 12,
       x: 212,
       y: 333,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 31,
       y: 282,
       locale: "de",
       text: "Lass den Bonbon nicht aus der Schachtel",
       width: 175
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       J: 1,
       Q: 1
      }],
      $: [{
       name: 52,
       x: 161,
       y: 350
      }, {
       name: 2,
       x: 163,
       y: 67
      }, {
       name: 100,
       x: 243,
       y: 290,
       length: 120,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 83,
       y: 401,
       length: 90,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 54,
       x: 165,
       y: 421
      }, {
       name: 100,
       x: 165,
       y: 123,
       length: 200,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 3,
       x: 97,
       y: 294,
       timeout: -1
      }, {
       name: 3,
       x: 166,
       y: 422,
       timeout: -1
      }, {
       name: 3,
       x: 97,
       y: 228,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 64,
       y: 139
      }, {
       name: 2,
       x: 163,
       y: 427
      }, {
       name: 100,
       x: 162,
       y: 68,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 66,
       y: 68,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 163,
       y: 163,
       length: 90,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 162,
       y: 259,
       length: 130,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 58,
       x: 161,
       y: 329,
       a: 0,
       size: 2
      }, {
       name: 58,
       x: 159,
       y: 229,
       a: 0,
       size: 2
      }, {
       name: 3,
       x: 250,
       y: 165,
       timeout: -1
      }, {
       name: 3,
       x: 64,
       y: 276,
       timeout: -1
      }, {
       name: 3,
       x: 248,
       y: 275,
       timeout: -1
      }, {
       name: 10,
       x: 249,
       y: 347,
       locale: "en",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 190,
       y: 359,
       locale: "en",
       text: "Keep the Red Shiney Away from the spiky bois",
       width: 120
      }],
      r: [{
       name: 10,
       x: 82,
       y: 370,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 92,
       y: 332,
       locale: "ru",
       text: "Dont Let Vodka touch the walls of stalin",
       width: 200
      }],
      p: [{
       name: 4,
       x: 210,
       y: 360,
       locale: "fr",
       text: "KEEP BAGUETTE SAFE",
       width: 120
      }, {
       name: 10,
       x: 266,
       y: 346,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 10,
       x: 77,
       y: 370,
       locale: "de",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 99,
       y: 327,
       locale: "de",
       text: "Save zhe candi for mine fuhrer",
       width: 250
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 514,
       y: 418
      }, {
       name: 100,
       x: 224,
       y: 177,
       length: 100,
       d: !1,
       t: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 448,
       y: 337,
       length: 100,
       d: !1,
       t: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 335,
       y: 256,
       length: 100,
       d: !1,
       t: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 52,
       x: 178,
       y: 103
      }, {
       name: 3,
       x: 222,
       y: 269,
       timeout: -1
      }, {
       name: 3,
       x: 448,
       y: 430,
       timeout: -1
      }, {
       name: 3,
       x: 328,
       y: 345,
       timeout: -1
      }, {
       name: 100,
       x: 180,
       y: 31,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 4,
       x: 273,
       y: 39,
       locale: "en",
       text: "Some Whips grab your Sweets, weather you like it or not",
       width: 140
      }, {
       name: 8,
       x: 316,
       y: 164,
       locale: "en",
       k: 100,
       q: 100
      }],
      r: [{
        name: 8,
        x: 325,
        y: 173,
        locale: "ru",
        k: 100,
        q: 100
       },
       {
        name: 4,
        x: 234,
        y: 68,
        locale: "ru",
        text: "Vodka wants to be held in those circle things",
        width: 220
       }
      ],
      p: [{
       name: 4,
       x: 213,
       y: 41,
       locale: "fr",
       text: "Veut tu un baguette? Les ROPEs veut'un",
       width: 260
      }, {
       name: 8,
       x: 298,
       y: 144,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 4,
       x: 250,
       y: 47,
       locale: "de",
       text: "Mine fuhrer vants zhe sveet to touch a rope.",
       width: 200
      }, {
       name: 8,
       x: 329,
       y: 152,
       locale: "de",
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 160,
       y: 316
      }, {
       name: 2,
       x: 162,
       y: 439
      }, {
       name: 54,
       x: 160,
       y: 317
      }, {
       name: 100,
       x: 36,
       y: 413,
       length: 130,
       d: !1,
       t: !1,
       Nd: !1,
       xh: !1,
       e: -1,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 291,
       y: 413,
       length: 130,
       d: !1,
       t: !1,
       Nd: !1,
       xh: !1,
       e: -1,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 162,
       y: 381,
       k: 100,
       q: 0,
       timeout: -1
      }, {
       name: 100,
       x: 93,
       y: 231,
       length: 100,
       d: !1,
       t: !1,
       Nd: !1,
       xh: !1,
       e: 70,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 231,
       y: 231,
       length: 100,
       d: !1,
       t: !1,
       Nd: !1,
       xh: !1,
       e: 70,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 59,
       x: 232,
       y: 232,
       a: 0,
       size: 3,
       path: "0,0",
       k: 40,
       q: 40,
       Sc: !1
      }, {
       name: 59,
       x: 90,
       y: 232,
       a: 0,
       size: 3,
       path: "0,0",
       k: -40,
       q: -40,
       Sc: !1
      }, {
       name: 3,
       x: 161,
       y: 32,
       timeout: -1
      }, {
       name: 3,
       x: 161,
       y: 73,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 291,
       y: -9
      }, {
       name: 2,
       x: 62,
       y: 296
      }, {
       name: 54,
       x: 178,
       y: 418
      }, {
       name: 100,
       x: 227,
       y: 315,
       length: 100,
       d: !1,
       t: !1,
       e: 60,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 60,
       x: 229,
       y: 201,
       a: 90,
       size: 4,
       Sc: !1
      }, {
       name: 100,
       x: 63,
       y: 161,
       length: 100,
       d: !1,
       t: !1,
       e: 60,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 3,
       x: 128,
       y: 86,
       timeout: -1
      }, {
       name: 58,
       x: 59,
       y: 86,
       a: 90,
       size: 2,
       Sc: !1
      }, {
       name: 3,
       x: 289,
       y: 197,
       timeout: -1
      }, {
       name: 3,
       x: 63,
       y: 243,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       J: 1,
       Q: 1
      }],
      $: [{
       name: 2,
       x: 162,
       y: 430
      }, {
       name: 100,
       x: 101,
       y: 271,
       length: 100,
       d: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 36,
       y: 148,
       length: 100,
       d: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 291,
       y: 149,
       length: 100,
       d: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 227,
       y: 273,
       length: 100,
       d: !1,
       e: 45,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 52,
       x: 159,
       y: 159
      }, {
       name: 3,
       x: 96,
       y: 379,
       timeout: -1
      }, {
       name: 3,
       x: 29,
       y: 246,
       timeout: -1
      }, {
       name: 3,
       x: 225,
       y: 377,
       timeout: -1
      }, {
       name: 100,
       x: 98,
       y: 79,
       length: 90,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 226,
       y: 80,
       length: 90,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 162,
       y: 34,
       length: 100,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 77,
       y: 313
      }, {
       name: 2,
       x: 123,
       y: 432
      }, {
       name: 3,
       x: 148,
       y: 139,
       timeout: -1
      }, {
       name: 3,
       x: 257,
       y: 351,
       timeout: -1
      }, {
       name: 3,
       x: 122,
       y: 346,
       timeout: -1
      }, {
       name: 100,
       x: 124,
       y: 191,
       length: 70,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 247,
       y: 92,
       length: 150,
       d: !1,
       t: !1,
       e: 55,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 188,
       y: 289,
       length: 100,
       d: !1,
       t: !1,
       e: 65,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 49,
       y: 381,
       length: 25,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 4,
       x: 20,
       y: 98,
       locale: "en",
       text: "PHYSICS ARE A THING BOI",
       width: 100
      }, {
       name: 13,
       x: 67,
       y: 85,
       locale: "en",
       k: 100,
       q: 100
      }],
      r: [{
       name: 13,
       x: 68,
       y: 64,
       locale: "ru",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 21,
       y: 77,
       locale: "ru",
       text: "Torture the ropes FOR VODKA!",
       width: 100
      }],
      p: [{
       name: 13,
       x: 67,
       y: 61,
       locale: "fr",
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 20,
       y: 74,
       locale: "fr",
       text: "STREEEEEEEEEEEEEEEETCH",
       width: 100
      }],
      o: [{
       name: 4,
       x: 57,
       y: 33,
       locale: "de",
       text: "TORTURE FOR MINE FUHRER",
       width: 140
      }, {
       name: 13,
       x: 39,
       y: 68,
       locale: "de",
       k: 100,
       q: 100
      }]
     }]
    }, {
     Dh: [{
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 161,
       y: 220
      }, {
       name: 2,
       x: 254,
       y: 416
      }, {
       name: 3,
       x: 299,
       y: 89,
       timeout: -1
      }, {
       name: 3,
       x: 20,
       y: 89,
       timeout: -1
      }, {
       name: 3,
       x: 161,
       y: 171,
       timeout: -1
      }, {
       name: 55,
       x: 42,
       y: 237,
       a: 0
      }, {
       name: 55,
       x: 277,
       y: 233,
       a: 180
      }, {
       name: 100,
       x: 162,
       y: 88,
       length: 110,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 55,
       x: 161,
       y: 334,
       a: -90
      }, {
       name: 4,
       x: 22,
       y: 357,
       locale: "en",
       text: "SMASH that like button to do the thing",
       width: 180
      }, {
       name: 8,
       x: 101,
       y: 347,
       locale: "en",
       a: 180,
       k: 100,
       q: 100
      }],
      r: [{
       name: 8,
       x: 104,
       y: 350,
       locale: "ru",
       a: 180,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 22,
       y: 357,
       locale: "ru",
       text: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043f\u043e\u0434\u0443\u0448\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0443\u0442\u044c \u043d\u0430 \u043b\u0435\u0434\u0435\u043d\u0435\u0446",
       width: 180
      }],
      p: [{
       name: 8,
       x: 101,
       y: 347,
       locale: "fr",
       a: 180,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 10,
       y: 357,
       locale: "fr",
       text: "Touche le coussin d'air pour qu'il souffle sur les objets",
       width: 180
      }],
      o: [{
       name: 8,
       x: 102,
       y: 354,
       locale: "de",
       a: 180,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: -15,
       y: 360,
       locale: "de",
       text: "Ber\u00fchre den Luftballon, um Objekte wegzupusten",
       width: 210
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       J: 1,
       Q: 1
      }],
      $: [{
       name: 52,
       x: 215,
       y: 210
      }, {
       name: 2,
       x: 190,
       y: 322
      }, {
       name: 55,
       x: 284,
       y: 208,
       a: -180
      }, {
       name: 100,
       x: 222,
       y: 82,
       length: 90,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 101,
       y: 209,
       length: 95,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 3,
       x: 99,
       y: 253,
       timeout: -1
      }, {
       name: 3,
       x: 98,
       y: 345,
       timeout: -1
      }, {
       name: 3,
       x: 98,
       y: 82,
       timeout: -1
      }, {
       name: 55,
       x: 37,
       y: 343,
       a: 0
      }, {
       name: 57,
       x: 37,
       y: 257,
       a: 0,
       size: 1
      }, {
       name: 54,
       x: 97,
       y: 144
      }, {
       name: 60,
       x: 220,
       y: 256,
       a: 0,
       size: 4
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 321,
       y: 213
      }, {
       name: 2,
       x: 431,
       y: 386
      }, {
       name: 100,
       x: 323,
       y: 47,
       length: 130,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 55,
       x: 183,
       y: 224,
       a: 0
      }, {
       name: 100,
       x: 323,
       y: 167,
       length: 200,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 323,
       y: 105,
       length: 170,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 320,
       y: 399,
       timeout: -1
      }, {
       name: 57,
       x: 323,
       y: 347,
       a: 0,
       size: 1
      }, {
       name: 3,
       x: 422,
       y: 161,
       timeout: -1
      }, {
       name: 3,
       x: 322,
       y: 302,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 401,
       y: 423
      }, {
       name: 3,
       x: 226,
       y: 158,
       timeout: -1
      }, {
       name: 3,
       x: 402,
       y: 160,
       timeout: -1
      }, {
       name: 55,
       x: 151,
       y: 130,
       a: 0
      }, {
       name: 3,
       x: 529,
       y: 158,
       timeout: -1
      }, {
       name: 54,
       x: 400,
       y: 351
      }, {
       name: 54,
       x: 314,
       y: 351
      }, {
       name: 52,
       x: 528,
       y: 225
      }, {
       name: 100,
       x: 529,
       y: 87,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 306,
       y: 87,
       length: 250,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 529,
       y: 352,
       length: 90,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       J: 1,
       Q: 1
      }],
      $: [{
       name: 2,
       x: 219,
       y: 433
      }, {
       name: 54,
       x: 100,
       y: 176
      }, {
       name: 54,
       x: 159,
       y: 178
      }, {
       name: 54,
       x: 218,
       y: 178
      }, {
       name: 54,
       x: 100,
       y: 242
      }, {
       name: 54,
       x: 159,
       y: 244
      }, {
       name: 54,
       x: 218,
       y: 244
      }, {
       name: 54,
       x: 100,
       y: 308
      }, {
       name: 54,
       x: 159,
       y: 310
      }, {
       name: 54,
       x: 218,
       y: 310
      }, {
       name: 54,
       x: 102,
       y: 373
      }, {
       name: 54,
       x: 161,
       y: 375
      }, {
       name: 54,
       x: 220,
       y: 375
      }, {
       name: 54,
       x: 98,
       y: 109
      }, {
       name: 54,
       x: 220,
       y: 110
      }, {
       name: 3,
       x: 99,
       y: 110,
       timeout: -1
      }, {
       name: 3,
       x: 218,
       y: 244,
       timeout: -1
      }, {
       name: 3,
       x: 103,
       y: 372,
       timeout: -1
      }, {
       name: 52,
       x: 157,
       y: 97
      }, {
       name: 55,
       x: 36,
       y: 376,
       a: -20
      }, {
       name: 55,
       x: 35,
       y: 247,
       a: -20
      }, {
       name: 55,
       x: 284,
       y: 245,
       a: 200
      }, {
       name: 55,
       x: 284,
       y: 374,
       a: 200
      }, {
       name: 54,
       x: 40,
       y: 312
      }, {
       name: 54,
       x: 277,
       y: 310
      }, {
       name: 54,
       x: 280,
       y: 178
      }, {
       name: 54,
       x: 37,
       y: 180
      }, {
       name: 100,
       x: 163,
       y: 33,
       length: 50,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 54,
       x: 280,
       y: 111
      }, {
       name: 54,
       x: 37,
       y: 108
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
        name: 52,
        x: 390,
        y: 125
       }, {
        name: 2,
        x: 318,
        y: 431
       }, {
        name: 100,
        x: 391,
        y: 46,
        length: 40,
        d: !1,
        t: !1,
        e: -1,
        f: -1,
        h: !1,
        g: 0,
        c: !1,
        m: "L"
       }, {
        name: 100,
        x: 323,
        y: 225,
        length: 70,
        d: !1,
        t: !1,
        e: 80,
        f: -1,
        h: !1,
        g: 0,
        c: !0,
        m: "L"
       }, {
        name: 57,
        x: 375,
        y: 406,
        a: 90,
        size: 1
       }, {
        name: 57,
        x: 256,
        y: 407,
        a: 90,
        size: 1
       }, {
        name: 4,
        x: 211,
        y: 300,
        locale: "en",
        text: "Dont let creepy boi touch the FOOOOOD",
        width: 240
       },
       {
        name: 13,
        x: 194,
        y: 335,
        locale: "en",
        k: 100,
        q: 100
       }, {
        name: 3,
        x: 372,
        y: 223,
        timeout: -1
       }, {
        name: 3,
        x: 230,
        y: 287,
        timeout: -1
       }, {
        name: 3,
        x: 317,
        y: 377,
        timeout: -1
       }
      ],
      r: [{
        name: 4,
        x: 48,
        y: 271,
        locale: "ru",
        text: "\u041f\u0435\u0440\u0435\u0440\u0435\u0436\u044c\u0442\u0435 \u0432\u0435\u0440\u0435\u0432\u043a\u0443 \u043f\u0440\u0435\u0436\u0434\u0435, \u0447\u0435\u043c \u043f\u0430\u0443\u0447\u043e\u043a \u0434\u043e\u0431\u0435\u0440\u0435\u0442\u0441\u044f \u0434\u043e \u043b\u0435\u0434\u0435\u043d\u0446\u0430",
        width: 200
       },
       {
        name: 13,
        x: 35,
        y: 317,
        locale: "ru",
        k: 100,
        q: 100
       }
      ],
      p: [{
       name: 4,
       x: 56,
       y: 299,
       locale: "fr",
       text: "Coupe la corde avant que l'araign\u00e9e n'atteigne le bonbon",
       width: 240
      }, {
       name: 13,
       x: 39,
       y: 334,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 4,
       x: 79,
       y: 287,
       locale: "de",
       text: "Schneide das Seil durch, bevor die Spinne am Bonbon ist",
       width: 170
      }, {
       name: 13,
       x: 150,
       y: 276,
       locale: "de",
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 442,
       y: 421
      }, {
       name: 52,
       x: 181,
       y: 172
      }, {
       name: 100,
       x: 345,
       y: 136,
       length: 100,
       d: !1,
       t: !1,
       e: 65,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 185,
       y: 79,
       length: 60,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 259,
       y: 245,
       length: 100,
       d: !1,
       t: !1,
       e: 65,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 3,
       x: 256,
       y: 127,
       timeout: -1
      }, {
       name: 3,
       x: 434,
       y: 336,
       timeout: -1
      }, {
       name: 3,
       x: 257,
       y: 335,
       timeout: -1
      }, {
       name: 54,
       x: 345,
       y: 307
      }, {
       name: 100,
       x: 436,
       y: 243,
       length: 100,
       d: !1,
       t: !1,
       e: 65,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 101,
       x: 108,
       y: 273,
       a: 20,
       Zm: 2
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 54,
       x: 109,
       y: 257
      }, {
       name: 55,
       x: 66,
       y: 72,
       a: 50
      }, {
       name: 3,
       x: 208,
       y: 191,
       timeout: -1
      }, {
       name: 3,
       x: 385,
       y: 195,
       timeout: -1
      }, {
       name: 3,
       x: 546,
       y: 192,
       timeout: -1
      }, {
       name: 2,
       x: 458,
       y: 416
      }, {
       name: 52,
       x: 111,
       y: 174
      }, {
       name: 100,
       x: 113,
       y: 83,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 55,
       x: 161,
       y: 72,
       a: 50
      }, {
       name: 55,
       x: 258,
       y: 73,
       a: 50
      }, {
       name: 55,
       x: 349,
       y: 73,
       a: 50
      }, {
       name: 100,
       x: 47,
       y: 154,
       length: 460,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 55,
       x: 437,
       y: 73,
       a: 50
      }, {
       name: 60,
       x: 582,
       y: 203,
       a: 90,
       size: 4
      }]
     }, {
      settings: [{
        name: 0,
        Z: 32,
        width: 640,
        height: 480
       },
       {
        name: 1,
        Q: 1,
        J: 1,
        A: !1
       }
      ],
      $: [{
       name: 2,
       x: 321,
       y: 414
      }, {
       name: 52,
       x: 323,
       y: 191
      }, {
       name: 100,
       x: 408,
       y: 302,
       length: 140,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 100,
       x: 224,
       y: 304,
       length: 140,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 100,
       x: 383,
       y: 125,
       length: 80,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 100,
       x: 256,
       y: 126,
       length: 80,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 3,
       x: 321,
       y: 275,
       k: 100,
       q: 100,
       timeout: -1
      }, {
       name: 3,
       x: 660,
       y: 133,
       path: "-39,-17,-91,-21,-154,-11,-201,10,-240,49,-284,99,-331,159,",
       k: 45,
       q: 0,
       timeout: -1
      }, {
       name: 3,
       x: -20,
       y: 142,
       path: "46,-14,93,-26,142,-18,195,3,239,40,282,97,327,151,",
       k: 45,
       q: 0,
       timeout: -1
      }, {
       name: 54,
       x: 319,
       y: 340
      }],
      "layer 2": [{
       name: 60,
       x: 232,
       y: 172,
       a: 55,
       size: 4
      }, {
       name: 60,
       x: 406,
       y: 172,
       a: -55,
       size: 4
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 54,
       x: 210,
       y: 315
      }, {
       name: 54,
       x: 311,
       y: 420
      }, {
       name: 100,
       x: 312,
       y: 318,
       length: 100,
       d: !1,
       t: !1,
       e: 80,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L"
      }, {
       name: 54,
       x: 311,
       y: 210
      }, {
       name: 3,
       x: 403,
       y: 167,
       timeout: -1
      }, {
       name: 3,
       x: 216,
       y: 314,
       timeout: -1
      }, {
       name: 3,
       x: 410,
       y: 313,
       timeout: -1
      }, {
       name: 2,
       x: 318,
       y: 41
      }, {
       name: 54,
       x: 239,
       y: 242
      }, {
       name: 54,
       x: 239,
       y: 387
      }, {
       name: 100,
       x: 231,
       y: 35,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 52,
       x: 315,
       y: 121
      }, {
       name: 100,
       x: 416,
       y: 35,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 100,
       x: 85,
       y: 335,
       length: 44,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 86,
       y: 196,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 240,
       y: 195,
       length: 49,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 239,
       y: 335,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 2,
       x: 70,
       y: 392
      }, {
       name: 52,
       x: 163,
       y: 270
      }, {
       name: 3,
       x: 255,
       y: 148,
       timeout: -1
      }, {
       name: 3,
       x: 258,
       y: 266,
       timeout: -1
      }, {
       name: 57,
       x: 162,
       y: 294,
       a: 0,
       size: 1,
       Sc: !1
      }, {
       name: 3,
       x: 67,
       y: 265,
       timeout: -1
      }, {
       name: 100,
       x: 168,
       y: 144,
       length: 100,
       d: !1,
       t: !1,
       e: 73,
       f: -1,
       h: !1,
       g: 0,
       c: !0,
       m: "L",
       Ob: !1
      }, {
       name: 57,
       x: 163,
       y: 241,
       a: 0,
       size: 1,
       Sc: !1
      }, {
       name: 54,
       x: 246,
       y: 408
      }]
     }, {
      settings: [{
        name: 0,
        Z: 32,
        width: 320,
        height: 480
       },
       {
        name: 1,
        J: 1,
        Q: 1
       }
      ],
      $: [{
       name: 52,
       x: 164,
       y: 275
      }, {
       name: 100,
       x: 167,
       y: 120,
       length: 90,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 165,
       y: 341,
       length: 10,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 39,
       y: 119,
       length: 100,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 100,
       x: 291,
       y: 116,
       length: 100,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1
      }, {
       name: 2,
       x: 160,
       y: 435
      }, {
       name: 3,
       x: 238,
       y: 132,
       timeout: -1
      }, {
       name: 3,
       x: 170,
       y: 51,
       timeout: -1
      }, {
       name: 3,
       x: 63,
       y: 327,
       timeout: -1
      }, {
       name: 100,
       x: 75,
       y: 260,
       length: 100,
       d: !1,
       e: 40,
       f: -1,
       h: !1,
       g: 0,
       c: !0
      }, {
       name: 100,
       x: 251,
       y: 260,
       length: 100,
       d: !1,
       e: 40,
       f: -1,
       h: !1,
       g: 0,
       c: !0
      }]
     }]
    }, {
     Dh: [{
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 314,
       y: 372
      }, {
       name: 82,
       x: 176,
       y: 397,
       a: 25,
       size: 2
      }, {
       name: 82,
       x: 454,
       y: 396,
       a: -25,
       size: 2
      }, {
       name: 100,
       x: 320,
       y: 14,
       length: 160,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 52,
       x: 159,
       y: 123
      }, {
       name: 82,
       x: 86,
       y: 352,
       a: 25,
       size: 2
      }, {
       name: 82,
       x: 548,
       y: 351,
       a: -25,
       size: 2
      }, {
       name: 3,
       x: 165,
       y: 350,
       timeout: -1
      }, {
       name: 3,
       x: 471,
       y: 350,
       timeout: -1
      }, {
       name: 3,
       x: 320,
       y: 319,
       k: 35,
       timeout: -1
      }, {
       name: 82,
       x: -6,
       y: 306,
       a: 25,
       size: 2
      }, {
       name: 82,
       x: 643,
       y: 304,
       a: -25,
       size: 2
      }, {
       name: 82,
       x: 360,
       y: 440,
       a: -25,
       size: 2
      }, {
       name: 82,
       x: 267,
       y: 440,
       a: 25,
       size: 2
      }],
      w: [{
       name: 4,
       x: 228,
       y: 234,
       locale: "en",
       text: "WUB BUW WUB BUW WUB BUW WUB BUW WUB BUW WUB BUW WUB BUW WUB BUW",
       width: 200
      }, {
       name: 13,
       x: 207,
       y: 270,
       locale: "en",
       k: 100,
       q: 100
      }],
      r: [{
       name: 4,
       x: 229,
       y: 232,
       locale: "ru",
       text: "\u041b\u0435\u0434\u0435\u043d\u0435\u0446 \u043e\u0442\u0441\u043a\u0430\u043a\u0438\u0432\u0430\u0435\u0442 \u043e\u0442 \u0442\u0430\u043a\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c",
       width: 200
      }, {
       name: 13,
       x: 206,
       y: 270,
       locale: "ru",
       k: 100,
       q: 100
      }],
      o: [{
       name: 4,
       x: 229,
       y: 233,
       locale: "de",
       text: "Die S\u00fc\u00dfigkeit wird von der Plattform h\u00fcpfen",
       width: 200
      }, {
       name: 13,
       x: 210,
       y: 269,
       locale: "de",
       k: 100,
       q: 100
      }],
      p: [{
       name: 4,
       x: 228,
       y: 234,
       locale: "fr",
       text: "Le bonbon rebondira hors de cette plate-forme",
       width: 200
      }, {
       name: 13,
       x: 209,
       y: 268,
       locale: "fr",
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 82,
       x: 254,
       y: 139,
       a: -135,
       size: 2
      }, {
       name: 82,
       x: 62,
       y: 136,
       a: 135,
       size: 2
      }, {
       name: 82,
       x: 253,
       y: 335,
       a: -45,
       size: 2
      }, {
       name: 82,
       x: 66,
       y: 332,
       a: 45,
       size: 2
      }, {
       name: 2,
       x: 48,
       y: 222
      }, {
       name: 52,
       x: 159,
       y: 235
      }, {
       name: 82,
       x: 159,
       y: 373,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 157,
       y: 101,
       a: 180,
       size: 2
      }, {
       name: 3,
       x: 161,
       y: 327,
       timeout: -1
      }, {
       name: 3,
       x: 160,
       y: 141,
       timeout: -1
      }, {
       name: 3,
       x: 224,
       y: 234,
       timeout: -1
      }, {
       name: 100,
       x: 85,
       y: 429,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 241,
       y: 429,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 91,
       y: 56,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 231,
       y: 57,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 55,
       x: 284,
       y: 235,
       a: 135
      }, {
       name: 103,
       x: 290,
       y: 45,
       a: 10,
       Zm: 3
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 231,
       y: 196
      }, {
       name: 55,
       x: 129,
       y: 193,
       a: 0
      }, {
       name: 55,
       x: 651,
       y: 187,
       a: 180
      }, {
       name: 82,
       x: 336,
       y: 260,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 445,
       y: 260,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 548,
       y: 260,
       a: 0,
       size: 2
      }, {
       name: 3,
       x: 575,
       y: 71,
       path: "0,150",
       k: 30,
       timeout: 10
      }, {
       name: 3,
       x: 385,
       y: 69,
       path: "0,150",
       k: 20,
       timeout: 15
      }, {
       name: 3,
       x: 481,
       y: 71,
       path: "0,150",
       k: 10,
       timeout: 20
      }, {
       name: 2,
       x: 55,
       y: 422
      }, {
       name: 82,
       x: 225,
       y: 260,
       a: 0,
       size: 2
      }, {
       name: 100,
       x: 57,
       y: 308,
       length: 100,
       d: !1,
       t: !1,
       e: 70,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 388,
       y: 133
      }, {
       name: 2,
       x: 273,
       y: 41
      }, {
       name: 81,
       x: 398,
       y: 189,
       a: -30,
       size: 1
      }, {
       name: 81,
       x: 191,
       y: 229,
       a: 40,
       size: 1
      }, {
       name: 81,
       x: 404,
       y: 310,
       a: -30,
       size: 1
      }, {
       name: 81,
       x: 203,
       y: 372,
       a: 30,
       size: 1
      }, {
       name: 81,
       x: 397,
       y: 448,
       a: -30,
       size: 1
      }, {
       name: 3,
       x: 403,
       y: 307,
       path: "RW40",
       k: 75,
       q: 0,
       timeout: -1
      }, {
       name: 100,
       x: 388,
       y: 27,
       length: 70,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 54,
       x: 308,
       y: 398
      }, {
       name: 3,
       x: 204,
       y: 367,
       path: "RC40",
       k: 75,
       q: 0,
       timeout: -1
      }, {
       name: 3,
       x: 220,
       y: 196,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 140,
       y: 217
      }, {
       name: 82,
       x: 131,
       y: 261,
       a: 0,
       size: 2
      }, {
       name: 55,
       x: 57,
       y: 197,
       a: 0
      }, {
       name: 2,
       x: 150,
       y: 431
      }, {
       name: 3,
       x: 230,
       y: 230,
       timeout: -1
      }, {
       name: 82,
       x: 281,
       y: 199,
       a: -90,
       size: 2
      }, {
       name: 54,
       x: 222,
       y: 311
      }, {
       name: 55,
       x: 57,
       y: 317,
       a: 0
      }, {
       name: 3,
       x: 165,
       y: 360,
       timeout: -1
      }, {
       name: 3,
       x: 165,
       y: 70,
       timeout: -1
      }, {
       name: 82,
       x: 281,
       y: 315,
       a: -90,
       size: 2
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 81,
       x: 211,
       y: 447,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 278,
       y: 447,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 343,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 407,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 472,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 538,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 601,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 280,
       y: 42,
       a: 180,
       size: 1
      }, {
       name: 81,
       x: 344,
       y: 49,
       a: 190,
       size: 1
      }, {
       name: 81,
       x: 405,
       y: 66,
       a: 200,
       size: 1
      }, {
       name: 81,
       x: 462,
       y: 92,
       a: 210,
       size: 1
      }, {
       name: 81,
       x: 514,
       y: 129,
       a: 220,
       size: 1
      }, {
       name: 81,
       x: 558,
       y: 174,
       a: 230,
       size: 1
      }, {
       name: 81,
       x: 595,
       y: 226,
       a: 240,
       size: 1
      }, {
       name: 81,
       x: 617,
       y: 283,
       a: 260,
       size: 1
      }, {
       name: 81,
       x: 624,
       y: 345,
       a: 270,
       size: 1
      }, {
       name: 2,
       x: 52,
       y: 352
      }, {
       name: 100,
       x: 219,
       y: 72,
       length: 220,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 52,
       x: 221,
       y: 313
      }, {
       name: 81,
       x: 624,
       y: 407,
       a: -90,
       size: 1
      }, {
       name: 81,
       x: 216,
       y: 42,
       a: 180,
       size: 1
      }, {
       name: 3,
       x: 558,
       y: 258,
       path: "-39,-66,-96,-120,-160,-155,",
       k: 70,
       timeout: -1
      }, {
       name: 3,
       x: 587,
       y: 343,
       timeout: -1
      }, {
       name: 3,
       x: 277,
       y: 409,
       timeout: -1
      }, {
       name: 55,
       x: 127,
       y: 345,
       a: 0
      }, {
       name: 81,
       x: 87,
       y: 447,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 149,
       y: 447,
       a: 0,
       size: 1
      }, {
       name: 81,
       x: 25,
       y: 447,
       a: 0,
       size: 1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 100,
       x: 160,
       y: 270,
       length: 140,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 82,
       x: 160,
       y: 147,
       a: 0,
       size: 2
      }, {
       name: 52,
       x: 114,
       y: 107
      }, {
       name: 2,
       x: 37,
       y: 387
      }, {
       name: 100,
       x: 160,
       y: 270,
       length: 100,
       d: !1,
       t: !1,
       e: 120,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 82,
       x: 196,
       y: 386,
       a: 90,
       size: 2
      }, {
       name: 54,
       x: 273,
       y: 389
      }, {
       name: 3,
       x: 277,
       y: 389,
       timeout: -1
      }, {
       name: 3,
       x: 267,
       y: 145,
       timeout: -1
      }, {
       name: 3,
       x: 57,
       y: 143,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 82,
       x: 106,
       y: 407,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 278,
       y: 354,
       a: -80,
       size: 2
      }, {
       name: 82,
       x: 41,
       y: 353,
       a: 80,
       size: 2
      }, {
       name: 82,
       x: 23,
       y: 250,
       a: 80,
       size: 2
      }, {
       name: 82,
       x: 298,
       y: 252,
       a: -80,
       size: 2
      }, {
       name: 55,
       x: 91,
       y: 348,
       a: 0
      }, {
       name: 52,
       x: 213,
       y: 339
      }, {
       name: 2,
       x: 43,
       y: 95
      }, {
       name: 3,
       x: 106,
       y: 240,
       timeout: -1
      }, {
       name: 3,
       x: 70,
       y: 197,
       timeout: -1
      }, {
       name: 3,
       x: 127,
       y: 191,
       timeout: -1
      }, {
       name: 82,
       x: 212,
       y: 407,
       a: 0,
       size: 2
      }, {
       name: 54,
       x: 100,
       y: 207
      }]
     }, 
//Level 3-9, The One Made of Bouncepads. (ID 82, Size:1 = Small ; Size:2 = Large) (ID 2: Om Nom)
		  {
      settings: [{
       name: 0,
       Z: 32,
       width: 800,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 608,
       y: 346
      }, {
       name: 52,
       x: 397,
       y: 255
      }, {
       name: 82,
       x: 292,
       y: 313,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 394,
       y: 313,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 499,
       y: 313,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 628,
       y: 185,
       a: -90,
       size: 2
      }, {
       name: 82,
       x: 496,
       y: 53,
       a: 180,
       size: 2
      }, {
       name: 82,
       x: 290,
       y: 184,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 391,
       y: 185,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 252,
       y: 247,
       a: 90,
       size: 2
      }, {
       name: 82,
       x: 392,
       y: 53,
       a: 180,
       size: 2
      }, {
       name: 82,
       x: 286,
       y: 53,
       a: 180,
       size: 2
      }, {
       name: 82,
       x: 57,
       y: 188,
       a: 90,
       size: 2
      }, {
       name: 82,
       x: 58,
       y: 289,
       a: 90,
       size: 2
      }, {
       name: 82,
       x: 190,
       y: 424,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 298,
       y: 425,
       a: 0,
       size: 2
      }, {
       name: 82,
       x: 406,
       y: 425,
       a: 0,
       size: 2
      }, {
       name: 55,
       x: 302,
       y: 254,
       a: 0
      }, {
       name: 82,
       x: 591,
       y: 277,
       a: -45,
       size: 2
      }, {
       name: 82,
       x: 590,
       y: 92,
       a: -135,
       size: 2
      }, {
       name: 82,
       x: 97,
       y: 385,
       a: 45,
       size: 2
      }, {
       name: 82,
       x: 90,
       y: 94,
       a: 135,
       size: 2
      }, {
       name: 55,
       x: 502,
       y: 372,
       a: 180
      }, {
       name: 82,
       x: 510,
       y: 425,
       a: 0,
       size: 2
      }, {
       name: 3,
       x: 571,
       y: 191,
       timeout: -1
      }, {
       name: 3,
       x: 219,
       y: 237,
       timeout: -1
      }, {
       name: 3,
       x: 372,
       y: 369,
       timeout: -1
      }, {
       name: 82,
       x: 698,
       y: 380,
       a: -45,
       size: 2
      }, {
       name: 82,
       x: 685,
       y: 283,
       a: -135,
       size: 2
      }, {
       name: 82,
       x: 180,
       y: 53,
       a: 180,
       size: 2
      }, {
       name: 82,
       x: 613,
       y: 425,
       a: 0,
       size: 2
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 384,
       y: 96
      }, {
       name: 52,
       x: 280,
       y: 531
      }, {
       name: 81,
       x: 285,
       y: 321,
       a: 0,
       size: 1
      }, {
       name: 55,
       x: 184,
       y: 389,
       a: 0
      }, {
       name: 54,
       x: 280,
       y: 536
      }, {
       name: 81,
       x: 426,
       y: 174,
       a: 0,
       size: 1
      }, {
       name: 3,
       x: 284,
       y: 367,
       timeout: -1
      }, {
       name: 3,
       x: 423,
       y: 216,
       timeout: -1
      }, {
       name: 3,
       x: 286,
       y: 87,
       timeout: -1
      }, {
       name: 81,
       x: 285,
       y: 44,
       a: 0,
       size: 1
      }, {
       name: 55,
       x: 496,
       y: 241,
       a: 180
      }, {
       name: 55,
       x: 188,
       y: 109,
       a: 0
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 100,
       x: 342,
       y: 131,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 260,
       y: 129,
       length: 150,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 187,
       y: 129,
       length: 250,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 2,
       x: 189,
       y: 410
      }, {
       name: 3,
       x: 166,
       y: 298,
       timeout: -1
      }, {
       name: 3,
       x: 196,
       y: 334,
       timeout: -1
      }, {
       name: 3,
       x: 193,
       y: 266,
       timeout: -1
      }, {
       name: 82,
       x: 238,
       y: 300,
       a: 90,
       size: 2
      }, {
       name: 52,
       x: 336,
       y: 269
      }, {
       name: 54,
       x: 412,
       y: 310
      }, {
       name: 55,
       x: 461,
       y: 94,
       a: 180
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 154,
       y: 431
      }, {
       name: 52,
       x: 253,
       y: 159
      }, {
       name: 82,
       x: 146,
       y: 226,
       a: 90,
       size: 2,
       path: "-100,0",
       k: 30
      }, {
       name: 100,
       x: 152,
       y: 51,
       length: 150,
       d: !1,
       t: !1,
       Nd: !1,
       e: -1,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 258,
       y: 54,
       length: 70,
       d: !1,
       t: !1,
       Nd: !1,
       e: -1,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 52,
       y: 49,
       length: 250,
       d: !1,
       t: !1,
       Nd: !1,
       e: -1,
       Mc: !1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 82,
       x: 46,
       y: 323,
       a: 90,
       size: 2,
       path: "100,0",
       k: 30
      }, {
       name: 3,
       x: 98,
       y: 225,
       timeout: -1
      }, {
       name: 3,
       x: 98,
       y: 326,
       timeout: -1
      }, {
       name: 3,
       x: 222,
       y: 322,
       timeout: -1
      }]
     }]
    }, {
     Dh: [{
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 290,
       y: 384
      }, {
       name: 56,
       x: 15,
       y: 367,
       group: 0,
       a: -90
      }, {
       name: 56,
       x: 290,
       y: 114,
       group: 0,
       a: 90
      }, {
       name: 52,
       x: 15,
       y: 150
      }, {
       name: 100,
       x: 15,
       y: 69,
       length: 90,
       d: !1,
       t: !1,
       e: -1,
       f: 0,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 4,
       x: 76,
       y: 209,
       locale: "en",
       text: "Now you're thinking with portals -GladOS",
       width: 160
      }, {
       name: 8,
       x: 100,
       y: 360,
       locale: "en",
       a: 0,
       k: 100,
       q: 100
      }, {
       name: 3,
       x: 15,
       y: 328,
       timeout: -1
      }, {
       name: 3,
       x: 290,
       y: 177,
       timeout: -1
      }, {
       name: 3,
       x: 290,
       y: 319,
       timeout: -1
      }],
      p: [{
       name: 8,
       x: 118,
       y: 347,
       locale: "fr",
       a: 0,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 76,
       y: 201,
       locale: "fr",
       text: "D\u00e9pose le bonbon dans le chapeau magique et il tombera de l'autre chapeau",
       width: 160
      }],
      o: [{
       name: 8,
       x: 118,
       y: 348,
       locale: "de",
       a: 0,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 72,
       y: 197,
       locale: "de",
       text: "Wirf den Bonbon in den magischen Hut und er kommt aus einem anderen wieder raus",
       width: 160
      }],
      r: [{
       name: 8,
       x: 122,
       y: 354,
       locale: "ru",
       a: 0,
       k: 100,
       q: 100
      }, {
       name: 4,
       x: 80,
       y: 230,
       locale: "ru",
       text: "\u041a\u0438\u043d\u044c\u0442\u0435 \u043a\u043e\u043d\u0444\u0435\u0442\u0443 \u0432 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0432\u043e\u043b\u0448\u0435\u0431\u043d\u044b\u0445 \u0448\u043b\u044f\u043f, \u0438 \u043e\u043d\u0430 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0439",
       width: 160
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 4,
       x: 78,
       y: 32,
       locale: "en",
       text: "Speedy Thing In, Speedy Thing Out.",
       width: 200
      }, {
       name: 13,
       x: 59,
       y: 70,
       locale: "en",
       k: 100,
       q: 100
      }, {
       name: 2,
       x: 253,
       y: 177
      }, {
       name: 56,
       x: 241,
       y: 373,
       group: 0,
       a: -180
      }, {
       name: 56,
       x: 70,
       y: 235,
       group: 0,
       a: -60
      }, {
       name: 52,
       x: 191,
       y: 379
      }, {
       name: 100,
       x: 112,
       y: 378,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: 80,
       h: !1,
       g: 80,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 266,
       y: 321,
       length: 55,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 267,
       y: 432,
       length: 55,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 113,
       y: 169,
       path: "RW30",
       k: 70,
       timeout: -1
      }, {
       name: 3,
       x: 148,
       y: 154,
       path: "RC30",
       k: 80,
       timeout: -1
      }, {
       name: 3,
       x: 130,
       y: 158,
       path: "RC20",
       k: 80,
       timeout: -1
      }],
      p: [{
       name: 4,
       x: 78,
       y: 23,
       locale: "fr",
       text: "La vitesse du bonbon reste identique lorsqu'il est t\u00e9l\u00e9port\u00e9",
       width: 200
      }, {
       name: 13,
       x: 50,
       y: 73,
       locale: "fr",
       k: 100,
       q: 100
      }],
      o: [{
       name: 4,
       x: 69,
       y: 28,
       locale: "de",
       text: "Beim Teleportieren beh\u00e4lt der Bonbon seine Geschwindigkeit bei",
       width: 200
      }, {
       name: 13,
       x: 54,
       y: 72,
       locale: "de",
       k: 100,
       q: 100
      }],
      r: [{
       name: 4,
       x: 62,
       y: 31,
       locale: "ru",
       text: "\u041a\u043e\u043d\u0444\u0435\u0442\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0441\u0432\u043e\u044e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430\u0446\u0438\u0438",
       width: 240
      }, {
       name: 13,
       x: 43,
       y: 69,
       locale: "ru",
       k: 100,
       q: 100
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
        name: 2,
        x: 55,
        y: 333
       }, {
        name: 52,
        x: 220,
        y: 340
       },
       {
        name: 81,
        x: 130,
        y: 405,
        a: 0,
        size: 1
       }, {
        name: 81,
        x: 210,
        y: 405,
        a: 0,
        size: 1
       }, {
        name: 100,
        x: 167,
        y: 310,
        length: 50,
        d: !1,
        t: !1,
        e: -1,
        f: -1,
        h: !1,
        g: 0,
        c: !1,
        m: "L"
       }, {
        name: 56,
        x: 260,
        y: 353,
        group: 0,
        a: -180
       }, {
        name: 56,
        x: 65,
        y: 165,
        group: 0,
        a: 0
       }, {
        name: 81,
        x: 280,
        y: 225,
        a: 0,
        size: 1
       }, {
        name: 81,
        x: 200,
        y: 225,
        a: 0,
        size: 1
       }, {
        name: 81,
        x: 120,
        y: 225,
        a: 0,
        size: 1
       }, {
        name: 100,
        x: 198,
        y: 113,
        length: 100,
        d: !1,
        t: !1,
        e: 65,
        f: -1,
        h: !1,
        g: 0,
        c: !1,
        m: "L"
       }, {
        name: 3,
        x: 269,
        y: 183,
        path: "1,-110,",
        k: 50,
        timeout: -1
       }, {
        name: 3,
        x: 130,
        y: 84,
        path: "1,110,",
        k: 50,
        timeout: -1
       }, {
        name: 3,
        x: 198,
        y: 187,
        timeout: -1
       }
      ]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 548,
       y: 117
      }, {
       name: 52,
       x: 100,
       y: 315
      }, {
       name: 54,
       x: 100,
       y: 316
      }, {
       name: 100,
       x: 99,
       y: 442,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 82,
       x: 47,
       y: 213,
       a: 90,
       size: 2
      }, {
       name: 55,
       x: 159,
       y: 209,
       a: 180
      }, {
       name: 56,
       x: 146,
       y: 51,
       group: 0,
       a: 90
      }, {
       name: 82,
       x: 272,
       y: 209,
       a: 90,
       size: 2
      }, {
       name: 56,
       x: 322,
       y: 399,
       group: 0,
       a: 270
      }, {
       name: 55,
       x: 385,
       y: 206,
       a: 180
      }, {
       name: 56,
       x: 544,
       y: 398,
       group: 1,
       a: 270
      }, {
       name: 56,
       x: 371,
       y: 54,
       group: 1,
       a: 90
      }, {
       name: 3,
       x: 546,
       y: 210,
       timeout: -1
      }, {
       name: 3,
       x: 96,
       y: 210,
       timeout: -1
      }, {
       name: 3,
       x: 323,
       y: 207,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 433,
       y: 284
      }, {
       name: 100,
       x: 338,
       y: 50,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 338,
       y: 358,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 459,
       y: 202,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: 100,
       h: !1,
       g: 0,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 100,
       x: 223,
       y: 202,
       length: 100,
       d: !1,
       t: !1,
       e: -1,
       f: 100,
       h: !1,
       g: 100,
       c: !1,
       m: "L",
       Ob: !1
      }, {
       name: 52,
       x: 335,
       y: 200
      }, {
       name: 3,
       x: 208,
       y: 72,
       timeout: -1
      }, {
       name: 3,
       x: 432,
       y: 369,
       timeout: -1
      }, {
       name: 3,
       x: 209,
       y: 369,
       timeout: -1
      }, {
       name: 56,
       x: 446,
       y: 137,
       group: 0,
       a: 180
      }, {
       name: 56,
       x: 212,
       y: 427,
       group: 0,
       a: 270
      }, {
       name: 56,
       x: 433,
       y: 429,
       group: 1,
       a: 270
      }, {
       name: 56,
       x: 227,
       y: 150,
       group: 1,
       a: 0
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 167,
       y: 358
      }, {
       name: 2,
       x: 480,
       y: 76
      }, {
       name: 54,
       x: 168,
       y: 358
      }, {
       name: 56,
       x: 83,
       y: 281,
       group: 1,
       a: 0
      }, {
       name: 56,
       x: 84,
       y: 186,
       group: 0,
       a: 0
      }, {
       name: 56,
       x: 83,
       y: 90,
       group: 1,
       a: 0
      }, {
       name: 56,
       x: 483,
       y: 374,
       group: 0,
       a: 270
      }, {
       name: 55,
       x: 243,
       y: 277,
       a: 180
      }, {
       name: 55,
       x: 242,
       y: 182,
       a: 180
      }, {
       name: 55,
       x: 243,
       y: 88,
       a: 180
      }, {
       name: 3,
       x: 112,
       y: 90,
       timeout: -1
      }, {
       name: 3,
       x: 116,
       y: 280,
       timeout: -1
      }, {
       name: 3,
       x: 111,
       y: 186,
       timeout: -1
      }, {
       name: 80,
       x: 478,
       y: 144,
       sj: -2,
       Ij: 2,
       Jj: 2,
       a: 0,
       size: 5
      }, {
       name: 55,
       x: 479,
       y: 187,
       a: 90
      }, {
       name: 100,
       x: 169,
       y: 447,
       length: 60,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 490,
       y: 57
      }, {
       name: 56,
       x: 490,
       y: 402,
       group: 0,
       a: 270
      }, {
       name: 56,
       x: 130,
       y: 105,
       group: 0,
       a: 90
      }, {
       name: 55,
       x: 130,
       y: 270,
       a: 270
      }, {
       name: 52,
       x: 490,
       y: 355
      }, {
       name: 100,
       x: 490,
       y: 267,
       length: 50,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 310,
       y: 43,
       timeout: -1
      }, {
       name: 56,
       x: 130,
       y: 404,
       group: 1,
       a: 270
      }, {
       name: 56,
       x: 310,
       y: 401,
       group: 1,
       a: 270
      }, {
       name: 3,
       x: 310,
       y: 162,
       path: "0,200",
       k: 80,
       timeout: -1
      }, {
       name: 3,
       x: 490,
       y: 187,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 52,
       x: 113,
       y: 189
      }, {
       name: 100,
       x: 61,
       y: 187,
       length: 50,
       d: !1,
       e: -1,
       h: !0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 164,
       y: 188,
       length: 50,
       d: !1,
       e: -1,
       h: !0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 545,
       y: 195,
       timeout: -1
      }, {
       name: 56,
       x: 111,
       y: 401,
       group: 0,
       a: 270
      }, {
       name: 2,
       x: 477,
       y: 290
      }, {
       name: 54,
       x: 269,
       y: 257
      }, {
       name: 56,
       x: 268,
       y: 98,
       group: 0,
       a: 90
      }, {
       name: 3,
       x: 407,
       y: 191,
       timeout: -1
      }, {
       name: 3,
       x: 475,
       y: 113,
       timeout: -1
      }, {
       name: 56,
       x: 273,
       y: 403,
       group: 1,
       a: 270
      }, {
       name: 56,
       x: 419,
       y: 402,
       group: 1,
       a: 270
      }, {
       name: 100,
       x: 477,
       y: 195,
       length: 100,
       d: !1,
       e: 50,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 58,
       x: 114,
       y: 74,
       a: 0,
       size: 2
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 416,
       y: 314
      }, {
       name: 52,
       x: 303,
       y: 136
      }, {
       name: 100,
       x: 306,
       y: 75,
       length: 40,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 56,
       x: 226,
       y: 400,
       group: 1,
       a: -90
      }, {
       name: 56,
       x: 304,
       y: 139,
       group: 1,
       a: -180,
       path: "RW90",
       k: 150,
       q: -96
      }, {
       name: 56,
       x: 420,
       y: 395,
       group: 0,
       a: -90
      }, {
       name: 56,
       x: 304,
       y: 139,
       group: 0,
       a: -180,
       path: "RC90",
       k: 100,
       q: 64
      }, {
       name: 100,
       x: 224,
       y: 301,
       length: 100,
       d: !1,
       t: !1,
       e: 30,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 212,
       y: 357,
       timeout: -1
      }, {
       name: 3,
       x: 237,
       y: 356,
       timeout: -1
      }, {
       name: 3,
       x: 307,
       y: 198,
       timeout: -1
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 100,
       x: 242,
       y: 298,
       length: 100,
       d: !1,
       e: 60,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 2,
       x: 189,
       y: 136
      }, {
       name: 56,
       x: 180,
       y: 403,
       group: 0,
       a: 270
      }, {
       name: 56,
       x: 73,
       y: 402,
       group: 0,
       a: 270
      }, {
       name: 3,
       x: 71,
       y: 53,
       timeout: -1
      }, {
       name: 3,
       x: 177,
       y: 298,
       timeout: -1
      }, {
       name: 3,
       x: 69,
       y: 296,
       timeout: -1
      }, {
       name: 52,
       x: 74,
       y: 131
      }, {
       name: 100,
       x: 72,
       y: 239,
       length: 80,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 54,
       x: 73,
       y: 128
      }, {
       name: 100,
       x: 242,
       y: 239,
       length: 100,
       d: !1,
       e: 60,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 640,
       height: 480
      }, {
       name: 1,
       Q: 1,
       J: 1,
       A: !1
      }],
      $: [{
       name: 100,
       x: 173,
       y: 111,
       length: 110,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 478,
       y: 109,
       length: 110,
       d: !1,
       t: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 324,
       y: 42,
       timeout: 4
      }, {
       name: 52,
       x: 322,
       y: 111
      }, {
       name: 55,
       x: 327,
       y: 197,
       a: 270
      }, {
       name: 100,
       x: 326,
       y: 284,
       length: 100,
       d: !1,
       t: !1,
       e: 55,
       f: 200,
       h: !1,
       g: 100,
       c: !1,
       m: "L"
      }, {
       name: 2,
       x: 197,
       y: 395
      }, {
       name: 54,
       x: 453,
       y: 393
      }, {
       name: 3,
       x: 162,
       y: 226,
       timeout: -1
      }, {
       name: 3,
       x: 481,
       y: 227,
       timeout: -1
      }, {
       name: 58,
       x: 540,
       y: 233,
       a: 90,
       size: 2
      }, {
       name: 58,
       x: 93,
       y: 228,
       a: 90,
       size: 2
      }]
     }, {
      settings: [{
       name: 0,
       Z: 32,
       width: 320,
       height: 480
      }, {
       name: 1,
       Q: 1,
       A: !1
      }],
      $: [{
       name: 2,
       x: 155,
       y: 210
      }, {
       name: 100,
       x: 163,
       y: 37,
       length: 50,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 52,
       x: 157,
       y: 129
      }, {
       name: 57,
       x: 254,
       y: 131,
       a: 0,
       size: 1
      }, {
       name: 57,
       x: 65,
       y: 131,
       a: 0,
       size: 1
      }, {
       name: 57,
       x: 283,
       y: 158,
       a: 90,
       size: 1
      }, {
       name: 57,
       x: 33,
       y: 158,
       a: 90,
       size: 1
      }, {
       name: 57,
       x: 255,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 57,
       x: 281,
       y: 418,
       a: 90,
       size: 1
      }, {
       name: 57,
       x: 63,
       y: 448,
       a: 0,
       size: 1
      }, {
       name: 57,
       x: 30,
       y: 418,
       a: 90,
       size: 1
      }, {
       name: 54,
       x: 244,
       y: 394
      }, {
       name: 100,
       x: 159,
       y: 326,
       length: 100,
       d: !1,
       e: 60,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 258,
       y: 37,
       length: 100,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 68,
       y: 35,
       length: 100,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 3,
       x: 72,
       y: 167,
       timeout: -1
      }, {
       name: 3,
       x: 242,
       y: 290,
       timeout: -1
      }, {
       name: 3,
       x: 160,
       y: 417,
       timeout: -1
      }, {
       name: 100,
       x: 291,
       y: 257,
       length: 180,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }, {
       name: 100,
       x: 32,
       y: 255,
       length: 180,
       d: !1,
       e: -1,
       f: -1,
       h: !1,
       g: 0,
       c: !1,
       m: "L"
      }]
     }]
    }],
    Ss: [w.Tk, w.Uk, w.Wk, w.Vk],
    Ts: [],
    Ix: []
   }),
   U = function() {
    var a = {},
     c = [];
    a.subscribe = function(a, b) {
     c.push({
      name: a,
      Vg: b
     });
     return [a,
      b
     ]
    };
    a.unsubscribe = function(a, b) {
     var f, e;
     for (f = c.length; 0 <= f; f--) e = c[f], e.name === a && e.Vg === b && c.splice(f, 1)
    };
    a.ra = function(a) {
     var b = [],
      f = Array.prototype.slice.call(arguments, 1),
      e, g;
     if (0 < c.length) {
      e = 0;
      for (g = c.length; e < g; e++) c[e].name === a && b.push(c[e].Vg);
      e = 0;
      for (g = b.length; e < g; e++) b[e].apply(this, f)
     }
    };
    a.v = {
     pl: 0,
     Wv: 1,
     xq: 2,
     Cp: 3,
     Aw: 4,
     rp: 5,
     sp: 6,
     jv: 7,
     tp: 8,
     up: 9,
     vp: 10,
     wp: 11,
     Ib: 12,
     mr: 13,
     tq: 14,
     tw: 15,
     uw: 16,
     Gp: 17,
     Bp: 18,
     Pg: 19,
     bv: 20,
     av: 21,
     bp: 22,
     Hl: 23,
     Dq: 24,
     YB: 25,
     Fw: 26,
     rm: 27,
     sm: 28,
     Er: 29,
     Am: 30,
     lr: 31,
     Fr: 32,
     jw: 33,
     Il: 34,
     Ck: 35
    };
    return a
   }(),
   Aa = function(a, c) {
    function d() {
     e = !0;
     for (var a = 0, b = g.length; a < b; a++) g[a]()
    }
    var b = a.ZE || "",
     f = b;
    c.subscribe(c.v.Fr, function(a) {
     f = a ? a + "-" + b : b
    });
    var e = !1,
     g = [],
     h = !1,
     l = null;
    try {
     h = !!window.localStorage, l = {
      getItem: function(a) {
       return localStorage.getItem(a)
      },
      setItem: function(a, b) {
       return localStorage.setItem(a, b)
      },
      removeItem: function(a) {
       return localStorage.removeItem(a)
      }
     }
    } catch (n) {}
    if (!h && void 0 !== typeof chrome && chrome.storage && chrome.storage.local) {
     var h = !0,
      q = {};
     chrome.storage.local.get(null,
      function(a) {
       q = a;
       d()
      });
     l = {
      getItem: function(a) {
       return q[a]
      },
      setItem: function(a, b) {
       q[a] = b;
       var c = {};
       c[a] = b;
       chrome.storage.local.set(c)
      },
      removeItem: function(a) {
       q[a] = null;
       chrome.storage.local.remove(a)
      }
     }
    } else d();
    return {
     Om: h,
     Ih: function(a) {
      e ? a() : g.push(a)
     },
     get: function(a) {
      e || console.log("setting not ready: " + a);
      return h ? l.getItem(f + a) : null
     },
     set: function(a, b) {
      h && (null == b ? l.removeItem(f + a) : l.setItem(f + a, b.toString()))
     },
     remove: function(a) {
      h && l.removeItem(f + a)
     },
     mj: function(a, b) {
      var c = this.get(a);
      return null ==
       c ? b : "true" === c
     },
     kh: function(a, b) {
      var c = this.get(a);
      return null == c ? b : parseInt(c, 10)
     }
    }
   }(V, U),
   ta = function(a) {
    return new function() {
     function c(a) {
      return 0 <= window.location.href.toLowerCase().indexOf(a.toLowerCase())
     }
     var d = function() {
      var a = {},
       c = (location.search.substring(1) || "").split("&"),
       d, g, h;
      d = 0;
      for (g = c.length; d < g; d++) h = c[d].split("="), 1 < h.length && (a[decodeURIComponent(h[0].replace(/\+/g, " "))] = decodeURIComponent(h[1].replace(/\+/g, " ")));
      return a
     }();
     a && a.Tw && Date.now() < a.Tw && (this.vg = c("unlockAllBoxes=true"));
     this.lang = d.lang;
     this.hu = c("boxBackgrounds=true");
     this.jB = c("showFrameRate=true");
     this.Ux = c("html5audio=true");
     this.Io = c("showVersion=true")
    }
   }(V),
   ra = function(a, c, d, b) {
    return {
     Om: a.Om,
     ju: !0,
     xx: !0,
     xs: c.jB,
     Io: c.Io,
     mk: !0,
     nn: function() {
      return a.mj("music", !0)
     },
     ik: function(b) {
      a.set("music", b)
     },
     qn: function() {
      return a.mj("sound", !0)
     },
     kk: function(b) {
      a.set("sound", b)
     },
     ln: function() {
      return a.mj("clickToCut", !1)
     },
     IA: function(b) {
      a.set("clickToCut", b)
     },
     lh: function() {
      if (c.lang) return d.hn(c.lang);
      var f = a.kh("language",
       null);
      null == f && (f = b.by(), null == f && (f = d.Cf));
      return f
     },
     RA: function(b) {
      a.set("language", b)
     },
     aE: function() {
      return a.mj("isHD", null)
     },
     PA: function(b) {
      a.set("isHD", b)
     },
     clear: function() {
      a.remove("isHD")
     }
    }
   }(Aa, ta, fa, function(a) {
    return {
     by: function() {
      var c = a.Cf;
      try {
       c = a.hn(chrome.i18n.getMessage("@@ui_locale")), null == c && (c = a.Cf)
      } catch (d) {}
      return c
     }
    }
   }(fa), U),
   ub = {
    pb: 2560,
    $a: 1440,
    Gb: 1,
    P: 3,
    hb: 0,
    La: 105,
    xp: 10,
    yp: 6,
    Ik: 60,
    Fi: 3,
    pm: 42,
    tl: 200,
    vl: 400,
    wl: -400,
    om: new S(22, 20, 30, 30),
    nm: new S(70, 64, 82, 82),
    um: new S(264, 350,
     108, 2),
    tm: new S(192, 278, 108, 2),
    or: new S(238, 288, 114, 2),
    xm: 275,
    ym: 550,
    Bk: 85,
    Ak: 60,
    ji: 60,
    ki: 150,
    zk: new S(48, 48, 152, 152),
    hp: -35,
    gp: 14,
    qm: 15,
    yk: 40,
    Hi: 624,
    Dl: new S(300, 300, 175, 175),
    Gl: 2500,
    Fl: 30,
    El: 100,
    Gk: 300,
    Fk: 1400,
    Ek: new S(142, 157, 112, 104),
    oi: new S(155, 176, 88, 76),
    Mp: 1,
    Yc: 110,
    vi: 5.625,
    Qk: 1400,
    Pk: 1650,
    Ok: 142,
    ti: 74,
    Fe: 65,
    mm: 117,
    jm: 270,
    Pi: 140,
    km: 15,
    Ng: 40,
    lm: -16,
    Al: 44,
    zl: 4,
    ae: 90,
    Sk: 100,
    Bl: 800,
    Cl: 400,
    ql: 1E3,
    rl: 300,
    Dk: 5500,
    ni: 14,
    Jk: 12,
    xl: 1.4
   },
   H = function(a, c, d) {
    $(function() {
     $("#optionHd").hide();
     $("#optionSd").hide()
    });
    c(d);
    d.zy = !0;
    return d
   }(ra, function(a, c) {
    function d(b, c) {
     var d = c.Gb;
     c.La = b.La * d;
     c.Fi = b.Fi * d;
     c.pm = b.pm * d;
     c.tl = b.tl * d;
     c.wl = b.wl * d;
     c.vl = b.vl * d;
     c.Ik = b.Ik * d;
     c.um = a.Td(b.um, d);
     c.tm = a.Td(b.tm, d);
     c.or = a.Td(b.or, d);
     c.xm = b.xm * d;
     c.ym = b.ym * d;
     c.Bk = b.Bk * d;
     c.ji = b.ji * d;
     c.ki = b.ki * d;
     c.zk = a.Td(b.zk, d);
     c.Ak = b.Ak * d;
     c.qm = b.qm * d;
     c.nm = a.Td(b.nm, d);
     c.om = a.Td(b.om, d);
     c.yk = b.yk * d;
     c.Hi = c.Hi || b.Hi * d;
     c.Dl = a.Td(b.Dl, d);
     c.Gl = b.Gl * d;
     c.Fl = b.Fl * d;
     c.El = b.El * d;
     c.Ek = a.Td(b.Ek, d);
     c.oi = a.Td(b.oi, d);
     c.Gk = b.Gk * d;
     c.Fk = b.Fk * d;
     c.Sk = b.Sk * d;
     c.Bl =
      b.Bl * d;
     c.Cl = b.Cl * d;
     c.ql = b.ql * d;
     c.rl = b.rl * d;
     c.Dk = b.Dk * d;
     c.ni = b.ni * d;
     c.vi = b.vi * d;
     c.Qk = b.Qk * d;
     c.Yc = b.Yc * d;
     c.Pk = b.Pk * d;
     c.Ok = b.Ok * d;
     c.ti = b.ti * d;
     c.Fe = b.Fe * d;
     c.mm = b.mm * d;
     c.Al = b.Al * d;
     c.zl = b.zl * d;
     c.ae = b.ae * d;
     c.jm = b.jm * d;
     c.Pi = b.Pi * d;
     c.km = b.km * d;
     c.Ng = b.Ng * d;
     c.lm = b.lm * d;
     c.Jk = b.Jk * d;
     c.i = function(a) {
      return Math.round(a * c.Ew)
     }
    }
    return function(a) {
     d(c, a)
    }
   }(S, ub), {
    Gr: 1024,
    pb: 1024,
    $a: 576,
    Gb: 0.4,
    Ew: 1,
    bb: 1,
    be: 1024,
    sD: 576,
    li: 3,
    xp: 3.5,
    yp: 2,
    P: 1.2,
    hb: 0,
    Mp: 0.8,
    hp: -17,
    gp: 20,
    cv: 336,
    xl: 0.925
   }),
   ka = function() {
    return {
     debug: da(),
     alert: da()
    }
   }(),
   ba = function(a, c, d, b, f, e, g, h) {
    var l = a.extend({
     init: function() {
      this.n()
     },
     oe: function(a) {
      this.M = a;
      this.ak = !1;
      0 < this.M.l.length ? this.Ua(0) : this.LA()
     },
     Jd: function(a) {
      var b = d[a].M;
      b || h.debug("Image not loaded: " + d[a].path);
      return b
     },
     sa: function(a) {
      this.Nt = a;
      this.oe(this.Jd(a))
     },
     Ua: function(a) {
      this.pf = a;
      this.ak || (a = this.M.l[a], this.width = a.N, this.height = a.V)
     },
     LA: function() {
      this.pf = f.j;
      this.width = this.M.ph;
      this.height = this.M.oh
     },
     ya: function() {
      this.M.qd.x !== e.GB.x && (this.ak = !0, this.width = this.M.qd.x,
       this.height = this.M.qd.y)
     },
     B: function() {
      this.wc();
      if (0 !== this.color.F && this.M)
       if (this.pf === f.j) {
        var a = Math.round(this.ga),
         c = Math.round(this.ha);
        b.context.drawImage(this.M.rc, a, c)
       } else this.Ex(this.pf);
      this.vc()
     },
     Ex: function(a) {
      var c = this.M.l[a],
       d = c.N,
       f = c.V,
       e = this.ga,
       g = this.ha;
      this.ak && (a = this.M.u[a]) && (e += a.x, g += a.y, d += this.M.de, f += this.M.Of);
      this.bj ? (d = Math.round(d / this.bj) * this.bj, f = Math.round(f / this.bj) * this.bj) : (d = Math.ceil(d), f = Math.ceil(f));
      this.Ha ? (e = Math.round(e / this.Ha) * this.Ha, g = Math.round(g /
       this.Ha) * this.Ha) : (e = Math.round(e), g = Math.round(g));
      0 === c.x || 0 === c.y ? b.context.drawImage(this.M.rc, c.x, c.y, d, f, e, g, d, f) : (d += 2, f += 2, b.context.drawImage(this.M.rc, c.x - 1, c.y - 1, d, f, e - 1, g - 1, d, f))
     },
     Gx: function(a, c, d, e, g) {
      var l = b.context,
       h = 0,
       r = 0,
       x, k, D, C, I;
      a === f.j ? (a = this.M.ph, x = this.M.oh) : (x = this.M.l[a], h = x.x, r = x.y, a = x.N, x = x.V);
      var z = Math.floor(a),
       E = Math.floor(x);
      for (k = 0; k < g;) {
       for (D = 0; D < e;) C = e - D, C > a && (C = a), C = Math.ceil(C), I = g - k, I > x && (I = x), I = Math.ceil(I), l.drawImage(this.M.rc, h, r, C, I, c + D, d + k, C, I), D += z;
       k +=
        E
      }
     },
     Pj: function(a, b) {
      if (this.pf === f.j) return c.Db(a, b, this.ga, this.ha, this.M.width, this.M.height);
      var d = this.M.l[this.pf],
       e = this.ga,
       g = this.ha;
      if (this.ak) var l = this.M.u[this.pf],
       e = e + l.x,
       g = g + l.y;
      return c.Db(a, b, e, g, d.N, d.V)
     },
     Hs: function(a) {
      if (this.n(a)) return !0;
      if (a.Hr === g.Ii) this.Ua(a.Ir);
      else return !1;
      return !0
     },
     NA: function(a, b) {
      var c = this.Jd(a).u[b];
      this.x = c.x;
      this.y = c.y
     },
     RE: function(a, b) {
      var c = this.Jd(a),
       d = c.l[b],
       c = c.u[b];
      this.x = c.x + d.N / 2;
      this.y = c.y + d.V / 2
     }
    });
    l.create = function(a, b) {
     var c = new l;
     c.sa(a);
     null != b && c.Ua(b);
     return c
    };
    return l
   }(ea, S, Ma, Y, K, O, va, ka),
   vb = function(a, c, d, b) {
    return a.extend({
     init: function() {
      this.n();
      this.Qe = "";
      this.gc = this.tc = this.fd = 0;
      this.cf = null
     },
     xy: function(a, b, c) {
      this.Qe = a;
      this.oe(b);
      this.cf = c
     },
     XA: function(a, b, c) {
      this.fd = a;
      this.tc = b;
      this.gc = c
     },
     nj: function(a) {
      var c = this.Qe.indexOf(a);
      if (0 <= c) return c;
      b.alert("Char not found in font:" + a);
      return this.Qe.indexOf(".")
     },
     PD: function(a, b, d) {
      a = this.M.l[a];
      var h = Math.ceil(a.N),
       l = Math.ceil(a.V);
      c.context.drawImage(this.M.rc, a.x,
       a.y, h, l, b, d, h, l)
     },
     wu: function(a) {
      for (var b = 0, c = a.length, d = 0, l = 0; l < c; l++)
       if (d = this.Zf(a, l), " " === a[l]) b += this.gc + d;
       else var n = this.nj(a[l]),
        b = b + (this.M.l[n].N + d);
      return Math.ceil(b - d)
     },
     en: function() {
      return this.M.l[0].V
     },
     Zf: function(a, b) {
      if (b === a.length - 1) return 0;
      if (!this.cf) return this.fd;
      var c = this.cf[a[b] + a[b + 1]];
      return null != c ? c : this.fd
     }
    })
   }(ba, Y, K, ka),
   Sa = function() {
    return function(a, c, d, b) {
     d = a + d;
     b = c + b;
     this.Bu = a;
     this.Cu = c;
     this.Gu = d;
     this.Hu = c;
     this.Or = a;
     this.Pr = b;
     this.Xr = d;
     this.Yr = b
    }
   }(),
   Ta = function(a) {
    function c(c) {
     this.rc =
      c;
     this.l = [];
     this.u = [];
     this.qd = a.Gh();
     var b = $(c);
     this.ph = c.width || b.width();
     this.oh = c.height || b.height();
     this.Of = this.de = 0
    }
    c.prototype.Qw = function(c) {
     this.l.push(c);
     this.u.push(new a(0, 0))
    };
    c.prototype.WA = function(a, b, c) {
     a = this.u[a];
     a.x = b;
     a.y = c
    };
    return c
   }(O, Sa),
   Na = function(a, c, d, b, f, e, g, h, l, n) {
    return {
     init: function() {
      d.FA(a, f.Gb);
      for (var b = 0, e = a.length; b < e; b++) {
       var g = a[b];
       delete g.pt;
       delete g.lz;
       c[g.id].info = g
      }
     },
     Az: function(a, d) {
      var f = c[a];
      switch (f.type) {
       case b.s:
        f.M = new g(d);
        this.cu(f);
        break;
       case b.ri:
        f.M =
         new g(d);
        this.cu(f);
        var l = new e,
         n = f.info;
        l.xy(n.Qe, f.M, n.cf);
        l.XA(n.fd, n.tc, n.gc);
        f.font = l
      }
     },
     cu: function(a) {
      var b = a.M,
       c = b.ph,
       d = b.oh;
      a = a.info;
      var f = a.l,
       g = a.u;
      b.qd = h.Gh();
      if (f) {
       b.de = a.de ? a.de : 0;
       b.Of = a.Of ? a.Of : 0;
       for (var e = 0, n = f.length; e < n; e++) {
        var k = f[e],
         k = new l(k.x, k.y, k.N, k.V);
        k.N + b.de > c && (k.N = c - b.de);
        k.V + b.Of > d && (k.V = d - b.Of);
        b.Qw(k)
       }
       if (g)
        for (c = g.length, e = 0; e < c; e++) d = g[e], b.WA(e, d.x, d.y);
       a.H && a.G && (b.qd.x = a.H, b.qd.y = a.G)
      }
     },
     Jd: function(a) {
      a = c[a];
      if (a.M) return a.M;
      n.debug("Image not yet loaded:" + a.path);
      return null
     },
     Bs: function(a) {
      a = c[a];
      if (a.font) return a.font;
      n.debug("Font not yet loaded:" + a.path);
      return null
     }
    }
   }(sb, Ma, tb, db, H, vb, Ta, O, S, ka),
   ca = function(a) {
    return {
     Wf: function(a, d, b) {
      return Math.max(Math.min(a, b), d)
     },
     ek: function(a, d) {
      return 0 > a === 0 > d
     },
     fb: function(a, d) {
      return Math.floor(Math.random() * (d - a + 1) + a)
     },
     hA: function() {
      return 0.5 < Math.random()
     },
     tb: function() {
      return 2 * Math.random() - 1
     },
     Zs: function(c, d, b, f) {
      return c >= d && c >= b && c >= f ? c : d >= c && d >= b && d >= f ? d : b >= d && b >= c && b >= f ? b : f >= d && f >= b && f >= c ? f : a.j
     },
     at: function(c, d, b, f) {
      return c <= d && c <= b && c <= f ? c : d <= c && d <= b && d <= f ? d : b <= d && b <= c && b <= f ? b : f <= d && f <= b && f <= c ? f : a.j
     },
     Hy: function(a, d, b, f, e, g, h, l) {
      var n, q;
      n = e - a + h - b;
      q = g - d + l - f;
      a = b - a;
      d = f - d;
      e = h - e;
      g = l - g;
      l = Math.abs(d * e - g * a);
      return Math.abs(e * q - g * n) <= l && Math.abs(a * q - d * n) <= l
     },
     OE: function(a, d) {
      var b = Math.pow(10, d);
      return Math.round(a * b) / b
     },
     Ut: function(a) {
      return Math.round(100 * a) / 100
     }
    }
   }(K),
   ga = function(a, c, d, b, f, e, g, h, l) {
    function n(a, b) {
     this.sg = a;
     this.width = b
    }
    var q = a.extend({
     init: function(a) {
      this.n();
      this.font = a;
      this.le = [];
      this.height = this.width = c.j;
      this.align = d.mb;
      this.ah = new b(a.M);
      this.VB = !1;
      this.maxHeight = c.j
     },
     eu: function(a, b) {
      this.sg = a;
      this.zg = null == b || b === c.j ? Math.ceil(this.font.wu(a)) : Math.ceil(b);
      this.sg && (this.Wx(), this.LB())
     },
     LB: function() {
      for (var a = 0, b = 0, f = this.font.en(), e = 0, g = this.font.Zf("..", 0), l = this.maxHeight === c.j ? this.le.length : Math.min(this.le.length, this.maxHeight / f + this.font.tc), n = l !== this.le.length, k = 0; k < l; k++) {
       for (var a = this.le[k], h = a.sg, q = h.length, a = this.align !== d.mb ? this.align === d.Ub || this.align ===
         d.T ? (this.zg - a.width) / 2 : this.zg - a.width : 0, I = 0; I < q; I++) {
        if (" " === h[I]) a += this.font.gc + this.font.Zf(h, I);
        else {
         var z = this.font.nj(h[I]),
          E = this.font.M.l[z].N;
         this.ah.Dj(z, Math.round(a), Math.round(b), e++);
         a += E + this.font.Zf(h, I)
        }
        if (n && k === l - 1 && (z = this.font.nj("."), E = this.font.M.l[z].N, I === q - 1 || I === q - 2 && a + 3 * (E + g) + this.font.gc > this.zg)) {
         this.ah.Dj(z, Math.round(a), Math.round(b), e++);
         a += E + g;
         this.ah.Dj(z, Math.round(a), Math.round(b), e++);
         a += E + g;
         this.ah.Dj(z, Math.round(a), Math.round(b), e++);
         a += E + g;
         break
        }
       }
       b += f +
        this.font.tc
      }
      1 >= this.le.length ? (this.height = this.font.en(), this.width = a) : (this.height = (this.font.en() + this.font.tc) * this.le.length - this.font.tc, this.width = this.zg);
      this.maxHeight !== c.j && (this.height = Math.min(this.height, this.maxHeight))
     },
     B: function() {
      this.wc();
      if (0 !== this.color.F) {
       var a = this.sg.length,
        b = f.context;
       0 < a && (b.translate(this.ga, this.ha), this.ah.ps(a), b.translate(-this.ga, -this.ha))
      }
      this.vc()
     },
     Wx: function() {
      for (var a = [], b = this.sg, c = b.length, d = 0, f = 0, e = 0, g = 0, k = 0, h = 0, q = 0; q < c;) {
       var I = b[q++];
       if (" " == I || "\n" == I) h += e, k = q - 1, e = 0, f = q, " " == I && (f--, e = this.font.gc + this.font.Zf(b, q - 1));
       else var z = this.font.nj(I),
        e = e + (this.font.M.l[z].N + this.font.Zf(b, q - 1));
       z = l.Ut(h + e) > this.zg;
       this.VB && z && k == g && (h += e, k = q, e = 0, f = q);
       if (l.Ut(h + e) > this.zg && k != g || "\n" == I) {
        a[d++] = g;
        for (a[d++] = k; f < c && " " == b[f];) f++, e -= this.font.gc;
        k = g = f;
        h = 0
       }
      }
      0 != e && (a[d++] = g, a[d++] = q);
      b = d >> 1;
      this.le = [];
      for (c = 0; c < b; c++) d = this.sg.substring(a[c << 1], a[(c << 1) + 1]), f = this.font.wu(d), this.le.push(new n(d, f))
     },
     HD: function(a) {
      var b = Xml.Yw(a, "font"),
       b = g.Bs(b),
       b = new q(b);
      a.hasAttribute("align") && (b.align = d.parse(Xml.attr(a, "align")));
      if (a.hasAttribute("string")) {
       var f = Xml.Yw("string"),
        f = g.bE(f),
        e = a.hasAttribute("width") ? Xml.Xw(a, "width") : c.j;
       b.eu(f, e)
      }
      a.hasAttribute("height") && (b.maxHeight = Xml.Xw(a, "height"));
      return b
     }
    });
    q.$i = function(a) {
     var b = a.img;
     !b && a.qh && (b = document.getElementById(a.qh));
     !b && a.Lc && (b = $(a.Lc)[0]);
     if (!b && a.Ab) {
      var b = $("#" + a.Ab),
       c = b.find("img");
      0 === c.length && (c = $("<img>").prependTo(b));
      b = c[0]
     }
     b || (b = new Image);
     var e = a.lj,
      l = a.width,
      n = a.Ec,
      x = null != a.alpha ? a.alpha : 1,
      c = a.ua ? h.bb : a.scale || 1,
      k = a.text.toString(),
      D = f.element;
     f.Zh(document.createElement("canvas"));
     e = g.Bs(e);
     e = new q(e);
     e.x = Math.ceil(24 * h.Gb / 2);
     e.y = 0;
     e.align = n || d.mb;
     e.eu(k, l);
     var n = f.element,
      k = f.context,
      C = (l || Math.ceil(e.width)) + Math.ceil(2 * e.x),
      l = Math.ceil(e.height);
     n.width = C;
     n.height = l;
     var I = k.globalAlpha;
     x !== I && (k.globalAlpha = x);
     e.B();
     b.src = n.toDataURL("image/png");
     x !== I && (k.globalAlpha = I);
     D && f.Zh(D);
     x = C * c;
     c *= l;
     a = a.Sn;
     var z;
     a && x > a && (a /= x, z = Math.round((1 - a) * c / 2), x *=
      a, c *= a);
     c = $(b).width(x).height(c);
     z && c.css("padding-top", z);
     return b
    };
    q.oc = function(a) {
     a.lj = e.Bg;
     return q.$i(a)
    };
    q.la = function(a) {
     a.lj = e.Ef;
     return q.$i(a)
    };
    q.ns = function(a) {
     a.lj = e.Nk;
     q.$i(a)
    };
    return q
   }(ea, K, Q, La, Y, w, Na, H, ca),
   F = {
    fw: 0,
    Zd: 1,
    lC: 2,
    mD: 3,
    mC: 4,
    iw: 5,
    rC: 6,
    WB: 7,
    qp: 8,
    $v: 9,
    Zv: 10,
    pw: 11,
    ow: 12,
    Hq: 13,
    Rv: 14,
    Sv: 15,
    Tv: 16,
    Uv: 17,
    Qv: 18,
    vm: 19,
    rw: 20,
    lv: 21,
    ZB: 22,
    fD: 23,
    Gw: 24,
    bw: 25,
    vb: 26,
    NEXT: 27,
    qb: 28,
    LOADING: 29,
    Dw: 30,
    dw: 31,
    uD: 32,
    lp: 33,
    mp: 34,
    np: 35,
    Kp: 36,
    pC: 37,
    Yu: 38,
    gv: 39,
    lw: 40,
    Vv: 41,
    Xv: 42,
    rq: 43,
    wq: 44,
    Jq: 45,
    Kq: 46,
    Lq: 47,
    Hp: 48,
    zp: 49,
    op: 50,
    Mq: 51,
    Ip: 52,
    Oq: 53,
    Pq: 54,
    Nq: 55,
    qq: 56,
    Gq: 57,
    Fq: 58,
    Eq: 59,
    Fp: 60,
    Rq: 61,
    Qq: 62,
    pp: 63,
    Yv: 64,
    nw: 65,
    Ie: 66,
    Ce: 67,
    Zu: 68,
    zm: 69,
    aw: 70,
    ap: 71,
    mi: 72,
    kw: 200,
    gw: 201
   },
   ha = function(a, c, d, b, f) {
    function e(a) {
     switch (c.lh()) {
      case d.Cg:
       return a.p || a.w;
      case d.Ag:
       return a.o || a.w;
      case d.Lg:
       return a.r || a.w;
      default:
       return a.w
     }
    }
    return {
     Lm: function(b, c) {
      var d = e(a.Lm[b]);
      d && c && (d = b + 1 + ". " + d);
      return d
     },
     X: function(a) {
      var c, d, n = b.length;
      for (d = 0; d < n; d++)
       if (c = b[d], c.id === a) return e(c);
      f.debug("Missing menu string for id: " +
       a);
      return ""
     },
     gy: e,
     $D: function() {
      return c.lh()
     }
    }
   }(V, ra, fa, [{
     id: 0,
     w: "Play",
     p: "Jouer",
     o: "Spielen",
     r: "\u0418\u0433\u0440\u0430\u0442\u044c"
    }, {
     id: 1,
     w: "Options",
     p: "Options",
     o: "Optionen",
     r: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"
    }, {
     id: 2,
     w: "Extras",
     p: "",
     o: "Extras",
     r: "\u0415\u0449\u0435 \u043a\u043e\u0435 \u0447\u0442\u043e"
    }, {
     id: 3,
     w: "Bonus mode",
     p: "",
     o: "Bonusmodus",
     r: "\u0411\u043e\u043d\u0443\u0441 \u0440\u0435\u0436\u0438\u043c"
    }, {
     id: 4,
     w: "Full version",
     p: "Version compl\u00e8te",
     o: "Vollversion",
     r: "\u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f"
    }, {
     id: 5,
     w: "Reset game",
     p: "R\u00e9initialiser",
     o: "Neu starten",
     r: "\u0421\u0431\u0440\u043e\u0441 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430"
    }, {
     id: 6,
     w: "Help",
     p: "",
     o: "Hilfe",
     r: "\u041f\u043e\u043c\u043e\u0449\u044c"
    }, {
     id: 7,
     w: "About",
     p: "\u00c0 propos",
     o: "\u00dcber",
     r: "\u041e\u0431 \u0438\u0433\u0440\u0435"
    }, {
     id: 8,
     w: "Credits",
     p: "Cr\u00e9dits",
     o: "Mitwirkende",
     r: "\u0410\u0432\u0442\u043e\u0440\u044b"
    }, {
     id: 9,
     w: "Music on",
     p: "Musique oui",
     o: "Musik an",
     r: "\u041c\u0443\u0437\u044b\u043a\u0430 \u0432\u043a\u043b."
    }, {
     id: 10,
     w: "Music off",
     p: "Musique non",
     o: "Musik aus ",
     r: "\u041c\u0443\u0437\u044b\u043a\u0430 \u0432\u044b\u043a\u043b."
    }, {
     id: 11,
     w: "Sounds on",
     p: "Sons oui",
     o: "Ger\u00e4usche an",
     r: "\u0417\u0432\u0443\u043a\u0438 \u0432\u043a\u043b."
    }, {
     id: 12,
     w: "Sounds off",
     p: "Sons non",
     o: "Ger\u00e4usche aus",
     r: "\u0417\u0432\u0443\u043a\u0438 \u0432\u044b\u043a\u043b."
    }, {
     id: F.Hq,
     w: "Are you sure you want to reset your progress?",
     p: "Voulez-vous vraiment r\u00e9initialiser votre progression?",
     o: "M\u00f6chtest du deinen Fortschritt wirklich zur\u00fccksetzen?",
     r: "\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441?"
    }, {
     id: 14,
     w: "BOI, DO BETTER!",
     p: "Passable!",
     o: "Passabel!",
     r: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u0439\u0434\u0435\u043d!"
    },
    {
     id: 15,
     w: "Enh...",
     p: "Bien!",
     o: "Gut!",
     r: "\u0425\u043e\u0440\u043e\u0448\u043e!"
    }, {
     id: 16,
     w: "Sure...",
     p: "Super!",
     o: "Prima!",
     r: "\u041e\u0442\u043b\u0438\u0447\u043d\u043e!"
    }, {
     id: 17,
     w: "Cool...",
     p: "Formidable!",
     o: "Hervorragend!",
     r: "\u0421\u0443\u043f\u0435\u0440!"
    }, {
     id: 18,
     w: "''Puzzle''",
     p: "Niveau",
     o: "Level",
     r: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c"
    }, {
     id: 19,
     w: "Time",
     p: "Temps",
     o: "Zeit",
     r: "\u0412\u0440\u0435\u043c\u044f"
    }, {
     id: 20,
     w: "Star Bonus",
     p: "Bonus \u00e9toile",
     o: "Sternenbonus",
     r: "\u0411\u043e\u043d\u0443\u0441 \u0437\u0430 \u0437\u0432\u0435\u0437\u0434\u044b"
    },
    {
     id: 21,
     w: "Your Final Score",
     p: "Votre score final",
     o: "Dein Endpunktestand",
     r: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u043e\u0447\u043a\u0438"
    }, {
     id: 22,
     w: "Best Score",
     p: "Meilleur score",
     o: "Beste punktzahl",
     r: "\u041b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"
    }, {
     id: 23,
     w: "Score",
     p: "Score",
     o: "Punktzahl",
     r: "\u041e\u0447\u043a\u0438"
    }, {
     id: 24,
     w: "Yes",
     p: "Oui",
     o: "Ja",
     r: "\u0414\u0430"
    }, {
     id: 25,
     w: "No",
     p: "Non",
     o: "Nein",
     r: "\u041d\u0435\u0442"
    }, {
     id: 26,
     w: "Replay",
     p: "Rejouer",
     o: "Wieder",
     r: "\u0415\u0449\u0435 \u0440\u0430\u0437"
    }, {
     id: 27,
     w: "Keep Em Cmn",
     p: "ALLONSY",
     o: "GOH!",
     r: "MORE VODKA"
    }, {
     id: 28,
     w: "Quit",
     p: "RETREAT",
     o: "INVADE",
     r: "Vodka Stores"
    }, {
     id: 29,
     w: "Loading...",
     p: "Chargement...",
     o: "Laden...",
     r: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."
    }, {
     id: 30,
     w: "Total: %d",
     p: "Total: %d",
     o: "Gesamt: %d",
     r: "\u0412\u0441\u0435\u0433\u043e: %d"
    }, {
     id: 31,
     w: "Ok",
     p: "OK",
     o: "Ok",
     r: "Ok"
    }, {
     id: 32,
     w: "Collect %d stars to unlock this level pack",
     p: "Recueillez %d \u00e9toiles pour d\u00e9verrouiller ce pack de niveaux",
     o: "Sammle %d Sterne, um dieses Levelpaket freizuschalten",
     r: "\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 %d \u0437\u0432\u0435\u0437\u0434 \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443"
    }, {
     id: F.lp,
     w: "You are missing",
     p: "Il vous en manque",
     o: "Dir fehlen",
     r: "\u0412\u0430\u043c \u043d\u0435\u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0432\u0441\u0435\u0433\u043e"
    },
    {
     id: F.mp,
     w: "to unlock this box",
     p: "pour d\u00e9verrouiller bo\u00eete",
     o: "um dieses Box freizuschalten",
     r: "\u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443"
    }, {
     id: F.np,
     w: "Get more stars from the earlier levels",
     p: "Recueillez plus d'\u00e9toiles dans les niveaux pr\u00e9c\u00e9dents",
     o: "Gewinne mehr Sterne in den niedrigeren Leveln",
     r: "\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0437\u0432\u0435\u0437\u0434 \u0432 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u044f\u0445"
    },
    {
     id: 37,
     w: "Check back for the new levels coming with the updates",
     p: "Revenez pour d\u00e9couvrir de nouveaux niveaux avec les mises \u00e0 jour",
     o: "Komm bald wieder, neue Level kommen mit den Updates",
     r: "\u041d\u043e\u0432\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0430\u043f\u0434\u0435\u0439\u0442\u0430\u043c\u0438"
    }, {
     id: F.Yu,
     w: "achievement gained!",
     p: "r\u00e9alisation d\u00e9verrouill\u00e9e!",
     o: "Erfolg geschafft!",
     r: "\u043e\u0442\u043a\u0440\u044b\u0442\u043e!"
    }, {
     id: 39,
     w: "Continue",
     p: "Continuer",
     o: "Weiter",
     r: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"
    }, {
     id: 40,
     w: "Skip level",
     p: "Passer",
     o: "\u00dcberspringen",
     r: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"
    }, {
     id: 41,
     w: "Level select",
     p: "Choisir niveau",
     o: "Levelauswahl",
     r: "\u0412\u044b\u0431\u043e\u0440 \u0443\u0440\u043e\u0432\u043d\u044f"
    }, {
     id: 42,
     w: "Main menu",
     p: "Menu principal",
     o: "Hauptmen\u00fc",
     r: "\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"
    },
    {
     id: F.qq,
     w: "Language",
     r: "\u042f\u0437\u044b\u043a",
     p: "Langue",
     o: "Sprache"
    }, {
     id: F.zp,
     w: "Drag to Cut",
     p: "Glisser",
     o: "Ziehe: Schneide",
     r: "\u041f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u0435\u043c"
    }, {
     id: F.op,
     w: "Click to Cut",
     p: "Cliquer",
     o: "Klicke: Schneide",
     r: "\u0429\u0435\u043b\u0447\u043a\u043e\u043c"
    }, {
     id: F.rq,
     w: "Let's Play",
     p: "C'est parti",
     o: "Lass uns spielen",
     r: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0438\u0433\u0440\u0430\u0435\u043c"
    }, {
     id: F.wq,
     w: "More Cut the Rope fun!",
     p: "Toujours plus de Cut the Rope !",
     o: "Mehr Cut the Rope Spa\u00df!",
     r: "\u0415\u0449\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0435\u0441\u0435\u043b\u044c\u044f \u0432 \u0438\u0433\u0440\u0435 Cut the Rope!"
    }, {
     id: F.Lq,
     w: "Share...",
     p: "Partager...",
     o: "Teilen...",
     r: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f..."
    }, {
     id: F.Jq,
     w: "Share",
     p: "Partager",
     o: "Teilen",
     r: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"
    }, {
     id: F.pp,
     w: "Congratulations!",
     p: "F\u00e9licitations!",
     o: "Gratulation!",
     r: "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!"
    }, {
     id: F.Kp,
     w: "You completed the game with %d stars!",
     p: "Tu as termin\u00e9 le jeu avec %d \u00e9toiles !",
     o: "Du hast das Spiel mit %d Sternen beendet!",
     r: "\u0412\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u0438\u0433\u0440\u0443 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0437\u0432\u0435\u0437\u0434: %d!"
    },
    {
     id: F.Kq,
     w: "I just found one of Om Nom's secret drawings!",
     p: "Je viens juste de trouver un des dessins secrets de Om Nom !",
     o: "Ich habe gerade eine geheime Om-Nom-Zeichnung entdeckt!",
     r: "\u041c\u043d\u043e\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0431\u044b\u043b \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u0430\u0439\u043d\u044b\u0445 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u0432 \u0410\u043c \u041d\u044f\u043c\u0430!"
    },
    {
     id: F.Hp,
     w: "You found a drawing!",
     p: "Tu as trouv\u00e9 un dessin !",
     o: "Du hast die Zeichnung gefunden!",
     r: "\u0412\u044b \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b\u0438 \u0440\u0438\u0441\u0443\u043d\u043e\u043a!"
    }, {
     id: F.Mq,
     w: "Show Me",
     p: "Montre-moi",
     o: "Zeig es mir",
     r: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u043d\u0435"
    }, {
     id: F.Ip,
     w: "Free Download",
     p: "T\u00e9l\u00e9chargement gratuit",
     o: "Kostenloser Download",
     r: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"
    },
    {
     id: F.Oq,
     w: "Cut the Rope is a fun game where you feed candy to the curiously cute green monster Om-nom.",
     p: "Cut the Rope est un jeu amusant dans lequel tu dois nourrir Om Nom, un curieux petit monstre.",
     o: "Cut the Rope ist ein lustiges Spiel, wobei du dem kuriosem, niedlichem Monster Om-nom S\u00fc\u00dfigkeiten f\u00fctterst.",
     r: "Cut the Rope   \u044d\u0442\u043e \u0432\u0435\u0441\u0435\u043b\u0430\u044f \u0438\u0433\u0440\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u043a\u043e\u0440\u043c\u0438\u0442\u0435 \u0441\u043b\u0430\u0434\u043e\u0441\u0442\u044f\u043c\u0438 \u043b\u044e\u0431\u043e\u043f\u044b\u0442\u043d\u043e\u0433\u043e \u0438 \u043c\u0438\u043b\u043e\u0433\u043e \u043c\u043e\u043d\u0441\u0442\u0440\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0410\u043c \u041d\u044f\u043c."
    },
    {
     id: F.Pq,
     w: "Om Nom is Om Line - Cut the Rope for the Web",
     p: "Om Nom est om ligne - Cut the Rope version web",
     o: "Om Nom ist Om Line - Cut the Rope f\u00fcr das Internet",
     r: "\u0410\u043c \u041d\u044f\u043c \u0432 \u0410\u043c \u041b\u0430\u0439\u043d\u0435 \u2013 \u0432\u0435\u0431-\u0432\u0435\u0440\u0441\u0438\u044f \u0438\u0433\u0440\u044b Cut the Rope"
    }, {
     id: F.Nq,
     w: 'Play the HTML5 version of "Cut the Rope"!',
     p: "Joue \u00e0 Cut the Rope dans sa version HTML5 !",
     o: 'Spiele die HTML5 Version von "Cut the Rope"!',
     r: "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u0432 HTML5-\u0432\u0435\u0440\u0441\u0438\u044e \u0438\u0433\u0440\u044b Cut the Rope!"
    }, {
     id: F.Gq,
     w: 'Hold the "yes" button for 3 seconds to reset.',
     p: 'Maintenir le doigt sur "Oui" pendant 3 secondes pour r\u00e9initialiser.',
     o: 'Halte zum Neustarten 3 Sekunden lang "Ja" gedr\u00fcckt.',
     r: '\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 "\u0414\u0430" \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3 \u0441\u0435\u043a\u0443\u043d\u0434 \u0434\u043b\u044f \u0441\u0431\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430.'
    },
    {
     id: F.Fp,
     w: "everything off",
     p: "tout couper",
     o: "alles aus",
     r: "\u0432\u0441\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e"
    }, {
     id: F.Fq,
     w: "reload the game in SD",
     p: "recharger le jeu en SD",
     o: "Spiel in SD neu laden",
     r: "\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443 \u0432 SD"
    }, {
     id: F.Eq,
     w: "reload the game in HD",
     p: "recharger le jeu en HD",
     o: "Spiel in HD neu laden",
     r: "\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443 \u0432 HD"
    },
    {
     id: F.Rq,
     w: "A Little Too Slow...",
     p: "Un peu trop lent",
     o: "Etwas zu langsam...",
     r: "\u041a\u0430\u043a-\u0442\u043e \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e..."
    }, {
     id: F.Qq,
     w: "Om Nom is sad because your computer is running slow. We'll do our best, but there may be some slow-downs.",
     p: "Om Nom est triste. Votre ordinateur est tr\u00e8s lent. Nous ferons notre mieux, mais il est possible que le jeu ralentisse.",
     o: "Om Nom ist traurig, weil dein Computer so langsam ist. Wir geben unser Bestes, aber es kann trotzdem zu Verz\u00f6gerungen kommen.",
     r: '\u0410\u043c \u041d\u044f\u043c \u043e\u043f\u0435\u0447\u0430\u043b\u0435\u043d: \u0443 \u0432\u0430\u0441 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440. \u041c\u044b, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f, \u043d\u043e \u0438\u0433\u0440\u0430 \u0443 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 "\u043f\u0440\u0438\u0442\u043e\u0440\u043c\u0430\u0436\u0438\u0432\u0430\u0442\u044c".'
    },
    {
     id: F.Yv,
     w: "Music",
     p: "Musique",
     o: "Musik",
     r: "\u041c\u0443\u0437\u044b\u043a\u0430"
    }, {
     id: F.nw,
     w: "Sounds",
     p: "Sons oui",
     o: "Ger\u00e4usche",
     r: "\u0417\u0432\u0443\u043a\u0438"
    }, {
     id: F.Ie,
     w: "Leaderboards",
     p: "Classements",
     o: "Bestenlisten",
     r: "\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0435\u043a\u043e\u0440\u0434\u043e\u0432"
    }, {
     id: F.Ce,
     w: "Achievements",
     p: "Succ\u00e8s",
     o: "Erfolge",
     r: "\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"
    }, {
     id: F.Zu,
     w: "Achievement unlocked!",
     p: "Succ\u00e8s d\u00e9bloqu\u00e9 !",
     o: "Erfolg freigeschaltet!",
     r: "\u041d\u043e\u0432\u043e\u0435 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435!"
    }, {
     id: F.zm,
     w: "Get MANY MORE\n levels in the full version",
     p: "De NOMBREUX autres niveaux\n sont disponibles dans la version compl\u00e8te!",
     o: "In der Vollversion gibt\n es noch VIEL MEHR Level!",
     r: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u041d\u0410\u041c\u041d\u041e\u0413\u041e \u0411\u041e\u041b\u042c\u0428\u0415\n \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438!"
    },
    {
     id: F.aw,
     w: "Name",
     p: "Nom",
     o: "Name",
     r: "\u0418\u043c\u044f"
    }, {
     id: F.ap,
     w: "{0} & {1}",
     p: "{0} et {1}",
     o: "{0} und {1}",
     r: "{0} \u0438 {1}"
    }, {
     id: F.mi,
     w: "Buy Full Game",
     p: "Acheter le jeu complet",
     o: "Vollversion kaufen",
     r: "\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e"
    }, {
     id: F.kw,
     w: "Settings",
     p: "Param\u00e8tres",
     o: "Einstellungen",
     r: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"
    }, {
     id: F.gw,
     w: "Privacy",
     p: "Vie priv\u00e9e",
     o: "Datenschutz",
     r: "\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"
    }
   ], ka),
   T = function(a, c, d) {
    a.zs = Ia(".m4a");
    a.Uo = "http://www.cuttherope.net/video/";
    a.As = function() {
     return "http://www.cuttherope.net/images/" + d.be + "/ui/"
    };
    a.Ds = Ia("http://www.cuttherope.net/images/scores/");
    a.Tn = Ia(!0);
    return a
   }(function(a, c, d, b, f, e) {
    var g = {
      w: "I just finished playing Cut the Rope on the web with %d (out of %d possible) stars!",
      p: "",
      o: "",
      r: ""
     },
     h = {
      jC: !0,
      kC: !1,
      wD: !1,
      En: "images/",
      yo: "images/" + c.be + "/",
      Uc: "images/" + c.be + "/ui/",
      Ur: "images/" + c.be + "/" + (e.AD || "ui/"),
      Zw: "audio/",
      zs: function() {
       return soundManager.useHTML5Audio ? Modernizr.audio.m4a ? ".m4a" : Modernizr.audio.ogg ? ".ogg" : null : ".m4a"
      },
      Uo: "video/",
      Gs: function() {
       return Modernizr.video.h264 ? ".mp4" : Modernizr.video.webm ? ".webm" : null
      },
      As: function() {
       var a = window.location;
       return a.protocol + "//" + a.host + "/images/" + c.be + "/ui/"
      },
      Ds: function() {
       var a = window.location;
       return a.protocol + "//" + a.host + "/images/scores/"
      },
      cB: function(a, b) {
       a.click(b)
      },
      VA: function(a, b) {
       a.click(b)
      },
      PB: function(a, b) {
       a.toggleClass("disabled", !b)
      },
      NB: function(a, b) {
       a.toggleClass("disabled", !b)
      },
      AB: function(a) {
       $("#langBtn").toggle(a)
      },
      SA: function(a) {
       $("#langBtn").click(function() {
        a(null)
       })
      },
      MB: function() {
       h.au($("#langBtn"), d.X(b.qq) + ":");
       $("#flag").offset()
      },
      JA: function(a) {
       $("#cutBtn").click(a)
      },
      KB: function(e) {
       var g = 400 * c.Gb,
        h = 0.8 * c.bb,
        m = f.Ub;
       a.oc({
        text: d.X(b.zp),
        width: g,
        qh: "dragText",
        scale: h,
        Ec: m
       });
       a.oc({
        text: d.X(b.op),
        width: g,
        qh: "cutText",
        scale: h,
        Ec: m
       });
       $("#cutBtn").toggleClass("disabled", !e)
      },
      bB: function(a, b) {
       h.au(a, b)
      },
      au: function(b, c) {
       a.la({
        text: c,
        img: b.find("img")[0],
        ua: !0
       })
      },
      cy: function(a, b) {
       return d.gy(g).replace("%d", a).replace("%d", b)
      },
      Tn: function() {
       var a = Modernizr.canvas && Modernizr.audio && Modernizr.video && Modernizr.rgba && Modernizr.opacity && Modernizr.fontface && Modernizr.csstransforms && Modernizr.hq;
       a || (Modernizr.load({
        load: "css!css/nosupport.css?RELEASE_TAG"
       }), $(function() {
        $("#yt-video").remove()
       }), _gaq.push(["_trackEvent", "Upgrade", "View"]));
       return a
      }
     };
    return h
   }(ga, H, ha, F,
    Q, V), fa, H),
   eb = function(a) {
    $(document).ready(function() {
     $("#more-stuff-link").on("click", function() {
      ZeptoLab && ZeptoLab.ctr && ZeptoLab.ctr.pauseGame && ZeptoLab.ctr.pauseGame();
      $(".popupOuterFrame").hide();
      $(".popupInnerFrame").hide();
      $("#popupWindow").fadeIn(500, function() {
       $("#more-stuff").show()
      })
     });
     $("#more-close").on("click", function() {
      $("#popupWindow").fadeOut(500, function() {
       $("#more-stuff").hide()
      })
     })
    });
    return {
     Lz: a.cw,
     tE: ["page/game_bg.png"]
    }
   }(sa),
   fb = function(a, c) {
    function d(a, d) {
     var f = b.getSoundById("s" +
      a);
     if (f) try {
      d.call(this, f)
     } catch (e) {
      c.debug("Sound exception:" + e)
     } else c.debug("No sound loaded:" + a)
    }
    var b = window.soundManager,
     f = !1,
     e = [];
    b.audioFormats.mp3.required = !1;
    b.setup({
     useHTML5Audio: !0,
     preferFlash: !1,
     url: "/sm2/",
     flashVersion: 9,
     useHighPerformance: !0,
     debugMode: !1,
     flashLoadTimeout: 500,
     ontimeout: function() {
      b.useHTML5Audio = !0;
      b.preferFlash = !1;
      b.reboot()
     },
     onready: function() {
      f = !0;
      for (var a = 0, b = e.length; a < b; a++) e[a]()
     }
    });
    return {
     Ih: function(a) {
      f ? a() : e.push(a)
     },
     play: function(a, b) {
      d(a, function(a) {
       var c =
        null;
       b && (c = {}, c.onfinish = b);
       a.play(c)
      })
     },
     xj: function(a) {
      var b = !1;
      d(a, function(a) {
       b = 1 === a.playState && !a.paused
      });
      return b
     },
     Dy: function(a) {
      var b = !0;
      d(a, function(a) {
       b = a.paused
      });
      return b
     },
     pause: function(a) {
      d(a, function(a) {
       a.pause()
      })
     },
     stop: function(a) {
      d(a, function(a) {
       a.stop()
      })
     },
     hB: function(a, b) {
      d(a, function(a) {
       a.volume = b
      })
     }
    }
   }(T, ka),
   wb = function(a, c, d, b) {
    function f() {
     if (g && h) {
      var b = new PxLoader({
        kz: 3E4
       }),
       f = a.Zw,
       q = a.zs(),
       m, p, u, v;
      m = 0;
      for (p = c.$s.length; m < p; m++) u = c.$s[m], v = f + d[u].path + q, b.addSound("s" + u,
       v, "MENU");
      m = 0;
      for (p = c.ys.length; m < p; m++) u = c.ys[m], v = f + d[u].path + q, b.addSound("s" + u, v);
      b.addCompletionListener(function() {
       for (var a = 0, b = e.length; a < b; a++) e[a]()
      });
      b.start()
     }
    }
    var e = [],
     g = !1,
     h = !1;
    b.Ih(function() {
     h = !0;
     f()
    });
    return {
     start: function() {
      g = !0;
      f()
     },
     yz: function(a) {
      e.push(a)
     }
    }
   }(T, V, Ma, fb),
   xb = function(a, c, d, b, f, e, g, h, l) {
    function n() {
     function e(b, c, d) {
      if (b)
       for (c = c || a.Uc, d = d || "MENU", k = 0, D = b.length; k < D; k++) b[k] && (C = c + b[k], p.addImage(C, d))
     }

     function n(a, b) {
      var k, c, d;
      k = 0;
      for (c = a.length; k < c; k++) {
       d = a[k];
       var e = new PxLoaderImage(u + f[d].path, b);
       e.Nt = d;
       p.add(e)
      }
     }
     var p = new PxLoader({
       kz: 3E4
      }),
      u = a.En + b.pb + "/game/",
      k, D, C, I = ["PASSWORD", "EDITION", "FONT", "MENU"].concat(["GAME"]);
     n(l.vw, "FONT");
     n(c.Yx, "GAME");
     n(c.Ss, "GAME");
     n(c.Ts, "GAME");
     p.addProgressListener(function(a) {
      h.Az(a.resource.Nt, a.resource.img)
     }, ["FONT", "GAME"]);
     e(d.CE, a.En + (d.BE || ""), "PASSWORD");
     e(d.EE, a.yo + (d.DE || ""), "PASSWORD");
     e(d.AE, a.En + "page/");
     e(d.Lz, a.yo + "page/");
     e(c.cz);
     e(c.Vr, a.Ur);
     e(c.Tr);
     e(c.Km);
     e(c.Ix);
     e(c.SD, a.yo + (c.RD || ""), "EDITION");
     p.addProgressListener(function(a) {
      var b = 100 * (a.completedCount / a.totalCount);
      g && g.xE(b);
      a.completedCount === a.totalCount && (m = !0, q())
     }, I);
     p.start(I)
    }

    function q() {
     m && p && (g && (g.yE(), g.hide()), u && setTimeout(u, 0), q = da())
    }
    var m = !1,
     p = !1,
     u = null;
    return {
     init: function() {
      h.init();
      g && g.init();
      n();
      e.yz(function() {
       p = !0;
       q()
      });
      e.start()
     },
     jb: function() {
      g && (g.jb(), g.show())
     },
     Bo: function(a) {
      u = a;
      q()
     }
    }
   }(T, V, eb, H, Ma, wb, null, Na, sa),
   yb = function(a, c) {
    function d(a) {
     g && (a += "-" + g);
     return a
    }

    function b(a) {
     if (!h) return null;
     var b = [];
     a = (h.get(d(a)) || "").split(",");
     var c = a.length,
      f, e;
     for (f = 0; f < c; f++) f < a.length ? (e = parseInt(a[f], 16), isNaN(e) && (e = null)) : e = null, b.push(e);
     return b
    }

    function f(a, c) {
     if (!h) return null;
     var d = b(a);
     return d.length > c ? d[c] : null
    }

    function e(a, c, f) {
     if (h) {
      var e = b(a);
      if (e[c] !== f && (e[c] = f, h))
       if (a = d(a), e) {
        c = [];
        f = e.length;
        var g, u;
        for (g = 0; g < f; g++) u = e[g], null == u ? c.push("") : c.push(u.toString(16));
        h.set(a, c.join(","))
       } else h.remove(a)
     }
    }
    var g = "";
    c.subscribe(c.v.Fr, function(a) {
     g = a
    });
    var h = null;
    c.subscribe(c.v.jw, function(a) {
     h =
      a ? {
       set: a.set,
       get: a.get,
       remove: a.remove
      } : null;
     c.ra(c.v.Il)
    });
    return {
     pn: function(a, b) {
      return f("scores-" + a, b)
     },
     Fo: function(a, b, c) {
      e("scores-" + a, b, c)
     },
     Ye: function(a, b) {
      return f("stars-" + a, b)
     },
     rf: function(a, b, c) {
      e("stars-" + a, b, c)
     },
     YD: function(a) {
      return f("achievements", a)
     },
     PE: function(a, b) {
      e("achievements", a, b)
     }
    }
   }(V, U),
   ua = function(a, c, d, b, f, e, g, h, l, n) {
    function q(a, b, k, c) {
     this.Nc = a;
     this.Wh = b;
     this.qf = k || [];
     this.Eb = c || []
    }

    function m(a, k) {
     var c = n.Ye(a, k),
      d = b.kh(x + (1E3 * k + a ^ D), null),
      d = null == d ? null : (d ^ D) - k - 1E3 *
      a;
     return -1 === d || null === d ? c : null == c ? d : Math.max(c, d)
    }

    function p(a, k, c) {
     b.set(x + (1E3 * k + a ^ D), (null == c ? -1 : c) + 1E3 * a + k ^ D);
     n.rf(a, k, c)
    }

    function u(a, k) {
     var c = n.pn(a, k) || 0,
      d = b.kh(B(a, k), null);
     return Math.max(c, null == d ? 0 : (d ^ D) - a - 1E3 * k)
    }

    function v(a, k, c) {
     b.set(B(a, k), c + 1E3 * k + a ^ D);
     n.Fo(a, k, c)
    }

    function B(a, b) {
     var c = r + (1E3 * a + b ^ D);
     return c === k ? c + "_" : c
    }
    var r = String.fromCharCode(98, 112),
     x = String.fromCharCode(98, 115),
     k = r + String.fromCharCode(50, 51, 57, 48),
     D = null;
    b.Ih(function() {
     D = b.kh(k, null);
     null == D && (D = d.fb(1E3, 1E4),
      b.set(k, D))
    });
    var C = new function() {
     var b = [];
     this.load = function() {
      b = [];
      for (var c = 0, d = f.Tg.length; c < d; c++) {
       for (var e = b, g = c, l = c, h = null !== m(l, 0), n = f.Tg[l].Dh.length, D = f.Mu[l], B = [], r = [], x = void 0, x = 0; x < n; x++) {
        if (!h) {
         var w = l,
          F = x;
         p(w, F, 0 === F ? 0 : null);
         v(w, F, 0)
        }
        B.push(u(l, x));
        r.push(m(l, x))
       }
       if (a.ID == l + 1)
        for (h = 0; h < n; h++) C.rf(l, h, 3, !0);
       e[g] = new q(n, D, B, r)
      }
      k && C.gi()
     };
     c.subscribe(c.v.rm, this.load);
     c.subscribe(c.v.sm, this.load);
     c.subscribe(c.v.Il, this.load);
     var k = !1;
     c.subscribe(c.v.bp, function() {
      k = !0
     });
     this.hy = function() {
      return D
     };
     this.Nc = function(a) {
      a = b[a];
      return null != a ? a.Nc : null
     };
     this.Wh = function(a) {
      a = b[a];
      return null != a ? a.Wh : 0
     };
     this.Cm = function(a) {
      a = b[a];
      if (null != a) {
       for (var k = 0, c = 0; c < a.Nc; c++) var d = a.Eb[c],
        k = k + (null == d ? 0 : d);
       return k
      }
      return 0
     };
     this.xf = function() {
      for (var a = 0, k = 0; k < b.length; k++) a += C.Cm(k);
      return a
     };
     this.xt = function(a) {
      a = b[a];
      return null != a ? 3 * a.Nc : 0
     };
     this.uj = function(k) {
      return 0 == k || a.vg || null != b[k] && C.xf() >= C.Wh(k) ? !1 : !0
     };
     this.Cy = function(k, c) {
      var d = b[k];
      return a.vg ? !0 : null != d ? null != d.Eb[c] : !1
     };
     this.Fo = function(a,
      k, d, f) {
      var e = b[a];
      if (null != e) {
       f ? e.qf[k] = d : (f = u(a, k), e.qf[k] = Math.max(d, f));
       v(a, k, e.qf[k]);
       k = e.qf.length;
       for (f = d = 0; f < k; f++) d += e.qf[f];
       c.ra(c.v.Fw, a, d)
      }
     };
     this.pn = function(a, k) {
      var c = b[a];
      return null != c ? c.qf[k] : null
     };
     this.rf = function(a, k, d, f) {
      var e = this.xf(),
       g = b[a];
      if (null != g) {
       var l = m(a, k);
       g.Eb[k] = null == l || f ? d : Math.max(d, l);
       p(a, k, g.Eb[k])
      }
      a = this.xf();
      a !== e && c.ra(c.v.Aw, a)
     };
     this.Ye = function(a, k) {
      var c = b[a];
      return null != c ? c.Eb[k] : null
     };
     this.pA = function() {
      var a = b.length,
       k, c, d, f;
      for (k = 0; k < a; k++)
       for (c = b[k],
        f = c.Nc, d = 0; d < f; d++) {
        var e = k,
         g = d;
        p(e, g, 0 === g ? 0 : null);
        v(e, g, 0);
        c.Eb[d] = m(k, d);
        c.qf[d] = u(k, d)
       }
      this.gi()
     };
     this.gi = function() {
      var a = g.X(l.Dw).replace("%d", C.xf());
      e.la({
       text: a,
       Lc: "#boxScore img",
       ua: !0
      })
     };
     c.subscribe(c.v.Ib, this.gi)
    };
    return C
   }(ta, U, ca, Aa, V, ga, ha, fa, F, yb),
   xa = function() {
    return new function() {
     this.ht = function(a, c, d) {
      return c * a / d + 0
     };
     this.Kx = function() {
      return 0.05 * Math.sin(t / 100 * (Math.PI / 2)) + 0
     };
     this.qs = function(a, c, d, b) {
      return d * ((a = a / b - 1) * a * a + 1) + c
     };
     this.eh = function(a, c, d, b) {
      return 1 > (a /= b /
       2) ? d / 2 * a * a * a + c : d / 2 * ((a -= 2) * a * a + 2) + c
     };
     this.Ve = function(a, c, d, b) {
      return a == b ? c + d : d * (-Math.pow(2, -10 * a / b) + 1) + c
     };
     this.dj = function(a, c, d) {
      return 0 == a ? 0 : a == d ? 0 + c : 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + 0 : c / 2 * (-Math.pow(2, -10 * --a) + 2) + 0
     };
     this.$m = function(a, c, d, b) {
      var f = 1.5;
      void 0 == f && (f = 1.70158);
      return d * ((a = a / b - 1) * a * ((f + 1) * a + f) + 1) + c
     };
     this.cj = function(a, c, d, b) {
      void 0 == b && (b = 1.70158);
      return 1 > (a /= d / 2) ? c / 2 * a * a * (((b *= 1.525) + 1) * a - b) + 0 : c / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) + 0
     }
    }
   }(),
   Ga = function(a, c, d, b, f, e, g, h, l, n, q) {
    var m;
    $(function() {
     m = $("#boxUpgradePlate").hide()
    });
    g.subscribe(g.v.Pg, function(a) {
     a && m && m.fadeOut(200)
    });
    g.subscribe(g.v.Ib, function() {
     d.la({
      text: h.X(q.mi),
      Ab: "boxUpgradePlate",
      scale: 0.6 * b.bb
     })
    });
    var p = f.Ur || f.Uc;
    return a.extend({
     init: function(a, c, e, n, m) {
      this.index = a;
      this.bf = n;
      this.of = this.visible = !0;
      this.Vi = 0;
      this.opacity = 1;
      this.type = m;
      this.Wi = new Image;
      c && (this.Wi.src = p + c);
      var k = this.zu = new Image,
       q = this.dx = b.i(350),
       C = this.Wr = b.i(20),
       I = this;
      this.Au = !1;
      this.Lt = function() {
       d.la({
        text: h.Lm(a, I.Gn),
        img: k,
        width: (q - 2 * C) / b.bb,
        Ec: l.Ub,
        ua: !0
       });
       I.Au = !0
      };
      g.subscribe(g.v.Ib, this.Lt);
      this.sd = d.la({
       text: e,
       ua: !0
      });
      this.jt = new Image;
      this.jt.src = f.Uc + "box_omnom.png";
      this.Xs = new Image;
      this.Xs.src = f.Uc + "box_lock.png";
      this.tf = new Image;
      this.tf.src = f.Uc + "star_result_small.png";
      this.tt = new Image;
      this.tt.src = f.Uc + "perfect_mark.png";
      this.Gn = !0
     },
     wh: Ia(!0),
     In: Ia(!0),
     uh: Ia(!0),
     B: function(a, b) {
      var c = a.globalAlpha;
      this.opacity !== c && (a.globalAlpha = this.opacity);
      this.Kt(a, b);
      this.opacity !== c && (a.globalAlpha = c)
     },
     Kt: function(a,
      c) {
      var d = this.In();
      d && (a.fillStyle = "rgb(45,45,53)", a.fillRect(b.i(130), b.i(200), b.i(140), b.i(100)), null != c && a.drawImage(this.jt, c + b.i(4), b.i(215)));
      a.drawImage(this.Wi, b.i(25), b.i(0));
      if (d) {
       if (this.bf) {
        var d = $(this.sd).width() || this.sd.width,
         f = $(this.sd).height() || this.sd.height,
         e = this.tf.width || $(this.tf).width(),
         k = b.i(-6),
         e = d + k + e,
         e = (b.i(125) - e) / 2,
         e = b.i(140) + e;
        a.scale(1.015, 1);
        a.drawImage(this.Xs, b.i(23), b.i(155));
        a.scale(1 / 1.015, 1);
        this.of && (a.drawImage(this.sd, e, b.i(220), d, f), a.drawImage(this.tf,
         e + d + k, b.i(225)))
       }
       n.Cm(this.index) === n.xt(this.index) && a.drawImage(this.tt, b.i(260), b.i(250))
      }
      this.Au || this.Lt();
      f = $(this.zu);
      d = f.width();
      f = f.height();
      k = Math.floor(b.i(25) + this.Wr + (this.dx - 2 * this.Wr - d) / 2);
      e = b.i(70);
      a.drawImage(this.zu, k, e, d, f)
     },
     Sr: function(a) {
      if (a) {
       this.Vi = Date.now();
       var d = b.i(1024),
        f = b.i(576),
        e = this,
        g = function() {
         t = Date.now() - e.Vi;
         var k, l;
         100 > t ? (k = c.Kx(), l = 1 - k, k = 1 + k) : 300 > t ? (k = c.eh(t - 100, 0, 0.11, 200), l = 0.95 + k, k = 1.05 - k) : 600 > t && (k = c.qs(t - 300, 0, 0.05, 300), l = 1.06 - k, k = 0.94 + k);
         l = (d - d * l) / 2;
         k = (f - f * k) / 2;
         var h = (d - 2 * l) / d,
          n = (f - 2 * k) / f;
         isNaN(h) || isNaN(n) || (a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(b.i(312), b.i(100), b.i(400), b.i(460)), a.restore(), a.save(), a.scale(h, n), a.translate(l, k), a.translate(b.i(312), b.i(130)), e.B(a, b.i(140)), a.restore());
         600 < t ? e.Vi = 0 : window.requestAnimationFrame(g)
        };
       g()
      }
     },
     $r: function() {
      this.Vi = 0
     },
     Jh: function() {
      this.of || m.toggleClass("purchaseBox", this.Ey || !1).fadeIn()
     },
     Lh: function() {
      m && m.fadeOut(200)
     }
    })
   }(X, xa, ga, H, T, qa, U, ha, Q, ua, F, V),
   Oa = {},
   zb = function(a, c, d, b,
    f, e, g, h, l, n, q) {
    return a.extend({
     init: function(a, c, e, h, n) {
      this.n(a, c, e, h, n);
      this.mf = -1;
      this.nf = null;
      var q = this;
      $(document).ready(function() {
       $("#showMeBtn").click(function() {
        l.Cz && l.Cz();
        q.kB()
       });
       var a = $("#installieBtn"),
        k = getIE9DownloadUrl();
       k ? (a.on("click", function() {
        l.tz && l.tz();
        window.location.href = k
       }), f.subscribe(f.v.Ib, function() {
        g.la({
         text: d.X(b.Ip),
         img: a.find("img")[0],
         ua: !0
        })
       })) : a.hide()
      })
     },
     wh: function() {
      return 0 !== this.mf
     },
     vy: function() {
      var a = function() {
        var a = -1;
        if ("Microsoft Internet Explorer" ==
         navigator.appName || "MSAppHost/1.0" == navigator.appName) {
         var b = /MSIE ([0-9]?[0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);
         null != b && 1 < b.length && (a = parseInt(b[1], 10))
        }
        return a
       }(),
       e = function() {
        try {
         var a = navigator.userAgent,
          b = -1 != a.indexOf("Windows NT"),
          c = b ? parseInt(a[a.indexOf("Windows NT") + 11]) : -1;
         if (b && 6 <= c) return !0
        } catch (d) {}
        return !1
       }();
      if (9 <= a || c.Vx) {
       a = h.kv || "true" == q.get("msIsSiteModeActivated");
       e = !0 === h.kv;
       if (!e) try {
        window.external.msIsSiteMode() && (e = !0)
       } catch (n) {}
       a || e || c.Vx ? (this.opacity = this.mf =
        1, this.nf = null, a || (q.set("msIsSiteModeActivated", "true"), l.Dz && l.Dz())) : (this.mf = 3, this.opacity = 0.35, this.nf = "pinPrompt", f.subscribe(f.v.Ib, function() {
        g.la({
         text: d.X(b.Mq),
         Lc: "#showMeBtn img",
         ua: !0
        })
       }))
      } else e ? (this.mf = 2, this.opacity = 0.35, this.nf = "iePrompt") : (this.mf = 0, this.opacity = 0.35, this.nf = null);
      return 0 == this.mf || -1 == this.mf ? !1 : !0
     },
     Jh: function() {
      null != this.nf && ($("#pinningContent").stop(!0, !0).delay(100).fadeIn(800), $("#" + this.nf).show())
     },
     Lh: function() {
      null != this.nf && $("#pinningContent").stop(!0, !0).fadeOut(300)
     },
     kB: function() {
      var a = $("#pinCursor"),
       b = $("#pinOmNom"),
       c = $("#pinChairShadow"),
       d = $("#showMeBtn"),
       f = $("#pinTaskBar");
      d.fadeOut().delay(5500).fadeIn(1E3);
      c.delay(500).fadeOut().delay(6E3).fadeIn(300);
      a.delay(500).fadeIn().delay(2250).animate({
       left: n.i(200)
      }, 500, "easeInOutCirc").fadeOut().animate({
       top: n.i(65),
       left: n.i(45),
       scale: "1.0"
      }, 0);
      b.delay(500).fadeIn().delay(1E3).animate({
       top: n.i(305),
       left: n.i(165)
      }, 1E3, "easeInOutBack").delay(1500).animate({
       scale: "0.65"
      }, 200).delay(1500).fadeOut(1E3).animate({
       top: n.i(115),
       left: n.i(-49),
       scale: "1.0"
      }, 50).fadeIn(500);
      f.delay(500).fadeIn().delay(5E3).fadeOut(1E3)
     }
    })
   }(Ga, ta, ha, F, U, V, ga, T, Oa, H, Aa),
   Ab = function(a, c, d, b, f, e, g) {
    var h, l;
    $(function() {
     h = $("#boxUpgradePrompt").hide();
     l = $("#boxUpgradeButton").hide().click(function() {
      c.ra(c.v.Hl)
     })
    });
    c.subscribe(c.v.Ib, function() {
     b.la({
      text: d.X(f.zm),
      Ab: "boxUpgradePrompt",
      width: e.i(650),
      Ec: g.T,
      ua: !0
     });
     b.la({
      text: d.X(f.mi),
      Ab: "boxUpgradeButton",
      scale: 0.6 * e.bb
     })
    });
    var n = !1;
    c.subscribe(c.v.Pg, function(a) {
     n = a
    });
    return a.extend({
     init: function(a,
      b, c, d, f) {
      this.n(a, b, c, d, f);
      this.Gn = this.of = !1;
      this.Ey = !0;
      this.visible = !n
     },
     wh: Ia(!1),
     In: Ia(!1),
     Jh: function() {
      h.fadeIn();
      l.fadeIn()
     },
     Lh: function() {
      h.fadeOut();
      l.fadeOut(200)
     }
    })
   }(Ga, U, ha, ga, F, H, Q),
   Bb = function(a) {
    return a.extend({
     init: function(a, d, b, f, e) {
      this.n(a, d, b, f, e);
      this.Gn = !1
     },
     wh: Ia(!1),
     In: Ia(!1),
     uh: Ia(!1)
    })
   }(Ga),
   gb = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v) {
    function B(a) {
     return k && Date.now() >= r[a] ? !1 : v.kh(D + (x[a] ^ C), 0) !== (x[a] - 1E3 ^ C) && !m.vg
    }
    var r = p.CD,
     x = p.BD,
     k = !1,
     D = String.fromCharCode(98, 107),
     C =
     n.hy(),
     I = null;
    $(document).ready(function() {
     I = $("#boxEnterCodeButton").hide()
    });
    var z = null,
     E = null,
     J = null,
     wa = null,
     Z = "January February March April May June July August September October November December".split(" ");
    a = c.extend({
     init: function(a, b, k, c, d) {
      this.n(a, b, k, c, d);
      this.Ys = new Image;
      this.Ys.src = this.Wi.src.replace(".png", "_locked.png");
      this.tj = B(a) && p.TD;
      this.yj = !0 !== m.vg && Date.now() < r[a];
      this.Te = null
     },
     uh: function() {
      return !this.yj && !this.tj
     },
     Jh: function() {
      !this.yj && this.tj && I.fadeIn()
     },
     Lh: function() {
      I.hide()
     },
     Kt: function(a) {
      a.drawImage(this.bf || this.yj || this.tj ? this.Ys : this.Wi, b.i(25), b.i(0));
      if (this.yj) {
       z || (z = new Image, d.la({
        text: "Available starting from",
        img: z,
        Ec: l.Ub,
        width: b.i(250)
       }));
       z.complete && a.drawImage(z, b.i(100), b.i(120), 0.8 * z.width * b.bb, 0.8 * z.height * b.bb);
       if (!this.Te) {
        this.Te = new Image;
        var k = new Date(r[this.index]);
        d.la({
         text: Z[k.getMonth()] + " " + k.getDate(),
         img: this.Te,
         width: b.i(200),
         Ec: l.Ub
        })
       }
       this.Te.complete && a.drawImage(this.Te, b.i(77), b.i(195), 1.2 * this.Te.width * b.bb, 1.2 * this.Te.height * b.bb)
      } else if (this.tj) wa ||
       (wa = new Image, d.la({
        text: "Visit Burger King to get an\n unlock code!",
        img: wa,
        Ec: l.Ub,
        width: b.i(280)
       }), d.la({
        text: "Enter Code",
        Ab: "boxEnterCodeButton",
        ua: !0
       })), wa.complete && a.drawImage(wa, b.i(50), b.i(90));
      else if (this.bf) {
       E || (E = new Image, d.la({
        text: "Collect",
        img: E,
        ua: !0
       }));
       E.complete && a.drawImage(E, b.i(143), b.i(108));
       var k = 1.2 * ($(this.sd).width() || this.sd.width),
        c = 1.2 * ($(this.sd).height() || this.sd.height),
        f = this.tf.width || $(this.tf).width(),
        e = b.i(-4),
        e = k + e + f,
        e = (b.i(125) - e) / 2,
        e = b.i(140) + e;
       a.drawImage(this.tf,
        e, b.i(160));
       a.drawImage(this.sd, e + f, b.i(150), k, c);
       J || (J = new Image, d.la({
        text: "to unlock",
        img: J,
        ua: !0
       }));
       J.complete && a.drawImage(J, b.i(130), b.i(204))
      }
     }
    });
    a.HB = function() {
     var a = Date.now(),
      b = r.length,
      c, d, f;
     k = !0;
     for (c = 0; c < b; c++) d = r[c], a >= d && (d = D + (x[c] ^ C), f = x[c] - 1E3 ^ C, v.set(d, f))
    };
    a.Ns = B;
    return a
   }(X, Ga, ga, H, T, qa, U, ha, Q, ua, F, ta, V, ca, Aa),
   ya = {
    qb: 0,
    Vc: 1,
    Bd: 2,
    Ff: 3,
    si: 4,
    sq: 5,
    Dg: 6,
    Zd: 7,
    qp: 8,
    Ie: 9,
    Ce: 10,
    Ke: 11
   },
   Ha = function() {
    return function(a, c, d, b) {
     this.id = a;
     this.hg = c;
     this.Rf = d;
     this.mB = b
    }
   }(),
   Ua = function() {
    function a(a) {
     this.an =
      a.element;
     this.mh = a.mh;
     var d = this;
     this.qu = function(b) {
      b = b.originalEvent;
      d.so(b);
      return a.ho ? d.wk(b, a.ho) : !1
     };
     this.gt = function(b) {
      b = b.originalEvent;
      d.so(b);
      return a.co ? d.wk(b, a.co) : !1
     };
     this.rs = function(b) {
      b = b.originalEvent;
      d.so(b);
      return a.$n ? d.wk(b, a.$n) : !1
     };
     this.rt = function(b) {
      b = b.originalEvent;
      return a.eo ? d.wk(b, a.eo) : !1
     }
    }
    a.prototype.wk = function(a, d) {
     var b = 0,
      f = 0;
     a || (a = window.event);
     if (a.changedTouches && 0 < a.changedTouches.length) b = a.changedTouches[0].pageX, f = a.changedTouches[0].pageY;
     else if (a.targetTouches &&
      0 < a.targetTouches.length) b = a.targetTouches[0].pageX, f = a.targetTouches[0].pageY;
     else if (a.pageX || a.pageY) b = a.pageX, f = a.pageY;
     else if (a.clientX || a.clientY) b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, f = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
     var e = $(this.an).offset(),
      g = this.mh ? this.mh() : 1,
      b = Math.round((b - e.left) / g),
      f = Math.round((f - e.top) / g);
     return d(b, f)
    };
    a.prototype.so = function(a) {
     a.preventManipulation ? a.preventManipulation() : a.preventDefault()
    };
    a.prototype.bd = function() {
     $(this.an).on(a.Mo, this.qu).on(a.ft, this.gt).on(a.bn, this.rs).on(a.qt, this.rt)
    };
    a.prototype.hd = function() {
     $(this.an).off(a.Mo, this.qu).off(a.ft, this.gt).off(a.bn, this.rs).off(a.qt, this.rt)
    };
    a.xk = window.navigator.msPointerEnabled;
    a.hF = "undefined" !== typeof Modernizr && Modernizr.touch;
    a.Mo = a.xk ? "MSPointerDown" : "touchstart mousedown";
    a.ft = a.xk ? "MSPointerMove" : "touchmove mousemove";
    a.bn = a.xk ? "MSPointerUp" : "touchend mouseup";
    a.qt = a.xk ? "MSPointerOut" : "mouseout";
    return a
   }(),
   Va = function(a,
    c) {
    a.jb = function() {
     var a = c.be / c.pb;
     1 !== a && (this.MA(), this.zoom = a, this.Qu());
     c.Hk && (this.jx = c.be / c.Hk)
    };
    a.Fs = Ia(1);
    return a
   }(function() {
    return new function() {
     this.Zo = null;
     this.zoom = 1;
     this.transformOrigin = "top left";
     this.MA = function() {
      this.Zo = $("#c")
     };
     this.Qu = function(a) {
      a = a || {};
      var c = "scale(" + this.zoom + ")",
       d = ["ms", "o", "webkit", "moz"],
       b = this.transformOrigin,
       f, e, g;
      1 === this.zoom && (c = b = "");
      f = 0;
      for (e = d.length; f < e; f++) g = "-" + d[f] + "-transform", a[g] = c, a[g + "-origin"] = b;
      this.Zo.css(a)
     };
     this.$x = function() {
      return this.jx ||
       this.zoom || 1
     };
     this.Fs = function() {
      return this.zoom || 1
     };
     this.hz = this.iz = 0;
     this.resize = function(a) {
      var c = $(window),
       d = c.width(),
       c = c.height(),
       b = this.iz,
       f = this.hz;
      a || (this.zoom = Math.min(d / b, c / f));
      a = Math.round((d - b * this.zoom) / 2);
      d = Math.round((c - f * this.zoom) / 2);
      this.Qu({
       "margin-top": d,
       "margin-left": a
      })
     }
    }
   }(), H),
   na = function(a, c, d, b, f) {
    var e = {
     Ui: !1,
     ve: !0,
     kf: !0,
     Od: null,
     O: function(a) {
      this.ve && !f.xj(a) && f.play(a)
     },
     Tz: function(a) {
      this.ve && f.xj(a) && f.pause(a)
     },
     tA: function(a) {
      this.ve && f.Dy(a) && f.play(a)
     },
     vt: function(a) {
      var b =
       this;
      this.ve && !f.xj(a) && f.play(a, function() {
       !b.Ui && b.ve && b.vt(a)
      })
     },
     No: function(a) {
      f.stop(a)
     },
     Ph: function(a) {
      this.Od && this.Od !== a && this.vB(a);
      var b = this;
      this.kf && !f.xj(a) && (this.Od = a, f.hB(a, 70), f.play(a, function() {
       !b.Ui && b.kf && b.Ph(a)
      }))
     },
     Rz: function() {
      this.Ui = !0;
      this.Oh();
      this.Tz(b.Cd)
     },
     Oh: function() {
      this.Od && f.pause(this.Od)
     },
     sA: function() {
      this.Ui = !1;
      this.zo();
      this.tA(b.Cd)
     },
     zo: function() {
      this.Od && this.Ph(this.Od)
     },
     vB: function() {
      this.Od && f.stop(this.Od)
     },
     ik: function(b) {
      this.kf = b;
      a.ik(b);
      this.kf ?
       this.zo() : this.Oh()
     },
     kk: function(b) {
      this.ve = b;
      a.kk(b)
     }
    };
    c.Ih(function() {
     e.ve = a.qn();
     e.kf = a.nn()
    });
    return e
   }(ra, Aa, ka, w, fb),
   Wa = function(a, c, d) {
    var b = a.extend({
     init: function(a) {
      this.Se = b.ba.Jg;
      this.yd = [];
      this.children = [];
      this.no = this.Dc = this.nb = c.j;
      this.parent = a;
      this.Bh = c.j;
      this.ih = this.gn = this.Qg = this.frames = this.Wm = 0;
      this.Fc = 1 / 60;
      this.Oj = [this.Fc, this.Fc, this.Fc, this.Fc, this.Fc]
     },
     bd: function() {
      this.Se = b.ba.$o;
      d.ra(d.v.rp, this)
     },
     hd: function() {
      d.ra(d.v.sp, this)
     },
     hs: function() {
      this.Se = b.ba.Jg;
      this.nb !==
       c.j && this.xn();
      d.ra(d.v.hC, this);
      this.parent.kt(this.parent.Dc)
     },
     pause: function() {
      this.Se = b.ba.Kg;
      d.ra(d.v.tp, this);
      this.nb != c.j && (this.no = this.nb, this.xn())
     },
     Nu: function() {
      this.Se = b.ba.$o;
      this.Dc !== c.j && (this.Dc = c.j);
      d.ra(d.v.up, this);
      this.no !== c.j && this.lu(this.no)
     },
     update: function() {
      if (this.nb !== c.j)
       for (var a = this.Dm(), b = Math.min(3, Math.floor(this.ih)), d = 0; d < b; d++) a.update(0.016), this.ih -= 1
     },
     qA: function() {
      this.Bh = c.j
     },
     Zr: function(a) {
      this.Wm = this.Bh !== c.j ? (a - this.Bh) / 1E3 : 0;
      this.Bh = a;
      this.ih += this.ds(this.Wm) /
       0.016
     },
     ds: function(a) {
      return 0.016 > a ? 0.016 : 0.05 < a ? 0.05 : a
     },
     gx: function() {
      this.frames++;
      this.Qg += this.Wm;
      if (1 < this.Qg) {
       this.gn = this.frames / this.Qg;
       this.Qg = this.frames = 0;
       this.Oj.shift();
       this.Oj.push(this.ds(1 / this.gn));
       for (var a = this.Fc = 0, b = this.Oj.length; a < b; a++) this.Fc += this.Oj[a];
       this.Fc /= b
      }
     },
     Sw: function(a, b) {
      this.yd[b] = a
     },
     vx: function(a) {
      this.yd[a] = null
     },
     xn: function() {
      var a = this.yd[this.nb];
      a && (d.ra(d.v.vp, a), a.hide(), this.nb = c.j)
     },
     lu: function(a) {
      this.nb != c.j && this.xn();
      this.nb = a;
      a = this.yd[a];
      d.ra(d.v.wp,
       a);
      a.show()
     },
     Dm: function() {
      return this.yd[this.nb]
     },
     Ze: function(a) {
      return this.yd[a]
     },
     ce: function(a, b) {
      this.children[b] = a
     },
     ux: function(a) {
      this.children[a] = null;
      this.Dc === a && (this.Dc = c.j)
     },
     gs: function() {
      if (this.Dc !== c.j) {
       var a = this.children[this.Dc];
       a && a.hd();
       this.Dc = c.j
      }
     },
     Lw: function(a) {
      this.Dc !== c.j && this.gs();
      this.pause();
      this.Dc = a;
      this.children[a].bd()
     },
     kt: function() {
      this.Nu()
     },
     xD: function() {
      return this.children[this.Dc]
     },
     eb: function(a) {
      return this.children[a]
     },
     Gj: function(a, b) {
      return this.nb ===
       c.j ? !1 : this.yd[this.nb].Kj(a, b)
     },
     fg: function(a, b) {
      return this.nb === c.j ? !1 : this.yd[this.nb].Lj(a, b)
     },
     bt: function(a, b) {
      return this.nb === c.j ? !1 : this.yd[this.nb].io(a, b)
     },
     ct: Ia(!1),
     bh: function(a, b) {
      return this.nb === c.j ? !1 : this.yd[this.nb].lt(a, b)
     }
    });
    b.ba = {
     Jg: 0,
     $o: 1,
     Kg: 2
    };
    return b
   }(X, K, U),
   Cb = function(a, c, d, b, f, e, g, h, l) {
    return a.extend({
     init: function(a) {
      this.n(a);
      this.uk = !1;
      this.na = null;
      this.Iu = this.Wu = b.j;
      this.Uj = null;
      this.transitionDelay = 0.3;
      this.Uf = this.Vm = !1;
      g.subscribe(g.v.rp, $.proxy(this.mz, this));
      g.subscribe(g.v.sp, $.proxy(this.oz, this));
      g.subscribe(g.v.jv, $.proxy(this.nz, this));
      g.subscribe(g.v.tp, $.proxy(this.pz, this));
      g.subscribe(g.v.up, $.proxy(this.qz, this));
      g.subscribe(g.v.vp, $.proxy(this.rz, this));
      g.subscribe(g.v.wp, $.proxy(this.sz, this))
     },
     Iz: function(a) {
      if (!this.uk && null !== this.na && (this.na.Zr(a), this.Iu === b.j && this.na.update(), this.Vm && (this.Vm = !1, this.na.hs()), this.na.nb !== b.j)) {
       (a = this.na.Dm()) && a.B();
       this.na.gx();
       if (f.xs) {
        var c = this.na.gn.toFixed(0);
        0 < c && (a = h.context, a.font = "20px Arial",
         a.fillStyle = l.tk.Qi, a.fillText(c + " fps", 10, e.$a - 10))
       }
       f.Io && (a = h.context, a.font = "20px Arial", a.fillStyle = l.tk.Qi, a.fillText("9-3-2013", e.pb - a.measureText("9-3-2013").width - 10, e.$a - 10))
      }
     },
     Mw: function() {
      var a = e.XD || 1;
      this.pd || (this.pd = new c({
       element: h.element,
       ho: $.proxy(this.Gj, this),
       co: $.proxy(this.dz, this),
       $n: $.proxy(this.fg, this),
       eo: $.proxy(this.ez, this),
       mh: function() {
        return d.$x() * a
       }
      }));
      this.pd.bd()
     },
     sx: function() {
      this.pd && this.pd.hd()
     },
     bd: function() {
      function a() {
       b.Iz(Date.now());
       b.tu || c(a)
      }
      this.n();
      this.Mw();
      var b = this,
       c = window.requestAnimationFrame;
      this.tu = !1;
      a()
     },
     hd: function() {
      this.n();
      this.tu = !0;
      this.sx()
     },
     Xt: function(a) {
      this.na = a;
      this.na.iE = 1 / 60
     },
     ZD: Ea("na"),
     mz: function(a) {
      this.Xt(a)
     },
     nz: function() {
      this.na = null
     },
     pz: function() {
      this.na = null
     },
     qz: function(a) {
      this.Xt(a)
     },
     oz: function() {
      this.Vm = !0
     },
     sz: function() {
      if (this.Wu !== b.j && null != this.Uj) {
       this.na.Zr();
       this.Iu = this.na.Bh + this.transitionDelay;
       var a = this.na.Dm();
       a && a.B()
      }
     },
     rz: function(a) {
      this.Uj = a;
      this.Wu !== b.j && null != this.Uj && this.Uj.B()
     },
     oE: Ea("uk"),
     fF: function() {
      this.uk = !0
     },
     ME: function() {
      this.na && this.na.qA();
      this.uk = !1
     },
     Gj: function(a, b) {
      return this.na && this.na != this ? (this.Uf = !0, this.na.Gj(a, b)) : !1
     },
     dz: function(a, b) {
      return this.na && this.na != this ? (this.Uf && this.na.bt(a, b), this.na.ct(a, b)) : !1
     },
     fg: function(a, b) {
      if (this.na && this.na != this) {
       var c = this.na.fg(a, b);
       this.Uf = !1;
       return c
      }
      return !1
     },
     ez: function(a, b) {
      if (this.na && this.na != this && this.Uf) {
       var c = this.na.fg(a, b);
       this.Uf = !1;
       return c
      }
      return !1
     },
     bh: function(a, b) {
      return this.na && this.na !=
       this ? (this.na.fg(a, b), this.Uf = !1, this.na.bh(a, b)) : !1
     }
    })
   }(Wa, Ua, Va, K, ra, H, U, Y, aa),
   za = function(a, c, d, b, f, e, g, h) {
    return a.extend({
     init: function() {
      this.n()
     },
     mc: function(a, b, c, d) {
      var e = this.ze.length;
      this.ib(e, a, b, c, d);
      return e
     },
     Nw: function(a, b, c, d) {
      this.Oe(this.ze.length, a, b, c, d)
     },
     Oe: function(a, b, c, d, e) {
      this.Ti(a, b, c, d, e[0], h.j, e)
     },
     ib: function(a, b, c, d, e, f) {
      this.Ti(a, b, c, e - d + 1, d, e, f)
     },
     Ti: function(a, c, d, h, p, u, v) {
      u = new b;
      var B = [f.create(this, e.Ii, p, 0)];
      u.C(g.Eh(B, 0));
      for (var r = 1; r < h; r++) v ? p = v[r] : p++, B = [f.create(this,
       e.Ii, p, 0)], u.C(g.Eh(B, c)), r == h - 1 && d === b.ba.vb && u.C(g.Eh(B, c));
      d && (u.Bj = d);
      this.Kb(u, a)
     },
     KA: function(a, b, c) {
      this.qc(c).Es(d.zd).ma[b].Rc = a
     },
     jk: function(a, b) {
      this.Vt(e.yq, this, 0, 0, a, b)
     },
     Vt: function(a, b, c, e, g, h) {
      g = this.qc(h).Es(d.zd).ma[g];
      a = f.create(b, a, c, e);
      g.value.Ne.push(a)
     },
     Ud: function(a, b, c) {
      b = this.qc(b);
      a = [f.create(this, e.yl, 0, a)];
      c = g.Eh(a, c);
      b.C(c)
     },
     Fy: function(a) {
      this.yb.Ps(d.zd, a)
     }
    })
   }(ba, Sa, Ka, ma, Ja, va, pa, K),
   oa = function(a, c, d) {
    a = a.extend({
     init: function(a, c, e) {
      this.Qz = a;
      this.q = e || 0;
      this.path = [];
      if (0 < a)
       for (this.k = Array(a), e = 0; e < a; e++) this.k[e] = c || 0;
      this.b = new d(0, 0);
      this.a = 0;
      this.reverse = this.paused = !1;
      this.kb = 0
     },
     UA: function(a) {
      for (var c = 0, d = this.Qz; c < d; c++) this.k[c] = a
     },
     bu: function(a, c) {
      if ("R" === a[0]) {
       var e = parseInt(a.substr(2), 10),
        g = e / 2,
        h = 2 * Math.PI / g,
        l = 0;
       "C" !== a[1] && (h = -h);
       for (var n = 0; n < g; ++n) this.Nf(new d(c.x + e * Math.cos(l), c.y + e * Math.sin(l))), l += h
      } else
       for (this.Nf(c.copy()), "," === a[a.length - 1] && (a = a.substr(0, a.length - 1)), e = a.split(","), g = e.length, n = 0; n < g; n += 2) h = new d(c.x + parseFloat(e[n]),
        c.y + parseFloat(e[n + 1])), this.Nf(h)
     },
     Nf: function(a) {
      this.path.push(a)
     },
     start: function() {
      0 < this.path.length && (this.b.qa(this.path[0]), this.Qc = 1, this.Nm())
     },
     pause: function() {
      this.paused = !0
     },
     Nu: function() {
      this.paused = !1
     },
     WE: ja("q"),
     pE: function(a) {
      this.Qc = a;
      this.b.qa(this.path[a]);
      this.Nm()
     },
     Nm: function() {
      this.offset = d.Za(this.path[this.Qc], this.b);
      this.offset.normalize();
      this.offset.multiply(this.k[this.Qc])
     },
     UE: function(a, c) {
      this.k[c] = a
     },
     TE: ja("reverse"),
     update: function(a) {
      if (!this.paused) {
       if (0 < this.path.length) {
        var f =
         this.path[this.Qc],
         e = !1;
        if (this.b.jj(f)) e = !0;
        else {
         var g = a;
         0 !== this.kb && (g += this.kb, this.kb = 0);
         this.b.add(d.multiply(this.offset, g));
         c.ek(this.offset.x, f.x - this.b.x) && c.ek(this.offset.y, f.y - this.b.y) || (this.kb = d.Za(this.b, f).kd(), this.kb /= this.offset.kd(), this.b.qa(f), e = !0)
        }
        e && (this.reverse ? (this.Qc--, 0 > this.Qc && (this.Qc = this.path.length - 1)) : (this.Qc++, this.Qc >= this.path.length && (this.Qc = 0)), this.Nm())
       }
       0 !== this.q && (this.a += this.q * a)
      }
     }
    });
    a.hf = function(a, c, d, g) {
     c !== a && (c > a ? (a += d * g, a > c && (a = c)) : (a -= d *
      g, a < c && (a = c)));
     return a
    };
    a.od = function(a, c, d, g) {
     var h = !1;
     c !== a && (c > a ? (a += d * g, a > c && (a = c)) : (a -= d * g, a < c && (a = c)), c === a && (h = !0));
     return {
      value: a,
      rd: h
     }
    };
    a.vq = 100;
    return a
   }(X, ca, O),
   Ba = function(a, c, d, b, f, e, g, h) {
    a = a.extend({
     init: function() {
      this.n();
      this.Ms = !1
     },
     oe: function(a) {
      this.n(a);
      this.ca = new d(0, 0, this.width, this.height);
      this.to = new b(this.ca.x, this.ca.y, this.ca.width, this.ca.height);
      this.anchor = f.T;
      this.Du = this.ck = !1
     },
     QE: function() {
      var a = this.M.u[0],
       c = this.M.l[0];
      this.ca = new d(Math.round(a.x), Math.round(a.y),
       c.width, c.height);
      this.to = new b(this.ca.x, this.ca.y, this.ca.width, this.ca.height)
     },
     lf: function(a) {
      this.rotation = a.a || 0;
      var b = a.path;
      if (b) {
       var d = c.vq;
       "R" === b[0] && (d = Math.round(parseInt(b.substr(2), 10) / 2 + 1));
       a = new c(d, a.k, a.q);
       a.a = this.rotation;
       a.bu(b, new e(this.x, this.y));
       this.Do(a);
       a.start()
      }
     },
     Do: function(a) {
      this.Pa = a;
      this.Ha = 1E-4
     },
     update: function(a) {
      this.n(a);
      this.Du || (this.Ug(), this.Du = !0);
      this.Pa && (this.Pa.update(a), this.x = this.Pa.b.x, this.y = this.Pa.b.y, this.ck ? this.yA(this.Pa.a) : this.rotation =
       this.Pa.a)
     },
     yA: function(a) {
      this.ck || (this.ck = !0);
      this.rotation = a;
      var b = this.ca,
       c = new e(b.x, b.y),
       d = new e(b.x + b.N, b.y),
       f = new e(d.x, b.y + b.V),
       b = new e(b.x, f.y);
      a = g.ec(a);
      var h = this.width / 2 + this.Sd,
       v = this.height / 2 + this.mg;
      c.pa(a, h, v);
      d.pa(a, h, v);
      f.pa(a, h, v);
      c.pa(a, h, v);
      a = this.to;
      a.Bu = c.x;
      a.Cu = c.y;
      a.Gu = d.x;
      a.Hu = d.y;
      a.Xr = f.x;
      a.Yr = f.y;
      a.Or = b.x;
      a.Pr = b.y
     },
     Vf: function() {
      var a = h.context,
       b = this.ga,
       c = this.ha,
       d = this.ca,
       e = this.to;
      a.strokeStyle = "red";
      a.lineWidth = 2;
      this.ck ? (a.beginPath(), a.moveTo(b + e.Bu, c + e.Cu), a.lineTo(b +
       e.Gu, c + e.Hu), a.lineTo(b + e.Xr, c + e.Yr), a.lineTo(b + e.Or, c + e.Pr), a.stroke(), a.closePath()) : a.strokeRect(b + d.x, c + d.y, d.N, d.V)
     },
     oo: function(a, b) {
      var c = this.ca;
      return d.Db(a, b, this.ga + c.x, this.ha + c.y, c.N, c.V)
     },
     iA: function(a, b, c, e) {
      var f = this.ga + this.ca.x,
       g = this.ha + this.ca.y;
      return d.Sh(a, b, c, e, f, g, f + this.ca.N, g + this.ca.V)
     }
    });
    a.sh = function(a, b) {
     var c = a.ga + a.ca.x,
      e = a.ha + a.ca.y,
      f = b.ga + b.ca.x,
      g = b.ha + b.ca.y;
     return d.Sh(c, e, c + a.ca.N, e + a.ca.V, f, g, f + b.ca.N, g + b.ca.V)
    };
    return a
   }(za, oa, S, Sa, Q, O, ia, Y, aa),
   Db = function(a,
    c, d) {
    return c.extend({
     init: function(a, c, d) {
      this.n(a, c, d)
     },
     YA: function(b, c, e) {
      var g, h, l, n;
      h = a.Fi;
      if ("R" === b[0]) {
       g = "C" === b[1];
       b = parseInt(b.substr(2), 10);
       n = Math.round(3 * b / 2);
       var q = 2 * Math.PI / n,
        m = 0;
       b *= h;
       g || (q = -q);
       for (g = 0; g < n; g++) h = c + b * Math.cos(m), l = e + b * Math.sin(m), this.Nf(new d(h, l)), m += q
      } else
       for (this.Nf(new d(c, e)), "," === b[b.length - 1] && (b = b.substr(0, b.length - 1)), q = b.split(","), m = q.length, g = 0; g < m; g += 2) b = q[g], n = q[g + 1], this.Nf(new d(c + b * h, e + n * h))
     }
    })
   }(H, oa, O),
   Ca = function(a, c, d, b) {
    return a.extend({
     init: function() {
      this.n()
     },
     lf: function(a) {
      this.rotation = a.a || 0;
      var e = a.path,
       g = d.Fi;
      if (e) {
       var h = b.vq;
       "R" === e[0] && (h = Math.round(3 * parseInt(e.substr(2), 10) / 2 + 1));
       a = new c(h, a.k * g, a.q);
       a.a = this.rotation;
       a.YA(e, this.x, this.y);
       this.Do(a);
       a.start()
      }
     }
    })
   }(Ba, Db, H, oa),
   Eb = function(a, c, d, b, f, e, g, h) {
    return a.extend({
     init: function(a, f, q, m) {
      this.n();
      this.ou = this.a = 0;
      this.Fa = c.Qa();
      this.Ka = c.Qa();
      this.Aa = c.Qa();
      this.Ba = c.Qa();
      var p = e.j;
      1 === q ? p = g.Zk : 2 === q && (p = g.$k);
      this.sa(p);
      this.rotation = m;
      this.x = a;
      this.y = f;
      this.Tb();
      a = this.mc(0.04, h.ja.Wa,
       0, 4);
      this.qc(a).C(d.bz(this, b.Ii))
     },
     Tb: function() {
      this.Fa.x = this.x - this.width / 2;
      this.Ka.x = this.x + this.width / 2;
      this.Fa.y = this.Ka.y = this.y - 5;
      this.Aa.x = this.Fa.x;
      this.Ba.x = this.Ka.x;
      this.Aa.y = this.Ba.y = this.y + 5;
      this.a = f.ec(this.rotation);
      this.Fa.pa(this.a, this.x, this.y);
      this.Ka.pa(this.a, this.x, this.y);
      this.Aa.pa(this.a, this.x, this.y);
      this.Ba.pa(this.a, this.x, this.y)
     },
     update: function(a) {
      this.n(a);
      this.Pa && this.Tb()
     }
    })
   }(Ca, O, pa, va, ia, K, w, ma),
   Fb = function(a) {
    return a.extend({
     init: function() {
      this.n();
      this.Yo =
       this.qo = !1
     },
     B: function() {
      this.Yo ? (this.wc(), this.vc()) : this.n()
     }
    })
   }(Ba),
   hb = function(a, c, d, b, f) {
    return a.extend({
     init: function(a, c) {
      this.n(a);
      this.Fn = c;
      this.Ta = new b(c);
      this.width = f.pb;
      this.height = f.$a
     },
     rh: function(a) {
      var b = this.Fn,
       b = b.l[d.fb(0, b.l.length - 1)],
       f = new c(0, 0, 0, 0);
      this.Ta.Ua(this.Wb.length, b, f, 1);
      this.n(a);
      a.width = b.N * a.size;
      a.height = b.V * a.size
     },
     So: function(a, b) {
      this.Ta.Ae[b] = new c(a.b.x - a.width / 2, a.b.y - a.height / 2, a.width, a.height);
      this.Ta.Pf[b] = a.color.F;
      this.fs[b] = a.color
     },
     xo: function(a) {
      this.Ta.nA(a);
      this.n(a)
     },
     B: function() {
      this.wc();
      this.Ta.B();
      this.vc()
     }
    })
   }(function(a, c, d, b, f, e, g) {
    function h(a, b, c) {
     this.x = a;
     this.y = b;
     this.size = c
    }

    function l() {
     this.xe = new a(0, 0);
     this.b = new a(0, 0);
     this.dir = new a(0, 0);
     this.ai = this.Qh = 0;
     this.color = new c(0, 0, 0, 0);
     this.ge = new c(0, 0, 0, 0);
     this.height = this.width = this.a = this.js = this.sc = this.size = 0
    }
    return d.extend({
     init: function(b) {
      this.n();
      this.width = e.pb;
      this.height = e.$a;
      this.Po = b;
      this.Wb = [];
      this.active = !1;
      this.fh = this.duration = 0;
      this.Kd = new a(0, 0);
      this.Sj = new a(0, 0);
      this.Us = this.sc = this.nu = this.size = this.Dt = this.Qh = this.xu = this.ai = this.pu = this.speed = this.Em = this.a = 0;
      this.xc = new c(0, 0, 0, 0);
      this.we = new c(0, 0, 0, 0);
      this.pc = new c(0, 0, 0, 0);
      this.je = new c(0, 0, 0, 0);
      this.We = this.fj = 0;
      this.M = null;
      this.Ae = [];
      this.fs = [];
      this.Qd = 0;
      this.ab = null
     },
     Lr: function() {
      if (this.Wb.length == this.Po) return !1;
      var a = new l;
      this.rh(a);
      this.Wb.push(a);
      return !0
     },
     rh: function(d) {
      d.b.x = this.x + this.Sj.x * b.tb();
      d.b.y = this.y + this.Sj.y * b.tb();
      d.xe.qa(d.b);
      var e = g.ec(this.a + this.Em * b.tb()),
       e = new a(Math.cos(e),
        Math.sin(e));
      e.multiply(this.speed + this.pu * b.tb());
      d.dir = e;
      d.Qh = this.Qh + this.Dt * b.tb();
      d.ai = this.ai + this.xu * b.tb();
      d.sc = this.sc + this.Us * b.tb();
      var e = new c(this.xc.I + this.we.I * b.tb(), this.xc.L + this.we.L * b.tb(), this.xc.K + this.we.K * b.tb(), this.xc.F + this.we.F * b.tb()),
       f = new c(this.pc.I + this.je.I * b.tb(), this.pc.L + this.je.L * b.tb(), this.pc.K + this.je.K * b.tb(), this.pc.F + this.je.F * b.tb());
      d.color = e;
      d.ge.I = (f.I - e.I) / d.sc;
      d.ge.L = (f.L - e.L) / d.sc;
      d.ge.K = (f.K - e.K) / d.sc;
      d.ge.F = (f.F - e.F) / d.sc;
      d.size = this.size + this.nu *
       b.tb()
     },
     update: function(a) {
      this.n(a);
      if (this.ab && 0 === this.Wb.length && !this.active) this.ab(this);
      else {
       if (this.active && this.fj) {
        var b = 1 / this.fj;
        for (this.We += a; this.Wb.length < this.Po && this.We > b;) this.Lr(), this.We -= b;
        this.fh += a; - 1 !== this.duration && this.duration < this.fh && this.wB()
       }
       for (this.Qd = 0; this.Qd < this.Wb.length;) b = this.Wb[this.Qd], 0 < b.sc ? (this.Tu(b, a), b.color.I += b.ge.I * a, b.color.L += b.ge.L * a, b.color.K += b.ge.K * a, b.color.F += b.ge.F * a, b.sc -= a, this.So(b, this.Qd, a), this.Qd++) : this.xo(this.Qd)
      }
     },
     Tu: function(b,
      c) {
      var d, e;
      b.b.x || b.b.y ? (d = b.b.copy(), d.normalize()) : d = new a(0, 0);
      e = d.copy();
      d.multiply(b.Qh);
      var f = e.x;
      e.x = -e.y;
      e.y = f;
      e.multiply(b.ai);
      d = a.add(d, e);
      d.add(this.Kd);
      d.multiply(c);
      b.dir.add(d);
      d.qa(b.dir);
      d.multiply(c);
      b.b.add(d)
     },
     So: function(a) {
      this.Ae[this.Qd] = new h(a.b.x, a.b.y, a.size);
      this.fs[this.Qd] = a.color
     },
     xo: function(a) {
      this.Wb.splice(a, 1)
     },
     su: function(a) {
      this.Wb = [];
      for (var b = 0; b < a; b++) this.Lr();
      this.active = !0
     },
     wB: function() {
      this.active = !1;
      this.fh = this.duration;
      this.We = 0
     },
     KE: function() {
      this.We =
       this.fh = 0
     },
     B: function() {
      this.wc();
      if (0 !== this.color.F)
       for (var a = f.context, b = this.M.rc, c = 0, d = this.Qd; c < d; c++) {
        var e = this.Wb[c];
        a.drawImage(b, Math.round(e.x), Math.round(e.y))
       }
      this.vc()
     },
     lE: function() {
      return this.Wb.length === this.Po
     }
    })
   }(O, aa, ea, ca, Y, H, ia), S, ca, La, H),
   Gb = function(a, c, d, b) {
    return a.extend({
     init: function(a, b) {
      this.n(a, b);
      this.duration = 2;
      this.Kd.x = 0;
      this.Kd.y = 500;
      this.a = -90;
      this.Em = 50;
      this.speed = 150;
      this.pu = 70;
      this.Qh = 0;
      this.Dt = 1;
      this.ai = 0;
      this.xu = 1;
      this.Sj.x = 0;
      this.Sj.y = 0;
      this.sc = 2;
      this.Us =
       0;
      this.size = 1;
      this.nu = 0;
      this.fj = 100;
      this.xc.I = 1;
      this.xc.L = 1;
      this.xc.K = 1;
      this.xc.F = 1;
      this.we.I = 0;
      this.we.L = 0;
      this.we.K = 0;
      this.we.F = 0;
      this.pc.I = 1;
      this.pc.L = 1;
      this.pc.K = 1;
      this.pc.F = 1;
      this.je.I = 0;
      this.je.L = 0;
      this.je.K = 0;
      this.q = this.je.F = 0;
      this.wA = 600
     },
     rh: function(a) {
      this.n(a);
      var c = this.Fn.l[d.fb(3, 7)],
       g = new b(0, 0, 0, 0);
      this.Ta.Ua(this.Wb.length, c, g);
      a.width = c.N * this.size;
      a.height = c.V * this.size
     }
    })
   }(function(a, c, d, b) {
    return a.extend({
     init: function(a, b) {
      this.n(a, b);
      this.Ta.lg = [];
      this.Ta.dk = []
     },
     rh: function(a) {
      this.n(a);
      a.a = 0;
      a.js = c.ec(this.q + this.wA * d.tb());
      a = this.Wb.length;
      this.Ta.lg[a] = 0;
      this.Ta.dk[a] = new b(0, 0)
     },
     NE: function(a, b, c, d, l) {
      a.x -= d;
      a.y -= l;
      var n = a.x * c + a.y * b;
      a.x = a.x * b - a.y * c + d;
      a.y = n + l
     },
     So: function(a, b, c) {
      this.n(a, b, c);
      a.a += a.js * c;
      this.Ta.lg[b] = a.a;
      this.Ta.dk[b].qa(a.b)
     },
     xo: function(a) {
      this.Ta.lg.splice(a, 1);
      this.Ta.dk.splice(a, 1);
      this.n(a)
     }
    })
   }(hb, ia, ca, O), H, ca, S),
   Hb = function(a, c, d) {
    return a.extend({
     init: function(a, d) {
      this.n();
      this.sa(c.Yk);
      this.Ua(a);
      this.Jx = d;
      this.te = !1
     },
     Ho: function() {
      d.ra(d.v.Cp, this.Jx)
     }
    })
   }(Ba,
    w, U),
   Ib = function() {
    return function(a, c, d, b, f) {
     this.start = a;
     this.end = c;
     this.color = f
    }
   }(),
   Jb = function(a, c, d) {
    return a.extend({
     init: function() {
      this.vo = 1;
      this.Ca = []
     },
     Kr: function(a, c) {
      this.Ca.splice(c, 0, a)
     },
     Jr: function(a) {
      this.Ca.push(a)
     },
     log: function() {
      d.debug("Constraint System Log:");
      for (var a = 0, c = this.Ca.length; a < c; a++) {
       var e = this.Ca[a];
       d.debug("-- Point: " + e.wt());
       for (var g = 0, h = e.Vb.length; g < h; g++) {
        var l = e.Vb[g];
        d.debug("---- Constraint: " + l.Hc.wt() + " len: " + l.td)
       }
      }
     },
     mA: function(a) {
      this.Ca.splice(a,
       1)
     },
     update: function(a) {
      for (var c = this.Ca, d = c.length, g = this.vo, h = 0; h < d; h++) c[h].update(a);
      for (h = 0; h < g; h++)
       for (a = 0; a < d; a++) c[a].fk()
     }
    })
   }(X, O, ka),
   Xa = {
    qi: 0,
    Gi: 1,
    UC: 2
   },
   Ya = function(a, c) {
    var d = 9.8 * c.ew,
     b = {
      Dp: d,
      gd: new a(0, d),
      toggle: function() {
       b.gd.y = -b.gd.y
      },
      Nn: function() {
       return 0 === b.gd.y && 0 === b.gd.x
      },
      Os: function() {
       return b.gd.y === b.Dp && 0 === b.gd.x
      },
      reset: function() {
       b.gd.x = 0;
       b.gd.y = d
      }
     };
    return b
   }(O, K),
   Kb = function(a, c, d, b) {
    return a.extend({
     init: function() {
      this.ms = !1;
      this.ud(1);
      this.Pt()
     },
     ud: function(a) {
      this.SB =
       a;
      this.th = 1 / a;
      this.Kd = new d(0, c.Dp * a)
     },
     Pt: function() {
      var a = d.Qa;
      this.zc = a();
      this.F = a();
      this.b = a();
      this.uc = a();
      this.Vd = a()
     },
     gF: function(a, b) {
      var c = (a / b >> 0) + 1;
      0 != c && (a /= c);
      for (var d = 0; d < c; d++) this.update(a)
     },
     update: function(a) {
      this.Vd = d.Qa();
      this.ms || (b.Nn() ? this.Vd.add(this.Kd) : this.Vd.add(d.multiply(b.gd, this.SB)));
      a /= c.Ri;
      this.Vd.multiply(this.th);
      this.F = d.multiply(this.Vd, a);
      this.zc.add(this.F);
      this.uc = d.multiply(this.zc, a);
      this.b.add(this.uc)
     },
     Hm: function(a, b) {
      if (!a.Nn()) {
       var g = d.multiply(a, b /
        c.Ri);
       this.b.add(g)
      }
     }
    })
   }(X, K, O, Ya),
   ib = function(a, c, d, b, f) {
    function e(a, b, c) {
     this.Hc = a;
     this.td = b;
     this.type = c
    }
    return c.extend({
     init: function() {
      this.va = new d(b.If, b.If);
      this.Oc = new d(b.j, b.j);
      this.Vb = [];
      this.Vd = d.Qa();
      this.n()
     },
     Pt: function() {
      this.n();
      this.va.x = b.If;
      this.va.y = b.If;
      this.It()
     },
     It: function() {
      this.Vb = []
     },
     Pe: function(a, b, c) {
      this.Vb.push(new e(a, b, c))
     },
     JE: function(a) {
      for (var b = this.Vb, c = b.length, d = 0; d < c; d++)
       if (b[d].Hc === a) {
        b.splice(d, 1);
        break
       }
     },
     jA: function(a) {
      this.Vb.splice(a, 1)
     },
     FD: function(a,
      b) {
      for (var c = this.Vb, d = c.length, e = 0; e < d; e++) {
       var f = c[e];
       if (f.Hc === a) {
        f.Hc = b;
        break
       }
      }
     },
     ny: function(a) {
      for (var b = this.Vb, c = b.length, d = 0; d < c; d++)
       if (b[d].Hc === a) return !0;
      return !1
     },
     Xi: function(a, b) {
      for (var c = this.Vb, d = c.length, e = 0; e < d; e++) {
       var f = c[e];
       if (f.Hc === a) {
        f.td = b;
        break
       }
      }
     },
     bs: function(a, b, c) {
      for (var d = this.Vb, e = d.length, f = 0; f < e; f++) {
       var p = d[f];
       if (p.Hc === a) {
        p.Hc = b;
        p.td = c;
        break
       }
      }
     },
     td: function(a) {
      for (var c = this.Vb, d = c.length, e = 0; e < d; e++) {
       var f = c[e];
       if (f.Hc === a) return f.td
      }
      return b.j
     },
     update: function(a) {
      var c =
       this.Vd,
       d = f.gd;
      this.ms ? (c.x = 0, c.y = 0) : 0 !== d.y || 0 !== d.x ? (c.x = d.x, c.y = d.y) : (c.x = this.Kd.x * this.th, c.y = this.Kd.y * this.th);
      c = a / b.Ri * a / b.Ri;
      this.F.x = this.Vd.x * c;
      this.F.y = this.Vd.y * c;
      this.va.x === b.If && (this.va.x = this.b.x, this.va.y = this.b.y);
      this.uc.x = this.b.x - this.va.x + this.F.x;
      this.uc.y = this.b.y - this.va.y + this.F.y;
      0 < a && (a = 1 / a, this.zc.x = this.uc.x * a, this.zc.y = this.uc.y * a);
      this.va.x = this.b.x;
      this.va.y = this.b.y;
      this.b.x += this.uc.x;
      this.b.y += this.uc.y
     },
     fk: function() {
      var a = this.Oc,
       b = this.b,
       c = this.th,
       d, e, f, p;
      if (-1 !== a.x) b.x = a.x, b.y = a.y;
      else
       for (var a = this.Vb, u = a.length, v = 0; v < u; v++) {
        var B = a[v],
         r = B.Hc,
         x = r.b;
        d = x.x - b.x;
        e = x.y - b.y;
        0 === d && 0 === e && (e = d = 1);
        var k = Math.sqrt(d * d + e * e),
         D = B.td,
         B = B.type;
        if (1 === B) {
         if (k <= D) continue
        } else if (2 === B && k >= D) continue;
        B = -1 === r.Oc.x;
        r = r.th;
        k = (k - D) / ((1 < k ? k : 1) * (c + r));
        B && (f = d, p = e);
        D = c * k;
        d *= D;
        e *= D;
        b.x += d;
        b.y += e;
        B && (d = r * k, x.x -= f * d, x.y -= p * d)
       }
     },
     IE: function(a) {
      this.update(a)
     },
     wt: function() {
      return this.b.x.toFixed(2) + ", " + this.b.y.toFixed(2)
     }
    })
   }(Xa, Kb, O, K, Ya),
   jb = function(a, c, d, b, f, e, g, h,
    l) {
    var n = new h(0, 0, 0, 1),
     q = new h(0, 0, 0, 1),
     m = new h(0, 0, 0, 1),
     p = new h(0, 0, 0, 1),
     u = new h(0, 0, 0, 1);
    a = a.extend({
     init: function(a, g, h, l, k, m, p) {
      this.n();
      this.wo = 0;
      this.vo = 30;
      this.lineWidth = d.xp;
      this.width = d.yp;
      this.zb = b.j;
      this.fe = 0;
      this.highlighted = !1;
      this.La = d.La;
      this.Ya = null != a ? a : new c;
      null != l ? this.gb = l : (this.gb = new c, this.gb.ud(1));
      this.Ya.ud(0.02);
      this.Ya.b.x = g;
      this.Ya.b.y = h;
      this.gb.b.x = k;
      this.gb.b.y = m;
      this.Jr(this.Ya);
      this.Jr(this.gb);
      this.gb.Pe(this.Ya, this.La, f.qi);
      a = e.Za(this.gb.b, this.Ya.b);
      g = Math.round(p /
       this.La + 2);
      a.Xm(g);
      this.Tt(p, a);
      this.Xf = !1;
      this.pe = b.j;
      this.Ax = this.Js = this.Yg = !1;
      this.aj = [];
      this.li = d.li
     },
     kd: function() {
      var a = 0,
       b = this.Ca,
       c = b.length;
      if (0 < c)
       for (var d = b[0].b, k = 1; k < c; k++) var e = b[k],
        a = a + d.Ma(e.b),
        d = e.b;
      return a
     },
     Tt: function(a, b) {
      null == b && (b = e.Qa());
      for (var d = this.Ca, g = d[d.length - 2], k = this.gb, h = k.td(g), l = null; 0 < a;) a >= this.La ? (g = d[d.length - 2], l = new c, l.ud(0.02), l.b = e.add(g.b, b), this.Kr(l, this.Ca.length - 1), k.bs(g, l, h), l.Pe(g, this.La, f.qi), a -= this.La) : (l = a + h, l > this.La ? (a = this.La, h = l - this.La) :
       (g = d[d.length - 2], k.Xi(g, l), a = 0))
     },
     uA: function(a) {
      for (var b = this.Ca, c = b.length, d = this.gb, k = d.td(b[c - 2]), e; 0 < a;)
       if (a >= this.La) {
        var g = c - 2,
         h = b[c - 3];
        e = b[g];
        d.bs(e, h, k);
        this.mA(g);
        c--;
        a -= this.La
       } else g = k - a, 1 > g ? (a = this.La, k = this.La + g + 1) : (e = b[c - 2], d.Xi(e, g), a = 0);
      b = (c - 1) * (this.La + 3);
      d = d.Vb;
      c = d.length;
      for (k = 0; k < c; k++) e = d[k], e.type === f.Gi && (e.td = b);
      return a
     },
     bF: function() {
      for (var a = this.Ca, c = a.length, d = 0; d < c; d++) {
       var e = a[d];
       this.Ya.Oc.x != b.j && (e != this.gb && e.ud(0.5), 0 < d && e.Pe(this.Ya, d * (this.La + 3), f.Gi))
      }
     },
     update: function(a) {
      0 <
       this.fe && (this.fe = l.hf(this.fe, 0, 1, a), 1.95 > this.fe && this.Xf && this.Jt(this.zb));
      var b = this.Ca,
       c = b.length,
       d = this.vo,
       k = this.gb,
       e, f;
      for (e = 0; e < c; e++) f = b[e], f !== k && f.update(a);
      for (e = 0; e < d; e++)
       for (a = 0; a < c; a++) b[a].fk()
     },
     Jt: function(a) {
      this.Xf = !1;
      var b = this.Ca,
       d = b[a],
       e = b[a + 1];
      if (e)
       for (var k = e.Vb, g = k.length, h = 0; h < g; h++) {
        if (k[h].Hc === d) {
         e.jA(h);
         k = new c;
         k.ud(1E-5);
         k.b.qa(e.b);
         k.va.qa(e.va);
         this.Kr(k, a + 1);
         k.Pe(d, this.La, f.qi);
         break
        }
       } else d.It();
      a = 0;
      for (d = b.length; a < d; a++) e = b[a], e != this.gb && e.ud(1E-5)
     },
     Co: function(a) {
      this.zb =
       a;
      this.fe = 2;
      this.Xf = !0;
      this.highlighted = !1
     },
     B: function() {
      var a = this.Ca,
       c = a.length,
       d = g.context,
       e, k, f;
      d.lineJoin = "round";
      d.lineWidth = this.lineWidth;
      if (this.zb === b.j) {
       k = Array(c);
       for (e = 0; e < c; e++) k[e] = a[e].b;
       this.Ym(k)
      } else {
       var h = [],
        l = [],
        m = !1;
       for (e = 0; e < c; e++) {
        k = a[e];
        var p = !0;
        0 < e && (f = a[e - 1], k.ny(f) || (p = !1));
        k.Oc.x !== b.j || p || (m = !0);
        m ? l.push(k.b) : h[e] = k.b
       }
       0 < h.length && this.Ym(h);
       0 < l.length && !this.Js && this.Ym(l)
      }
      d.lineWidth = 1
     },
     Ym: function(a) {
      var c = a.length,
       d = this.li,
       f = this.aj;
      if (!(2 > c)) {
       var k = this.zb === b.j ||
        this.Xf ? 1 : this.fe / 1.95;
       if (!(0 >= k)) {
        var l = a[0],
         C = a[1],
         I = l.x - C.x,
         C = l.y - C.y,
         I = Math.sqrt(I * I + C * C);
        this.wo = I <= this.La + 0.3 ? 0 : I <= this.La + 1 ? 1 : I < this.La + 4 ? 2 : 3;
        if (!(3 > c)) {
         n.I = 0;
         n.L = 0;
         n.K = 0;
         n.F = k;
         q.I = 0.475;
         q.L = 0.305;
         q.K = 0.185;
         q.F = k;
         m.I = 0.19;
         m.L = 0.122;
         m.K = 0.074;
         m.F = k;
         p.I = 152 / 225;
         p.L = 0.44;
         p.K = 62 / 225;
         p.F = k;
         u.I = 0.304;
         u.L = 0.198;
         u.K = 0.124;
         u.F = k;
         this.highlighted && (q.I *= 3, q.L *= 3, q.K *= 3, p.I *= 3, p.L *= 3, p.K *= 3, m.I *= 3, m.L *= 3, m.K *= 3, u.I *= 3, u.L *= 3, u.K *= 3);
         I > this.La + 7 && !this.Ax && (I = 2 * (I / this.La), m.I *= I, u.I *= I);
         var I = !1,
          c = (c -
           1) * d,
          z = c - 1,
          d = (q.I - m.I) / z,
          C = (q.L - m.L) / z,
          E = (q.K - m.K) / z,
          J = (p.I - u.I) / z,
          wa = (p.L - u.L) / z,
          z = (p.K - u.K) / z,
          Z = this.li - 1,
          G = Z - 1,
          L = g.context,
          A = L.globalAlpha;
         A !== k && (L.globalAlpha = k);
         var s = f[0];
         s ? (s.x = l.x, s.y = l.y) : f[0] = l.copy();
         for (var w, l = 1; l <= c; l++)
          if (s = l / c, (w = f[l]) || (w = f[l] = new e(0, 0)), e.Wt(a, s, w), s = (l - 1) % Z, s === G || l === c) {
           L.beginPath();
           w = this.Xf ? h.tk.Qi : I ? m.Xh() : u.Xh();
           L.strokeStyle = w;
           w = l - s - 1;
           var W = f[w++];
           for (L.moveTo(W.x, W.y); w <= l; w++) W = f[w], L.lineTo(W.x, W.y);
           L.stroke();
           I = !I;
           s += 1;
           m.I += d * s;
           m.L += C * s;
           m.K += E * s;
           u.I +=
            J * s;
           u.L += wa * s;
           u.K += z * s
          }
         A !== k && (L.globalAlpha = A)
        }
       }
      }
     }
    });
    a.dv = 30;
    return a
   }(Jb, ib, H, K, Xa, O, Y, aa, oa, ka),
   Pa = function(a) {
    return {
     Ws: null,
     Pd: 0,
     ef: 0,
     eF: !1,
     Ry: function(c, d) {
      this.Pd = c - 1;
      this.ef = d - 1;
      this.Ws = a.Tg[this.Pd].Dh[this.ef]
     }
    }
   }(V),
   kb = function(a, c, d) {
    return a.extend({
     init: function() {
      this.n()
     },
     oe: function(a) {
      this.n(a);
      this.wd = [];
      this.u = [];
      this.align = d.T
     },
     fB: function(a, c, d) {
      this.wd[0] = a;
      this.wd[1] = c;
      this.wd[2] = d;
      a = this.M.l[a].V;
      c = this.M.l[c].V;
      d = this.M.l[d].V;
      this.height = a >= c && a >= d ? a : c >= a && c >= d ? c : d;
      this.u[0] =
       Math.floor((this.height - a) / 2);
      this.u[1] = Math.floor((this.height - c) / 2);
      this.u[2] = Math.floor((this.height - d) / 2)
     },
     B: function() {
      this.wc();
      var a = this.M.l[this.wd[0]],
       d = this.M.l[this.wd[1]],
       e = this.M.l[this.wd[2]],
       g = this.width - (Math.floor(a.N) + Math.floor(e.N)),
       h = c.context,
       l = Math.round(this.ga),
       n = Math.round(this.ha),
       q = Math.ceil(a.N),
       m = Math.ceil(a.V),
       p = Math.ceil(e.N),
       u = Math.ceil(e.V);
      0 <= g ? (h.drawImage(this.M.rc, a.x, a.y, q, m, l, n + this.u[0], q, m), this.Gx(this.wd[1], l + q, n + this.u[1], g, d.V), h.drawImage(this.M.rc,
       e.x, e.y, p, u, l + q + g, n + this.u[2], p, u)) : (a = a.copy(), d = e.copy(), a.N = Math.min(a.N, this.width / 2), d.N = Math.min(d.N, this.width - a.N), d.x += e.N - d.N, h.drawImage(this.M.rc, a.x, a.y, a.N, a.V, l, n + this.u[0], a.N, a.V), h.drawImage(this.M.rc, d.x, d.y, d.N, d.V, l + a.N, n + this.u[2], d.N, d.V));
      this.vc()
     },
     dy: function() {
      var a = c.element;
      c.Zh(document.createElement("canvas"));
      var d = c.element,
       e = Math.ceil(this.width),
       g = Math.ceil(this.height);
      d.width = e;
      d.height = g;
      this.B();
      var d = d.toDataURL("image/png"),
       h = new Image;
      h.src = d;
      $(h).width(e).height(g);
      a && c.Zh(a);
      return h
     }
    })
   }(ba, Y, Q),
   Lb = function(a, c, d, b, f) {
    return a.extend({
     init: function(a) {
      this.n();
      var g = new c;
      g.sa(b.He);
      g.fB(0, 2, 1);
      g.width = a + d.Ok;
      a = g.dy();
      this.oe(new f(a))
     }
    })
   }(ba, kb, H, w, Ta),
   Mb = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v, B, r, x, k) {
    return a.extend({
     init: function() {
      this.n();
      this.ta = null;
      this.d = this.xh = this.Mc = this.ky = this.t = !1;
      this.yg = h.j;
      this.zj = e.Qa();
      this.f = 0;
      this.h = !1;
      this.g = 0;
      this.me = this.$e = this.Bb = null;
      this.Ej = this.Fj = this.jf = 0;
      this.pg = this.Jc = !1;
      this.c = null;
      this.sf = 0;
      this.Rs = this.Vo =
       this.lk = !1;
      this.df = 0;
      this.nh = this.Aj = !1;
      this.e = this.Rh = 0
     },
     fy: function(a, b, k) {
      a = e.Za(a, k);
      b = e.Za(b, k).gg() - a.gg();
      return c.tg(b)
     },
     my: function(a, b) {
      this.zj.x = a;
      this.zj.y = b
     },
     ly: function(a) {
      b.O(f.hm);
      var c = new e(this.x, this.y),
       c = this.fy(this.zj, a, c);
      180 < c ? c -= 360 : -180 > c && (c += 360);
      this.ic.rotation += c;
      this.xg.rotation += c;
      this.wg.rotation += c;
      c = 0 < c ? Math.min(Math.max(1, c), l.vi) : Math.max(Math.min(-1, c), -l.vi);
      this.ta && (0 < c ? this.ta.kd() < l.Pk && this.ta.Tt(c) : 0 !== c && 3 < this.ta.Ca.length && this.ta.uA(-c), this.Vo = !0);
      this.zj.qa(a)
     },
     update: function(a) {
      this.n(a);
      if (this.Rs && this.ta) {
       var b = this.ta.Ya;
       b.b.x = this.x;
       b.b.y = this.y;
       b.Oc.qa(b.b);
       this.Aj ? (b = g.od(this.df, 200, 30, a), this.df = b.value, b.rd && (this.Aj = !1)) : (b = g.od(this.df, 130, 30, a), this.df = b.value, b.rd && (this.Aj = !0));
       this.Pa.UA(this.df)
      }
      this.nh && (this.Rh -= 1.5 * a, 0 >= this.Rh && (this.e = h.j, this.nh = !1));
      if (this.wb) {
       var b = e.Za(this.Pa.path[this.Pa.Qc], this.Pa.b),
        c = 0;
       15 < Math.abs(b.x) && (c = 0 < b.x ? 10 : -10);
       this.wb.rotation = g.hf(this.wb.rotation, c, 60, a)
      }
      this.d && this.Vo && this.ta &&
       (a = 0.7 * this.ta.kd(), this.ic.Y = 0 === a ? this.ic.fa = 0 : this.ic.fa = Math.max(0, Math.min(1.2, 1 - a / l.Qk)))
     },
     QB: function(a) {
      this.Jc && this.lk && (this.lk = !1, this.pg = !0, b.O(f.dm), this.c.S(0));
      if (this.Jc && this.pg) {
       0 !== this.c.Tf && (this.sf += a * l.mm);
       var k = 0;
       a = !1;
       if (this.ta)
        for (var d = this.ta.aj, g = l.La, m = 0, p = d.length; m < p; m++) {
         var n = d[m],
          q = d[m + 1],
          v = Math.max(2 * g / 3, n.Ma(q));
         if (this.sf >= k && (this.sf < k + v || m > p - 3)) {
          k = this.sf - k;
          q = e.Za(q, n);
          q.multiply(k / v);
          this.c.x = n.x + q.x;
          this.c.y = n.y + q.y;
          m > p - 3 && (a = !0);
          0 !== this.c.Tf && (this.c.rotation =
           c.tg(q.gg()) + 270);
          break
         } else k += v
        }
       a && (this.sf = h.j)
      }
     },
     Bx: function() {
      if (!this.Mc && !this.t) {
       if (this.Nd && this.xh && this.ta) {
        var a = this.ta.Ya.b;
        this.x = a.x;
        this.y = a.y
       }
       this.wc();
       0 < this.f ? this.Bb.B() : this.back.B();
       if (this.e !== h.j || this.nh) a = new v(0.2, 0.5, 0.9, this.Rh), this.os(this.x, this.y, this.e !== h.j ? this.e : this.zt, a)
      }
     },
     os: function(a, b, c, k) {
      if (!(0 > c)) {
       var d = u.context,
        e = 2 * Math.PI,
        f = Math.max(16, Math.round(c / (2 * l.Gb)));
       0 !== f % 2 && f++;
       d.lineWidth = 2;
       d.strokeStyle = k.Xh();
       k = e / f;
       for (var g = 0; g < f; g++)
        if (0 === g % 2) {
         var h =
          g / f * e;
         d.beginPath();
         d.arc(a, b, c, h, h + k, !1);
         d.stroke();
         d.closePath()
        }
      }
     },
     Vf: function() {
      this.d && this.os(this.x, this.y, l.Yc, v.red)
     },
     B: function() {
      if (!this.Mc) {
       var a = this.ta;
       this.d && (this.wg.visible = this.yg !== h.j, this.xg.visible = this.yg === h.j, this.ii.B());
       this.t && (this.eE.B(), this.ky || this.dE.B());
       a && a.B();
       0 >= this.f ? this.jd.B() : this.jf != h.j ? this.$e.B() : this.me.B();
       this.d && this.ic.B();
       this.vc()
      }
     },
     Fx: function() {
      this.c.B()
     },
     OD: function() {
      this.fE.B()
     },
     du: function(a) {
      this.ta = a;
      this.zt = this.e;
      this.e = h.j;
      this.Jc &&
       (this.lk = !0)
     },
     SE: function() {
      this.Aj = this.Rs = !0;
      this.df = 130;
      var a = new g(100, this.df, 0);
      a.bu("RC30", new e(this.x, this.y));
      this.Do(a);
      a.start()
     },
     ZA: function(a) {
      this.zt = this.e;
      this.e = a;
      a === h.j || a === h.ev ? (a = r.fb(f.bl, f.cl), this.back = p.create(a, 0), this.back.ya(), this.back.anchor = this.back.oa = m.T, this.jd = p.create(a, 1), this.jd.anchor = this.jd.oa = m.T, this.U(this.back), this.U(this.jd), this.back.visible = !1, this.jd.visible = !1) : (this.back = p.create(f.Ai, 0), this.back.ya(), this.back.anchor = this.back.oa = m.T, this.jd =
       p.create(f.Ai, 1), this.jd.anchor = this.jd.oa = m.T, this.U(this.back), this.U(this.jd), this.back.visible = !1, this.jd.visible = !1, this.Rh = l.Mp, this.nh = !1);
      this.d && (this.ii = p.create(f.Gf, 0), this.ii.anchor = this.ii.oa = m.T, this.U(this.ii), this.ii.visible = !1, this.ic = p.create(f.Gf, 1), this.ic.te = !1, this.wg = p.create(f.Gf, 2), this.wg.anchor = this.wg.oa = m.T, this.ic.U(this.wg), this.xg = p.create(f.Gf, 3), this.xg.anchor = this.xg.oa = this.ic.anchor = this.ic.oa = m.T, this.ic.U(this.xg), this.U(this.ic), this.Vo = this.ic.visible = !1)
     },
     TA: function(a, b, c) {
      this.f = a;
      this.h = b;
      this.g = c;
      0 < this.f && (this.Bb = new k(a), this.Bb.Sd = -Math.round(this.Bb.width / 2) + l.ti, this.Bb.x = -l.ti, this.$e = p.create(f.He, 3), this.$e.visible = !1, this.$e.anchor = this.$e.oa = m.T, this.U(this.$e), this.me = p.create(f.He, 4), this.me.visible = !1, this.me.anchor = this.me.oa = m.T, this.U(this.me), this.me.U(this.Bb), this.h ? (this.Bb.rotation = 90, this.Bb.y = -this.g, this.Fj = this.y - this.g, this.Ej = this.y + (this.f - this.g), this.me.rotation = 90, this.$e.rotation = 90) : (this.Fj = this.x - this.g, this.Ej =
       this.x + (this.f - this.g), this.Bb.x += -this.g), this.Bb.anchor = m.Mf | m.mb, this.Bb.x += this.x, this.Bb.y += this.y, this.Bb.visible = !1);
      this.jf = h.j
     },
     GA: function() {
      this.wb = p.create(f.Fg, 1);
      this.wb.ya();
      this.wb.oa = m.T;
      var a = new q;
      a.sa(f.Fg);
      a.oa = a.anchor = m.Jb | m.mb;
      a.ya();
      a.mc(0.03, B.ja.zq, 2, 4);
      a.S(0);
      a.Fy(r.fb(0, 2));
      this.wb.U(a);
      a = this.wb.M.u[0];
      this.wb.x = -a.x;
      this.wb.y = -a.y;
      this.wb.Sd = a.x - this.wb.width / 2;
      this.wb.mg = a.y - this.wb.width / 2;
      this.wb.Y = this.wb.fa = 1 / 1.3;
      this.U(this.wb)
     },
     dB: function(a) {
      this.Jc = a;
      this.pg =
       this.lk = !1;
      this.c = new q;
      this.c.sa(f.Ig);
      this.c.ya();
      this.c.anchor = m.T;
      this.c.x = this.x;
      this.c.y = this.y;
      this.c.visible = !1;
      this.c.ib(0, 0.05, B.ja.Wa, 0, 6);
      this.c.KA(0.4, 5, 0);
      this.c.ib(1, 0.1, B.ja.vb, 7, 10);
      this.c.Ud(1, 0, 0.05);
      this.U(this.c)
     },
     ks: function() {
      this.ta = null
     }
    })
   }(Ca, ia, jb, na, w, O, oa, K, H, Pa, za, Q, ba, Y, aa, ma, ca, kb, Lb),
   Nb = function(a, c, d) {
    return a.extend({
     init: function() {
      this.n();
      this.a = 0;
      this.Fa = c.Qa();
      this.Ka = c.Qa();
      this.touch = this.ei = 0
     },
     Tb: function() {
      var a = this.ca.N / 2;
      this.Fa.x = this.x - a;
      this.Ka.x =
       this.x + a;
      this.Fa.y = this.Ka.y = this.y;
      this.a = d.ec(this.rotation);
      this.Fa.pa(this.a, this.x, this.y);
      this.Ka.pa(this.a, this.x, this.y)
     }
    })
   }(Ba, O, ia),
   Ob = function(a, c, d, b, f) {
    return a.extend({
     init: function(a, b, d) {
      this.n(a, b);
      this.a = d;
      this.Em = 10;
      this.speed = c.Gl;
      this.sc = 0.6;
      this.size = c.Fl;
      this.fj = 100;
      this.xc.I = 1;
      this.xc.L = 1;
      this.xc.K = 1;
      this.xc.F = 0.6;
      this.pc.I = 1;
      this.pc.L = 1;
      this.pc.K = 1;
      this.pc.F = 0
     },
     rh: function(a) {
      this.n(a);
      var c = this.Fn.l[f.fb(6, 8)],
       d = new b(0, 0, 0, 0);
      this.Ta.Ua(this.Wb.length, c, d, 1);
      c = this.size;
      a.width = c;
      a.height = c
     },
     Tu: function(a, b) {
      a.dir.multiply(0.9);
      var c = d.multiply(a.dir, b);
      c.add(this.Kd);
      a.b.add(c)
     }
    })
   }(hb, H, O, S, ca),
   Pb = function(a, c, d, b, f, e, g, h, l) {
    var n = a.extend({
     init: function() {
      this.n();
      this.a = this.group = 0;
      this.Fa = new g(0, 0);
      this.Ka = new g(0, 0);
      this.Aa = new g(0, 0);
      this.Ba = new g(0, 0);
      this.pj = 0
     },
     Zg: function() {
      this.Pb = new c;
      this.Pb.sa(d.Hf);
      this.Pb.anchor = b.Bf | b.Ub;
      this.Pb.oa = b.Jb | b.Ub;
      this.Pb.y = e.jm;
      this.Pb.x = 0;
      this.Pb.Oe(0, 0.05, f.ja.Wa, 4, [n.Kf.Ei, n.Kf.Ei + 1, n.Kf.Ei + 2, n.Kf.Ei + 2]);
      this.Pb.ya();
      this.Pb.visible = !1;
      this.U(this.Pb)
     },
     Tb: function() {
      this.Fa.x = this.x - e.Pi / 2;
      this.Ka.x = this.x + e.Pi / 2;
      this.Fa.y = this.Ka.y = this.y;
      this.Aa.x = this.Fa.x;
      this.Ba.x = this.Ka.x;
      this.Aa.y = this.Ba.y = this.y + e.km;
      this.a = l.ec(this.rotation);
      this.Fa.pa(this.a, this.x, this.y);
      this.Ka.pa(this.a, this.x, this.y);
      this.Aa.pa(this.a, this.x, this.y);
      this.Ba.pa(this.a, this.x, this.y)
     },
     B: function() {
      var a = this.Pb.yb;
      a && a.state === f.ba.Og && (this.Pb.visible = !1);
      this.n()
     },
     Vf: da(),
     update: function(a) {
      this.n(a);
      this.Pa && this.Tb()
     }
    });
    n.Kf = {
     sv: 0,
     tv: 1,
     Ei: 2,
     OC: 3,
     NC: 4
    };
    n.ba = {
     hw: 0,
     Cw: 1,
     IDLE: 2
    };
    n.mv = 0.8;
    return n
   }(Ca, za, w, Q, ma, H, O, oa, ia, Y),
   lb = function(a, c, d, b, f) {
    var e = a.extend({
     init: function(a) {
      this.n();
      this.Mm = a;
      this.state = e.ba.Dd;
      this.Eu = this.Ro = this.Fu = this.Qo = 0;
      this.Cb = null;
      this.Yf = new d(b.j, b.j, b.j, b.j)
     },
     rj: function(a, b) {
      a.oa = b.oa = f.Jb | f.mb;
      this.ce(a, e.ba.Dd);
      this.ce(b, e.ba.Ee);
      this.Yh(e.ba.Dd)
     },
     kE: function(a, b) {
      var d = new c;
      d.oe(a);
      var e = new c;
      e.oe(b);
      this.rj(d, e)
     },
     VD: ja("Yf"),
     $h: function(a, b, c, d) {
      this.Qo = a;
      this.Fu = b;
      this.Ro = c;
      this.Eu =
       d
     },
     Yh: function(a) {
      this.state = a;
      var b = this.eb(e.ba.Ee);
      this.eb(e.ba.Dd).setEnabled(a === e.ba.Dd);
      b.setEnabled(a === e.ba.Ee)
     },
     af: function(a, c, e) {
      e = e ? 0 : 15;
      return this.Yf.N !== b.j ? d.Db(a, c, this.ga + this.Yf.x - e, this.ha + this.Yf.y - e, this.Yf.N + 2 * e, this.Yf.V + 2 * e) : d.Db(a, c, this.ga - this.Qo - e, this.ha - this.Ro - e, this.width + (this.Qo + this.Fu) + 2 * e, this.height + (this.Ro + this.Eu) + 2 * e)
     },
     Kj: function(a, b) {
      this.n(a, b);
      return this.state === e.ba.Dd && this.af(a, b, !0) ? (this.Yh(e.ba.Ee), !0) : !1
     },
     Lj: function(a, b) {
      this.n(a, b);
      return this.state ===
       e.ba.Ee && (this.Yh(e.ba.Dd), this.af(a, b, !1)) ? (this.Cb && this.Cb(this.Mm), !0) : !1
     },
     io: function(a, b) {
      this.n(a, b);
      if (this.state === e.ba.Ee) {
       if (this.af(a, b, !1)) return !0;
       this.Yh(e.ba.Dd)
      }
      return !1
     },
     ce: function(a, b) {
      this.n(a, b);
      a.oa = f.Jb | f.mb;
      b === e.ba.Ee && (this.width = a.width, this.height = a.height, this.Yh(e.ba.Dd))
     }
    });
    e.ba = {
     Dd: 0,
     Ee: 1
    };
    return e
   }(ea, ba, S, K, Q),
   Qb = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u) {
    return a.extend({
     init: function(a, c, g, h, k) {
      this.n();
      var m;
      if (k !== e.j) m = d.Di + g - 1;
      else switch (g) {
       case 1:
        m = d.gl;
        break;
       case 2:
        m = d.hl;
        break;
       case 3:
        m = d.il;
        break;
       case 4:
        m = d.jl;
        break;
       case 5:
        m = d.zi
      }
      this.sa(m);
      if (0 < k) {
       this.ya();
       m = 0 + 2 * (k - 1);
       var p = 1 + 2 * (k - 1),
        u = l.create(d.Hg, m),
        p = l.create(d.Hg, p);
       u.ya();
       p.ya();
       this.Xb = new n(0);
       this.Xb.rj(u, p);
       this.Xb.Cb = $.proxy(this.Cb, this);
       this.Xb.anchor = this.Xb.oa = q.T;
       this.U(this.Xb);
       p = u.M;
       u = p.u[m];
       m = p.l[m];
       m = new b(m.N, m.V);
       p = new b(p.qd.x, p.qd.y);
       p.Za(m);
       p.Za(u);
       this.Xb.$h(-u.x + m.x / 2, -p.x + m.x / 2, -u.y + m.y / 2, -p.y + m.y / 2)
      }
      this.qk = this.Nh = !1;
      this.Kz = this.rotation = h;
      this.Fa = b.Qa();
      this.Ka = b.Qa();
      this.Aa = b.Qa();
      this.Ba = b.Qa();
      this.gh = !1;
      this.Ij = this.Jj = this.sj = 0;
      this.ej = !1;
      this.Ic = 0;
      this.x = a;
      this.y = c;
      this.gB(k);
      this.Tb();
      5 === g && (this.ib(0, 0.05, f.ja.vb, 0, 0), this.ib(1, 0.05, f.ja.vb, 1, 4), this.ya());
      this.vk = e.j
     },
     Tb: function() {
      var a = this.gh ? this.width - 400 * u.Gb : this.M.l[this.pf].N,
       a = a / 2;
      this.Fa.x = this.x - a;
      this.Ka.x = this.x + a;
      this.Fa.y = this.Ka.y = this.y - 5;
      this.Aa.x = this.Fa.x;
      this.Ba.x = this.Ka.x;
      this.Aa.y = this.Ba.y = this.y + 5;
      this.a = g.ec(this.rotation);
      this.Fa.pa(this.a, this.x, this.y);
      this.Ka.pa(this.a,
       this.x, this.y);
      this.Aa.pa(this.a, this.x, this.y);
      this.Ba.pa(this.a, this.x, this.y)
     },
     FB: function() {
      this.ej = !0;
      this.S(1);
      this.Ic = this.Jj;
      c.vt(d.Cd)
     },
     Lu: function() {
      this.ej = !1;
      this.S(0);
      this.Ic = this.Ij;
      c.No(d.Cd)
     },
     update: function(a) {
      this.n(a);
      (this.Pa || this.gu) && this.Tb();
      this.gh && (this.ej ? (this.Ic = h.hf(this.Ic, 0, 1, a), 0 === this.Ic && this.Lu()) : (this.Ic = h.hf(this.Ic, 0, 1, a), 0 === this.Ic && this.FB()))
     },
     gB: ja("Sc"),
     cE: Ea("Sc"),
     xA: function() {
      this.qk = !this.qk;
      this.oA(2);
      var a = this.Kz + (this.qk ? 90 : 0),
       b = new f;
      b.C(m.re(this.rotation,
       m.D.LINEAR, 0));
      b.C(m.re(a, m.D.Hb, 0.3 * (Math.abs(a - this.rotation) / 90)));
      b.ab = $.proxy(this.Oo, this);
      this.Kb(b, 2);
      this.S(2);
      this.gu = !0;
      this.Xb.Y = -this.Xb.Y
     },
     Oo: function() {
      this.Tb();
      this.gu = !1
     },
     Cb: function(a) {
      0 === a && (this.mt && this.mt(this.Sc), this.qk ? c.O(d.Ni) : c.O(d.Oi))
     },
     Vf: function() {
      var a = p.context;
      a.beginPath();
      a.strokeStyle = "red";
      a.moveTo(this.Fa.x, this.Fa.y);
      a.lineTo(this.Ka.x, this.Ka.y);
      a.lineTo(this.Ba.x, this.Ba.y);
      a.lineTo(this.Aa.x, this.Aa.y);
      a.lineTo(this.Fa.x, this.Fa.y);
      a.closePath();
      a.stroke()
     }
    })
   }(Ca,
    na, w, O, ma, K, ia, oa, ba, lb, Q, pa, Y, H),
   Rb = function(a, c, d, b, f, e, g, h, l, n, q) {
    return a.extend({
     init: function() {
      this.n();
      this.timeout = this.time = 0;
      this.yc = null;
      this.Ha = 1E-4
     },
     Zg: function() {
      var a;
      0 < this.timeout && (this.yc = new c, this.yc.sa(d.Zc), this.yc.anchor = this.yc.oa = b.T, this.yc.ib(0, this.timeout / 37, f.ja.Wa, 19, 55), this.yc.S(0), this.time = this.timeout, this.yc.visible = !1, this.U(this.yc), a = new f, a.C(e.za(g.lb.copy(), e.D.LINEAR, 0)), a.C(e.za(g.Fb.copy(), e.D.LINEAR, 0.5)), this.yc.Kb(a, 1), a = new f, a.C(e.Cj(1, 1, e.D.LINEAR,
       0)), a.C(e.Cj(0, 0, e.D.LINEAR, 0.25)), a.C(e.za(g.lb.copy(), e.D.LINEAR, 0)), a.C(e.za(g.Fb.copy(), e.D.LINEAR, 0.25)), this.Kb(a, 1));
      this.ca = h.copy(q.om);
      a = new f;
      a.C(e.Oa(this.x, this.y, e.D.Ad, 0));
      a.C(e.Oa(this.x, this.y - 3, e.D.Hb, 0.5));
      a.C(e.Oa(this.x, this.y, e.D.Ad, 0.5));
      a.C(e.Oa(this.x, this.y + 3, e.D.Hb, 0.5));
      a.C(e.Oa(this.x, this.y, e.D.Ad, 0.5));
      a.Bj = f.ja.vb;
      this.Kb(a, 0);
      this.S(0);
      a.update(l.fb(0, 20) / 10);
      a = new c;
      a.sa(d.Zc);
      a.ya();
      a.mc(0.05, f.ja.vb, 1, 18);
      a.S(0);
      a.qc(0).update(l.fb(0, 20) / 10);
      a.anchor = a.oa = b.T;
      a.Ha =
       1E-4;
      this.U(a)
     },
     update: function(a) {
      0 < this.timeout && 0 < this.time && (this.time = n.hf(this.time, 0, 1, a));
      this.n(a)
     },
     B: function() {
      this.yc && this.yc.B();
      this.n()
     }
    })
   }(Ca, za, w, Q, ma, pa, aa, S, ca, oa, H),
   mb = function(a, c, d) {
    return a.extend({
     init: function() {
      this.n()
     },
     Go: function(a, f, e, g) {
      a = c.$i({
       lj: a,
       text: f,
       width: e,
       Ec: g
      });
      this.oe(new d(a))
     }
    })
   }(ba, ga, Ta),
   Sb = function(a) {
    return a.extend({
     init: function() {
      this.n();
      this.J = 0
     }
    })
   }(mb),
   Tb = function(a, c, d, b) {
    var f = a.extend({
     init: function(a, b) {
      this.speed = a;
      this.type = b;
      this.b = c.Qa();
      this.target = c.Qa();
      this.offset = c.Qa()
     },
     moveTo: function(a, b, d) {
      this.target.x = a;
      this.target.y = b;
      d ? this.b.qa(this.target) : this.type === f.ad.pi ? (this.offset = c.Za(this.target, this.b), this.offset.multiply(this.speed)) : this.type === f.ad.Jf && (this.offset = c.Za(this.target, this.b), this.offset.normalize(), this.offset.multiply(this.speed))
     },
     update: function(a) {
      this.b.jj(this.target) || (this.b.add(c.multiply(this.offset, a)), this.b.round(), b.ek(this.offset.x, this.target.x - this.b.x) && b.ek(this.offset.y, this.target.y -
       this.b.y) || this.b.qa(this.target))
     },
     Ww: function() {
      0 === this.b.x && 0 === this.b.y || d.context.translate(-this.b.x, -this.b.y)
     },
     ix: function() {
      0 === this.b.x && 0 === this.b.y || d.context.translate(this.b.x, this.b.y)
     }
    });
    f.ad = {
     Jf: 0,
     pi: 1
    };
    return f
   }(X, O, Y, ca),
   Ub = function() {
    function a(a, d, b, f) {
     this.object = a;
     this.Vg = d;
     this.param = b;
     this.delay = f
    }
    a.prototype.yx = function() {
     this.Vg.apply(this.object, this.param)
    };
    return {
     he: [],
     Fd: function(c, d, b, f) {
      this.he.push(new a(c, d, b, f))
     },
     Pm: function() {
      this.he = []
     },
     DD: function(a, d, b) {
      for (var f =
        0, e = this.he.length; f < e; f--) {
       var g = this.he[f];
       if (g.object === a && g.Vg === d && g.param === b) {
        this.he.splice(f, 1);
        break
       }
      }
     },
     update: function(a) {
      for (var d = this.he.slice(0), b = 0, f = d.length; b < f; b++) {
       var e = d[b],
        g = this.he.indexOf(e);
       0 > g || (e.delay -= a, 0 >= e.delay && (this.he.splice(g, 1), e.yx()))
      }
     }
    }
   }(),
   Vb = function() {
    var a = {
     uq: 0,
     Jp: 1,
     nr: 2,
     kr: 3,
     Cr: 4,
     wm: 5,
     pr: 6,
     qr: 7,
     rr: 8,
     sr: 9,
     tr: 10,
     ur: 11,
     vr: 12,
     wr: 13,
     xr: 14,
     yr: 15,
     zr: 16,
     Ar: 17,
     Br: 18,
     jp: 50,
     kp: 51,
     ip: 52,
     Np: 53,
     fp: 54,
     Bq: 55,
     fr: 56,
     gr: 57,
     hr: 58,
     ir: 59,
     jr: 60,
     qw: 61,
     Lk: 80,
     cp: 81,
     dp: 82,
     Lp: 100,
     Rk: 101,
     Op: 102,
     Pp: 103,
     Iq: 120,
     Bw: 121,
     fv: 122,
     WD: function(c) {
      switch (c) {
       case "map":
        return a.uq;
       case "gameDesign":
        return a.Jp;
       case "target":
        return a.nr;
       case "target2":
        return a.Bw;
       case "star":
        return a.kr;
       case "tutorialText":
        return a.Cr;
       case "tutorial01":
        return a.wm;
       case "tutorial02":
        return a.pr;
       case "tutorial03":
        return a.qr;
       case "tutorial04":
        return a.rr;
       case "tutorial05":
        return a.sr;
       case "tutorial06":
        return a.tr;
       case "tutorial07":
        return a.ur;
       case "tutorial08":
        return a.vr;
       case "tutorial09":
        return a.wr;
       case "tutorial10":
        return a.xr;
       case "tutorial11":
        return a.yr;
       case "tutorial12":
        return a.zr;
       case "tutorial13":
        return a.Ar;
       case "tutorial14":
        return a.Br;
       case "candyL":
        return a.jp;
       case "candyR":
        return a.kp;
       case "candy":
        return a.ip;
       case "candy2":
        return a.fv;
       case "gravitySwitch":
        return a.Np;
       case "bubble":
        return a.fp;
       case "pump":
        return a.Bq;
       case "sock":
        return a.fr;
       case "spike1":
        return a.gr;
       case "spike2":
        return a.hr;
       case "spike3":
        return a.ir;
       case "spike4":
        return a.jr;
       case "spikesSwitch":
        return a.qw;
       case "electro":
        return a.Lk;
       case "bouncer1":
        return a.cp;
       case "bouncer2":
        return a.dp;
       case "grab":
        return a.Lp;
       case "hidden01":
        return a.Rk;
       case "hidden02":
        return a.Op;
       case "hidden03":
        return a.Pp;
       case "rotatedCircle":
        return a.Iq;
       default:
        return alert("Unknown map item:" + c), null
      }
     }
    };
    return a
   }(),
   Wb = function(a) {
    return a.extend({
     init: function() {
      this.n();
      this.Th = []
     },
     update: function(a) {
      for (var d = 0, b = this.Th.length; d < b; d++) this.removeChild(this.Th[d]);
      this.Th = [];
      this.n(a)
     },
     Oo: function(a) {
      this.Th.push(a.element)
     },
     ye: function() {
      var a = this;
      return function(d) {
       a.Oo(d)
      }
     },
     Pz: function(a) {
      this.Th.push(a)
     },
     st: function() {
      var a = this;
      return function(d) {
       a.Pz(d)
      }
     }
    })
   }(ea),
   nb = function(a, c, d, b, f, e, g) {
    function h(a, b) {
     this.Hx = a;
     this.Bt = b
    }
    var l = a.extend({
     init: function(a, c) {
      this.n();
      this.rows = a;
      this.Re = c;
      this.Xg = b.pb;
      this.Wg = b.$a;
      this.lo = 1;
      this.Hd = [];
      this.wd = [];
      this.Pn = [];
      for (var d = 0; d < c; d++)
       for (var g = this.Pn[d] = [], h = 0; h < a; h++) g[h] = f.j;
      this.Uh = this.Vh = l.lc.NONE;
      this.RB = this.oy = !1;
      this.Et = e.fb(1E3, 2E3)
     },
     Rw: function(a, b) {
      if (b === f.j) this.wf = a.ph, this.vf = a.oh;
      else {
       var d = a.l[b];
       this.wf =
        d.N;
       this.vf = d.V
      }
      this.To();
      for (var d = f.j, e = 0, g = this.Hd.length; e < g; e++)
       if (this.Hd[e].M === a) {
        d = e;
        break
       }
      d === f.j && (e = new c(a), d = this.Hd.length, this.Hd.push(e));
      this.wd.push(new h(d, b))
     },
     To: function() {
      this.Qn = 2 + Math.floor(this.Xg / (this.wf + 1));
      this.Rn = 2 + Math.floor(this.Wg / (this.vf + 1));
      this.Vh === l.lc.NONE && (this.Rn = Math.min(this.Rn, this.rows));
      this.Uh === l.lc.NONE && (this.Qn = Math.min(this.Qn, this.Re));
      this.width = this.ci = this.Re * this.wf;
      this.height = this.bi = this.rows * this.vf
     },
     fill: function(a, b, c, d, e) {
      var f = b;
      for (b += d; f < b; f++) {
       d = a;
       for (var g = a + c; d < g; d++) this.Pn[f][d] = e
      }
     },
     VE: ja("lo"),
     $A: function(a) {
      this.Uh = a;
      this.To()
     },
     aB: function(a) {
      this.Vh = a;
      this.To()
     },
     Uu: function(a) {
      var b = Math.round(a.x / this.lo),
       c = Math.round(a.y / this.lo),
       e = this.x,
       h = this.y,
       v, B, r;
      this.Vh !== l.lc.NONE && (h -= c, v = Math.floor(h) % this.bi, h = 0 > h ? v + c : v - this.bi + c);
      this.Uh !== l.lc.NONE && (e -= b, v = Math.floor(e) % this.ci, e = 0 > e ? v + b : v - this.ci + b);
      if (d.Sh(b, c, b + this.Xg, c + this.Wg, e, h, e + this.ci, h + this.bi)) {
       v = d.Ft(e, h, this.ci, this.bi, b, c, this.Xg, this.Wg);
       v = new g(Math.max(0,
        v.x), Math.max(0, v.y));
       v = new g(Math.floor(Math.floor(v.x) / this.wf), Math.floor(Math.floor(v.y) / this.vf));
       var h = h + v.y * this.vf,
        x = new g(e + v.x * this.wf, h),
        e = 0;
       for (B = this.Hd.length; e < B; e++) this.Hd[e].Hj = 0;
       B = v.x + this.Qn - 1;
       var k = v.y + this.Rn - 1;
       this.Vh === l.lc.NONE && (k = Math.min(this.rows - 1, k));
       this.Uh === l.lc.NONE && (B = Math.min(this.Re - 1, B));
       for (e = v.x; e <= B; e++) {
        x.y = h;
        for (var D = v.y; D <= k && !(x.y >= c + this.Wg); D++) {
         var C = d.Ft(b, c, this.Xg, this.Wg, x.x, x.y, this.wf, this.vf),
          I = new d(b - x.x + C.x, c - x.y + C.y, C.N, C.V),
          z = Math.round(e),
          E = Math.round(D);
         this.Vh === l.lc.Ep && (x.y < y ? E = 0 : x.y >= this.y + this.bi && (E = this.rows - 1));
         this.Uh === l.lc.Ep && (x.x < this.x ? z = 0 : x.x >= this.x + this.ci && (z = this.Re - 1));
         this.oy && (r = Math.sin(x.x) * this.Et, z = Math.abs(Math.floor(r) % this.Re));
         this.RB && (r = Math.sin(x.y) * this.Et, E = Math.abs(Math.floor(r) % this.rows));
         z >= this.Re && (z %= this.Re);
         E >= this.rows && (E %= this.rows);
         r = this.Pn[z][E];
         0 <= r && (z = this.wd[r], r = this.Hd[z.Hx], E = r.M, z.Bt !== f.j && (z = E.l[z.Bt], I.x += z.x, I.y += z.y), C = new d(a.x + C.x, a.y + C.y, C.N, C.V), r.Ua(r.Hj++, I, C));
         x.y += this.vf
        }
        x.x += this.wf;
        if (x.x >= b + this.Xg) break
       }
      }
     },
     B: function() {
      this.wc();
      for (var a = 0, b = this.Hd.length; a < b; a++) this.Hd[a].B();
      this.vc()
     }
    });
    l.lc = {
     NONE: 0,
     $u: 1,
     Ep: 2
    };
    return l
   }(ea, La, S, H, K, ca, O),
   Xb = function(a, c) {
    return a.extend({
     init: function(a, b) {
      this.n(a, b);
      this.Qs = c.Gh()
     },
     Uu: function(a) {
      this.Qs.jj(a) || (this.n(a), this.Qs.qa(a))
     },
     B: function() {
      this.n()
     }
    })
   }(nb, O),
   Yb = function(a, c, d) {
    return a.extend({
     init: function(a, f, e, g, h) {
      this.n();
      this.Mm = h;
      this.Aa = new c(0);
      this.Aa.rj(a, f);
      this.Ba = new c(1);
      this.Ba.rj(e,
       g);
      this.Aa.oa = this.Ba.oa = d.Jb | d.mb;
      this.width = this.Aa.width;
      this.height = this.Aa.height;
      this.ce(this.Aa, 0);
      this.ce(this.Ba, 1);
      this.Ba.setEnabled(!1);
      this.Aa.Cb = $.proxy(this.Cb, this);
      this.Ba.Cb = $.proxy(this.Cb, this)
     },
     Cb: function(a) {
      switch (a) {
       case 0:
       case 1:
        this.toggle()
      }
      this.Cb && this.Cb(this.Mm)
     },
     $h: function(a, c, d, g) {
      this.Aa.$h(a, c, d, g);
      this.Ba.$h(a, c, d, g)
     },
     toggle: function() {
      this.Aa.setEnabled(!this.Aa.isEnabled());
      this.Ba.setEnabled(!this.Ba.isEnabled())
     },
     Mn: function() {
      return this.Ba.isEnabled()
     }
    })
   }(ea,
    lb, Q),
   Zb = function(a, c, d) {
    var b = c.extend({
     init: function() {
      var c = a.create(d.Zc, 56),
       e = a.create(d.Zc, 56),
       g = a.create(d.Zc, 57),
       h = a.create(d.Zc, 57);
      this.n(c, e, g, h, b.Ap);
      this.$h(10, 10, 10, 10)
     }
    });
    b.Ap = 0;
    return b
   }(ba, Yb, w),
   $b = function(a, c, d, b, f) {
    var e = a.extend({
     init: function(a, h) {
      this.n();
      this.sa(f.Zc);
      this.Ua(58);
      this.anchor = b.T;
      var l = new c;
      l.C(d.re(0, d.D.LINEAR, 0));
      l.C(d.re(180, d.D.Hb, 0.3));
      this.Kb(l, e.Si.Dr);
      l = new c;
      l.C(d.re(180, d.D.LINEAR, 0));
      l.C(d.re(0, d.D.Hb, 0.3));
      this.Kb(l, e.Si.Je);
      this.NA(f.Xk, 1);
      this.x +=
       a;
      this.y += h
     }
    });
    e.Si = {
     Je: 0,
     Dr: 1
    };
    return e
   }(ba, ma, pa, Q, w),
   ac = function(a, c, d, b, f, e, g, h, l, n) {
    function q() {
     this.y = this.x = this.Mz = 0;
     this.gj = this.Lo = this.alpha = this.ij = this.sk = this.fa = this.hj = this.rk = this.Y = 1
    }
    return a.extend({
     init: function() {
      this.n();
      var a = e.Jd(d.Bi);
      this.Ct = a.ph;
      this.At = a.oh;
      this.Ta = new f(a);
      this.Ta.Ha = 0.1;
      this.Qj = []
     },
     Pw: function(a, b) {
      var c, d, e = [0.3, 0.3, 0.5, 0.5, 0.6],
       e = c = e[h.fb(0, e.length - 1)];
      h.hA() ? c *= 1 + h.fb(0, 1) / 10 : e *= 1 + h.fb(0, 1) / 10;
      c *= 1;
      d = 1 * e;
      var f = this.Ct * c,
       g = this.At * d,
       k = Math.min(1 -
        c, 1 - d),
       l = Math.random(),
       e = new q;
      e.Mz = b;
      e.x = a.x;
      e.y = a.y;
      e.rk = k + c;
      e.sk = k + d;
      e.Y = e.rk * l;
      e.fa = e.sk * l;
      e.hj = c;
      e.ij = d;
      e.gj = 0.3;
      e.Lo = 1;
      e.alpha = 0.7 * l + 0.3;
      c = this.Ta.M.l[0];
      f = new n(a.x - f / 2, a.y - g / 2, f, g);
      this.Ta.Ua(this.Qj.length, c, f, e.alpha);
      this.Qj.push(e)
     },
     vs: function(a, b, d) {
      var e = l.Al,
       f = d.Pa.path[a];
      b = c.Za(d.Pa.path[b], f);
      d = Math.floor(b.kd() / e);
      var g = l.zl,
       n, k;
      b.normalize();
      for (n = 0; n <= d; n++) k = c.add(f, c.multiply(b, n * e)), k.x += h.fb(-g, g), k.y += h.fb(-g, g), this.Pw(k, a)
     },
     update: function(a) {
      this.n(a);
      this.Ta.update(a);
      var b = this.Qj.length,
       c, d, e, f;
      for (c = 0; c < b; c++) d = this.Qj[c], e = g.od(d.Y, d.hj, 1, a), d.Y = e.value, e.rd && (e = d.rk, d.rk = d.hj, d.hj = e), e = g.od(d.fa, d.ij, 1, a), d.fa = e.value, e.rd && (e = d.sk, d.sk = d.ij, d.ij = e), e = this.Ct * d.Y, f = this.At * d.fa, this.Ta.Ae[c] = new n(d.x - e / 2, d.y - f / 2, e, f), e = g.od(d.alpha, d.gj, 1, a), d.alpha = e.value, e.rd && (e = d.Lo, d.Lo = d.gj, d.gj = e), this.Ta.Pf[c] = d.alpha
     },
     B: function() {
      this.wc();
      this.Ta.B();
      this.vc()
     }
    })
   }(ea, O, w, ba, La, Na, oa, ca, H, S),
   bc = function(a, c, d, b, f, e, g, h, l) {
    var n = 7 * e.P,
     q = 3 * e.P,
     m = 22.5 * e.P,
     p = 0.03 *
     e.P,
     u = d.extend({
      init: function() {
       this.n();
       this.sa(b.kc);
       this.Ua(x)
      }
     }),
     v = a.extend({
      init: function() {
       this.n();
       this.Gc = [];
       this.Gd = [];
       this.Jo = c.j;
       this.Ch = g.Gh();
       this.Xd = new u;
       this.Xd.anchor = f.Lf | f.Mf;
       this.Xd.Y = 1;
       this.Xd.oa = f.T;
       this.Xd.Sd = this.Xd.width / 2 + 0.5;
       this.Xd.Ha = 0.0010;
       this.Yd = new u;
       this.Yd.Y = -1;
       this.Yd.anchor = f.Lf | f.Mf;
       this.Yd.oa = f.T;
       this.Yd.Sd = this.Yd.width / 2 - 0.5;
       this.Yd.Ha = 0.0010;
       this.Af = d.create(b.kc, k);
       this.Af.anchor = f.T;
       this.$b = d.create(b.kc, r);
       this.$b.anchor = f.Jb | f.Lf;
       this.Be = d.create(b.kc,
        r);
       this.Be.Y = -1;
       this.Be.anchor = f.Jb | f.mb;
       this.ob = d.create(b.kc, C);
       this.ob.anchor = f.T;
       this.ob.rotation = 90;
       this.hc = d.create(b.kc, C);
       this.hc.anchor = f.T;
       this.hc.rotation = -90;
       this.Ac = d.create(b.kc, D);
       this.Ac.anchor = this.ob.anchor;
       this.Ac.rotation = this.ob.rotation;
       this.Ac.visible = !1;
       this.Bc = d.create(b.kc, D);
       this.Bc.anchor = this.hc.anchor;
       this.Bc.rotation = this.hc.rotation;
       this.Bc.visible = !1;
       this.zf = d.create(b.kc, B);
       this.zf.anchor = f.T;
       this.Nh = !1;
       this.U(this.Xd);
       this.U(this.Yd);
       this.U(this.Ac);
       this.U(this.Bc);
       this.U(this.ob);
       this.U(this.hc)
      },
      setSize: function(a) {
       this.size = a;
       var b = this.size / 167;
       this.$b.Y = this.$b.fa = this.Be.fa = b;
       this.Be.Y = -b;
       this.zf.Y = this.zf.fa = b;
       a = 0.4 <= b ? b : 0.4;
       this.Xd.Y = this.Xd.fa = this.Yd.fa = a;
       this.Yd.Y = -a;
       b = 0.75 <= b ? b : 0.75;
       this.ob.Y = this.ob.fa = this.hc.Y = this.hc.fa = b;
       this.Ac.Y = this.Ac.fa = this.Bc.Y = this.Bc.fa = b;
       this.Af.Y = 1 - 0.5 * (1 - a);
       this.Af.fa = this.Af.Y;
       this.Sb = this.$b.width * this.$b.Y;
       this.JB()
      },
      Is: function() {
       return !this.ob.visible
      },
      Yt: function(a) {
       this.ob.visible = !a
      },
      mE: function() {
       return this.Ac.visible
      },
      Zt: function(a) {
       this.Ac.visible = a
      },
      nE: function() {
       return this.Bc.visible
      },
      $t: function(a) {
       this.Bc.visible = a
      },
      px: function() {
       var a = this.Gd.length,
        b, c;
       for (b = 0; b < a; b++)
        if (c = this.Gd[b], c != this && this.qx(c)) return !0;
       return !1
      },
      B: function() {
       var a = l.context;
       if (this.Bc.visible || this.Ac.visible) {
        var b = (q + e.P) * this.ob.Y,
         c = this.Sb + Math.floor(b / 2);
        a.beginPath();
        a.lineWidth = b;
        a.arc(this.x, this.y, c, 0, 2 * Math.PI, !1);
        a.stroke()
       }
       this.$b.color = this.color;
       this.Be.color = this.color;
       this.ob.color = this.color;
       this.hc.color = this.color;
       this.zf.color = this.color;
       this.zf.B();
       var b = this.Gd.length,
        k, d = this.Gd.indexOf(this),
        f = a.globalAlpha;
       0.2 !== f && (a.globalAlpha = 0.2);
       for (c = 0; c < b; c++) k = this.Gd[c], k != this && k.px() && this.Gd.indexOf(k) < d && this.Cx(this.x, this.y, this.Sb, k.x, k.y, k.Sb, 0.5 * n * k.$b.Y);
       0.2 !== f && (a.globalAlpha = f);
       this.$b.B();
       this.Be.B();
       this.n();
       this.Af.B()
      },
      Cx: function(a, b, c, k, d, e, f) {
       var h = g.Ma(a, b, k, d);
       h >= c + e || c >= h + e || (c = Math.acos((h - (c * c - e * e + h * h) / (2 * h)) / e), h = (new g(a - k, b - d)).a(), b = h - c, c = h + c, k > a && (b += Math.PI, c += Math.PI), a = l.context,
        a.beginPath(), a.lineWidth = f, a.arc(k, d, e, b, c, !1), a.stroke())
      },
      JB: function() {
       this.zf.x = this.Af.x = this.x;
       this.zf.y = this.Af.y = this.y;
       var a = this.$b.width / 2 * (1 - this.$b.Y),
        b = this.$b.height / 2 * (1 - this.$b.fa),
        c = this.Sb - (m - p * this.size) + (1 - this.ob.Y) * (this.ob.width / 2);
       this.$b.x = this.x + a;
       this.Be.x = this.x - a;
       this.$b.y = this.Be.y = this.y - b;
       this.ob.x = this.x - c;
       this.hc.x = this.x + c;
       this.ob.y = this.hc.y = this.y;
       this.Ac.x = this.ob.x;
       this.Ac.y = this.ob.y;
       this.Bc.x = this.hc.x;
       this.Bc.y = this.hc.y
      },
      qx: function(a) {
       if (this.x === a.x &&
        this.y === a.y && this.size === a.size) return !1;
       var b = this.Gc.length,
        c;
       for (c = 0; c < b; c++)
        if (0 <= a.Gc.indexOf(this.Gc[c])) return !0;
       return !1
      },
      copy: function(a) {
       var b = new v;
       b.jF = a;
       b.x = this.x;
       b.y = this.y;
       b.rotation = this.rotation;
       b.Gd = this.Gd;
       b.Gc = this.Gc;
       b.Mh = c.j;
       a = this.size * e.P;
       var k = h.ec(b.rotation);
       b.ag = new g(b.x - a, b.y);
       b.ld = new g(b.x + a, b.y);
       b.ag.pa(k, b.x, b.y);
       b.ld.pa(k, b.x, b.y);
       b.setSize(this.size);
       b.Yt(this.Is());
       b.ob.visible = !1;
       b.hc.visible = !1;
       return b
      }
     }),
     B = 0,
     r = 1,
     x = 2,
     k = 3,
     D = 4,
     C = 5;
    return v
   }(ea, K, ba, w, Q, H, O,
    ia, Y),
   cc = function() {
    return {
     jE: da()
    }
   }(),
   dc = function(a, c, d, b) {
    return a.extend({
     init: function() {
      this.n();
      this.ca = d.copy(b.um);
      this.cs = c.Tl;
      this.Ot = [c.jc, c.Ge, c.Eg];
      this.tn = c.Ge;
      this.jy = 47;
      this.iy = 76;
      this.Md = c.jc;
      this.sy = 0;
      this.ry = 18;
      this.An = c.jc;
      this.qy = 43;
      this.py = 67;
      this.Cn = c.jc;
      this.oj = 68;
      this.Ks = 83;
      this.dn = c.Ge;
      this.Ox = 0;
      this.Nx = 19;
      this.Wj = c.Ge;
      this.fA = 20;
      this.eA = 46;
      this.ts = c.Eg;
      this.Rx = 0;
      this.Qx = 12;
      this.Xo = c.jc;
      this.UB = 28;
      this.TB = 31;
      this.Yn = c.jc;
      this.et = 19;
      this.dt = 27;
      this.Vn = c.jc;
      this.gz = 28;
      this.fz =
       31;
      this.Rm = c.jc;
      this.lx = 32;
      this.kx = 40;
      this.$w = c.jc;
      this.Rr = 41;
      this.Qr = 42
     },
     B: function() {
      this.n()
     }
    })
   }(function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v, B) {
    return a.extend({
     init: function() {
      this.n();
      this.anchor = g.T;
      this.sn = 10;
      this.Ld = 0;
      this.zn = 1;
      this.Bn = 2;
      this.cn = 3;
      this.Vj = 4;
      this.ss = 5;
      this.Wo = 6;
      this.Xn = 7;
      this.Un = 8;
      this.Qm = 9;
      this.ca = h.copy(n.tm);
      this.Kc = !1;
      this.cs = B.Ul
     },
     Wz: function() {
      this.Kc || this.S(this.tn, this.sn)
     },
     Xz: function() {
      this.Kc || this.S(this.An, this.zn)
     },
     Yz: function() {
      this.Kc || this.S(this.Cn, this.Bn)
     },
     aA: function() {
      this.Kc || this.S(this.Yn, this.Xn)
     },
     $z: function() {
      this.Kc || this.S(this.Vn, this.Un)
     },
     Vz: function() {
      this.Kc || this.S(this.ts, this.ss)
     },
     cA: function() {
      this.Kc || (this.S(this.Xo, this.Wo), this.Kc = !0)
     },
     FE: function() {
      this.Kc || this.S(this.Rm, this.Qm)
     },
     Uz: function() {
      this.Kc || this.S(this.dn, this.cn)
     },
     GE: function() {
      this.Kc || this.S(this.Wj, this.Vj)
     },
     Ay: function() {
      var a = this.Lb[this.Md];
      return a.isEnabled() && a.Tf === this.Ld
     },
     Zg: function(a, d, k, f) {
      var h, l, p;
      l = 0;
      for (p = this.Ot.length; l < p; l++) h = this.Ow(this.Ot[l]),
       h.Ha = 1E-4;
      this.ib(this.tn, this.sn, 0.05, e.ja.Wa, this.jy, this.iy);
      this.ib(this.Md, this.Ld, 0.05, e.ja.vb, this.sy, this.ry);
      this.ib(this.An, this.zn, 0.05, e.ja.vb, this.qy, this.py);
      h = [];
      var E = this.Ks - this.oj + 1;
      l = this.oj;
      for (p = l + E; l < p; l++) h.push(l);
      l = this.oj;
      for (p = l + E; l < p; l++) h.push(l);
      this.Oe(this.Cn, this.Bn, 0.05, e.ja.Wa, 2 * (this.Ks - this.oj + 1), h);
      this.ib(this.dn, this.cn, 0.05, e.ja.Wa, this.Ox, this.Nx);
      this.ib(this.Wj, this.Vj, 0.05, e.ja.Wa, this.fA, this.eA);
      this.ib(this.ts, this.ss, 0.05, e.ja.Wa, this.Rx, this.Qx);
      this.ib(this.Xo, this.Wo, 0.05, e.ja.Wa, this.UB, this.TB);
      this.ib(this.Yn, this.Xn, 0.05, e.ja.Wa, this.et, this.dt);
      this.ib(this.Vn, this.Un, 0.05, e.ja.Wa, this.gz, this.fz);
      this.ib(this.Rm, this.Qm, 0.05, e.ja.vb, this.lx, this.kx);
      this.Ud(this.Rm, this.Qm, this.Xo, this.Wo, 0.05);
      this.Ud(this.Wj, this.Vj, this.Vn, this.Un, 0.05);
      this.Ud(this.Md, this.Ld, this.tn, this.sn, 0.05);
      this.Ud(this.Md, this.Ld, this.An, this.zn, 0.05);
      this.Ud(this.Md, this.Ld, this.Cn, this.Bn, 0.05);
      this.Ud(this.Md, this.Ld, this.dn, this.cn, 0.05);
      this.Ud(this.Md,
       this.Ld, this.Wj, this.Vj, 0.05);
      this.Dn = u.fb(5, 20);
      this.Lb[this.Md].qc(this.Ld).Hh = $.proxy(this.wz, this);
      this.S(this.Md, this.Ld);
      this.jk(this.Yn, this.dt - this.et, this.Xn);
      this.blink = new c;
      this.blink.sa(this.$w);
      this.blink.oa = g.Jb | g.mb;
      this.blink.visible = !1;
      this.blink.Oe(0, 0.05, e.ja.Wa, 4, [this.Rr, this.Qr, this.Rr, this.Qr]);
      this.blink.Vt(b.Ji, this.blink, 0, 0, 2, 0);
      this.blink.ya();
      this.U(this.blink);
      this.Jm = 3;
      l = q.supports[m.Pd];
      this.support = v.create(q.dF || B.wi);
      this.support.Ua(l);
      this.support.ya();
      this.support.anchor =
       g.T;
      l = a.y;
      this.x = a.x * d + k;
      this.y = l * d + f;
      this.support.x = this.x + Math.round((q.cF || 0) * n.Gb);
      this.support.y = this.y + Math.round((this.xB || 0) * n.Gb)
     },
     xB: 0,
     wz: function(a, b, c) {
      1 === c && (this.IB(), this.Dn--, 0 === this.Dn && (1 === u.fb(0, 1) ? this.Xz() : this.Yz(), this.Dn = u.fb(5, 20)))
     },
     IB: function() {
      this.Jm--;
      0 === this.Jm && (this.blink.visible = !0, this.blink.S(0), this.Jm = 3)
     },
     B: function() {
      this.support.B();
      this.n()
     }
    })
   }(function(a, c, d, b, f, e) {
    return a.extend({
     init: function() {
      this.n();
      this.Lb = {}
     },
     Ow: function(a) {
      var b = new c;
      b.sa(a);
      b.oa = b.anchor = e.Jb | e.mb;
      b.ya();
      this.width = b.M.qd.x;
      this.height = b.M.qd.y;
      this.Lb[a] = b;
      this.U(b);
      b.setEnabled(!1);
      return b
     },
     jk: function(a, b, c) {
      this.Lb[a].jk(b, c)
     },
     mc: function(a, b, c, d, e) {
      return this.Lb[a].mc(b, c, d, e)
     },
     Oe: function(a, b, c, d, e, f) {
      this.Lb[a].Oe(b, c, d, e, f)
     },
     ib: function(a, b, c, d, e, f, p) {
      this.Lb[a].ib(b, c, d, e, f, p)
     },
     Ti: function(a, b, c, d, e, f) {
      this.Lb[a].Ti(b, c, d, e, f)
     },
     Ud: function(a, c, e, n, q) {
      e = this.Lb[e];
      a = this.Lb[a];
      n = e.qc(n);
      c = [d.create(a, b.yl, 0, c)];
      e !== a && (c.push(d.create(a, b.Kl, 1, 1)), c.push(d.create(a,
       b.Ji, 1, 1)), c.push(d.create(a, b.Jl, 1, 1)), c.push(d.create(e, b.Kl, 0, 0)), c.push(d.create(e, b.Ji, 0, 0)), c.push(d.create(e, b.Jl, 0, 0)));
      q = f.Eh(c, q);
      n.C(q)
     },
     S: function(a, b) {
      for (var c in this.Lb) c !== a && this.Lb[c].setEnabled(!1);
      c = this.Lb[a];
      c.setEnabled(!0);
      c.S(b)
     },
     Pj: function(a, b) {
      var c, d;
      for (d in this.Lb)
       if ((c = this.Lb[d]) && c.isEnabled()) return c.Pj(a, b);
      return !1
     }
    })
   }(Ba, za, Ja, va, pa, Q, aa, ka), za, Ja, va, pa, ma, Q, S, aa, H, V, Pa, ka, ca, ba, w), w, S, H),
   gc = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v, B, r, x, k, D, C, I, z, E, J, w, Z, G,
    L, A, s, F, W, H, M, Fa, O, P, S, V, U, K, R, N, Q, Y, rc, ob, Qa, T, X, ca, aa, ba, Da, ec, sc, tc, fc) {
    return k.extend({
     init: function() {
      this.n();
      this.dc = B;
      this.Rd = this.Ls = J.j;
      this.Xa = new x;
      this.Xa.visible = !1;
      this.U(this.Xa);
      this.rg = new x;
      this.rg.visible = !1;
      this.U(this.rg);
      this.aa = new v(s.ni, v.ad.pi);
      this.qg = 0;
      this.yn = [];
      for (var a = 0; 3 > a; a++) {
       var b = this.yn[a] = new w;
       b.sa(E.xi);
       b.ya();
       b.mc(0.05, Z.ja.Wa, 0, 10);
       b.jk(10, 0);
       b.x = b.width * a;
       b.y = 0;
       this.U(b)
      }
      this.pk = G.Qa();
      this.kj = [];
      for (a = 0; a < J.$c; a++) this.kj[a] = [];
      this.Sm = I.ln();
      this.P =
       s.P;
      this.hb = s.hb;
      this.rb = 0;
      this.Id = [];
      this.dg = this.Qf = this.Ah = this.zh = this.yh = 0;
      this.dh = Array(J.$c);
      this.xe = Array(J.$c);
      this.ro = Array(J.$c);
      for (a = 0; a < J.$c; a++) this.dh[a] = !1, this.xe[a] = G.Qa(), this.ro[a] = G.Qa()
     },
     po: function(a) {
      var b = s.wl;
      return a.b.y > this.md + s.vl || a.b.y < b
     },
     LE: function() {
      this.hide();
      this.show()
     },
     mk: function() {
      this.target.Wz()
     },
     fu: function(a) {
      var b = I.lh();
      return X.hn(a.locale) !== b ? !0 : !1
     },
     show: function() {
      this.Xa.Gt();
      this.rg.Gt();
      this.dc.Pm();
      this.dg = this.Qf = 0;
      var a = H.Ts[W.Pd];
      this.Nr =
       C.Jd(H.Ss[W.Pd]);
      this.ko = a ? C.Jd(a) : this.Nr;
      this.back = new D(1, 1);
      this.back.$A(Fa.lc.NONE);
      this.back.aB(Fa.lc.$u);
      this.back.Rw(this.Nr, 0);
      this.back.fill(0, 0, 1, 1, 0);
      this.Na = null;
      this.rn = J.j;
      this.A = 2;
      this.se = 0;
      this.vd = null;
      z.No(E.Cd);
      this.Ga = [];
      this.Xj = [];
      this.Yb = [];
      this.Eb = [];
      this.bubbles = [];
      this.fc = [];
      this.St = [];
      this.og = [];
      this.Wd = [];
      this.yf = [];
      this.ie = [];
      this.Sg = [];
      this.Ra = [];
      this.ue = null;
      this.R = new O;
      this.R.ud(1);
      this.ia = new O;
      this.ia.ud(1);
      this.xa = new O;
      this.xa.ud(1);
      this.ea = new P;
      this.ea.sa(E.Cc);
      this.ea.Ua(0);
      this.ea.ya();
      this.ea.anchor = M.T;
      this.ea.ca = R.copy(s.Ek);
      this.ea.te = !1;
      this.ea.Y = this.ea.fa = 0.71;
      this.ea.Ha = 1E-4;
      this.Mb = new P;
      this.Mb.sa(E.Cc);
      this.Mb.Ua(1);
      this.Mb.ya();
      this.Mb.anchor = this.Mb.oa = M.T;
      this.ea.U(this.Mb);
      this.Mb.Y = this.Mb.fa = 0.71;
      this.Mb.Ha = 1E-4;
      this.ed = new P;
      this.ed.sa(E.Cc);
      this.ed.Ua(2);
      this.ed.ya();
      this.ed.anchor = this.ed.oa = M.T;
      this.ea.U(this.ed);
      this.ed.Y = this.ed.fa = 0.71;
      this.ed.Ha = 1E-4;
      this.xb = new w;
      this.xb.sa(E.Cc);
      this.xb.ya();
      this.xb.ib(0, 0.07, Z.ja.Wa, 8, 17);
      this.xb.Oe(1,
       0.3, Z.ja.Wa, 2, [18, 18]);
      a = this.xb.qc(1);
      a.C(A.za(L.lb.copy(), A.D.LINEAR, 0));
      a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.2));
      this.xb.visible = !1;
      this.xb.anchor = this.xb.oa = M.T;
      this.xb.Y = this.xb.fa = 0.71;
      this.ea.U(this.xb);
      this.xb.Ha = 1E-4;
      this.bc = new w;
      this.bc.sa(E.Gg);
      this.bc.x = this.ea.x;
      this.bc.y = this.ea.y;
      this.bc.oa = this.bc.anchor = M.T;
      this.bc.mc(0.05, Z.ja.vb, 0, 12);
      this.bc.S(0);
      this.ea.U(this.bc);
      this.bc.visible = !1;
      this.bc.Ha = 1E-4;
      for (a = 0; 3 > a; a++) {
       var b = this.yn[a];
       b.yb && b.yb.stop();
       b.Ua(0)
      }
      this.Sy(W.Ws);
      2 !== this.A &&
       (this.cd = new w, this.cd.sa(E.Gg), this.cd.oa = this.cd.anchor = M.T, this.cd.mc(0.05, Z.ja.vb, 0, 12), this.cd.S(0), this.Ia.U(this.cd), this.cd.visible = !1, this.cd.Ha = 1E-4, this.dd = new w, this.dd.sa(E.Gg), this.dd.oa = this.dd.anchor = M.T, this.dd.mc(0.05, Z.ja.vb, 0, 12), this.dd.S(0), this.Ja.U(this.dd), this.dd.visible = !1, this.dd.Ha = 1E-4);
      for (var b = this.Ra.length, c, a = 0; a < b; a++) c = this.Ra[a], c.Mh = J.j, c.Gd = this.Ra;
      this.uB();
      this.qg = 0;
      this.nc = this.cc = this.ac = null;
      this.Wn = !1;
      this.sb = 2 !== this.A;
      this.Rb = this.Qb = !1;
      this.gk = this.time =
       0;
      this.$f = !0;
      Qa.reset();
      this.bk = this.Ao = this.Ue = 0;
      this.dc.Fd(this, this.zx, null, 1);
      a = new V;
      a.Go(E.Ef, W.Pd + 1 + " - " + (W.ef + 1));
      a.anchor = M.Bf | M.mb;
      a.x = 37 * s.Gb;
      a.y = s.$a + 25 * s.Gb;
      b = new V;
      b.Go(E.Ef, ca.X(aa.Qv));
      b.anchor = M.Bf | M.mb;
      b.oa = M.Jb | M.mb;
      b.y = 80 * s.Gb;
      b.Sd -= b.width / 2;
      b.Y = b.fa = 0.7;
      a.U(b);
      b = new Z;
      b.C(A.za(L.Fb.copy(), A.D.LINEAR, 0));
      b.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.5));
      b.C(A.za(L.lb.copy(), A.D.LINEAR, 0.5));
      b.C(A.za(L.lb.copy(), A.D.LINEAR, 1));
      b.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.5));
      a.Kb(b, 0);
      a.S(0);
      b.ab = this.rg.ye();
      this.rg.U(a);
      this.Sm && this.Qt()
     },
     uB: function() {
      var a = s.pb,
       b = s.$a;
      if (this.nd > a || this.md > b) {
       this.ne = !0;
       this.us = !1;
       this.aa.type = v.ad.Jf;
       this.aa.speed = 10;
       var c, k, d = 2 !== this.A ? this.ia : this.R;
       this.nd > a ? (c = d.b.x > this.nd / 2 ? 0 : this.nd - a, k = 0) : d.b.y > this.md / 2 ? k = c = 0 : (c = 0, k = this.md - b);
       var e = d.b.y - b / 2,
        a = p.Wf(d.b.x - a / 2, 0, this.nd - a),
        b = p.Wf(e, 0, this.md - b);
       this.aa.moveTo(c, k, !0);
       this.Ls = this.aa.b.Ma(new G(a, b))
      } else this.ne = !1, this.aa.moveTo(0, 0, !0)
     },
     zx: function() {
      this.xb.S(0)
     },
     Sy: function(a) {
      function b(a, c) {
       for (var d =
         0, e = a.length; d < e; d++)
        for (var f = a[d], g = f.length, Za = 0; Za < g; Za++) c.call(k, f[Za])
      }
      var c = [],
       k = this,
       d;
      for (d in a) a.hasOwnProperty(d) && c.push(a[d]);
      b(c, function(a) {
       switch (a.name) {
        case r.uq:
         this.Ty(a);
         break;
        case r.Jp:
         this.Ny(a);
         break;
        case r.jp:
         this.Ly(a);
         break;
        case r.kp:
         this.My(a);
         break;
        case r.ip:
         this.Ky(a)
       }
      });
      b(c, function(a) {
       switch (a.name) {
        case r.Np:
         this.Py(a);
         break;
        case r.kr:
         this.Zy(a);
         break;
        case r.Cr:
         this.az(a);
         break;
        case r.wm:
        case r.pr:
        case r.qr:
        case r.rr:
        case r.sr:
        case r.tr:
        case r.ur:
        case r.vr:
        case r.wr:
        case r.xr:
        case r.yr:
        case r.zr:
        case r.Ar:
        case r.Br:
         this.$y(a);
         break;
        case r.fp:
         this.Jy(a);
         break;
        case r.Bq:
         this.Vy(a);
         break;
        case r.fr:
         this.Xy(a);
         break;
        case r.gr:
        case r.hr:
        case r.ir:
        case r.jr:
        case r.Lk:
         this.Yy(a);
         break;
        case r.Iq:
         this.Wy(a);
         break;
        case r.cp:
        case r.dp:
         this.Iy(a);
         break;
        case r.Lp:
         this.Oy(a);
         break;
        case r.nr:
         this.target = new fc;
         this.target.Zg(a, this.P, this.rb, this.hb);
         this.as = !1;
         I.mk && (this.dc.Fd(this, this.mk, null, 2), I.mk = !1);
         break;
        case r.Rk:
        case r.Op:
        case r.Pp:
         this.Qy(a)
       }
      })
     },
     Ty: function(a) {
      this.nd = a.width;
      this.md = a.height;
      this.rb = (s.pb - this.nd * this.P) /
       2;
      this.nd *= this.P;
      this.md *= this.P;
      H.iB[W.Pd] && (this.nd > s.pb && this.Id.push(new T(s.pb, 0)), this.md > s.$a && this.Id.push(new T(0, s.$a)), this.Id.push(new T(0, 0)))
     },
     Ny: function(a) {
      this.J = a.J || 0;
      this.Q = a.Q;
      this.jz = a.jz;
      this.A = a.A ? 0 : 2;
      this.Q *= s.xl
     },
     Oy: function(a) {
      var b = a.x * this.P + this.rb,
       c = a.y * this.P + this.hb,
       d = a.length * this.P,
       k = a.e,
       f = a.d,
       g = a.Nd,
       h = a.Mc,
       l = a.f * this.P || -1,
       p = a.h,
       m = a.g * this.P || 0,
       n = a.c,
       q = "L" === a.m,
       C = a.Ob,
       z = a.t,
       s = new e;
      s.x = b;
      s.y = c;
      s.d = f;
      s.t = z;
      s.Nd = g;
      s.Mc = h;
      s.dB(n);
      s.lf(a);
      if (s.Pa && (s.GA(), !C)) {
       a =
        "R" === a.path[0];
       this.ue || (this.ue = new ba);
       f = 0;
       for (g = s.Pa.path.length - 1; f < g; f++) a && 0 !== f % 3 || this.ue.vs(f, f + 1, s);
       2 < s.Pa.path.length && this.ue.vs(0, s.Pa.path.length - 1, s)
      }
      k !== J.j && (k *= this.P);
      k !== J.j || z || (z = this.R, 2 !== this.A && (z = q ? this.ia : this.xa), b = new U(null, b, c, z, z.b.x, z.b.y, d), b.Ya.Oc.qa(b.Ya.b), s.du(b), this.Im());
      s.ZA(k);
      s.TA(l, p, m);
      this.Ga.push(s)
     },
     Ly: function(a) {
      this.ia.b.x = a.x * this.P + this.rb;
      this.ia.b.y = a.y * this.P + this.hb;
      this.Ia = new P;
      this.Ia.sa(E.Cc);
      this.Ia.Ua(19);
      this.Ia.Y = this.Ia.fa = 0.71;
      this.Ia.te = !1;
      this.Ia.ya();
      this.Ia.anchor = M.T;
      this.Ia.x = this.ia.b.x;
      this.Ia.y = this.ia.b.y;
      this.Ia.ca = R.copy(s.oi)
     },
     My: function(a) {
      this.xa.b.x = a.x * this.P + this.rb;
      this.xa.b.y = a.y * this.P + this.hb;
      this.Ja = new P;
      this.Ja.sa(E.Cc);
      this.Ja.Ua(20);
      this.Ja.Y = this.Ja.fa = 0.71;
      this.Ja.te = !1;
      this.Ja.ya();
      this.Ja.anchor = M.T;
      this.Ja.x = this.xa.b.x;
      this.Ja.y = this.xa.b.y;
      this.Ja.ca = R.copy(s.oi)
     },
     Ky: function(a) {
      this.R.b.x = a.x * this.P + this.rb;
      this.R.b.y = a.y * this.P + this.hb
     },
     Py: function(a) {
      this.Na = new ob;
      this.Na.Cb = $.proxy(this.Cb,
       this);
      this.Na.visible = !1;
      this.Na.Zb = !1;
      this.U(this.Na);
      this.Na.x = a.x * this.P + this.rb;
      this.Na.y = a.y * this.P + this.hb;
      this.Na.anchor = M.T
     },
     Zy: function(a) {
      var b = new q;
      b.sa(E.Zc);
      b.x = a.x * this.P + this.rb;
      b.y = a.y * this.P + this.hb;
      b.timeout = a.timeout;
      b.Zg();
      b.ca = R.copy(s.nm);
      b.lf(a);
      b.update(0);
      this.Eb.push(b)
     },
     az: function(a) {
      if (!this.fu(a))
       if (null == a.text || "" === a.text) Da.debug("Missing tutorial text");
       else {
        var b = new m;
        b.x = a.x * this.P + this.rb;
        b.y = a.y * this.P + this.hb;
        b.J = a.J || 0;
        b.align = M.Ub;
        b.Go(E.Bg, a.text, Math.ceil(a.width *
         this.P), M.Ub);
        b.color = L.Fb.copy();
        a = new Z;
        var c = 0 === W.Pd && 0 === W.ef;
        a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0));
        a.C(A.za(L.lb.copy(), A.D.LINEAR, 1));
        a.C(A.za(L.lb.copy(), A.D.LINEAR, c ? 10 : 5));
        a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.5));
        b.Kb(a, 0);
        0 === b.J && b.S(0);
        this.yf.push(b)
       }
     },
     $y: function(a) {
      if (!this.fu(a)) {
       var b = a.name - r.wm,
        c = new S;
       c.sa(E.ll);
       c.Ua(b);
       c.color = L.Fb.copy();
       c.x = a.x * this.P + this.rb;
       c.y = a.y * this.P + this.hb;
       c.rotation = a.a || 0;
       c.J = a.J || 0;
       c.lf(a);
       a = new Z;
       a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0));
       a.C(A.za(L.lb.copy(),
        A.D.LINEAR, 1));
       0 === W.Pd && 0 === W.ef ? a.C(A.za(L.lb.copy(), A.D.LINEAR, 10)) : a.C(A.za(L.lb.copy(), A.D.LINEAR, 5.2));
       a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.5));
       c.Kb(a, 0);
       0 === c.J ? c.S(0) : 2 === c.J && (a = new Z, a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0)), a.C(A.za(L.lb.copy(), A.D.LINEAR, 0.5)), a.C(A.za(L.lb.copy(), A.D.LINEAR, 1)), a.C(A.za(L.lb.copy(), A.D.LINEAR, 1.1)), a.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.5)), a.C(A.Oa(c.x, c.y, A.D.LINEAR, 0)), a.C(A.Oa(c.x, c.y, A.D.LINEAR, 0.5)), a.C(A.Oa(c.x, c.y, A.D.LINEAR, 1)), a.C(A.Oa(c.x + s.xm, c.y, A.D.LINEAR,
        0.5)), a.C(A.Oa(c.x + s.ym, c.y, A.D.LINEAR, 0.5)), a.gf = 2, a.Bj = Z.ja.vb, c.Kb(a, 1), c.S(1));
       this.Wd.push(c)
      }
     },
     Qy: function(a) {
      var c = a.name - r.Rk,
       d = a.Zm - 1;
      H.wx || (c = new b(c, d), c.x = a.x * this.P + this.rb, c.y = a.y * this.P + this.hb, c.rotation = a.a || 0, this.ie.push(c))
     },
     Jy: function(a) {
      var b = p.fb(1, 3),
       d = new c;
      d.sa(E.yi);
      d.Ua(b);
      d.ya();
      d.ca = R.copy(s.zk);
      d.x = a.x * this.P + this.rb;
      d.y = a.y * this.P + this.hb;
      d.anchor = M.T;
      d.qo = !1;
      a = new Q;
      a.sa(E.yi);
      a.Ua(0);
      a.ya();
      a.oa = a.anchor = M.T;
      d.U(a);
      this.bubbles.push(d)
     },
     Vy: function(a) {
      var b = new g;
      b.sa(E.Ci);
      b.ya();
      b.Nw(0.05, Z.ja.Wa, 4, [1, 2, 3, 0]);
      b.ca = R.copy(s.Dl);
      b.x = a.x * this.P + this.rb;
      b.y = a.y * this.P + this.hb;
      b.rotation = a.a + 90;
      b.Tb();
      b.anchor = M.T;
      this.fc.push(b)
     },
     Xy: function(a) {
      var b = new l;
      b.sa(E.Hf);
      b.Y = b.fa = 0.7;
      b.Zg();
      b.ya();
      b.x = a.x * this.P + this.rb;
      b.y = a.y * this.P + this.hb;
      b.group = a.group;
      b.anchor = M.Jb | M.Ub;
      b.mg -= b.height / 2 - 25;
      b.Ua(0 === b.group ? l.Kf.sv : l.Kf.tv);
      b.state = l.ba.IDLE;
      b.lf(a);
      b.rotation += 90;
      b.Pa && (b.Pa.a += 90);
      b.Tb();
      this.og.push(b)
     },
     Yy: function(a) {
      var b = !1 === a.Sc ? J.j : a.Sc || J.j,
       c = new n(a.x *
        this.P + this.rb, a.y * this.P + this.hb, a.size, parseFloat(a.a) || 0, b);
      c.lf(a);
      b && (c.mt = $.proxy(this.vA, this));
      a.name === r.Lk ? (c.gh = !0, c.sj = a.sj, c.Jj = a.Jj, c.Ij = a.Ij, c.Ic = 0, c.Lu(), c.Ic += c.sj, c.Tb()) : c.gh = !1;
      this.Yb.push(c)
     },
     Wy: function(a) {
      var b = a.x * this.P + this.rb,
       c = a.y * this.P + this.hb,
       d = a.size,
       k = parseFloat(a.gE) || 0,
       e = K.ec(k);
      a = a.zE;
      var f = new ec;
      f.anchor = M.T;
      f.x = b;
      f.y = c;
      f.rotation = k;
      f.ag = new G(f.x - d * this.P, f.y);
      f.ld = new G(f.x + d * this.P, f.y);
      f.ag.pa(e, f.x, f.y);
      f.ld.pa(e, f.x, f.y);
      f.setSize(d);
      f.Yt(a);
      this.Ra.push(f)
     },
     Iy: function(b) {
      var c = new a(b.x * this.P + this.rb, b.y * this.P + this.hb, b.size, b.a);
      c.lf(b);
      this.Sg.push(c)
     },
     Bz: function(a) {
      a.element.lA = !0
     },
     update: function(a) {
      function b(c) {
       c.Hm(new G(-c.zc.x / W, -c.zc.y / W + F), a)
      }

      function c(a, b) {
       return R.ff(a.Fa.x, a.Fa.y, a.Ka.x, a.Ka.y, b.b.x - B, b.b.y - B, I, I) || R.ff(a.Aa.x, a.Aa.y, a.Ba.x, a.Ba.y, b.b.x - B, b.b.y - B, I, I)
      }
      var k, e;
      k = 0;
      for (e = this.ie.length; k < e; k++) this.ie[k].update(a);
      this.n(a);
      this.dc.update(a);
      this.ue && this.ue.update(a);
      for (k = 0; k < J.$c; k++)
       for (var f = this.kj[k], g = f.length,
         h = 0; h < g;) {
        var m = f[h];
        e = u.od(m.color.F, 0, 10, a);
        m.color.F = e.value;
        e.rd ? (f.splice(h, 1), g--) : h++
       }
      k = 0;
      for (e = this.Id.length; k < e; k++) this.Id[k].update(a);
      this.bk = u.hf(this.bk, 0, 1, a);
      0 === this.Qf && (this.dg += a, 30 < this.dg && (this.dg = 0));
      k = s.pb;
      f = s.$a;
      g = 2 != this.A ? this.ia : this.R;
      e = g.b.y - f / 2;
      k = p.Wf(g.b.x - k / 2, 0, this.nd - k);
      f = p.Wf(e, 0, this.md - f);
      this.aa.moveTo(k, f, !1);
      this.Xx && this.aa.type === v.ad.pi || this.aa.update(a);
      if (this.aa.type === v.ad.Jf) {
       e = s.Sk;
       var g = s.Bl,
        h = s.Cl,
        m = s.ql,
        n = s.rl,
        q = this.aa.b.Ma(new G(k, f));
       q < e &&
        (this.ne = !1);
       this.us ? this.aa.speed < s.Dk && (this.aa.speed *= 1.5) : q > this.Ls / 2 ? (this.aa.speed += a * g, this.aa.speed = Math.min(m, this.aa.speed)) : (this.aa.speed -= a * h, this.aa.speed = Math.max(n, this.aa.speed));
       1 > Math.abs(this.aa.b.x - k) && 1 > Math.abs(this.aa.b.y - f) && (this.aa.type = v.ad.pi, this.aa.speed = s.ni)
      } else this.time += a;
      f = this.Ga.length;
      if (0 < f) {
       m = h = e = !1;
       for (k = 0; k < f; k++) {
        var r = this.Ga[k];
        r.update(a);
        g = r.ta;
        r.Pa && g && (g.Ya.b.x = r.x, g.Ya.b.y = r.y, g.Ya.Oc.qa(g.Ya.b));
        if (g) {
         if (g.zb !== J.j && 0 === g.fe) {
          r.ks();
          continue
         }
         g.update(a *
          this.Q);
         if (r.Jc && (this.aa.type == v.ad.Jf && this.ne || r.QB(a), r.sf === J.j)) {
          this.sB(r);
          break
         }
        }
        if (r.e !== J.j && !r.ta) {
         var A = s.pm,
          n = $.proxy(function(a) {
           (new G(r.x, r.y)).Ma(a.b) <= r.e + A && (a = new U(null, r.x, r.y, a, a.b.x, a.b.y, r.e + A), a.Ya.Oc.qa(a.Ya.b), r.nh = !0, r.du(a), this.Im(), z.O(E.am), r.Pa && z.O(E.Ki))
          }, this);
         2 !== this.A ? (this.Qb || n(this.ia), this.Rb || null != r.ta || n(this.xa)) : n(this.R)
        }
        if (g) {
         var q = g.Ya,
          n = g.Ca[g.Ca.length - 1],
          q = G.Za(q.b, n.b),
          D = !1;
         e || (2 !== this.A ? n !== this.ia || this.Qb || h ? n !== this.xa || this.Rb || m || (D = !0) :
          D = !0 : this.sb || e || (D = !0));
         0 !== g.wo && g.zb === J.j && D ? (q = K.tg(q.gg()), 2 !== this.A ? (D = n === this.ia ? this.Ia : this.Ja, g.Yg || (g.pe = D.rotation - q), n === this.ia ? (this.zh = q + g.pe - D.rotation, h = !0) : (this.Ah = q + g.pe - D.rotation, m = !0), D.rotation = q + g.pe) : (g.Yg || (g.pe = this.Mb.rotation - q), this.yh = q + g.pe - this.Mb.rotation, this.Mb.rotation = q + g.pe, e = !0), g.Yg = !0) : g.Yg = !1
        }
       }
       2 !== this.A ? (h || this.Qb || (this.Ia.rotation += Math.min(5, this.zh), this.zh *= 0.98), m || this.Rb || (this.Ja.rotation += Math.min(5, this.Ah), this.Ah *= 0.98)) : e || this.sb || (this.Mb.rotation +=
        Math.min(5, this.yh), this.yh *= 0.98)
      }
      this.sb || (this.ea.update(a), this.R.update(a * this.Q));
      if (2 !== this.A) {
       k = a * this.Q;
       this.Ia.update(a);
       this.ia.update(k);
       this.Ja.update(a);
       this.xa.update(k);
       if (1 === this.A)
        for (k = 0; k < U.dv; k++) this.ia.fk(), this.xa.fk();
       if (0 < this.se)
        if (e = u.od(this.se, 0, 200, a), this.se = e.value, e.rd) {
         z.O(E.Ql);
         this.A = 2;
         this.sb = !1;
         this.Rb = this.Qb = !0;
         if (this.cc || this.nc) this.ac = this.cc ? this.cc : this.nc, this.bc.visible = !0;
         this.Ah = this.zh = this.yh = 0;
         this.R.b.x = this.ia.b.x;
         this.R.b.y = this.ia.b.y;
         this.ea.x =
          this.R.b.x;
         this.ea.y = this.R.b.y;
         this.ea.Ug();
         k = G.Za(this.ia.b, this.ia.va);
         e = G.Za(this.xa.b, this.xa.va);
         k = new G((k.x + e.x) / 2, (k.y + e.y) / 2);
         this.R.va.qa(this.R.b);
         this.R.va.Za(k);
         k = 0;
         for (e = this.Ga.length; k < e; k++) r = this.Ga[k], !(g = r.ta) || g.zb === g.Ca.length - 3 || g.gb !== this.ia && g.gb !== this.xa || (q = g.Ca[g.Ca.length - 2], h = g.gb.td(q), this.R.Pe(q, h, Y.qi), g.gb = this.R, g.Ca[g.Ca.length - 1] = this.R, g.pe = 0, g.Yg = !1);
         k = new w;
         k.sa(E.Cc);
         k.ya();
         k.x = this.ea.x;
         k.y = this.ea.y;
         k.anchor = M.T;
         q = k.mc(0.05, Z.ja.Wa, 21, 25);
         k.qc(q).ab =
          this.Xa.ye();
         k.S(0);
         this.Xa.U(k)
        } else this.ia.Xi(this.xa, this.se), this.xa.Xi(this.ia, this.se);
       this.Qb || this.Rb || 0 !== this.A || !P.sh(this.Ia, this.Ja) || (this.A = 1, this.se = this.ia.b.Ma(this.xa.b), this.ia.Pe(this.xa, this.se, Y.Gi), this.xa.Pe(this.ia, this.se, Y.Gi))
      }
      this.target.update(a);
      if (this.aa.type !== v.ad.Jf || !this.ne)
       for (k = 0, e = this.Eb.length; k < e; k++)
        if (h = this.Eb[k], h.update(a), 0 < h.timeout && 0 === h.time) {
         h.qc(1).ab = this.Xa.ye();
         this.Xa.U(h);
         this.Eb.splice(k, 1);
         h.yc.S(1);
         h.S(1);
         break
        } else if (g = !1, g = 2 !== this.A ?
       P.sh(this.Ia, h) && !this.Qb || P.sh(this.Ja, h) && !this.Rb : P.sh(this.ea, h) && !this.sb) {
       this.xb.S(1);
       this.qg++;
       this.yn[this.qg - 1].S(0);
       e = new w;
       e.sa(E.kl);
       e.ya();
       e.x = h.x;
       e.y = h.y;
       e.anchor = M.T;
       g = e.mc(0.05, Z.ja.Wa, 0, 12);
       e.qc(g).ab = this.Xa.ye();
       e.S(0);
       this.Xa.U(e);
       this.Eb.splice(k, 1);
       z.O(E.gm + this.qg - 1);
       this.target.Ay() && this.target.Uz();
       break
      }
      k = 0;
      for (e = this.bubbles.length; k < e; k++) {
       g = this.bubbles[k];
       g.update(a);
       if (!g.qo)
        if (2 != this.A) {
         if (!this.Qb && this.Hn(g, this.Ia, this.cc, this.cd)) {
          this.cc = g;
          break
         }
         if (!this.Rb &&
          this.Hn(g, this.Ja, this.nc, this.dd)) {
          this.nc = g;
          break
         }
        } else if (!this.sb && this.Hn(g, this.ea, this.ac, this.bc)) {
        this.ac = g;
        break
       }
       if (!g.Yo)
        for (n = this.Ra.length, m = 0; m < n; m++) h = this.Ra[m], G.Ma(g.x, g.y, h.x, h.y) < h.Sb && (g.Yo = !0)
      }
      k = 0;
      for (e = this.yf.length; k < e; k++) g = this.yf[k], g.update(a);
      k = 0;
      for (e = this.Wd.length; k < e; k++) g = this.Wd[k], g.update(a);
      n = -1;
      k = 0;
      for (e = this.Ra.length; k < e; k++) {
       h = this.Ra[k];
       for (m = 0; m < f; m++) r = this.Ga[m], g = h.Gc.indexOf(r), q = G.Ma(r.x, r.y, h.x, h.y), q <= h.Sb + 5 * this.P ? 0 > g && h.Gc.push(r) : 0 <= g && h.Gc.splice(r,
        1);
       D = this.bubbles.length;
       for (m = 0; m < D; m++) {
        var g = this.bubbles[m],
         q = G.Ma(g.x, g.y, h.x, h.y),
         x = h.Gc.indexOf(g);
        q <= h.Sb + 10 * this.P ? 0 > x && h.Gc.push(g) : 0 <= x && h.Gc.splice(g, 1)
       }
       h.lA && (n = k);
       h.update(a)
      }
      0 <= n && this.Ra.splice(n, 1);
      k = 0;
      for (e = this.St.length; k < e; k++) f = this.St[k], f.update(a);
      k = 0;
      for (e = this.og.length; k < e; k++)
       if (h = this.og[k], h.update(a), f = u.od(h.pj, 0, 1, a), h.pj = f.value, f.rd && (h.state = l.ba.IDLE), g = h.rotation, h.rotation = 0, h.Tb(), f = this.R.uc.copy(), f.rotate(K.ec(-g)), h.rotation = g, h.Tb(), g = this.R.b.x - s.Ng,
        m = this.R.b.y - s.Ng, q = n = 2 * s.Ng, 0 <= f.y && (R.ff(h.Fa.x, h.Fa.y, h.Ka.x, h.Ka.y, g, m, n, q) || R.ff(h.Aa.x, h.Aa.y, h.Ba.x, h.Ba.y, g, m, n, q))) {
        if (h.state === l.ba.IDLE) {
         for (m = 0; m < e; m++)
          if (k = this.og[m], k !== h && k.group === h.group) {
           h.state = l.ba.hw;
           k.state = l.ba.Cw;
           this.Zj(!1);
           this.BA = 0.9 * this.R.zc.kd() * s.xl;
           this.vd = k;
           h.Pb.S(0);
           h.Pb.visible = !0;
           z.O(E.Mg);
           this.dc.Fd(this, this.yB, null, 0.1);
           break
          }
         break
        }
       } else h.state !== l.ba.IDLE && 0 === h.pj && (h.pj = l.mv);
      k = 0;
      for (e = this.fc.length; k < e; k++) g = this.fc[k], g.update(a), f = u.od(g.ei, 0, 1, a),
       g.ei = f.value, f.rd && this.Jz(g, a);
      k = 0;
      for (e = this.Xj.length; k < e; k++) f = this.Xj[k], f.update(a), this.zb(f, null, null, !1);
      var B = s.qm,
       I = 2 * B;
      k = 0;
      for (e = this.Yb.length; k < e; k++)
       if (h = this.Yb[k], h.update(a), !h.gh || h.ej)
        if (f = g = !1, 2 !== this.A ? (g = !this.Qb && c(h, this.ia)) ? f = !0 : g = !this.Rb && c(h, this.xa) : g = !this.sb && c(h, this.R), g) {
         2 !== this.A ? f ? this.cc && this.jg(!0) : this.nc && this.jg(!1) : this.ac && this.jg(!1);
         k = C.Jd(E.Cc);
         g = new d(5, k);
         this.Na && !this.$f && (g.Kd.y = -500, g.a = 90);
         g.ab = this.Xa.st();
         2 != this.A ? f ? (g.x = this.Ia.x, g.y = this.Ia.y,
          this.Qb = !0) : (g.x = this.Ja.x, g.y = this.Ja.y, this.Rb = !0) : (g.x = this.ea.x, g.y = this.ea.y, this.sb = !0);
         g.su(5);
         this.Xa.U(g);
         z.O(E.Pl);
         this.Zj(f);
         0 !== this.Rd && this.dc.Fd(this, this.kn, null, 0.3);
         return
        }
      var L = s.yk,
       Da = 2 * L,
       c = function(a, b) {
        return R.ff(a.Fa.x, a.Fa.y, a.Ka.x, a.Ka.y, b.b.x - L, b.b.y - L, Da, Da) || R.ff(a.Aa.x, a.Aa.y, a.Ba.x, a.Ba.y, b.b.x - L, b.b.y - L, Da, Da)
       };
      k = 0;
      for (e = this.Sg.length; k < e; k++) h = this.Sg[k], h.update(a), f = g = !1, 2 !== this.A ? (g = !this.Qb && c(h, this.ia)) ? f = !0 : g = !this.Rb && c(h, this.xa) : g = !this.sb && c(h, this.R),
       g ? 2 !== this.A ? f ? this.un(h, this.ia, a) : this.un(h, this.xa, a) : this.un(h, this.R, a) : h.ou = !1;
      var F = s.hp * (this.Na && !this.$f ? -1 : 1),
       W = s.gp;
      0 === this.A && (this.cc && b(this.ia), this.nc && b(this.xa));
      if (1 === this.A) {
       if (this.cc || this.nc) b(this.ia), b(this.xa)
      } else this.ac && b(this.R);
      if (!this.sb && (f = s.tl, this.Wn ? 0 < this.Fh && (this.Fh = u.hf(this.Fh, 0, 1, a), 0 >= this.Fh && (k = new G(this.target.x, this.target.y), this.R.b.Ma(k) > f ? (this.Wn = !1, this.target.$z(), z.O(E.Vl)) : this.Fh = 1)) : (k = new G(this.target.x, this.target.y), this.R.b.Ma(k) <
        f && (this.Wn = !0, this.target.aA(), z.O(E.Wl), this.Fh = 1)), 0 !== this.Rd && !this.as && this.Lx(this.ea, this.Mb, this.ed, this.ac, this.target, this.R))) {
       this.sb = this.as = !0;
       this.Zx();
       return
      }
      k = 2 === this.A && this.po(this.R) && !this.sb;
      f = 2 !== this.A && this.po(this.ia) && !this.Qb;
      e = 2 !== this.A && this.po(this.xa) && !this.Rb;
      if (k || f || e)
       if (k && (this.sb = !0), f && (this.Qb = !0), e && (this.Rb = !0), 0 !== this.Rd) {
        if (2 != this.A && this.Qb && this.Rb) return;
        this.kn();
        return
       }
      if (0 !== this.J && 1 === this.J && !this.sb && null != this.ac && this.ea.y < s.Gk && this.ea.x >
       s.Fk) {
       k = this.J = 0;
       for (e = this.yf.length; k < e; k++) g = this.yf[k], 1 === g.J && g.S(0);
       k = 0;
       for (e = this.Wd.length; k < e; k++) g = this.Wd[k], 1 === g.J && g.S(0)
      }
      if (this.Sm && !this.ne && (this.Qt(), k = new G(0, 0), f = G.add(this.pk, this.aa.b), g = (k = this.Cs(k, f.x, f.y)) ? k.ta : null)) {
       m = !1;
       this.Na && this.Na.eb(this.Na.Mn() ? 1 : 0).af(f.x, f.y, !0) && (m = !0);
       if (this.ac || 2 != this.A && (this.cc || this.nc))
        for (k = 0, e = this.bubbles.length; k < e; k++) {
         h = this.bubbles[k];
         h = s.Ak;
         n = 2 * h;
         if (this.ac && R.Db(f.x, f.y, this.R.b.x - h, this.R.b.y - h, n, n)) {
          m = !0;
          break
         }
         if (this.cc &&
          R.Db(f.x, f.y, this.ia.b.x - h, this.ia.b.y - h, n, n)) {
          m = !0;
          break
         }
         if (this.nc && R.Db(f.x, f.y, this.xa.b.x - h, this.xa.b.y - h, n, n)) {
          m = !0;
          break
         }
        }
       k = 0;
       for (e = this.Yb.length; k < e; k++) h = this.Yb[k], h.Xb && h.Xb.af(f.x, f.y, !0) && (m = !0);
       k = 0;
       for (e = this.fc.length; k < e; k++)
        if (this.fc[k].oo(f.x, f.y)) {
         m = !0;
         break
        }
       k = 0;
       for (e = this.Ra.length; k < e; k++) {
        h = this.Ra[k];
        if (h.Ac.visible || h.Bc.visible) {
         m = !0;
         break
        }
        if (G.Ma(f.x, f.y, h.ld.x, h.ld.y) <= s.ae || G.Ma(f.x, f.y, h.ld.x, h.ld.y) <= s.ae) {
         m = !0;
         break
        }
       }
       k = 0;
       for (e = this.Ga.length; k < e; k++) {
        r = this.Ga[k];
        if (r.d && R.Db(f.x, f.y, r.x - s.Yc, r.y - s.Yc, 2 * s.Yc, 2 * s.Yc)) {
         m = !0;
         break
        }
        if (0 < r.f && (R.Db(f.x, f.y, r.x - s.Fe, r.y - s.Fe, 2 * s.Fe, 2 * s.Fe) || r.jf !== J.j)) {
         m = !0;
         break
        }
       }
       m || (g.highlighted = !0)
      }
      e = u.od(this.Ue, 0, 1, a);
      this.Ue = e.value;
      e.rd && (0 === this.Rd ? (this.Rd = 1, this.hide(), this.show(), this.Ue = J.Kk) : this.Rd = J.j)
     },
     Hn: function(a, b, c, k) {
      var d = s.Bk,
       e = 2 * d;
      return R.Db(b.x, b.y, a.x - d, a.y - d, e, e) ? (c && this.Rj(a.x, a.y), k.visible = !0, z.O(E.Ml), a.qo = !0, a.Ht(0), this.Im(), !0) : !1
     },
     Lx: function(a, b, c, k, d, e) {
      return P.sh(a, d) ? (d.cA(), z.O(d.cs),
       k && (a === this.ED ? this.HE() : this.jg(!1)), this.Zj(e), a.te = !0, b.Y = b.fa = 1, c.Y = c.fa = 1, b = new Z, b.C(A.Oa(a.x, a.y, A.D.LINEAR, 0)), b.C(A.Oa(d.x, d.y + 10, A.D.LINEAR, 0.1)), b.C(A.Cj(0.71, 0.71, A.D.LINEAR, 0)), b.C(A.Cj(0, 0, A.D.LINEAR, 0.1)), b.C(A.za(L.lb.copy(), A.D.LINEAR, 0)), b.C(A.za(L.Fb.copy(), A.D.LINEAR, 0.1)), a.Kb(b, 0), a.S(0), b.ab = this.Xa.ye(), this.Xa.U(a), !0) : !1
     },
     yB: function() {
      if (this.vd) {
       this.vd.Pb.S(0);
       this.vd.Pb.visible = !0;
       var a = new G(0, s.lm);
       a.rotate(K.ec(this.vd.rotation));
       this.R.b.x = this.vd.x;
       this.R.b.y = this.vd.y;
       this.R.b.add(a);
       this.R.va.qa(this.R.b);
       this.R.zc.x = 0;
       this.R.zc.y = -1;
       this.R.zc.rotate(K.ec(this.vd.rotation));
       this.R.zc.multiply(this.BA);
       this.R.uc.qa(this.R.zc);
       this.R.uc.Xm(60);
       this.R.va.qa(this.R.b);
       this.R.va.Za(this.R.uc);
       this.vd = null
      }
     },
     Uw: function() {
      this.Rd = 0;
      this.Ue = J.Kk
     },
     yy: function() {
      return 0 === this.Rd
     },
     Zj: function(a) {
      for (var b = 0, c = this.Ga.length; b < c; b++) {
       var k = this.Ga[b],
        d = k.ta;
       d && (d.gb === this.R || d.gb === this.ia && a || d.gb === this.xa && !a) && (d.zb === J.j ? (d.Co(d.Ca.length - 2), this.Zi()) : d.Js = !0, k.Jc &&
        k.pg && this.Ko(k))
      }
     },
     Im: function() {
      this.Qf += 1
     },
     Zi: function() {
      this.Qf -= 1;
      this.dg = 0
     },
     hx: function() {
      this.di = 100 * Math.max(0, 30 - this.time);
      this.di /= 10;
      this.di *= 10;
      this.tB = 1E3 * this.qg;
      this.gk = Math.ceil(this.di + this.tB)
     },
     Zx: function() {
      this.dc.Pm();
      this.ac && this.jg(!1);
      this.hx();
      this.Zj(!1);
      var a = this;
      I.ju && this.dc.Fd(this, function() {
       F.ra(F.v.pl, {
        Eb: a.qg,
        time: a.time,
        gk: a.gk,
        ws: 1 / a.jh.Fc
       })
      }, null, 1);
      this.dc.Fd(this, function() {
       z.No(E.Cd)
      }, null, 1.5);
      this.dc.Fd(this, function() {
       this.jh.bo.call(this.jh)
      }, null, 1.8)
     },
     kn: function() {
      this.dc.Pm();
      this.target.Vz();
      z.O(E.Xl);
      this.dc.Fd(this, function() {
       this.jh.xz.call(this.jh);
       F.ra(F.v.Wv, {
        time: this.time
       })
      }, null, 1)
     },
     B: function() {
      var a = N.context;
      a.setTransform(1, 0, 0, 1, 0, 0);
      a.clearRect(0, 0, s.pb, s.$a);
      this.wc();
      this.aa.Ww();
      this.back.Uu(this.aa.b);
      this.back.B();
      var b, c;
      this.md > s.$a && (c = this.ko.u[0].y, b = this.ko.l[0], a.drawImage(this.ko.rc, b.x, b.y + 2, b.N, b.V - 4, 0, c + 2, b.N, b.V - 4));
      a = 0;
      for (b = this.ie.length; a < b; a++) this.ie[a].B();
      a = 0;
      for (b = this.Id.length; a < b; a++) this.Id[a].B();
      this.ue && this.ue.B();
      this.Na && this.Na.B();
      this.target.B();
      a = 0;
      for (b = this.yf.length; a < b; a++) this.yf[a].B();
      a = 0;
      for (b = this.Wd.length; a < b; a++) c = this.Wd[a], 2 !== c.J && c.B();
      a = 0;
      for (b = this.Xj.length; a < b; a++) this.Xj[a].B();
      a = 0;
      for (b = this.Ra.length; a < b; a++) this.Ra[a].B();
      a = 0;
      for (b = this.bubbles.length; a < b; a++) this.bubbles[a].B();
      a = 0;
      for (b = this.fc.length; a < b; a++) this.fc[a].B();
      a = 0;
      for (b = this.Yb.length; a < b; a++) this.Yb[a].B();
      a = 0;
      for (b = this.Sg.length; a < b; a++) this.Sg[a].B();
      a = 0;
      for (b = this.og.length; a < b; a++) c = this.og[a],
       c.y -= 25, c.B(), c.y += 25;
      c = this.Ga;
      a = 0;
      for (b = c.length; a < b; a++) c[a].Bx();
      for (a = 0; a < b; a++) c[a].B();
      a = 0;
      for (b = this.Eb.length; a < b; a++) this.Eb[a].B();
      this.sb || this.vd || (this.ea.x = this.R.b.x, this.ea.y = this.R.b.y, this.ea.B(), null != this.xb.yb && this.xb.B());
      2 !== this.A && (this.Qb || (this.Ia.x = this.ia.b.x, this.Ia.y = this.ia.b.y, this.Ia.B()), this.Rb || (this.Ja.x = this.xa.b.x, this.Ja.y = this.xa.b.y, this.Ja.B()));
      a = 0;
      for (b = c.length; a < b; a++) {
       var k = c[a];
       k.Jc && k.Fx()
      }
      this.Xa.B();
      this.Dx();
      this.aa.ix();
      this.rg.B();
      a = 0;
      for (b =
       this.Wd.length; a < b; a++) c = this.Wd[a], 2 === c.J && c.B();
      this.vc()
     },
     Dx: function() {
      for (var a = s.Jk, b = 0; b < J.$c; b++) {
       var c = this.kj[b],
        k = c.length;
       if (0 < k) {
        for (var d = 1, e = null, f = [], g = 0, h = 0; h < k; h++) e = c[h], 0 === h && (f[g++] = e.start), f[g++] = e.end;
        h = null;
        k *= 2;
        c = [];
        e = 1 / k;
        for (g = 0;;) {
         1 < g && (g = 1);
         h = G.ex(f, g);
         c.push(h);
         if (1 === g) break;
         g += e
        }
        f = a / k;
        e = [];
        h = 0;
        for (g = k - 1; h < g; h++) {
         var l = d,
          m = h === k - 1 ? 1 : d + f,
          p = c[h],
          n = c[h + 1],
          q = G.Za(n, p);
         q.normalize();
         var r = G.gA(q),
          q = G.ut(q),
          z = G.add(p, G.multiply(r, l)),
          l = G.add(p, G.multiply(q, l));
         e.push(l);
         e.push(z);
         r = G.add(n, G.multiply(r, m));
         m = G.add(n, G.multiply(q, m));
         e.push(m);
         e.push(r);
         d += f
        }
        N.Sx(e, L.tk.Qi)
       }
      }
     },
     wn: function(a, b, c, k) {
      var d = s.Hi;
      if (c.iA(a.x - d, a.y - d, a.x + d, a.y + d)) {
       var e = new G(0, 0),
        f = new G(0, 0),
        g = new G(c.x, c.y);
       e.x = a.x - a.ca.N / 2;
       f.x = a.x + a.ca.N / 2;
       e.y = f.y = a.y;
       0 != a.a && g.pa(-a.a, a.x, a.y);
       g.y < e.y && R.Sh(g.x - c.ca.N / 2, g.y - c.ca.V / 2, g.x + c.ca.N / 2, g.y + c.ca.V / 2, e.x, e.y - d, f.x, f.y) && (c = new G(0, -(2 * d * (d - (e.y - g.y)) / d)), c.rotate(a.a), b.Hm(c, k))
      }
     },
     un: function(a, b, c) {
      if (!a.ou) {
       var k = G.Za(b.va, b.b),
        d = b.va.copy();
       d.pa(-a.a, a.x, a.y);
       d = d.y < a.y ? -1 : 1;
       k = Math.max(40 * k.kd(), s.cv) * d;
       d = G.ut(G.Tx(a.a));
       d.multiply(k);
       b.b.pa(-a.a, a.x, a.y);
       b.va.pa(-a.a, a.x, a.y);
       b.va.y = b.b.y;
       b.b.pa(a.a, a.x, a.y);
       b.va.pa(a.a, a.x, a.y);
       b.Hm(d, c);
       a.S(0);
       z.O(E.Ll)
      }
     },
     Jz: function(a, b) {
      a.S(0);
      z.O(p.fb(E.Yl, E.Zl));
      var c = C.Jd(E.Ci),
       c = new h(5, c, K.tg(a.a) - 90);
      c.ab = this.Xa.st();
      var k = new G(a.x + s.El, a.y);
      k.pa(a.a - Math.PI / 2, a.x, a.y);
      c.x = k.x;
      c.y = k.y;
      c.su(5);
      this.Xa.U(c);
      this.sb || this.wn(a, this.R, this.ea, b);
      2 !== this.A && (this.Qb || this.wn(a, this.ia, this.Ia,
       b), this.Rb || this.wn(a, this.xa, this.Ja, b))
     },
     zb: function(a, b, c, k) {
      for (var d = 0, e = 0, f = this.Ga.length; e < f; e++) {
       var g = this.Ga[e],
        h = g.ta;
       if (h && h.zb === J.j)
        for (var l = s.Yc, m = 2 * l, n = 0, q = h.Ca.length - 1; n < q; n++) {
         var r = h.Ca[n],
          C = h.Ca[n + 1],
          u = !1;
         a ? r.va.x !== J.If && (u = R.Sh(p.at(r.b.x, r.va.x, C.b.x, C.va.x), p.at(r.b.y, r.va.y, C.b.y, C.va.y), p.Zs(r.b.x, r.va.x, C.b.x, C.va.x), p.Zs(r.b.y, r.va.y, C.b.y, C.va.y), a.ga, a.ha, a.ga + a.width, a.ha + a.height)) : u = g.d && R.ff(b.x, b.y, c.x, c.y, g.x - l, g.y - l, m, m) ? !1 : p.Hy(b.x, b.y, c.x, c.y, r.b.x, r.b.y,
          C.b.x, C.b.y);
         if (u) return d++, g.Jc && g.pg && this.Ko(g), z.O(E.$l + h.wo), h.Co(n), this.Zi(), k && (h.fe = 0, h.Jt(n)), d
        }
      }
      return d
     },
     Ko: function(a) {
      z.O(E.em);
      a.Jc = !1;
      var b = Q.create(E.Ig, 11);
      b.ya();
      var c = new Z;
      this.Na && !this.$f ? (c.C(A.Oa(a.c.x, a.c.y, A.D.Hb, 0)), c.C(A.Oa(a.c.x, a.c.y + 50, A.D.Hb, 0.3)), c.C(A.Oa(a.c.x, a.c.y - s.$a, A.D.Ad, 1))) : (c.C(A.Oa(a.c.x, a.c.y, A.D.Hb, 0)), c.C(A.Oa(a.c.x, a.c.y - 50, A.D.Hb, 0.3)), c.C(A.Oa(a.c.x, a.c.y + s.$a, A.D.Ad, 1)));
      c.C(A.re(0, 0, 0));
      c.C(A.re(p.fb(-120, 120), 0, 1));
      b.Kb(c, 0);
      b.S(0);
      b.x = a.c.x;
      b.y = a.c.y;
      b.anchor = M.T;
      c.ab = this.Xa.ye();
      this.Xa.U(b)
     },
     sB: function(a) {
      z.O(E.fm);
      for (var b = 0, c = this.Ga.length; b < c; b++) {
       var k = this.Ga[b],
        d = k.ta;
       d && d.gb === this.R && (d.zb !== J.j ? k.ks() : (d.Co(d.Ca.length - 2), this.Zi(), d.Xf = !1), k.Jc && k.pg && a !== k && this.Ko(k))
      }
      a.Jc = !1;
      this.sb = !0;
      b = Q.create(E.Ig, 12);
      b.ya();
      this.ea.anchor = this.ea.oa = M.T;
      this.ea.x = 0;
      this.ea.y = -5;
      b.U(this.ea);
      c = new Z;
      this.Na && !this.$f ? (c.C(A.Oa(a.c.x, a.c.y - 10, A.D.Hb, 0)), c.C(A.Oa(a.c.x, a.c.y + 70, A.D.Hb, 0.3)), c.C(A.Oa(a.c.x, a.c.y - s.$a, A.D.Ad, 1))) :
       (c.C(A.Oa(a.c.x, a.c.y - 10, A.D.Hb, 0)), c.C(A.Oa(a.c.x, a.c.y - 70, A.D.Hb, 0.3)), c.C(A.Oa(a.c.x, a.c.y + s.$a, A.D.Ad, 1)));
      b.Kb(c, 0);
      b.S(0);
      b.x = a.c.x;
      b.y = a.c.y - 10;
      b.anchor = M.T;
      c.ab = this.Xa.ye();
      this.Xa.U(b);
      0 !== this.Rd && this.dc.Fd(this, this.kn, null, 2)
     },
     jg: function(a) {
      2 !== this.A ? a ? (this.cc = null, this.cd.visible = !1, this.Rj(this.Ia.x, this.Ia.y)) : (this.nc = null, this.dd.visible = !1, this.Rj(this.Ja.x, this.Ja.y)) : (this.ac = null, this.bc.visible = !1, this.Rj(this.ea.x, this.ea.y))
     },
     Rj: function(a, b) {
      this.Zi();
      z.O(E.Nl);
      var c =
       new w;
      c.sa(E.al);
      c.ya();
      c.x = a;
      c.y = b;
      c.anchor = M.T;
      var k = c.mc(0.05, Z.ja.Wa, 0, 11);
      c.qc(k).ab = this.Xa.ye();
      c.S(0);
      this.Xa.U(c)
     },
     vn: function(a, b, c) {
      return R.Db(b + this.aa.b.x, c + this.aa.b.y, a.b.x - s.ji, a.b.y - s.ji, s.ki, s.ki) ? (this.jg(a === this.ia), !0) : !1
     },
     Qt: function() {
      for (var a = 0, b = this.Ga.length; a < b; a++) {
       var c = this.Ga[a].ta;
       c && c.zb === J.j && (c.highlighted = !1)
      }
     },
     Cs: function(a, b, c) {
      var k = s.Ik,
       d = null,
       e = k;
      b = new G(b, c);
      c = 0;
      for (var f = this.Ga.length; c < f; c++) {
       var g = this.Ga[c],
        h = g.ta;
       if (h)
        for (var l = 0, m = h.aj.length; l <
         m; l++) {
         var p = h.aj[l],
          n = p.Ma(b);
         n < k && n < e && (e = n, d = g, a.qa(p))
        }
      }
      return d
     },
     ey: function(a, b) {
      var c = null,
       k = Number.MAX_VALUE,
       d = a.copy(),
       e = b.ta;
      if (!e || e.zb !== J.j) return null;
      for (var f = s.Yc, g = 2 * f, h = 0, l = e.Ca.length - 1; h < l; h++) {
       var m = e.Ca[h],
        p = m.b.Ma(d);
       p < k && (!b.d || R.Db(m.b.x, m.b.y, b.x - f, b.y - f, g, g)) && (k = p, c = e, a.qa(m.b))
      }
      return c
     },
     BB: function(a, b, c) {
      if (this.ne) return this.aa.type === v.ad.Jf && (this.us = !0), !0;
      if (c >= J.$c) return !0;
      this.Mj = !1;
      if (this.Na && this.Na.eb(this.Na.Mn() ? 1 : 0).af(a + this.aa.b.x, b + this.aa.b.y, !0)) return this.rn =
       c, !0;
      if (this.ac && this.vn(this.R, a, b) || 2 !== this.A && (this.cc && this.vn(this.ia, a, b) || this.nc && this.vn(this.xa, a, b))) return !0;
      var k = new G(a, b);
      this.dh[c] || (this.dh[c] = !0, this.xe[c].qa(k), this.ro[c].qa(k));
      var d, e, f = this.aa.b,
       k = a + f.x,
       f = b + f.y;
      d = 0;
      for (e = this.Yb.length; d < e; d++) {
       var g = this.Yb[d];
       if (g.Xb && g.vk === J.j && g.Xb.Kj(k, f)) return g.vk = c, !0
      }
      d = 0;
      for (e = this.fc.length; d < e; d++)
       if (g = this.fc[d], g.oo(k, f)) return g.ei = 0.05, g.touch = c, !0;
      var g = null,
       h = !1,
       l = !1;
      d = 0;
      for (e = this.Ra.length; d < e; d++) {
       var m = this.Ra[d],
        p =
        G.Ma(k, f, m.ag.x, m.ag.y),
        n = G.Ma(k, f, m.ld.x, m.ld.y);
       if (p < s.ae && !m.Is() || n < s.ae) {
        for (d += 1; d < e; d++) {
         var g = this.Ra[d],
          q = G.Ma(g.x, g.y, m.x, m.y);
         q + g.Sb <= m.Sb && (h = !0);
         q <= m.Sb + g.Sb && (l = !0)
        }
        m.Ch.x = k;
        m.Ch.y = f;
        m.Mh = c;
        p < s.ae && m.Zt(!0);
        n < s.ae && m.$t(!0);
        g = m;
        break
       }
      }
      e = this.Ra.indexOf(g);
      e != this.Ra.length - 1 && l && !h && (d = new Z, d.C(A.za(L.Fb.copy(), A.D.LINEAR, 0)), d.C(A.za(L.lb.copy(), A.D.LINEAR, 0.2)), h = new Z, h.C(A.za(L.lb.copy(), A.D.LINEAR, 0.2)), h.ab = $.proxy(this.Bz, this), l = g.copy(), l.Mr(h), l.S(0), g.Mr(d), g.S(0), this.Ra[e] =
       l, this.Ra.push(g));
      h = s.Yc;
      l = 2 * h;
      m = s.Fe;
      p = 2 * m;
      d = 0;
      for (e = this.Ga.length; d < e; d++)
       if (g = this.Ga[d], g.d && R.Db(k, f, g.x - h, g.y - h, l, l) && (g.my(k, f), g.yg = c), 0 < g.f && R.Db(k, f, g.x - m, g.y - m, p, p)) return g.jf = c, !0;
      this.Sm && (c = G.Qa(), (k = (g = this.Cs(c, k, f)) ? g.ta : null) && k.highlighted && this.ey(c, g) && this.zb(null, c, c, !1));
      this.target.Pj(a, b) && (this.Mj = !0);
      return !0
     },
     bh: Ia(!0),
     EB: function(a, b, c) {
      if (this.ne) return !0;
      this.dh[c] = !1;
      if (this.Mj && this.target.Pj(a, b)) return this.Mj = !1, F.ra(F.v.xq), !0;
      this.Mj = !1;
      var k, d;
      k = this.aa.b;
      var e = a + k.x,
       f = b + k.y;
      k = 0;
      for (d = this.ie.length; k < d; k++) {
       var g = this.ie[k];
       if (g.oo(e, f)) {
        g.Ho();
        this.ie.splice(k, 1);
        break
       }
      }
      this.Na && this.rn === c && (this.Na.eb(this.Na.Mn() ? 1 : 0).af(a + this.aa.b.x, b + this.aa.b.y, !0) && (this.Na.toggle(), this.Cb(ob.Ap)), this.rn = J.j);
      k = 0;
      for (d = this.Yb.length; k < d; k++)
       if (e = this.Yb[k], e.Xb && e.vk === c && (e.vk = J.j, e.Xb.Lj(a + this.aa.b.x, b + this.aa.b.y))) return !0;
      k = 0;
      for (d = this.Ra.length; k < d; k++) a = this.Ra[k], a.Mh === c && (a.Mh = J.j, a.Jo = J.j, a.Zt(!1), a.$t(!1));
      k = 0;
      for (d = this.Ga.length; k < d; k++) a =
       this.Ga[k], a.d && a.yg === c && (a.yg = J.j), 0 < a.f && a.jf === c && (a.jf = J.j);
      return !0
     },
     DB: function(a, b, c) {
      if (this.ne || c >= J.$c) return !0;
      var k = new G(a, b),
       d, e;
      if (10 < this.xe[c].Ma(k))
       for (d = 0, e = this.fc.length; d < e; d++) {
        var g = this.fc[d];
        g.touch === c && 0 !== g.ei && (g.ei = 0)
       }
      this.pk.qa(k);
      a = new G(a + this.aa.b.x, b + this.aa.b.y);
      d = 0;
      for (e = this.Ra.length; d < e; d++)
       if (b = this.Ra[d], b.Mh === c) {
        c = new G(b.x, b.y);
        c.Ma(a) < b.Sb / 10 && b.Ch.qa(a);
        d = G.Za(b.Ch, c);
        k = G.Za(a, c).gg() - d.gg();
        k > Math.PI ? k -= 2 * Math.PI : k < -Math.PI && (k += 2 * Math.PI);
        b.ag.pa(k,
         b.x, b.y);
        b.ld.pa(k, b.x, b.y);
        b.rotation += K.tg(k);
        d = 0 < k ? E.bm : E.cm;
        0.07 > Math.abs(k) && (d = J.j);
        b.Jo != d && d != J.j && (z.O(d), b.Jo = d);
        d = 0;
        for (e = this.Ga.length; d < e; d++) {
         var g = this.Ga[d],
          h = new G(g.x, g.y);
         h.Ma(c) <= b.Sb + 5 * this.P && (h.pa(k, b.x, b.y), g.x = h.x, g.y = h.y, g.ta && (g.ta.Ya.b.qa(h), g.ta.Ya.Oc.qa(h)))
        }
        d = 0;
        for (e = this.fc.length; d < e; d++) g = this.fc[d], h = new G(g.x, g.y), h.Ma(c) <= b.Sb + 5 * this.P && (h.pa(k, b.x, b.y), g.x = h.x, g.y = h.y, g.rotation += K.tg(k), g.Tb());
        d = 0;
        for (e = this.bubbles.length; d < e; d++) g = this.bubbles[d], h = new G(g.x,
         g.y), h.Ma(c) <= b.Sb + 10 * this.P && g !== this.ac && g !== this.nc && g !== this.cc && (h.pa(k, b.x, b.y), g.x = h.x, g.y = h.y);
        R.Db(this.target.x, this.target.y, b.x - b.size, b.y - b.size, 2 * b.size, 2 * b.size) && (h = new G(this.target.x, this.target.y), h.pa(k, b.x, b.y), this.target.x = h.x, this.target.y = h.y);
        b.Ch.qa(a);
        return !0
       }
      d = 0;
      for (e = this.Ga.length; d < e; d++)
       if (b = this.Ga[d]) {
        if (b.d && b.yg === c) return b.ly(a), !0;
        if (0 < b.f && b.jf === c) return b.h ? b.y = p.Wf(a.y, b.Fj, b.Ej) : b.x = p.Wf(a.x, b.Fj, b.Ej), b.ta && (d = b.ta.Ya, d.b.x = d.Oc.x = b.x, d.b.y = d.Oc.y = b.y), !0
       }
      if (this.dh[c]) {
       d = new f(G.add(this.xe[c], this.aa.b), G.add(k, this.aa.b), 5, 5, L.Xu.copy());
       a = this.kj[c];
       b = 0;
       a.push(d);
       d = 0;
       for (e = a.length; d < e; d++) g = a[d], b += this.zb(null, g.start, g.end, !1);
       0 < b && (this.Xx = !1, this.Ao = 0 < this.Ao && 0 < this.bk ? this.Ao + b : b, this.bk = 0.1);
       this.ro[c].qa(this.xe[c]);
       this.xe[c].qa(k)
      }
      return !0
     },
     CB: function(a, b, c) {
      if (c > J.$c) return !1;
      this.pk.x = a;
      this.pk.y = b;
      return !0
     },
     Cb: function() {
      Qa.toggle();
      this.$f = Qa.Os();
      z.O(this.$f ? E.Li : E.Mi);
      for (var a = 0, b = this.Id.length; a < b; a++) {
       var c = this.Id[a];
       Qa.Os() ? c.S(T.Si.Je) : c.S(T.Si.Dr)
      }
     },
     vA: function(a) {
      for (var b = 0, c = this.Yb.length; b < c; b++) this.Yb[b].Sc === a && this.Yb[b].xA()
     }
    })
   }(Eb, Fb, Gb, Hb, Ib, Mb, Nb, Ob, Pb, Qb, Rb, Sb, ca, oa, Tb, Ub, Vb, Wb, ea, Xb, Na, ra, na, w, K, za, ma, O, aa, pa, H, U, Pa, V, Q, nb, ib, Ba, Ca, mb, jb, ia, S, Y, ba, Xa, va, Zb, Ya, $b, fa, ha, F, ac, ka, bc, {
    $B: 0,
    gD: 1,
    qC: 2,
    bD: 3,
    cD: 4,
    tD: 5,
    bC: 6,
    aC: 7,
    hD: 8,
    jD: 9,
    iD: 10,
    vD: 11,
    cC: 12,
    XC: 13,
    RC: 14,
    oD: 15,
    dC: 16,
    aD: 17,
    QC: 18
   }, cc, dc),
   hc = function(a, c, d, b, f) {
    var e = a.extend({
     init: function() {
      this.n()
     },
     B: function() {
      for (var a = this.children, h =
        a.length, l = 0; l < h; l++) {
       var n = a[l];
       n.visible && n.B()
      }
      h = this.eb(e.Wc.Xc);
      0 < h.Ue && (a = h.Ue / f.Kk, h.yy() && (a = 1 - a), h = b.context, a = new d(1, 1, 1, a), h.fillStyle = a.Xh(), h.fillRect(0, 0, c.pb, c.$a))
     },
     show: function() {
      this.n();
      var a = this.eb(e.Wc.Xc);
      a.Vw && a.Uw()
     }
    });
    e.Wc = {
     Xc: 0,
     VC: 1,
     ZC: 2,
     TC: 3,
     WC: 4,
     $C: 5
    };
    return e
   }(function(a, c) {
    return a.extend({
     init: function() {
      this.n();
      this.width = c.pb;
      this.height = c.$a
     }
    })
   }(ea, H), H, aa, Y, K),
   ic = function(a, c, d, b, f) {
    return a.extend({
     init: function(a) {
      this.n(a);
      this.Fm = !1
     },
     bd: function() {
      this.n();
      b.Ph(f.Rl);
      this.rx();
      this.uy();
      this.lu(0)
     },
     rx: function() {
      var a = new d,
       b = new c;
      b.jh = this;
      b.Vw = this.Fm;
      this.Fm = !1;
      a.ce(b, d.Wc.Xc);
      this.Sw(a, 0)
     },
     uy: function() {
      this.Eo(!1);
      this.Gy()
     },
     Gy: function() {
      this.Kn = !1
     },
     rE: function() {
      this.Kn = !1
     },
     bo: function() {
      b.O(f.im);
      this.hd()
     },
     xz: function() {
      this.$j()
     },
     Eo: function(a) {
      this.Kn = a;
      var c = this.Ze(0);
      c && (c = c.eb(d.Wc.Xc)) && (c.Zb = !a, c.hi = !a, a ? b.Rz() : b.sA())
     },
     ig: function() {
      var a = this.Ze(0);
      a && (a = a.eb(d.Wc.Xc)) && (a.Ue = 0, this.Eo(!0))
     },
     kg: function() {
      this.Eo(!1)
     },
     $j: function() {
      this.vx(0);
      this.Fm = !0;
      this.bd()
     },
     Gj: function(a, b) {
      if (this.n(a, b)) return !0;
      var c = this.Ze(0);
      return c && (c = c.eb(d.Wc.Xc)) && c.Zb ? (c.BB(a, b, 0), !0) : !1
     },
     bt: function(a, b) {
      if (this.n(a, b)) return !0;
      var c = this.Ze(0);
      return c && (c = c.eb(d.Wc.Xc)) && c.Zb ? (c.CB(a, b, 0), !0) : !1
     },
     ct: function(a, b) {
      if (this.n(a, b)) return !0;
      var c = this.Ze(0);
      return c && (c = c.eb(d.Wc.Xc)) && c.Zb ? (c.DB(a, b, 0), !0) : !1
     },
     fg: function(a, b) {
      if (this.n(a, b)) return !0;
      var c = this.Ze(0);
      return c && (c = c.eb(d.Wc.Xc)) && c.Zb ? (c.EB(a, b, 0), !0) : !1
     },
     bh: function(a, b) {
      if (this.n(a,
        b)) return !0;
      var c = this.Ze(0);
      return c && (c = c.eb(d.Wc.Xc)) && c.Zb ? (c.bh(a, b, 0), !0) : !1
     }
    })
   }(Wa, gc, hc, na, w, K),
   $a = function(a, c, d, b, f) {
    return new(c.extend({
     init: function(a) {
      this.n(a)
     },
     ru: function(b, c) {
      f.Ry(b, c);
      this.Se === a.ba.Jg && this.bd();
      var h = this.eb(3);
      h && h.hs();
      h = new d(this);
      this.ce(h, 3);
      this.Lw(3)
     },
     ig: function() {
      var a = this.eb(3);
      a && a.ig()
     },
     kg: function() {
      var a = this.eb(3);
      a && a.kg()
     },
     $j: function() {
      var a = this.eb(3);
      a && a.$j()
     },
     vu: function() {
      this.gs()
     },
     By: function() {
      if (this.Se === a.ba.Jg) return !1;
      var b = this.eb(3);
      return !b || b.Se === a.ba.Jg || b.Kn ? !1 : !0
     },
     kt: function(a) {
      this.n(a);
      3 == a && this.ux(3)
     }
    }))
   }(Wa, Cb, ic, V, Pa),
   ab = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v) {
    function B() {
     h.ra(h.v.Hl);
     r.Sf()
    }
    var r = {
     nk: function(b) {
      a.ig();
      $(".popupOuterFrame").hide();
      $(".popupInnerFrame").hide();
      $("#popupWindow").fadeIn(500, function() {
       $("#" + b).show();
       $(".popupOuterFrame").fadeIn(500)
      })
     },
     Sf: function() {
      l.O(n.ka);
      $("#popupWindow").fadeOut(500, function() {
       a.kg()
      })
     },
     ku: function() {
      l.O(n.ka);
      r.nk("payDialog")
     },
     nB: function() {
      var a = $("#slowComputer");
      a.children("img").remove();
      var c = $(m.la({
        text: q.X(p.Rq),
        Ec: v.T,
        width: 1200 * b.Gb,
        scale: 1.25 * b.bb
       })),
       d = $(m.la({
        text: q.X(p.Qq),
        width: 1200 * b.Gb,
        scale: 0.8 * b.bb
       }));
      d.css("margin-left", b.i(30));
      a.append(c).append(d);
      m.la({
       text: q.X(p.rq),
       Lc: "#slowComputerBtn img",
       scale: 0.8 * b.bb
      });
      r.nk("slowComputer")
     }
    };
    h.subscribe(h.v.Ib, function() {
     m.la({
      text: q.X(p.zm),
      Ab: "payMessage",
      width: b.i(650),
      Ec: v.T,
      scale: 0.8 * b.bb
     });
     m.la({
      text: q.X(p.mi),
      Ab: "payBtn",
      scale: 0.6 * b.bb
     })
    });
    $(function() {
     $("#payImg").click(B);
     $("#payBtn").click(B);
     $("#payClose").click(r.Sf);
     $("#slowComputerBtn").click(r.Sf);
     $("#missingOkBtn").click(r.Sf);
     $("#resetNoBtn").click(r.Sf)
    });
    return r
   }($a, ya, Ha, H, T, ua, Ra, U, na, w, ha, ga, F, V, Q),
   pb = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v) {
    function B(a) {
     if (a === w) {
      a = J[a];
      var b = a.index;
      a.uh() && (n.O(q.ka), !1 === a.of ? l.ra(l.v.Hl) : h.uj(b) ? (p.la({
        text: m.X(u.lp),
        Ab: "missingLine1",
        ua: !0
       }), p.la({
        text: h.Wh(b) - h.xf(),
        Ab: "missingCount",
        ua: !0
       }), p.la({
        text: m.X(u.mp),
        Ab: "missingLine2",
        ua: !0
       }), p.oc({
        text: m.X(u.np),
        Ab: "missingLine3",
        ua: !0
       }),
       p.la({
        text: m.X(u.dw),
        Ab: "missingOkBtn",
        ua: !0
       }), n.O(q.ka), v.nk("missingStars")) : H.Hz(b))
     }
    }

    function r(a) {
     F = a;
     la.setTransform(1, 0, 0, 1, 0, 0);
     la.clearRect(0, 0, W.width, W.height);
     var b = A + a,
      c = f.i(130);
     la.translate(b, c);
     for (var k = 0, d = 0; d < J.length; d++) {
      var e = null,
       g = a + k,
       h = J[d];
      h.visible && (g > f.i(-100) && g < f.i(100) && (e = -1 * (A + a) - k + f.i(452)), la.translate(k, 0), h.B(la, e), la.translate(-k, 0), k += L)
     }
     la.translate(-b, -c)
    }

    function x(a) {
     function b() {
      if (P) {
       var a = Date.now() - V;
       F = d.Ve(a, O, U - O, c);
       r(F);
       5 > Math.abs(F - U) && (G = !0);
       a >=
        c ? (s != J[w] && (s = J[w], s.Sr(la)), s && s.Jh && s.Jh(), P = !1) : window.requestAnimationFrame(b)
      }
     }
     0 > a && (a = 0);
     a > J.length - 1 && (a = J.length - 1);
     var c = a == w ? 0 : 550;
     s && s != J[a] && s.Lh && s.Lh();
     w = a;
     l.ra(l.v.lr, J[w].index);
     O = F;
     U = -1 * L * a;
     V = Date.now();
     P = !0;
     b();
     M.find("div").toggleClass("boxNavDisabled", 0 >= a);
     Fa.find("div").toggleClass("boxNavDisabled", a >= J.length - 1)
    }

    function k() {
     P = !1;
     null != s && s.$r()
    }

    function D(a, b) {
     return G && null != s && s.uh() && a > f.i(340) && a < f.i(680) && b > f.i(140) && b < f.i(460) ? !0 : !1
    }

    function C(a) {
     k();
     T = a;
     N = F;
     S = !0
    }

    function I(a,
     b) {
     S ? (k(), Q = a - T, 5 < Math.abs(Q) && (G = !1, r(N + Q))) : $(W).toggleClass("ctrPointer", D(a, b))
    }

    function z(a, b) {
     if (S)
      if (k(), Q = a - T, Math.abs(Q) > L / 2) {
       R = F;
       var c = Math.round(-1 * R / L);
       x(c)
      } else 5 < Math.abs(Q) ? (c = f.i(30), x(Q > c ? w - 1 : Q < -1 * c ? w + 1 : w)) : (c = J[w], c.uh() && (c.bf || x(w), D(a, b) && B(w)));
     S = !1
    }

    function E(a, b) {
     z(a, b)
    }
    var J = [],
     w = 0,
     F = 0,
     G = !0,
     L = f.i(600),
     A = f.i(312),
     s = null,
     H = null,
     W, la, M, Fa, K = new c(a.Vc, "boxPanel", "menuBackground", !0);
    $(function() {
     W = document.getElementById("boxCanvas");
     la = W.getContext("2d");
     W.width = f.i(1024);
     W.height =
      f.i(576);
     M = $("#boxNavBack").click($.proxy(function() {
      0 < w && (x(w - 1), n.O(q.ka))
     }, this));
     Fa = $("#boxNavForward").click($.proxy(function() {
      w < J.length - 1 && (x(w + 1), n.O(q.ka))
     }, this));
     $("#boxUpgradePlate").click(function() {
      B(w)
     })
    });
    l.subscribe(l.v.Am, function(a) {
     J = a;
     K.uo()
    });
    K.init = function(a) {
     H = a
    };
    K.Kh = function() {
     this.bd()
    };
    K.ao = function() {
     this.hd()
    };
    K.rB = function() {
     x(w + 1)
    };
    K.qB = function() {
     x(0)
    };
    K.ax = function() {
     null != s && null != la && (s.$r(), s.Sr(la))
    };
    var P = !1,
     O, U, V, S = !1,
     R = 0,
     N = 0,
     Q = 0,
     T = null;
    K.pd = null;
    K.bd = function() {
     this.pd ||
      (this.pd = new b({
       element: W,
       ho: $.proxy(C, this),
       co: $.proxy(I, this),
       $n: $.proxy(z, this),
       eo: $.proxy(E, this),
       mh: function() {
        return e.Fs()
       }
      }));
     this.pd.bd()
    };
    K.hd = function() {
     this.pd && this.pd.hd()
    };
    K.uo = function() {
     x(w)
    };
    return K
   }(ya, Ha, xa, Ua, H, Va, T, ua, U, na, w, ha, ga, F, ab),
   Ra = function(a, c, d, b, f, e, g, h, l, n, q) {
    var m = new function() {
     function p() {
      if (r) {
       v.cb = 0;
       v.Nb = 1;
       var k = e.Vr,
        f = e.cx,
        g, m, p, q, x;
       B = [];
       g = 0;
       for (m = f.length; g < m; g++) {
        p = f[g];
        q = b.Wh(g);
        x = b.uj(g);
        switch (p) {
         case d.nv:
          p = new c(g, k[g], q, x, p);
          p.vy() || (p = null);
          break;
         case d.Cq:
          p = new h(g, k[g], q, x, p);
          break;
         case d.sl:
          p = new l(g, k[g], q, x, p);
          break;
         case d.vm:
          p = new n(g, k[g], q, x, p);
          break;
         default:
          p = new a(g, k[g], q, x, p)
        }
        p && B.push(p)
       }
       u()
      }
     }

     function u() {
      var a = [],
       b, c, d;
      b = 0;
      for (d = B.length; b < d; b++) c = B[b], c.index = b, c.visible && a.push(c);
      f.ra(f.v.Am, a)
     }
     var v = this,
      B = [];
     f.subscribe(f.v.lr, function(a) {
      m.cb = a;
      m.Nb = 1
     });
     var r = !1;
     this.Ed = function() {
      r = !0;
      p()
     };
     v.cb = 0;
     v.Nb = 1;
     var x = !1;
     f.subscribe(f.v.Pg, function(a) {
      x = a
     });
     this.wj = function() {
      return b.Nc(this.cb) <= this.Nb ? !1 : x || !e.eg ? !0 : !e.eg(this.cb,
       this.Nb)
     };
     f.subscribe(f.v.rm, p);
     f.subscribe(f.v.sm, p);
     f.subscribe(f.v.Il, p);
     f.subscribe(f.v.Ck, p);
     this.Mt = function() {
      for (var a = 0, b = 0, c = B.length; b < c; b++) B[b].wh() && a++;
      return a
     };
     this.dA = function() {
      for (var a = 0, c = B.length, d = 0; d < c; d++) B[d].wh() && (a += b.xt(d));
      return a
     };
     this.rA = function() {
      q.qB();
      p();
      q.uo()
     };
     this.Pu = function() {
      var a = B.length,
       c = !1,
       d, e;
      for (d = 1; d < a; d++) e = B[d], !b.uj(d) && e.of && e.bf && (e.bf = !1, c = !0, b.rf(d, 0, 0));
      c && q.uo()
     };
     f.subscribe(f.v.Pg, function(a) {
      a = a || !0 === g.vg;
      var c = e.eg || Ia(!1),
       f, h, l;
      f =
       1;
      for (h = B.length; f < h; f++) switch (l = B[f], l.type) {
       case d.Cq:
        l.visible = !a;
        break;
       case d.sl:
        l.visible = a;
        break;
       default:
        l.of = a || !c(f, 0), l.bf = !l.of || b.uj(f)
      }
      u()
     })
    };
    return m
   }(Ga, zb, qa, ua, U, V, ta, Ab, Bb, gb, pb),
   bb = function(a, c, d, b, f) {
    var e = [],
     g = new Image,
     h = new Image,
     l = {};
    $(function() {
     l.canvas = document.getElementById("levelCanvas");
     l.canvas.width = a.i(1024);
     l.canvas.height = a.i(576)
    });
    l.Px = !1;
    l.Ed = function() {
     for (var a = 0, b = c.Km.length; a < b; a++) {
      var f = new Image;
      f.src = d.Uc + c.Km[a];
      e[a] = f
     }
     g.src = d.Uc + "leveltape_left.png";
     h.src = d.Uc + "leveltape_right.png"
    };
    l.Pc = function(c, d) {
     var f = l.canvas,
      p = f.getContext("2d"),
      u = e[b.cb],
      v = f.width / 2,
      B = v - v * (1 - (d || 0));
     p.save();
     p.setTransform(1, 0, 0, 1, 0, 0);
     p.clearRect(0, 0, f.width, f.height);
     p.restore();
     p.drawImage(u, -1 * B, 0);
     c && p.drawImage(g, v - a.i(26) - B, a.i(10));
     p.save();
     p.translate(f.width, 0);
     p.scale(-1, 1);
     p.drawImage(u, -1 * B, 0);
     p.restore();
     c && p.drawImage(h, v + B, a.i(10))
    };
    l.jo = function(a, b, c) {
     function d() {
      var c = r(Date.now() - g, 0, 1, h);
      1 > c ? (l.Pc(a, e ? 1 - c : c), window.requestAnimationFrame(d)) : (l.Pc(a,
       e ? 0 : 1), e ? $("#levelPanel").show() : $("#levelPanel").hide(), null != b && b())
     }
     var e = null != c ? c : !1,
      g = Date.now(),
      h = 750;
     l.canvas.getContext("2d");
     var r = c ? f.qs : f.eh;
     window.requestAnimationFrame(d)
    };
    l.nx = function(a) {
     l.jo(!1, a, !0)
    };
    l.mx = function(b) {
     var c = $("#tapeRoll"),
      d = $("#levelTape");
     $("#levelResults").fadeOut(400);
     c.css("top", a.i(-14));
     c.delay(400).fadeIn(200, function() {
      function e() {
       var a = Date.now() - h,
        D = f.eh(a, r, g - r, x);
       c.css("top", f.eh(a, B, g - B, x));
       d.css("height", D);
       a < x ? window.requestAnimationFrame(e) : (d.hide(),
        l.Pc(!0), c.fadeOut(400, function() {
         setTimeout(b, 200)
        }))
      }
      var g = a.i(470);
      a.i(553);
      var h = Date.now(),
       B = parseInt(c.css("top"), 10),
       r = a.i(63),
       x = 1E3;
      d.css("height", r);
      d.show();
      window.requestAnimationFrame(e)
     })
    };
    l.Fz = function(b) {
     l.Pc(!0, 0);
     var c = $("#boxCutter");
     c.css("top", a.i(281));
     c.delay(200).fadeIn(200, function() {
      function d() {
       var a = Date.now() - g;
       c.css("top", f.eh(a, h, e - h, l));
       a < l ? window.requestAnimationFrame(d) : c.fadeOut(300, b)
      }
      var e = a.i(-255),
       g = Date.now(),
       h = parseInt(c.css("top"), 10),
       l = 1E3;
      window.requestAnimationFrame(d)
     })
    };
    l.aF = da();
    l.hE = da();
    return l
   }(H, V, T, Ra, xa, U),
   jc = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v, B) {
    function r() {
     var a = parseInt($(this).data("level"), 10);
     if (f.Cy(e.cb, a)) k.Gz(a + 1, B.Px);
     else if (D ? 0 : p.eg && p.eg(e.cb, a)) v.ku();
     else return;
     h.O(l.ka)
    }

    function x() {
     var a = e.cb,
      b = f.Nc(a),
      c, k, d, g;
     for (d = 0; d < b; d++)
      if (c = $("#option" + (d + 1))) d < b ? (c.show(), g = D ? !1 : p.eg ? p.eg(e.cb, d) : !1, k = f.Ye(a, d), null != k ? (k = $("<div class='txt'/>").append($(q.la({
        text: d + 1,
        ua: !0
       }))).append($("<div>").addClass("stars" + k)), c.removeClass("locked purchase").addClass("open ctrPointer").empty().append(k)) :
       c.removeClass("open").addClass("locked").toggleClass("purchase ctrPointer", g).empty()) : c.hide();
     a = f.Cm(e.cb) + "/" + 3 * f.Nc(e.cb);
     q.la({
      text: a,
      Lc: "#levelScore img",
      ua: !0
     });
     e.Pu();
     f.gi()
    }
    a = new c(a.Bd, "levelPanel", p.qE || "levelBackground", !0);
    var k = null;
    a.init = function(a) {
     function b(a, c, k) {
      $("<div/>").attr("id", "option" + (a + 1)).data("level", a).addClass("option locked ctrPointer " + p).css({
       left: u + (k || 0),
       top: s
      }).click(r).appendTo(g);
      u += c;
      u > l && (u = h, s += c)
     }
     k = a;
     var c = f.Nc(e.cb),
      g = $("#levelOptions"),
      h = 0;
     a = 0;
     var l =
      d.i(420),
      m = d.i(153),
      p = "",
      n = 3,
      q = c % 3;
     9 < c && 12 >= c ? (h = -80, a = 10, n = 4, l = d.i(500), m = d.i(153)) : 12 < c && (h = -30, a = -40, m = d.i(101), p = "option-small", n = 5, q = c % 5);
     var s = a,
      u = h;
     a = 0;
     for (var v = c - q; a < v; a++) b(a, m);
     0 < q && function(a) {
      for (var k = (n - q) * m / 2; a < c; a++) b(a, m, k)
     }(a)
    };
    a.Kh = function() {
     x();
     $("#levelScore").delay(200).fadeIn(700);
     $("#levelBack").delay(200).fadeIn(700);
     $("#levelOptions").delay(200).fadeIn(700);
     $("#levelResults").delay(200).fadeOut(700)
    };
    var D = !1;
    g.subscribe(g.v.Pg, function(a) {
     D = a;
     x()
    });
    g.subscribe(g.v.Am,
     function() {
      x()
     });
    return a
   }(ya, Ha, H, T, ua, Ra, U, na, w, ha, ga, F, V, Q, ab, bb),
   kc = function(a, c, d, b, f, e, g, h, l, n, q) {
    var m = new c(a.Ke, "codePanel", "levelBackground", !1),
     p = null,
     u = null,
     v = null,
     B = null;
    m.Jn = function() {
     return l.UD ? g.Ns(0) && !n.vg : !1
    };
    $(function() {
     function a(b) {
      p.html(b);
      p.width(f + 1);
      p.width(f)
     }

     function c() {
      e ? (h = !h, a(h ? "Validating code . . ." : ""), setTimeout(c, h ? 600 : 250)) : h = !1
     }

     function k(c) {
      e = !1;
      u.attr("disabled", !1);
      if (c) {
       a("Code Accepted!");
       c = !0;
       var k, d;
       k = 0;
       for (d = l.Tg.length; k < d; k++)
        if (!g.Ns(k)) {
         c = !1;
         break
        }
       g.HB();
       B.delay(3E3).show(0);
       b.ra(b.v.Ck, c)
      } else a("Sorry, that code is not valid or <br/> has already been redeemed.")
     }

     function d() {
      if (!e) {
       var b = l.Tg.length,
        f = u.val() || "",
        g = 0 < f.length ? parseInt(f[0], 10) || 0 : 0,
        h = parseInt(f, 10),
        f = h.toString().length === f.length;
       isNaN(h) || !f || 0 > h || 1 > g || g > b ? a("Oops, that is not a valid code!") : (u.attr("disabled", !0), e = !0, c(), $.ajax({
        type: "POST",
        url: "http://ctrbk.cloudapp.net/api/CTRBKCodes",
        contentType: "application/json",
        data: '{"ctrbkcode":"' + h + '"}',
        dataType: "json",
        error: function() {
         k(!1)
        },
        success: function() {
         k(!0)
        }
       }))
      }
     }
     p = $("#codeMessage");
     u = $("#codeText");
     v = $("#codeOkButton");
     B = $("#codeBack").toggle(!m.Jn());
     var e = !1,
      f = q.i(540),
      h = !1;
     u.keyup(function(b) {
      13 == b.which ? d() : a("")
     });
     v.click(function() {
      d()
     })
    });
    m.init = da();
    m.Kh = function() {
     p.text("");
     u.val("").focus();
     h.Pc(!1, 0)
    };
    m.ao = da();
    return m
   }(ya, Ha, xa, U, na, ga, gb, bb, V, ta, H),
   qb = function(a, c, d, b, f, e, g, h, l, n) {
    var q = new function() {
     function l() {
      function a() {
       if (I) {
        var d = Date.now();
        z += 0.1 * (d - k) / 25 * G;
        k = d;
        b.setTransform(1,
         0, 0, 1, 0, 0);
        b.clearRect(0, 0, E.width, E.height);
        1 > F && (F += 0.025, F = Math.min(F, 1), b.globalAlpha = F);
        b.save();
        b.translate(0.5 * J.width, 0.5 * J.height);
        b.translate(e.i(-300), e.i(-510));
        b.rotate(z * Math.PI / 180);
        b.translate(0.5 * -J.width, 0.5 * -J.height);
        b.drawImage(J, 0, 0);
        b.restore();
        c(a)
       }
      }
      var b = E.getContext("2d"),
       c = window.requestAnimationFrame,
       k = Date.now();
      I = !0;
      a()
     }

     function p() {
      if (!H) {
       if (null != E) {
        var a = E.getContext("2d");
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.clearRect(0, 0, E.width, E.height);
        a.restore()
       }
       F = 0;
       H = !0;
       $("#shadowPanel").show();
       I || l()
      }
     }
     var q = this,
      v = [];
     this.fo = null;
     this.jb = function() {
      w = $("#fadeToBlack");
      E = document.getElementById("shadowCanvas");
      E.width = e.i(1024);
      E.height = e.i(576)
     };
     this.Ed = function(a) {
      J = new Image;
      J.src = g.Uc + "shadow.png";
      if (a)
       for (var b = 0, c = v.length; b < c; b++) a(v[b].id)
     };
     var B = this.Xe = function(a) {
      for (var b = 0; b < v.length; b++)
       if (v[b].id == a) return v[b];
      return null
     };
     v.push(new c(a.qb, "menuPanel", "startBackground", !0));
     v.push(d);
     v.push(b);
     v.push(new c(a.Ff, null, "levelBackground", !1));
     v.push(new c(a.si,
      null, null, !1));
     v.push(new c(a.sq, null, null, !1));
     v.push(new c(a.Dg, "gameCompletePanel", "menuBackground", !0));
     v.push(new c(a.Zd, "optionsPanel", "menuBackground", !0));
     v.push(new c(a.qp, null, null, !1));
     v.push(new c(a.Ie, "leaderboardPanel", "menuBackground", !0));
     v.push(new c(a.Ce, "achievementsPanel", "menuBackground", !0));
     v.push(f);
     this.Yi = a.qb;
     this.Va = function(a, b) {
      q.Yi = a;
      var c = B(a),
       k = null == b ? !1 : b;
      c.mB ? p() : (I = H = !1, $("#shadowPanel").hide());
      setTimeout(function() {
       c.Rf && $("#" + c.Rf).show();
       c.hg && $("#" + c.hg).show();
       for (var b = 0; b < v.length; b++) {
        var d = v[b];
        null != d.hg && d.hg != c.hg && $("#" + d.hg).hide();
        null != d.Rf && d.Rf != c.Rf && $("#" + d.Rf).hide()
       }
       null != q.fo && q.fo(a);
       k || q.AA()
      }, k ? 0 : r + x);
      k || q.zA()
     };
     var r = 100,
      x = 50,
      k = 1,
      w, C = !1;
     this.zA = function() {
      function a() {
       var c = Date.now() - b;
       w.css("opacity", h.ht(c, k, r));
       c < r ? window.requestAnimationFrame(a) : w.css("opacity", k)
      }
      C = !0;
      var b = Date.now();
      w.css("opacity", 0);
      w.css("display", "block");
      window.requestAnimationFrame(a)
     };
     this.AA = function() {
      function a() {
       var c = Date.now() - b;
       w.css("opacity",
        k - h.ht(c, k, r));
       c < r ? window.requestAnimationFrame(a) : (w.css("opacity", 0), w.css("display", "none"), C = !1)
      }
      if (C) {
       var b = Date.now();
       window.requestAnimationFrame(a)
      }
     };
     var I = !1,
      z = 15,
      E = null,
      J = null,
      F = 1,
      H = !1,
      G = n.$E || 1
    };
    l.subscribe(l.v.Ck, function(b) {
     var c = b ? a.qb : a.Vc;
     setTimeout(function() {
      q.Va(c)
     }, 1E3)
    });
    return q
   }(ya, Ha, pb, jc, kc, H, T, xa, U, V),
   cb = function(a, c, d, b, f, e) {
    return new function() {
     this.ok = c.ok;
     this.Gm = "278847552173744";
     var g = window.location.host || "";
     0 <= g.indexOf("thinkpixellab") ? this.Gm = "239041062884795" :
      0 <= g.indexOf(".dev") && (this.Gm = "261043477350153");
     var h = this;
     f.subscribe(f.v.Ib, function() {
      h.mu = d.X(b.Oq);
      h.pB = d.X(b.Pq);
      h.oB = [{
       name: d.X(b.Nq),
       link: c.ok
      }]
     });
     this.ty = function() {
      var a = {};
      a.appId = h.Gm;
      a.status = !0;
      a.cookie = !0;
      a.xfbml = !0;
      FB.init(a);
      FB.Event.subscribe("edge.create", function() {
       e.uz && e.uz()
      })
     };
     this.yt = function(b, c, d, e) {
      if (a.KD) f.ra(f.v.tw, b, c, d);
      else {
       var g = {
        method: "feed"
       };
       g.name = h.pB;
       g.caption = b;
       g.description = c;
       g.link = h.ok;
       g.picture = d;
       g.actions = h.oB;
       FB.ui(g, e)
      }
     };
     this.wy = function(a) {
      a.events.bind("tweet",
       function() {
        e.Ez && e.Ez()
       })
     }
    }
   }(T, V, ha, F, U, Oa),
   lc = function(a, c, d, b, f, e, g, h, l, n) {
    return new function() {
     function f(a, b, c, d, e, g, h) {
      a.save();
      a.setTransform(1, 0, 0, 1, 0, 0);
      a.clearRect(0, 0, a.canvas.width, a.canvas.height);
      a.restore();
      a.save();
      a.translate(d, e);
      a.scale(b, c);
      a.save();
      a.beginPath();
      a.moveTo(116.1, 38.3);
      a.bezierCurveTo(117.2, 37.9, 118.2, 37.4, 119, 36.8);
      a.lineTo(119.5, 35.6);
      a.lineTo(123.3, 21.1);
      a.bezierCurveTo(124.5, 18.2, 126.8, 14.6, 130.1, 10.3);
      a.bezierCurveTo(129.9, 15.3, 133.6, 18.2, 141.3, 19);
      a.bezierCurveTo(138.9,
       19.1, 136.7, 19.9, 134.8, 21.5);
      a.bezierCurveTo(132.4, 23.5, 130.7, 25.2, 129.7, 26.8);
      a.bezierCurveTo(128.9, 28.3, 127.9, 30.7, 126.7, 33.8);
      a.lineTo(126.4, 36.8);
      a.lineTo(126.7, 37.7);
      a.lineTo(128.6, 38.7);
      a.bezierCurveTo(124.4, 37.5, 120.2, 37.4, 116.1, 38.3);
      a.closePath();
      a.moveTo(241.8, 203.6);
      a.bezierCurveTo(241.6, 202.9, 241.1, 202.2, 240.5, 201.5);
      a.lineTo(214.2, 185.6);
      a.bezierCurveTo(212.8, 190, 210.9, 194.2, 208.4, 198.1);
      a.lineTo(208.3, 198);
      a.lineTo(209.4, 192.8);
      a.lineTo(211, 183.6);
      a.lineTo(211.2, 182.6);
      a.lineTo(212.8,
       173.3);
      a.bezierCurveTo(212.3, 176, 211.3, 179, 210, 182.1);
      a.bezierCurveTo(209.9, 182.4, 209.8, 182.6, 209.7, 182.8);
      a.bezierCurveTo(208.6, 185.2, 207.3, 187.8, 205.8, 190.5);
      a.bezierCurveTo(203.4, 194.6, 200.9, 197.9, 198.1, 200.4);
      a.bezierCurveTo(198.7, 201.8, 199, 203.2, 199.2, 204.7);
      a.bezierCurveTo(199.2, 204.8, 199.2, 204.9, 199.2, 205);
      a.bezierCurveTo(199.5, 207.9, 199.6, 209.6, 199.7, 210.2);
      a.bezierCurveTo(200, 211.2, 200.1, 212, 200.2, 212.5);
      a.lineTo(199.6, 207.8);
      a.bezierCurveTo(201.8, 213.8, 203.3, 218.7, 204, 222.5);
      a.bezierCurveTo(205.3,
       222.4, 206.5, 222.4, 207.7, 222.3);
      a.bezierCurveTo(213.4, 222, 218.9, 221.9, 224.3, 222.1);
      a.bezierCurveTo(227.5, 222.5, 230.1, 222.1, 232.3, 221.1);
      a.bezierCurveTo(232.8, 220.7, 233.4, 220.2, 233.9, 219.6);
      a.bezierCurveTo(235.2, 218.1, 236.5, 216.5, 237.8, 215);
      a.bezierCurveTo(239.1, 213.3, 240.1, 211.5, 240.9, 209.6);
      a.bezierCurveTo(241.8, 207.4, 242.1, 205.4, 241.8, 203.6);
      a.closePath();
      a.moveTo(148.8, 222.8);
      a.bezierCurveTo(139.8, 224.7, 129.5, 225.7, 117.8, 225.9);
      a.bezierCurveTo(109.6, 226, 101.7, 225.5, 94.3, 224.3);
      a.bezierCurveTo(94.3,
       224.9, 94.4, 225.6, 94.4, 226.2);
      a.bezierCurveTo(94.4, 228.1, 94.3, 230, 94, 232);
      a.lineTo(93.8, 233);
      a.bezierCurveTo(103.6, 234.6, 113.4, 235.1, 123.2, 234.4);
      a.bezierCurveTo(132.2, 234.4, 141, 233.2, 149.5, 231);
      a.bezierCurveTo(149.4, 230.6, 149.4, 230.3, 149.4, 230);
      a.bezierCurveTo(149, 227.6, 148.9, 225.2, 148.8, 222.8);
      a.closePath();
      a.moveTo(196.6, 153.6);
      a.lineTo(194.5, 152.6);
      a.bezierCurveTo(194.1, 152.8, 193.8, 153, 193.4, 153.2);
      a.bezierCurveTo(192.6, 153.8, 191.7, 154.5, 191, 155.2);
      a.lineTo(190.2, 155.8);
      a.bezierCurveTo(186.6, 158.8,
       183.8, 160.7, 182, 161.5);
      a.bezierCurveTo(182, 162.2, 181.4, 164, 180.2, 166.7);
      a.bezierCurveTo(183.2, 164.8, 186.2, 162.7, 189.3, 160.6);
      a.bezierCurveTo(192.6, 158.2, 195.6, 155.9, 198.4, 153.8);
      a.bezierCurveTo(197.6, 153.8, 197, 153.7, 196.6, 153.6);
      a.closePath();
      a.moveTo(121.1, 189);
      a.bezierCurveTo(128, 188.9, 134.8, 188, 141.7, 186);
      a.bezierCurveTo(141.3, 185.9, 141, 185.7, 140.7, 185.6);
      a.bezierCurveTo(136.2, 183.2, 133, 181.8, 131.3, 181.4);
      a.bezierCurveTo(128.8, 181.8, 125.7, 181.8, 121.9, 181.4);
      a.bezierCurveTo(118.1, 181, 114, 180.5,
       109.4, 179.7);
      a.lineTo(109.3, 179.7);
      a.bezierCurveTo(108.3, 180.9, 106.5, 182.5, 103.8, 184.6);
      a.bezierCurveTo(103.6, 184.7, 103.4, 184.9, 103.2, 185);
      a.lineTo(102.1, 185.9);
      a.lineTo(102.9, 186.1);
      a.bezierCurveTo(110.1, 188.1, 116.2, 189, 121.1, 189);
      a.closePath();
      a.moveTo(63.1, 164.7);
      a.lineTo(50.7, 157.9);
      a.lineTo(45.8, 159.6);
      a.lineTo(46.2, 159.9);
      a.bezierCurveTo(46.3, 160, 46.4, 160.1, 46.5, 160.2);
      a.bezierCurveTo(52, 164, 57.9, 167.5, 64.4, 170.9);
      a.lineTo(65.5, 171.5);
      a.lineTo(65.2, 170.7);
      a.bezierCurveTo(64, 168, 63.4, 166, 63.1,
       164.7);
      a.closePath();
      a.moveTo(36.5, 191.7);
      a.bezierCurveTo(35.2, 189.5, 34, 187.3, 33, 185);
      a.lineTo(33.1, 185.9);
      a.lineTo(34, 192.4);
      a.lineTo(31.3, 189.4);
      a.bezierCurveTo(30.8, 188, 27.8, 189.3, 22.4, 193.3);
      a.bezierCurveTo(16.9, 197.2, 13.7, 199.6, 12.7, 200.6);
      a.bezierCurveTo(11.6, 201.6, 10.2, 202.9, 8.4, 204.6);
      a.bezierCurveTo(6.7, 206.1, 5.4, 207.3, 4.5, 208.2);
      a.bezierCurveTo(3.6, 209, 3.2, 210.1, 3.3, 211.5);
      a.bezierCurveTo(3.5, 212.9, 4, 214.8, 4.8, 217.3);
      a.bezierCurveTo(5.6, 219.7, 6.5, 221.8, 7.4, 223.5);
      a.bezierCurveTo(8.3, 225.2,
       9.8, 226.4, 11.9, 227.1);
      a.bezierCurveTo(13.9, 227.7, 15.9, 227.9, 17.8, 227.7);
      a.bezierCurveTo(19.7, 227.5, 21.3, 227.4, 22.6, 227.4);
      a.bezierCurveTo(24.5, 227.3, 26.4, 227.2, 28.4, 227.2);
      a.bezierCurveTo(30.2, 227.2, 32, 227.2, 33.8, 227.2);
      a.bezierCurveTo(35.8, 227.2, 37.7, 227.2, 39.7, 227.2);
      a.bezierCurveTo(41.2, 227.3, 42.9, 227.4, 44.5, 227.6);
      a.bezierCurveTo(44.5, 225.9, 44.5, 223.5, 44.6, 220.3);
      a.lineTo(44.6, 213.4);
      a.lineTo(44.7, 207.6);
      a.lineTo(45.1, 204.8);
      a.lineTo(45.4, 203);
      a.bezierCurveTo(45.4, 202.9, 45.4, 202.8, 45.5, 202.6);
      a.bezierCurveTo(43.8, 201.2, 42.3, 199.7, 40.9, 198.1);
      a.bezierCurveTo(39.3, 196, 37.9, 193.8, 36.5, 191.7);
      a.closePath();
      a.fillStyle = "rgb(100, 150, 40)";
      a.fill();
      a.beginPath();
      a.moveTo(212.6, 151.5);
      a.bezierCurveTo(213.3, 158.8, 213.4, 166.1, 212.8, 173.3);
      a.bezierCurveTo(212.3, 176, 211.3, 179, 210, 182.2);
      a.bezierCurveTo(209.9, 182.4, 209.8, 182.6, 209.7, 182.8);
      a.bezierCurveTo(208.6, 185.3, 207.3, 187.8, 205.8, 190.5);
      a.bezierCurveTo(203.4, 194.7, 200.9, 198, 198.1, 200.5);
      a.bezierCurveTo(198.7, 201.8, 199, 203.3, 199.2, 204.7);
      a.bezierCurveTo(199.2,
       204.8, 199.2, 204.9, 199.2, 205.1);
      a.bezierCurveTo(199.5, 207.9, 199.6, 209.7, 199.7, 210.2);
      a.bezierCurveTo(199.9, 214.2, 200, 218.2, 199.9, 222.4);
      a.bezierCurveTo(199.9, 222.5, 199.9, 222.7, 199.9, 222.9);
      a.bezierCurveTo(199.9, 225, 199.7, 227, 199.4, 228.8);
      a.bezierCurveTo(199.1, 230.5, 198.7, 232, 198.3, 233.5);
      a.lineTo(196.7, 235.2);
      a.bezierCurveTo(196.6, 235.3, 196.5, 235.4, 196.3, 235.5);
      a.bezierCurveTo(195.2, 236.4, 193.3, 237.6, 190.7, 239.2);
      a.bezierCurveTo(188.1, 240.8, 184.5, 241.7, 179.9, 242.1);
      a.bezierCurveTo(175.3, 242.4, 172,
       242.5, 169.8, 242.3);
      a.bezierCurveTo(167.8, 242.2, 165.5, 241.7, 162.9, 240.8);
      a.bezierCurveTo(160.4, 240, 158, 238, 155.6, 234.8);
      a.bezierCurveTo(155.4, 234.6, 155.3, 234.4, 155.1, 234.2);
      a.bezierCurveTo(154.3, 233, 153.5, 231.6, 152.8, 230.1);
      a.bezierCurveTo(151.9, 227.9, 151.2, 225.3, 150.7, 222.4);
      a.bezierCurveTo(150.7, 222.2, 150.6, 222.1, 150.6, 221.9);
      a.bezierCurveTo(149.7, 216.4, 149.3, 213.1, 149.2, 212);
      a.bezierCurveTo(148.8, 215.6, 148.6, 219.2, 148.8, 222.8);
      a.bezierCurveTo(139.8, 224.7, 129.5, 225.7, 117.8, 225.9);
      a.bezierCurveTo(109.6,
       226, 101.7, 225.5, 94.3, 224.3);
      a.bezierCurveTo(94.2, 220.8, 94, 217.1, 93.8, 213.5);
      a.bezierCurveTo(93.8, 214.9, 93.7, 216, 93.6, 216.6);
      a.bezierCurveTo(93.5, 217.2, 93.5, 217.7, 93.4, 218.1);
      a.bezierCurveTo(93.4, 218.5, 93.2, 219.4, 92.8, 220.9);
      a.bezierCurveTo(92.6, 222, 92.3, 223, 92, 224);
      a.bezierCurveTo(91.9, 224.3, 91.8, 224.6, 91.7, 224.8);
      a.bezierCurveTo(91.3, 226, 90.8, 227.2, 90.2, 228.3);
      a.bezierCurveTo(89.9, 229, 89.5, 229.7, 89.2, 230.4);
      a.bezierCurveTo(88.8, 230.9, 88.4, 231.4, 88, 231.9);
      a.bezierCurveTo(87.5, 232.6, 86.9, 233.2, 86.2,
       233.7);
      a.bezierCurveTo(85.8, 234.1, 85.4, 234.5, 84.9, 234.9);
      a.bezierCurveTo(83.9, 235.6, 82.8, 236.2, 81.6, 236.7);
      a.bezierCurveTo(80.2, 237.3, 78.7, 237.8, 77.1, 238.2);
      a.bezierCurveTo(74.1, 238.8, 71, 239.1, 67.8, 239.1);
      a.bezierCurveTo(60.2, 239.2, 53.4, 237.3, 47.4, 233.3);
      a.bezierCurveTo(45.9, 232.5, 45, 231.7, 44.9, 230.9);
      a.lineTo(44.6, 229.2);
      a.bezierCurveTo(44.6, 228.8, 44.5, 228.3, 44.5, 227.6);
      a.bezierCurveTo(44.5, 226, 44.5, 223.5, 44.6, 220.3);
      a.lineTo(44.6, 213.4);
      a.lineTo(44.7, 207.6);
      a.lineTo(45.1, 204.9);
      a.lineTo(45.4, 203);
      a.bezierCurveTo(45.4, 202.9, 45.4, 202.8, 45.5, 202.7);
      a.bezierCurveTo(43.8, 201.2, 42.3, 199.7, 40.9, 198.2);
      a.bezierCurveTo(39.3, 196, 37.9, 193.9, 36.5, 191.7);
      a.bezierCurveTo(35.2, 189.6, 34, 187.4, 33, 185.1);
      a.lineTo(32.7, 183.5);
      a.bezierCurveTo(31.8, 176.3, 31, 168.9, 30.3, 161.3);
      a.bezierCurveTo(30.3, 161, 30.3, 160.7, 30.2, 160.4);
      a.bezierCurveTo(34.5, 162, 39, 162.1, 43.8, 160.4);
      a.bezierCurveTo(44.4, 160.2, 45.1, 159.9, 45.8, 159.6);
      a.lineTo(46.2, 159.9);
      a.bezierCurveTo(46.3, 160, 46.4, 160.1, 46.5, 160.2);
      a.bezierCurveTo(52, 164, 57.9,
       167.6, 64.4, 170.9);
      a.lineTo(65.5, 171.5);
      a.bezierCurveTo(66.9, 174.7, 68.3, 177.8, 69.8, 180.9);
      a.bezierCurveTo(71.4, 184.1, 73.4, 187, 76, 189.7);
      a.bezierCurveTo(78.5, 192.3, 81.7, 193.4, 85.5, 193.1);
      a.bezierCurveTo(89.2, 192.6, 92.8, 191.5, 96.3, 189.7);
      a.bezierCurveTo(98.5, 188.7, 100.4, 187.4, 102.1, 185.9);
      a.lineTo(102.9, 186.2);
      a.bezierCurveTo(110.1, 188.1, 116.2, 189.1, 121.1, 189.1);
      a.bezierCurveTo(128, 189, 134.8, 188, 141.7, 186.1);
      a.bezierCurveTo(142.1, 186.3, 142.6, 186.5, 143, 186.7);
      a.bezierCurveTo(143.5, 186.9, 144, 187.1, 144.5,
       187.3);
      a.bezierCurveTo(147.1, 188.4, 149.8, 189.4, 152.5, 190.3);
      a.bezierCurveTo(155.3, 191.3, 158.2, 191.8, 161.2, 191.8);
      a.bezierCurveTo(164.2, 191.8, 166.7, 190.7, 168.6, 188.6);
      a.bezierCurveTo(170, 187.2, 171.1, 185.7, 172, 184.1);
      a.bezierCurveTo(173.4, 181.7, 174.7, 179.2, 175.9, 176.6);
      a.bezierCurveTo(177.1, 174, 178.3, 171.4, 179.4, 168.8);
      a.bezierCurveTo(179.7, 168, 180, 167.4, 180.2, 166.8);
      a.bezierCurveTo(183.2, 164.8, 186.2, 162.8, 189.3, 160.6);
      a.bezierCurveTo(192.6, 158.2, 195.6, 156, 198.4, 153.8);
      a.bezierCurveTo(199.3, 153.8, 200.6,
       153.8, 202.1, 153.6);
      a.bezierCurveTo(204.6, 153.5, 207, 153.1, 209.4, 152.5);
      a.bezierCurveTo(210.5, 152.2, 211.6, 151.8, 212.6, 151.4);
      a.bezierCurveTo(212.6, 151.4, 212.6, 151.4, 212.6, 151.5);
      a.closePath();
      a.moveTo(124.3, 61);
      a.bezierCurveTo(124.5, 61.3, 124.8, 61.6, 125, 61.9);
      a.bezierCurveTo(133.4, 55.3, 142.8, 50.4, 153.1, 47.4);
      a.bezierCurveTo(149.8, 46, 146.3, 44.6, 142.9, 43.3);
      a.bezierCurveTo(139.9, 42.5, 137.6, 41.7, 135.8, 41.1);
      a.bezierCurveTo(134.1, 40.4, 132.7, 40, 131.6, 39.8);
      a.bezierCurveTo(130.5, 39.6, 129.5, 39.2, 128.6, 38.8);
      a.bezierCurveTo(124.4, 37.6, 120.2, 37.4, 116.1, 38.4);
      a.bezierCurveTo(115.7, 38.5, 115.2, 38.6, 114.8, 38.7);
      a.bezierCurveTo(114.6, 38.8, 114.2, 38.9, 113.7, 39);
      a.lineTo(106, 40.5);
      a.bezierCurveTo(102.5, 41.1, 99.2, 41.9, 95.9, 42.8);
      a.bezierCurveTo(106.9, 45.7, 116.3, 51.7, 124.3, 61);
      a.closePath();
      a.moveTo(141.3, 19);
      a.lineTo(143.4, 19);
      a.lineTo(144.6, 19.1);
      a.bezierCurveTo(147.1, 19.4, 148.8, 19.2, 149.7, 18.6);
      a.bezierCurveTo(151.7, 17.6, 152.9, 16, 153.3, 13.7);
      a.bezierCurveTo(153.7, 12.1, 153.7, 10.4, 153.5, 8.6);
      a.bezierCurveTo(152.9,
       5.3, 150.9, 3.4, 147.6, 3.1);
      a.bezierCurveTo(141, 2.4, 135.2, 4.8, 130.1, 10.3);
      a.bezierCurveTo(129.9, 15.3, 133.6, 18.2, 141.3, 19);
      a.closePath();
      a.moveTo(221, 104);
      a.bezierCurveTo(220.8, 103.3, 220.5, 102.6, 220.2, 101.9);
      a.bezierCurveTo(219.3, 99.7, 218.2, 97.5, 216.9, 95.4);
      a.bezierCurveTo(213.3, 89.7, 209.2, 84.5, 204.4, 79.7);
      a.bezierCurveTo(205.4, 83, 205.9, 86.5, 205.9, 90.2);
      a.bezierCurveTo(205.8, 91.2, 205.8, 92.2, 205.7, 93.2);
      a.bezierCurveTo(205.5, 95.7, 205.1, 98.2, 204.6, 100.6);
      a.bezierCurveTo(204.9, 102.3, 205.3, 104.3, 205.7, 106.6);
      a.lineTo(205.7, 106.6);
      a.bezierCurveTo(205.2, 104.4, 204.9, 102.5, 204.6, 101);
      a.bezierCurveTo(204.2, 103, 203.6, 104.9, 203, 106.9);
      a.lineTo(202.9, 106.9);
      a.bezierCurveTo(200.6, 113.5, 197.1, 119.7, 192.3, 125.5);
      a.bezierCurveTo(188.4, 130, 183.6, 133.5, 177.8, 135.9);
      a.bezierCurveTo(169.7, 139.6, 161.7, 140.9, 153.7, 139.7);
      a.bezierCurveTo(147.7, 138.6, 142.2, 136.2, 137.2, 132.7);
      a.bezierCurveTo(131.7, 128.8, 126.4, 125, 121.3, 121.5);
      a.lineTo(120.9, 121.3);
      a.lineTo(120.6, 121.5);
      a.bezierCurveTo(113.9, 128, 106.4, 133.2, 98, 137.3);
      a.bezierCurveTo(83.7,
       144, 70, 142.9, 56.8, 134);
      a.bezierCurveTo(50.6, 130, 45.8, 125.2, 42.5, 119.7);
      a.bezierCurveTo(38.6, 113.5, 36.7, 106.4, 36.6, 98.3);
      a.bezierCurveTo(36.6, 93.4, 37.1, 88.7, 38.2, 84.1);
      a.bezierCurveTo(37.7, 84.8, 37.1, 85.5, 36.6, 86.2);
      a.bezierCurveTo(29.8, 95.7, 24.4, 105.8, 20.3, 116.5);
      a.bezierCurveTo(20.4, 116.4, 20.4, 117, 20.3, 118.2);
      a.bezierCurveTo(20.2, 119.7, 20.7, 121.1, 21.6, 122.5);
      a.bezierCurveTo(22.2, 123.4, 23.3, 125, 25, 127.3);
      a.lineTo(26.2, 129.3);
      a.bezierCurveTo(26.3, 129.4, 26.4, 129.6, 26.5, 129.7);
      a.bezierCurveTo(27.9, 131.7,
       29.4, 133.7, 31.1, 135.6);
      a.bezierCurveTo(34, 138.9, 37.4, 142, 41.1, 144.9);
      a.bezierCurveTo(44.1, 147.2, 47.2, 149.4, 50.5, 151.6);
      a.bezierCurveTo(52.5, 152.9, 54.7, 154.4, 57, 155.8);
      a.bezierCurveTo(60.8, 158.3, 65.2, 160.8, 70.1, 163.1);
      a.bezierCurveTo(71, 163.6, 72, 164, 72.9, 164.4);
      a.bezierCurveTo(79.8, 167.5, 86.9, 170.1, 94.1, 172.2);
      a.bezierCurveTo(101.5, 174.4, 109, 175.9, 116.7, 176.5);
      a.bezierCurveTo(122.5, 177.2, 128.4, 177.1, 134.5, 176.3);
      a.bezierCurveTo(141.6, 175.3, 147.4, 174, 152, 172.4);
      a.bezierCurveTo(156.6, 170.7, 159.7, 169.4,
       161.4, 168.4);
      a.lineTo(181.4, 156.2);
      a.bezierCurveTo(187.7, 152, 192.6, 148.2, 195.9, 144.6);
      a.lineTo(202.9, 136.6);
      a.lineTo(209.8, 126.7);
      a.lineTo(211.7, 124);
      a.lineTo(214.9, 119.9);
      a.lineTo(216.7, 117.5);
      a.bezierCurveTo(217.8, 116.3, 218.7, 115.1, 219.4, 114);
      a.bezierCurveTo(219.8, 113.5, 220.1, 113, 220.3, 112.5);
      a.bezierCurveTo(220.8, 111.5, 221.1, 110.5, 221.3, 109.4);
      a.bezierCurveTo(221.5, 108.5, 221.6, 107.6, 221.6, 106.7);
      a.bezierCurveTo(221.6, 105.8, 221.4, 104.9, 221, 104);
      a.closePath();
      a.fillStyle = "rgb(153, 205, 0)";
      a.fill();
      a.beginPath();
      a.moveTo(245.5, 203.6);
      a.bezierCurveTo(245.4, 202.9, 245.3, 202.4, 245.2, 202);
      a.bezierCurveTo(244.7, 200.9, 244.1, 200.1, 243.5, 199.7);
      a.bezierCurveTo(242.9, 199.2, 241.2, 198.1, 238.5, 196.2);
      a.bezierCurveTo(238, 195.9, 237.5, 195.5, 237, 195.2);
      a.bezierCurveTo(234.3, 193.5, 230.8, 191.6, 226.3, 189.3);
      a.bezierCurveTo(223, 187.4, 219.4, 185.7, 215.7, 184.2);
      a.lineTo(214.7, 183.8);
      a.bezierCurveTo(216, 179.3, 216.8, 174.4, 217, 169.3);
      a.bezierCurveTo(217.3, 162.5, 217.5, 155.7, 217.3, 148.8);
      a.bezierCurveTo(217.5, 148.7, 217.7,
       148.6, 217.9, 148.5);
      a.bezierCurveTo(220.1, 147, 221.6, 145.1, 222.5, 142.8);
      a.bezierCurveTo(223.5, 140.2, 224.2, 137.4, 224.6, 134.6);
      a.bezierCurveTo(224.9, 132.2, 225, 129.8, 225.1, 127.3);
      a.bezierCurveTo(225.1, 124.8, 225.1, 122.4, 224.8, 119.9);
      a.bezierCurveTo(224.8, 119.4, 224.7, 119, 224.6, 118.6);
      a.lineTo(224.5, 115.9);
      a.bezierCurveTo(225.1, 114.1, 225.4, 111.8, 225.6, 108.9);
      a.bezierCurveTo(225.7, 107.4, 225.5, 105.8, 224.9, 104.3);
      a.bezierCurveTo(220.3, 91.4, 212.2, 80.3, 200.6, 71);
      a.bezierCurveTo(195.8, 62.6, 189, 55.8, 180.1, 50.6);
      a.bezierCurveTo(172.6, 46.4, 165.2, 45, 157.9, 46.2);
      a.bezierCurveTo(155.1, 45, 152.3, 43.9, 149.4, 42.8);
      a.bezierCurveTo(148.1, 42.3, 146.8, 41.9, 145.5, 41.4);
      a.bezierCurveTo(143.2, 40.6, 140.8, 39.9, 138.4, 39.2);
      a.bezierCurveTo(136.1, 38.4, 133.8, 37.6, 131.6, 36.7);
      a.bezierCurveTo(131.1, 36.6, 130.8, 36.3, 130.4, 36);
      a.bezierCurveTo(130.1, 35.6, 129.9, 35.3, 129.8, 35);
      a.bezierCurveTo(129.8, 34.3, 129.9, 33.8, 130.1, 33.5);
      a.bezierCurveTo(130.9, 31.6, 132.7, 30, 135.7, 29);
      a.bezierCurveTo(137.8, 27.6, 140.6, 26.5, 144, 25.5);
      a.bezierCurveTo(152.1,
       23, 156.6, 19.2, 157.4, 13.9);
      a.bezierCurveTo(158.5, 7.2, 155.6, 2.8, 148.7, 0.7);
      a.bezierCurveTo(141.1, -1.7, 133.2, 2, 125, 11.9);
      a.bezierCurveTo(121.9, 15.6, 120.1, 19, 119.4, 22.1);
      a.lineTo(118.6, 25.4);
      a.bezierCurveTo(118.2, 30, 117.2, 33, 115.7, 34.5);
      a.bezierCurveTo(114.8, 35.3, 113.3, 36, 111.2, 36.6);
      a.bezierCurveTo(104.1, 37.5, 97.2, 39.2, 90.6, 41.6);
      a.bezierCurveTo(89.4, 41.4, 88.3, 41.3, 87.1, 41.1);
      a.bezierCurveTo(71.9, 41.6, 59.7, 47.8, 50.4, 59.6);
      a.bezierCurveTo(46, 64.9, 42.7, 70.6, 40.4, 76.7);
      a.bezierCurveTo(39.8, 77.4, 39.2, 78.1,
       38.5, 78.8);
      a.bezierCurveTo(29.4, 89.5, 22.3, 101, 17.2, 113.3);
      a.bezierCurveTo(16.8, 114.3, 16.4, 115.3, 16.1, 116.3);
      a.bezierCurveTo(15.8, 117, 15.6, 117.6, 15.5, 118.3);
      a.bezierCurveTo(15.4, 118.7, 15.3, 119.1, 15.3, 119.5);
      a.bezierCurveTo(15.2, 120.4, 15.1, 121.2, 15.2, 122.1);
      a.bezierCurveTo(15.5, 124.5, 16.4, 127.1, 18, 129.6);
      a.bezierCurveTo(18.5, 132, 18.6, 134.2, 18.3, 136);
      a.bezierCurveTo(17.4, 144.5, 19.9, 151.6, 25.9, 157.5);
      a.bezierCurveTo(25.9, 159.4, 26, 161.4, 26.1, 163.4);
      a.bezierCurveTo(26.4, 169.1, 27.2, 175.1, 28.4, 181.4);
      a.bezierCurveTo(28.7,
       182.6, 28.9, 183.7, 29.2, 184.9);
      a.bezierCurveTo(29.1, 184.9, 29, 185, 28.9, 185);
      a.bezierCurveTo(25.6, 186.9, 22.7, 188.6, 20.2, 190.1);
      a.bezierCurveTo(17.8, 191.7, 15.6, 193.1, 13.8, 194.4);
      a.bezierCurveTo(12.5, 195.5, 11.1, 196.7, 9.6, 197.9);
      a.bezierCurveTo(7.9, 199, 6.3, 200.4, 4.9, 201.9);
      a.bezierCurveTo(3.7, 203, 2.7, 204.1, 1.7, 205);
      a.bezierCurveTo(0.7, 206, 0.2, 207.4, 0, 209.2);
      a.bezierCurveTo(-0.1, 211, 0, 212.5, 0.2, 213.8);
      a.bezierCurveTo(0.4, 215, 0.9, 217, 1.5, 219.7);
      a.bezierCurveTo(2.1, 222.4, 3, 224.6, 4, 226.5);
      a.bezierCurveTo(5.1,
       228.3, 6.7, 229.7, 9, 230.6);
      a.bezierCurveTo(9.6, 230.8, 10.3, 231, 11.1, 231.2);
      a.bezierCurveTo(14.9, 231.1, 18.6, 231.1, 22.4, 231.2);
      a.bezierCurveTo(24.2, 231.3, 26, 231.5, 27.8, 231.7);
      a.bezierCurveTo(29.4, 231.8, 31, 232, 32.7, 232.2);
      a.bezierCurveTo(34.1, 232.3, 35.6, 232.5, 37.1, 232.6);
      a.bezierCurveTo(38.4, 232.7, 39.8, 232.8, 41.2, 232.9);
      a.bezierCurveTo(41.5, 232.9, 41.8, 233, 42.1, 233);
      a.lineTo(42.2, 233.2);
      a.bezierCurveTo(42.4, 233.8, 42.8, 234.4, 43.1, 234.8);
      a.bezierCurveTo(48.8, 238.6, 55, 240.9, 61.6, 241.5);
      a.bezierCurveTo(68.7,
       242.6, 75.6, 242.3, 82.4, 240.5);
      a.bezierCurveTo(82.5, 240.5, 82.5, 240.5, 82.6, 240.5);
      a.bezierCurveTo(84, 240.2, 85.4, 239.9, 86.7, 239.6);
      a.bezierCurveTo(88.1, 239.3, 89.3, 238.9, 90.4, 238.4);
      a.bezierCurveTo(90.9, 238.1, 91.4, 237.8, 91.8, 237.3);
      a.bezierCurveTo(104.5, 241.2, 118.7, 242, 134.5, 239.7);
      a.bezierCurveTo(139.8, 238.9, 145.2, 237.5, 150.9, 235.6);
      a.bezierCurveTo(151.5, 237, 152.2, 238.2, 153.1, 239.5);
      a.bezierCurveTo(153.8, 240.1, 154.6, 240.7, 155.6, 241.3);
      a.bezierCurveTo(156.9, 242.2, 158.4, 242.9, 160.2, 243.5);
      a.bezierCurveTo(161.9,
       243.8, 163.7, 244.1, 165.5, 244.5);
      a.bezierCurveTo(171.9, 244.8, 178, 244.7, 183.5, 244.1);
      a.bezierCurveTo(188, 243.7, 192.3, 242.6, 196.2, 240.7);
      a.bezierCurveTo(197, 240.3, 197.6, 239.9, 198.3, 239.5);
      a.bezierCurveTo(200, 238.4, 201.4, 237.4, 202.3, 236.5);
      a.bezierCurveTo(203.2, 235.6, 203.9, 233.1, 204.5, 229.2);
      a.bezierCurveTo(204.5, 229, 204.6, 228.7, 204.6, 228.3);
      a.lineTo(223.4, 226.8);
      a.bezierCurveTo(225.5, 226.6, 227.6, 226.4, 229.8, 226.3);
      a.bezierCurveTo(232, 226.2, 233.8, 225.5, 235.2, 224.1);
      a.bezierCurveTo(237, 222.5, 238.5, 220.8,
       239.4, 219.1);
      a.bezierCurveTo(240.4, 217.5, 241.3, 215.9, 242.2, 214.4);
      a.bezierCurveTo(243, 212.9, 243.6, 211.6, 244.1, 210.5);
      a.bezierCurveTo(244.6, 209.4, 244.9, 208.1, 245.2, 206.7);
      a.bezierCurveTo(245.4, 205.2, 245.5, 204.2, 245.5, 203.6);
      a.closePath();
      a.moveTo(219.9, 140.2);
      a.bezierCurveTo(219.5, 141.6, 218.8, 143, 218, 144.5);
      a.bezierCurveTo(217.8, 144.9, 217.6, 145.2, 217.3, 145.6);
      a.bezierCurveTo(216.7, 146.3, 215.9, 146.9, 214.9, 147.4);
      a.bezierCurveTo(214.1, 147.8, 213.2, 148.2, 212.3, 148.4);
      a.bezierCurveTo(210.2, 149.1, 208, 149.5,
       205.6, 149.5);
      a.bezierCurveTo(204.5, 149.5, 203.4, 149.4, 202.3, 149.3);
      a.bezierCurveTo(200.6, 148.9, 199.7, 148, 199.8, 146.7);
      a.lineTo(200.7, 145.2);
      a.bezierCurveTo(201.3, 144.3, 201.8, 143.4, 202.4, 142.5);
      a.bezierCurveTo(202.7, 141.9, 203, 141.3, 203.4, 140.8);
      a.bezierCurveTo(203.8, 140, 204.2, 139.2, 204.7, 138.5);
      a.bezierCurveTo(205.3, 137.7, 205.9, 136.8, 206.5, 136);
      a.bezierCurveTo(206.9, 135.5, 207.3, 135, 207.6, 134.5);
      a.bezierCurveTo(208.3, 133.7, 209, 132.8, 209.7, 132);
      a.bezierCurveTo(209.9, 131.7, 210.2, 131.4, 210.5, 131);
      a.bezierCurveTo(211,
       130.4, 211.5, 129.9, 212.1, 129.3);
      a.bezierCurveTo(212.6, 128.8, 213.1, 128.3, 213.6, 127.8);
      a.bezierCurveTo(214.1, 127.4, 214.6, 127, 215.1, 126.6);
      a.bezierCurveTo(215.3, 126.4, 215.5, 126.3, 215.6, 126.2);
      a.bezierCurveTo(216.8, 125.4, 217.9, 124.8, 219, 124.5);
      a.lineTo(219.3, 125.4);
      a.bezierCurveTo(220, 127.9, 220.5, 130.6, 220.8, 133.3);
      a.bezierCurveTo(221, 135.7, 220.8, 138, 219.9, 140.2);
      a.closePath();
      a.moveTo(106, 40.4);
      a.lineTo(113.7, 38.9);
      a.bezierCurveTo(114.2, 38.8, 114.6, 38.7, 114.8, 38.6);
      a.bezierCurveTo(115.2, 38.6, 115.7, 38.4,
       116.1, 38.3);
      a.bezierCurveTo(117.2, 37.9, 118.2, 37.4, 119, 36.8);
      a.lineTo(119.5, 35.6);
      a.lineTo(123.3, 21.1);
      a.bezierCurveTo(124.5, 18.2, 126.8, 14.6, 130.1, 10.3);
      a.bezierCurveTo(135.2, 4.8, 141, 2.4, 147.6, 3.1);
      a.bezierCurveTo(150.9, 3.4, 152.9, 5.2, 153.5, 8.5);
      a.bezierCurveTo(153.7, 10.3, 153.7, 12, 153.3, 13.7);
      a.bezierCurveTo(152.9, 15.9, 151.7, 17.6, 149.7, 18.6);
      a.bezierCurveTo(148.8, 19.2, 147.1, 19.4, 144.6, 19.1);
      a.lineTo(143.4, 19);
      a.lineTo(141.3, 19);
      a.bezierCurveTo(138.9, 19.1, 136.7, 19.9, 134.8, 21.5);
      a.bezierCurveTo(132.4,
       23.5, 130.7, 25.2, 129.7, 26.8);
      a.bezierCurveTo(128.9, 28.3, 127.9, 30.7, 126.7, 33.8);
      a.lineTo(126.4, 36.8);
      a.lineTo(126.7, 37.7);
      a.lineTo(128.6, 38.7);
      a.bezierCurveTo(129.5, 39.2, 130.5, 39.5, 131.6, 39.8);
      a.bezierCurveTo(132.7, 40, 134.1, 40.4, 135.8, 41);
      a.bezierCurveTo(137.6, 41.7, 139.9, 42.4, 142.9, 43.3);
      a.bezierCurveTo(146.3, 44.6, 149.8, 46, 153.1, 47.4);
      a.bezierCurveTo(142.8, 50.4, 133.4, 55.2, 125, 61.8);
      a.bezierCurveTo(124.8, 61.6, 124.5, 61.3, 124.3, 61);
      a.bezierCurveTo(116.3, 51.7, 106.9, 45.6, 95.9, 42.7);
      a.bezierCurveTo(99.2,
       41.9, 102.5, 41.1, 106, 40.4);
      a.closePath();
      a.moveTo(41.7, 90.1);
      a.bezierCurveTo(42.4, 84.8, 43.6, 79.9, 45.5, 75.3);
      a.bezierCurveTo(46.5, 72.7, 47.7, 70.1, 49.2, 67.7);
      a.bezierCurveTo(52.7, 61.9, 57.3, 56.8, 63, 52.3);
      a.bezierCurveTo(70.4, 46.7, 77.8, 43.8, 85.3, 43.7);
      a.bezierCurveTo(87.3, 43.6, 89.3, 43.8, 91.3, 44.1);
      a.bezierCurveTo(95.6, 44.9, 100, 46.5, 104.4, 49.1);
      a.bezierCurveTo(111.9, 53.4, 117.3, 59.5, 120.8, 67.4);
      a.lineTo(124.2, 73.8);
      a.lineTo(124.6, 73.8);
      a.bezierCurveTo(124.7, 73.5, 124.9, 73.2, 125, 72.9);
      a.bezierCurveTo(126.3,
       71.1, 127.5, 69.4, 128.6, 67.7);
      a.bezierCurveTo(136, 57.6, 146.1, 51.7, 158.7, 50.1);
      a.bezierCurveTo(158.9, 50.1, 159.1, 50.1, 159.2, 50.1);
      a.bezierCurveTo(162.5, 50.1, 165.7, 50.5, 168.8, 51.2);
      a.bezierCurveTo(176.5, 53, 183.4, 56.7, 189.4, 62.4);
      a.bezierCurveTo(190, 63, 190.6, 63.5, 191.1, 64.1);
      a.bezierCurveTo(193.9, 67, 196.1, 70.1, 197.8, 73.5);
      a.bezierCurveTo(201.1, 79.7, 202.5, 86.8, 202.2, 94.7);
      a.bezierCurveTo(202, 99, 201.3, 103.2, 199.9, 107.1);
      a.bezierCurveTo(197.5, 114.2, 193.1, 120.7, 186.7, 126.4);
      a.bezierCurveTo(177.6, 134.4, 168.3,
       137.9, 158.5, 137);
      a.bezierCurveTo(153.1, 136.4, 149.4, 135.6, 147.3, 134.6);
      a.bezierCurveTo(137.6, 129.8, 130.4, 122.6, 125.6, 113);
      a.bezierCurveTo(124.9, 111.7, 124.3, 110.4, 123.8, 109);
      a.bezierCurveTo(123.3, 107.9, 122.9, 106.7, 122.6, 105.5);
      a.bezierCurveTo(121.9, 106.9, 121.2, 108.3, 120.5, 109.6);
      a.bezierCurveTo(119.7, 111, 118.8, 112.4, 118, 113.7);
      a.bezierCurveTo(110.3, 125.2, 100.6, 132.5, 88.9, 135.6);
      a.bezierCurveTo(75.9, 139.1, 64.3, 136.3, 54.2, 127.3);
      a.bezierCurveTo(51.5, 124.9, 49.2, 122.2, 47.4, 119.3);
      a.bezierCurveTo(42.2, 111.4,
       40.4, 101.7, 41.7, 90.1);
      a.closePath();
      a.moveTo(20.3, 118.2);
      a.bezierCurveTo(20.4, 117, 20.4, 116.4, 20.3, 116.5);
      a.bezierCurveTo(24.4, 105.8, 29.8, 95.7, 36.6, 86.2);
      a.bezierCurveTo(37.1, 85.5, 37.7, 84.8, 38.2, 84.1);
      a.bezierCurveTo(37.1, 88.6, 36.6, 93.4, 36.6, 98.3);
      a.bezierCurveTo(36.7, 106.3, 38.6, 113.5, 42.5, 119.7);
      a.bezierCurveTo(45.8, 125.2, 50.6, 129.9, 56.8, 134);
      a.bezierCurveTo(70, 142.9, 83.7, 143.9, 98, 137.2);
      a.bezierCurveTo(106.4, 133.2, 113.9, 127.9, 120.6, 121.5);
      a.lineTo(120.9, 121.3);
      a.lineTo(121.3, 121.5);
      a.bezierCurveTo(126.4,
       125, 131.7, 128.7, 137.2, 132.7);
      a.bezierCurveTo(142.2, 136.2, 147.7, 138.6, 153.7, 139.7);
      a.bezierCurveTo(161.7, 140.8, 169.7, 139.6, 177.8, 135.9);
      a.bezierCurveTo(183.6, 133.5, 188.4, 130, 192.3, 125.5);
      a.bezierCurveTo(197.1, 119.7, 200.6, 113.5, 202.9, 106.8);
      a.bezierCurveTo(203.6, 104.8, 204.2, 102.7, 204.6, 100.6);
      a.bezierCurveTo(205.1, 98.2, 205.5, 95.7, 205.7, 93.2);
      a.bezierCurveTo(205.8, 92.2, 205.8, 91.1, 205.9, 90.2);
      a.bezierCurveTo(205.9, 86.5, 205.4, 83, 204.4, 79.6);
      a.bezierCurveTo(209.2, 84.5, 213.3, 89.7, 216.9, 95.4);
      a.bezierCurveTo(218.2,
       97.5, 219.3, 99.6, 220.2, 101.8);
      a.bezierCurveTo(220.5, 102.5, 220.8, 103.3, 221, 104);
      a.bezierCurveTo(221.4, 104.9, 221.6, 105.7, 221.6, 106.6);
      a.bezierCurveTo(221.6, 107.6, 221.5, 108.5, 221.3, 109.4);
      a.bezierCurveTo(221.1, 110.4, 220.8, 111.5, 220.3, 112.5);
      a.bezierCurveTo(220.1, 113, 219.8, 113.5, 219.4, 114);
      a.bezierCurveTo(218.7, 115.1, 217.8, 116.3, 216.7, 117.4);
      a.lineTo(214.9, 119.9);
      a.lineTo(211.7, 124);
      a.lineTo(209.8, 126.7);
      a.lineTo(202.9, 136.6);
      a.lineTo(195.9, 144.6);
      a.bezierCurveTo(192.6, 148.2, 187.7, 152, 181.4, 156.2);
      a.lineTo(161.4,
       168.4);
      a.bezierCurveTo(159.7, 169.4, 156.6, 170.7, 152, 172.3);
      a.bezierCurveTo(147.4, 173.9, 141.6, 175.3, 134.5, 176.2);
      a.bezierCurveTo(128.4, 177.1, 122.5, 177.2, 116.7, 176.5);
      a.bezierCurveTo(109, 175.8, 101.5, 174.4, 94.1, 172.2);
      a.bezierCurveTo(86.9, 170, 79.8, 167.4, 72.9, 164.4);
      a.bezierCurveTo(72, 164, 71, 163.5, 70.1, 163.1);
      a.bezierCurveTo(65.2, 160.7, 60.8, 158.3, 57, 155.8);
      a.bezierCurveTo(54.7, 154.3, 52.5, 152.9, 50.5, 151.5);
      a.bezierCurveTo(47.2, 149.4, 44.1, 147.1, 41.1, 144.8);
      a.bezierCurveTo(37.4, 142, 34, 138.9, 31.1, 135.5);
      a.bezierCurveTo(29.4,
       133.7, 27.9, 131.7, 26.5, 129.7);
      a.bezierCurveTo(26.4, 129.5, 26.3, 129.4, 26.2, 129.3);
      a.lineTo(25, 127.3);
      a.bezierCurveTo(23.3, 125, 22.2, 123.4, 21.6, 122.5);
      a.bezierCurveTo(20.7, 121.1, 20.2, 119.7, 20.3, 118.2);
      a.closePath();
      a.moveTo(177.9, 163.2);
      a.lineTo(174.9, 169.8);
      a.lineTo(174.7, 170.3);
      a.lineTo(174.4, 170.9);
      a.bezierCurveTo(174, 172.1, 173.5, 173.3, 173.1, 174.5);
      a.bezierCurveTo(172.2, 177.2, 171.1, 179.7, 169.6, 182.2);
      a.bezierCurveTo(168.3, 184.5, 166.3, 186.1, 163.6, 187.2);
      a.bezierCurveTo(160.6, 188.4, 157.5, 188.5, 154.4,
       187.3);
      a.bezierCurveTo(151.9, 186.4, 149.5, 185.5, 147.2, 184.7);
      a.lineTo(146.7, 184.5);
      a.lineTo(146.3, 184.3);
      a.lineTo(140.9, 182.4);
      a.bezierCurveTo(142.8, 182.1, 145, 181.4, 147.5, 180.4);
      a.bezierCurveTo(148.2, 180, 148.9, 179.7, 149.6, 179.4);
      a.bezierCurveTo(152.5, 178, 155.3, 176.5, 158.1, 174.8);
      a.bezierCurveTo(161.2, 172.9, 164.4, 171.1, 167.5, 169.3);
      a.bezierCurveTo(170.7, 167.7, 173.7, 165.9, 176.8, 163.9);
      a.bezierCurveTo(177.2, 163.7, 177.6, 163.5, 177.9, 163.2);
      a.closePath();
      a.moveTo(101.1, 181.4);
      a.lineTo(97.1, 184.2);
      a.lineTo(96.8,
       184.3);
      a.lineTo(96.3, 184.7);
      a.bezierCurveTo(93.2, 186.5, 90.2, 187.9, 87.1, 188.9);
      a.bezierCurveTo(83.9, 189.9, 81.1, 189.2, 78.6, 186.6);
      a.bezierCurveTo(76, 184.1, 74, 181.3, 72.5, 178.3);
      a.bezierCurveTo(71.3, 175.7, 70.1, 172.9, 69, 170.1);
      a.lineTo(68, 167.8);
      a.bezierCurveTo(67.8, 167.3, 67.7, 166.8, 67.5, 166.3);
      a.bezierCurveTo(69.1, 167.1, 70.7, 167.9, 72.4, 168.8);
      a.bezierCurveTo(74.1, 169.6, 75.9, 170.5, 77.9, 171.4);
      a.bezierCurveTo(79.9, 172.3, 83.2, 173.8, 87.9, 175.9);
      a.bezierCurveTo(92.5, 177.9, 95.7, 179.3, 97.5, 180);
      a.bezierCurveTo(99.2,
       180.7, 100.4, 181.2, 101.1, 181.4);
      a.closePath();
      a.moveTo(25.8, 151.1);
      a.bezierCurveTo(23.2, 147.7, 22, 143.6, 22.3, 139);
      a.bezierCurveTo(22.3, 139, 22.3, 139, 22.3, 139);
      a.lineTo(22.4, 135.1);
      a.bezierCurveTo(22.5, 134.4, 22.9, 134.4, 23.6, 134.9);
      a.bezierCurveTo(24.4, 135.4, 25.2, 136, 26, 136.6);
      a.bezierCurveTo(27.6, 137.8, 29.1, 139, 30.7, 140.2);
      a.bezierCurveTo(34.1, 142.9, 37.3, 145.8, 40.4, 148.8);
      a.bezierCurveTo(42.4, 150.6, 44.1, 152.6, 45.6, 154.7);
      a.bezierCurveTo(45.8, 155.3, 45.9, 155.7, 45.7, 156);
      a.lineTo(45.5, 156.1);
      a.bezierCurveTo(40.5,
       158.4, 35.6, 158.3, 30.9, 155.9);
      a.bezierCurveTo(30.6, 155.7, 30.3, 155.6, 30, 155.4);
      a.bezierCurveTo(30, 155.3, 29.9, 155.3, 29.9, 155.3);
      a.bezierCurveTo(28.3, 154, 26.9, 152.6, 25.8, 151.1);
      a.closePath();
      a.moveTo(240.9, 209.6);
      a.bezierCurveTo(240.1, 211.5, 239.1, 213.3, 237.8, 215);
      a.bezierCurveTo(236.5, 216.5, 235.2, 218.1, 233.9, 219.6);
      a.bezierCurveTo(233.4, 220.2, 232.8, 220.7, 232.3, 221.1);
      a.bezierCurveTo(230.1, 222.1, 227.5, 222.5, 224.3, 222.1);
      a.bezierCurveTo(218.9, 221.9, 213.4, 222, 207.7, 222.3);
      a.bezierCurveTo(206.5, 222.4, 205.3,
       222.4, 204, 222.5);
      a.bezierCurveTo(203.3, 218.7, 201.8, 213.8, 199.6, 207.8);
      a.lineTo(200.2, 212.5);
      a.bezierCurveTo(200.1, 212, 200, 211.2, 199.7, 210.2);
      a.bezierCurveTo(199.9, 214.1, 200, 218.2, 199.9, 222.3);
      a.bezierCurveTo(199.9, 222.5, 199.9, 222.7, 199.9, 222.9);
      a.bezierCurveTo(199.9, 225, 199.7, 226.9, 199.4, 228.8);
      a.bezierCurveTo(199.1, 230.4, 198.7, 232, 198.3, 233.5);
      a.lineTo(196.7, 235.1);
      a.bezierCurveTo(196.6, 235.2, 196.5, 235.4, 196.3, 235.5);
      a.bezierCurveTo(195.2, 236.4, 193.3, 237.6, 190.7, 239.1);
      a.bezierCurveTo(188.1, 240.7,
       184.5, 241.7, 179.9, 242.1);
      a.bezierCurveTo(175.3, 242.4, 172, 242.5, 169.8, 242.3);
      a.bezierCurveTo(167.8, 242.1, 165.5, 241.6, 162.9, 240.8);
      a.bezierCurveTo(160.4, 239.9, 158, 237.9, 155.6, 234.8);
      a.bezierCurveTo(155.4, 234.6, 155.3, 234.4, 155.1, 234.2);
      a.bezierCurveTo(154.3, 233, 153.5, 231.6, 152.8, 230);
      a.bezierCurveTo(151.9, 227.8, 151.2, 225.3, 150.7, 222.4);
      a.bezierCurveTo(150.7, 222.2, 150.6, 222.1, 150.6, 221.9);
      a.bezierCurveTo(149.7, 216.4, 149.3, 213.1, 149.2, 212);
      a.bezierCurveTo(148.8, 215.6, 148.6, 219.2, 148.8, 222.8);
      a.bezierCurveTo(148.9,
       225.2, 149, 227.6, 149.4, 230);
      a.bezierCurveTo(149.4, 230.3, 149.4, 230.6, 149.5, 231);
      a.bezierCurveTo(141, 233.2, 132.2, 234.4, 123.2, 234.4);
      a.bezierCurveTo(113.4, 235.1, 103.6, 234.6, 93.8, 233);
      a.lineTo(94, 232);
      a.bezierCurveTo(94.3, 230, 94.4, 228.1, 94.4, 226.2);
      a.bezierCurveTo(94.4, 225.6, 94.3, 224.9, 94.3, 224.3);
      a.bezierCurveTo(94.2, 220.7, 94, 217.1, 93.8, 213.5);
      a.bezierCurveTo(93.8, 214.9, 93.7, 215.9, 93.6, 216.6);
      a.bezierCurveTo(93.5, 217.2, 93.5, 217.7, 93.4, 218.1);
      a.bezierCurveTo(93.4, 218.5, 93.2, 219.4, 92.8, 220.9);
      a.bezierCurveTo(92.6,
       222, 92.3, 223, 92, 223.9);
      a.bezierCurveTo(91.9, 224.2, 91.8, 224.5, 91.7, 224.8);
      a.bezierCurveTo(91.3, 226, 90.8, 227.1, 90.2, 228.3);
      a.bezierCurveTo(89.9, 229, 89.5, 229.7, 89.2, 230.4);
      a.bezierCurveTo(88.8, 230.9, 88.4, 231.4, 88, 231.9);
      a.bezierCurveTo(87.5, 232.5, 86.9, 233.1, 86.2, 233.7);
      a.bezierCurveTo(85.8, 234.1, 85.4, 234.5, 84.9, 234.8);
      a.bezierCurveTo(83.9, 235.6, 82.8, 236.2, 81.6, 236.7);
      a.bezierCurveTo(80.2, 237.3, 78.7, 237.7, 77.1, 238.1);
      a.bezierCurveTo(74.1, 238.7, 71, 239, 67.8, 239);
      a.bezierCurveTo(60.3, 239.1, 53.6, 237.3, 47.7,
       233.5);
      a.bezierCurveTo(47.6, 233.4, 47.5, 233.4, 47.4, 233.3);
      a.bezierCurveTo(45.9, 232.5, 45, 231.7, 44.9, 230.9);
      a.lineTo(44.6, 229.2);
      a.bezierCurveTo(44.6, 228.8, 44.5, 228.2, 44.5, 227.6);
      a.bezierCurveTo(44.5, 225.9, 44.5, 223.5, 44.6, 220.3);
      a.lineTo(44.6, 213.4);
      a.lineTo(44.7, 207.6);
      a.lineTo(43.7, 213);
      a.lineTo(42.4, 220.3);
      a.bezierCurveTo(41.9, 223.1, 41.7, 225.4, 41.6, 227.4);
      a.bezierCurveTo(41, 227.3, 40.3, 227.3, 39.7, 227.2);
      a.bezierCurveTo(37.7, 227.2, 35.8, 227.2, 33.8, 227.2);
      a.bezierCurveTo(32, 227.2, 30.2, 227.2, 28.4, 227.2);
      a.bezierCurveTo(26.4, 227.2, 24.5, 227.3, 22.6, 227.4);
      a.bezierCurveTo(21.3, 227.4, 19.7, 227.5, 17.8, 227.7);
      a.bezierCurveTo(15.9, 227.9, 13.9, 227.7, 11.9, 227.1);
      a.bezierCurveTo(9.8, 226.4, 8.3, 225.2, 7.4, 223.5);
      a.bezierCurveTo(6.5, 221.8, 5.6, 219.7, 4.8, 217.3);
      a.bezierCurveTo(4, 214.8, 3.5, 212.9, 3.3, 211.5);
      a.bezierCurveTo(3.2, 210.1, 3.6, 209, 4.5, 208.2);
      a.bezierCurveTo(5.4, 207.3, 6.7, 206.1, 8.4, 204.6);
      a.bezierCurveTo(10.2, 202.9, 11.6, 201.6, 12.7, 200.6);
      a.bezierCurveTo(13.7, 199.6, 16.9, 197.2, 22.4, 193.3);
      a.bezierCurveTo(26.1,
       190.5, 28.7, 189.1, 30.1, 188.9);
      a.bezierCurveTo(31.2, 193, 32.3, 197, 33.7, 201);
      a.bezierCurveTo(34.2, 202.8, 35, 204.4, 36, 205.9);
      a.lineTo(33.3, 187.7);
      a.lineTo(33.1, 185.9);
      a.lineTo(32.9, 184.7);
      a.lineTo(32.7, 183.4);
      a.bezierCurveTo(31.8, 176.3, 31, 168.9, 30.3, 161.3);
      a.bezierCurveTo(30.3, 161, 30.3, 160.7, 30.2, 160.3);
      a.bezierCurveTo(34.5, 162, 39, 162, 43.8, 160.4);
      a.bezierCurveTo(44.4, 160.1, 45.1, 159.9, 45.8, 159.6);
      a.lineTo(50.7, 157.9);
      a.lineTo(63.1, 164.7);
      a.bezierCurveTo(63.4, 166, 64, 168, 65.2, 170.7);
      a.lineTo(65.5, 171.5);
      a.bezierCurveTo(66.9,
       174.7, 68.3, 177.8, 69.8, 180.9);
      a.bezierCurveTo(71.4, 184.1, 73.4, 187, 76, 189.6);
      a.bezierCurveTo(78.5, 192.2, 81.7, 193.4, 85.5, 193.1);
      a.bezierCurveTo(89.2, 192.6, 92.8, 191.5, 96.3, 189.7);
      a.bezierCurveTo(98.5, 188.6, 100.4, 187.4, 102.1, 185.9);
      a.lineTo(103.2, 185);
      a.bezierCurveTo(103.4, 184.9, 103.6, 184.7, 103.8, 184.6);
      a.bezierCurveTo(106.5, 182.5, 108.3, 180.9, 109.3, 179.7);
      a.lineTo(109.4, 179.7);
      a.bezierCurveTo(114, 180.5, 118.1, 181, 121.9, 181.4);
      a.bezierCurveTo(125.7, 181.8, 128.8, 181.8, 131.3, 181.4);
      a.bezierCurveTo(133, 181.8,
       136.2, 183.2, 140.7, 185.6);
      a.bezierCurveTo(141, 185.7, 141.3, 185.9, 141.7, 186);
      a.bezierCurveTo(142.1, 186.3, 142.6, 186.5, 143, 186.7);
      a.bezierCurveTo(143.5, 186.9, 144, 187.1, 144.5, 187.3);
      a.bezierCurveTo(147.1, 188.4, 149.8, 189.4, 152.5, 190.3);
      a.bezierCurveTo(155.3, 191.3, 158.2, 191.7, 161.2, 191.7);
      a.bezierCurveTo(164.2, 191.7, 166.7, 190.7, 168.6, 188.6);
      a.bezierCurveTo(170, 187.2, 171.1, 185.6, 172, 184.1);
      a.bezierCurveTo(173.4, 181.6, 174.7, 179.1, 175.9, 176.6);
      a.bezierCurveTo(177.1, 174, 178.3, 171.4, 179.4, 168.7);
      a.bezierCurveTo(179.7,
       168, 180, 167.3, 180.2, 166.7);
      a.bezierCurveTo(181.4, 164, 182, 162.2, 182, 161.5);
      a.bezierCurveTo(183.8, 160.7, 186.6, 158.8, 190.2, 155.8);
      a.lineTo(191, 155.2);
      a.bezierCurveTo(191.7, 154.5, 192.6, 153.8, 193.4, 153.2);
      a.bezierCurveTo(193.8, 153, 194.1, 152.8, 194.5, 152.6);
      a.lineTo(196.6, 153.6);
      a.bezierCurveTo(197, 153.7, 197.6, 153.8, 198.4, 153.8);
      a.bezierCurveTo(199.3, 153.8, 200.6, 153.7, 202.1, 153.6);
      a.bezierCurveTo(204.6, 153.5, 207, 153.1, 209.4, 152.5);
      a.bezierCurveTo(210.5, 152.1, 211.6, 151.8, 212.6, 151.3);
      a.bezierCurveTo(212.6,
       151.4, 212.6, 151.4, 212.6, 151.4);
      a.bezierCurveTo(213.3, 158.8, 213.4, 166.1, 212.8, 173.3);
      a.lineTo(211.2, 182.6);
      a.lineTo(211, 183.6);
      a.lineTo(209.4, 192.8);
      a.lineTo(208.3, 198);
      a.lineTo(208.4, 198.1);
      a.bezierCurveTo(210.9, 194.2, 212.8, 190, 214.2, 185.6);
      a.lineTo(240.5, 201.5);
      a.bezierCurveTo(241.1, 202.2, 241.6, 202.9, 241.8, 203.6);
      a.bezierCurveTo(242.1, 205.4, 241.8, 207.4, 240.9, 209.6);
      a.closePath();
      a.fillStyle = "rgb(35, 44, 30)";
      a.fill();
      a.beginPath();
      a.moveTo(219.9, 140.2);
      a.bezierCurveTo(219.5, 141.6, 218.8, 143, 218, 144.5);
      a.bezierCurveTo(217.8, 144.9, 217.6, 145.2, 217.3, 145.6);
      a.bezierCurveTo(216.7, 146.3, 215.9, 146.9, 214.9, 147.4);
      a.bezierCurveTo(214.1, 147.8, 213.2, 148.2, 212.3, 148.4);
      a.bezierCurveTo(210.2, 149.1, 208, 149.5, 205.6, 149.5);
      a.bezierCurveTo(204.5, 149.5, 203.4, 149.4, 202.3, 149.3);
      a.bezierCurveTo(200.6, 148.9, 199.7, 148, 199.8, 146.7);
      a.lineTo(200.7, 145.2);
      a.bezierCurveTo(201.3, 144.3, 201.8, 143.4, 202.4, 142.5);
      a.bezierCurveTo(202.7, 141.9, 203, 141.3, 203.4, 140.8);
      a.bezierCurveTo(203.8, 140, 204.2, 139.2, 204.7, 138.5);
      a.bezierCurveTo(205.3,
       137.7, 205.9, 136.8, 206.5, 136);
      a.bezierCurveTo(206.9, 135.5, 207.3, 135, 207.6, 134.5);
      a.bezierCurveTo(208.3, 133.7, 209, 132.8, 209.7, 132);
      a.bezierCurveTo(209.9, 131.7, 210.2, 131.4, 210.5, 131);
      a.bezierCurveTo(211, 130.4, 211.5, 129.9, 212.1, 129.3);
      a.bezierCurveTo(212.6, 128.8, 213.1, 128.3, 213.6, 127.8);
      a.bezierCurveTo(214.1, 127.4, 214.6, 127, 215.1, 126.6);
      a.bezierCurveTo(215.3, 126.4, 215.5, 126.3, 215.6, 126.2);
      a.bezierCurveTo(216.8, 125.4, 217.9, 124.8, 219, 124.5);
      a.lineTo(219.3, 125.4);
      a.bezierCurveTo(220, 127.9, 220.5, 130.6, 220.8,
       133.3);
      a.bezierCurveTo(221, 135.7, 220.8, 138, 219.9, 140.2);
      a.closePath();
      a.moveTo(40.4, 148.8);
      a.bezierCurveTo(37.3, 145.8, 34.1, 142.9, 30.7, 140.2);
      a.bezierCurveTo(29.1, 139, 27.6, 137.8, 26, 136.6);
      a.bezierCurveTo(25.2, 136, 24.4, 135.4, 23.6, 134.9);
      a.bezierCurveTo(22.9, 134.4, 22.5, 134.4, 22.4, 135.1);
      a.lineTo(22.3, 139);
      a.bezierCurveTo(22.3, 139, 22.3, 139, 22.3, 139);
      a.bezierCurveTo(22, 143.6, 23.2, 147.7, 25.8, 151.1);
      a.bezierCurveTo(26.9, 152.6, 28.3, 154, 29.9, 155.3);
      a.bezierCurveTo(29.9, 155.3, 30, 155.3, 30, 155.4);
      a.bezierCurveTo(30.3,
       155.6, 30.6, 155.7, 30.9, 155.9);
      a.bezierCurveTo(35.6, 158.3, 40.5, 158.4, 45.5, 156.1);
      a.lineTo(45.7, 156);
      a.bezierCurveTo(45.9, 155.7, 45.8, 155.3, 45.6, 154.7);
      a.bezierCurveTo(44.1, 152.6, 42.4, 150.6, 40.4, 148.8);
      a.closePath();
      a.moveTo(87.9, 175.9);
      a.bezierCurveTo(83.2, 173.8, 79.9, 172.3, 77.9, 171.4);
      a.bezierCurveTo(75.9, 170.5, 74.1, 169.6, 72.4, 168.8);
      a.bezierCurveTo(70.7, 167.9, 69.1, 167.1, 67.5, 166.3);
      a.bezierCurveTo(67.7, 166.8, 67.8, 167.3, 68, 167.8);
      a.lineTo(69, 170.1);
      a.bezierCurveTo(70.1, 172.9, 71.3, 175.7, 72.5, 178.3);
      a.bezierCurveTo(74,
       181.3, 76, 184.1, 78.6, 186.6);
      a.bezierCurveTo(81.1, 189.2, 83.9, 189.9, 87.1, 188.9);
      a.bezierCurveTo(90.2, 187.9, 93.2, 186.5, 96.3, 184.7);
      a.lineTo(96.8, 184.3);
      a.lineTo(97.1, 184.2);
      a.lineTo(101.1, 181.4);
      a.bezierCurveTo(100.4, 181.2, 99.2, 180.7, 97.5, 180);
      a.bezierCurveTo(95.7, 179.3, 92.5, 177.9, 87.9, 175.9);
      a.closePath();
      a.moveTo(167.5, 169.3);
      a.bezierCurveTo(164.4, 171.1, 161.2, 172.9, 158.1, 174.8);
      a.bezierCurveTo(155.3, 176.5, 152.5, 178, 149.6, 179.4);
      a.bezierCurveTo(148.9, 179.7, 148.2, 180, 147.5, 180.4);
      a.bezierCurveTo(145,
       181.4, 142.8, 182.1, 140.9, 182.4);
      a.lineTo(146.3, 184.3);
      a.lineTo(146.7, 184.5);
      a.lineTo(147.2, 184.7);
      a.bezierCurveTo(149.5, 185.5, 151.9, 186.4, 154.4, 187.3);
      a.bezierCurveTo(157.5, 188.5, 160.6, 188.4, 163.6, 187.2);
      a.bezierCurveTo(166.3, 186.1, 168.3, 184.5, 169.6, 182.2);
      a.bezierCurveTo(171.1, 179.7, 172.2, 177.2, 173.1, 174.5);
      a.bezierCurveTo(173.5, 173.3, 174, 172.1, 174.4, 170.9);
      a.lineTo(174.7, 170.3);
      a.lineTo(174.9, 169.8);
      a.lineTo(177.9, 163.2);
      a.bezierCurveTo(177.6, 163.5, 177.2, 163.7, 176.8, 163.9);
      a.bezierCurveTo(173.7,
       165.9, 170.7, 167.7, 167.5, 169.3);
      a.closePath();
      a.moveTo(202.2, 94.7);
      a.bezierCurveTo(202.5, 86.8, 201.1, 79.7, 197.8, 73.5);
      a.bezierCurveTo(196.1, 70.1, 193.9, 67, 191.1, 64.1);
      a.bezierCurveTo(190.6, 63.5, 190, 63, 189.4, 62.4);
      a.bezierCurveTo(183.4, 56.7, 176.5, 53, 168.8, 51.2);
      a.bezierCurveTo(165.7, 50.5, 162.5, 50.1, 159.2, 50.1);
      a.bezierCurveTo(159.1, 50.1, 158.9, 50.1, 158.7, 50.1);
      a.bezierCurveTo(146.1, 51.7, 136, 57.6, 128.6, 67.7);
      a.bezierCurveTo(127.5, 69.4, 126.3, 71.1, 125, 72.9);
      a.bezierCurveTo(124.9, 73.2, 124.7, 73.5, 124.6, 73.8);
      a.lineTo(124.4, 74.2);
      a.lineTo(124.2, 73.8);
      a.lineTo(120.8, 67.4);
      a.bezierCurveTo(117.3, 59.5, 111.9, 53.4, 104.4, 49.1);
      a.bezierCurveTo(100, 46.5, 95.6, 44.9, 91.3, 44.1);
      a.bezierCurveTo(89.3, 43.8, 87.3, 43.6, 85.3, 43.7);
      a.bezierCurveTo(77.8, 43.8, 70.4, 46.7, 63, 52.3);
      a.bezierCurveTo(57.3, 56.8, 52.7, 61.9, 49.2, 67.7);
      a.bezierCurveTo(47.7, 70.1, 46.5, 72.7, 45.5, 75.3);
      a.bezierCurveTo(43.6, 79.9, 42.4, 84.8, 41.7, 90.1);
      a.bezierCurveTo(40.4, 101.7, 42.2, 111.4, 47.4, 119.3);
      a.bezierCurveTo(49.2, 122.2, 51.5, 124.9, 54.2, 127.3);
      a.bezierCurveTo(64.3,
       136.3, 75.9, 139.1, 88.9, 135.6);
      a.bezierCurveTo(100.6, 132.5, 110.3, 125.2, 118, 113.7);
      a.bezierCurveTo(118.8, 112.4, 119.7, 111, 120.5, 109.6);
      a.bezierCurveTo(121.2, 108.3, 121.9, 106.9, 122.6, 105.5);
      a.bezierCurveTo(122.9, 106.7, 123.3, 107.9, 123.8, 109);
      a.bezierCurveTo(124.3, 110.4, 124.9, 111.7, 125.6, 113);
      a.bezierCurveTo(130.4, 122.6, 137.6, 129.8, 147.3, 134.6);
      a.bezierCurveTo(149.4, 135.6, 153.1, 136.4, 158.5, 137);
      a.bezierCurveTo(168.3, 137.9, 177.6, 134.4, 186.7, 126.4);
      a.bezierCurveTo(193.1, 120.7, 197.5, 114.2, 199.9, 107.1);
      a.bezierCurveTo(201.3,
       103.2, 202, 99, 202.2, 94.7);
      a.closePath();
      a.fillStyle = "rgb(255, 255, 255)";
      a.fill();
      a.save();
      a.translate(g, 0);
      a.beginPath();
      a.moveTo(101.3, 71.1);
      a.bezierCurveTo(101, 71.1, 100.7, 71.2, 100.5, 71.3);
      a.bezierCurveTo(100.5, 71.3, 100.5, 71.3, 100.5, 71.3);
      a.bezierCurveTo(102.7, 72.9, 103.8, 75.8, 104, 79.9);
      a.bezierCurveTo(104.1, 84.2, 100.5, 86.1, 93, 85.6);
      a.bezierCurveTo(91, 85.5, 89.2, 85.4, 87.8, 85.3);
      a.bezierCurveTo(87.7, 86.6, 87.6, 87.9, 87.6, 89.3);
      a.bezierCurveTo(87.8, 91.8, 88.6, 94.3, 89.9, 96.7);
      a.bezierCurveTo(91.9, 101.5,
       95.2, 103.9, 99.8, 103.9);
      a.bezierCurveTo(107.4, 103.7, 112.3, 98, 114.7, 86.8);
      a.bezierCurveTo(114.7, 74.4, 110.2, 69.2, 101.3, 71.1);
      a.closePath();
      a.fillStyle = "rgb(0, 0, 0)";
      a.fill();
      a.restore();
      a.save();
      a.translate(h, 0);
      a.beginPath();
      a.moveTo(150.4, 74.1);
      a.bezierCurveTo(147.9, 71.7, 145.3, 70.5, 142.4, 70.5);
      a.bezierCurveTo(141.5, 70.5, 140.5, 70.7, 139.6, 71);
      a.bezierCurveTo(140.1, 71.3, 140.6, 71.6, 141.1, 72);
      a.bezierCurveTo(143.3, 73.6, 144.5, 76.5, 144.6, 80.6);
      a.bezierCurveTo(144.8, 84.9, 141.1, 86.8, 133.7, 86.3);
      a.bezierCurveTo(132.1,
       86.2, 130.8, 86.2, 129.6, 86.1);
      a.bezierCurveTo(129.6, 86.2, 129.6, 86.2, 129.6, 86.3);
      a.bezierCurveTo(129.6, 89.1, 130.2, 91.7, 131.5, 94.1);
      a.bezierCurveTo(134.1, 99, 138.3, 101.5, 144, 101.5);
      a.bezierCurveTo(146.8, 101.7, 149.7, 99.7, 152.5, 95.6);
      a.bezierCurveTo(154.5, 91.6, 155.5, 88.9, 155.5, 87.5);
      a.bezierCurveTo(155.5, 81.9, 153.8, 77.5, 150.4, 74.1);
      a.closePath();
      a.fillStyle = "rgb(0, 0, 0)";
      a.fill();
      a.restore();
      a.restore();
      a.restore()
     }

     function m(a) {
      function b() {
       var u = Date.now() - d;
       u < r ? g = 0 - e.$m(u, 0, 100, r) : u < v ? u > r + 100 && (p = m = -1 * e.Ve(u - (r + 100), 0, 10, v - (r + 100))) : u < s ? p = m = -10 + e.dj(u - v, 20, s - v) : u < w ? u > s + 100 && (p = m = 10 - e.dj(u - (s + 100), 10, w - (s + 100))) : u < x || u < B && (l = e.Ve(u - x, n, 50, B - x));
       u > r && u < s && (F = e.cj(u - r, 0.02, s - r, 6));
       u > s && u < x && (F = 0.02 - e.cj(u - s, 0.02, x - s, 2));
       var H = 0 + h,
        K = 75 + l + g;
       c.save();
       c.rotate(30 * Math.PI / 180);
       f(c, 0.32, 0.32 + F, H, K, m, p);
       c.restore();
       u < B ? window.requestAnimationFrame(b) : a()
      }
      var c = u.getContext("2d"),
       d = Date.now(),
       g = 0.1,
       h = 0,
       l = 0,
       m = 0,
       p = 0,
       n = h,
       r = 600,
       v = 400 + r,
       s = 600 + v,
       w = 700 + s,
       x = 500 + w,
       B = 800 + x,
       F = 0;
      window.requestAnimationFrame(b)
     }

     function p() {
      $("#dpic").removeClass();
      $("#dframe").animate({
       top: b.i(50),
       scale: 0.2
      }, 350, "easeInExpo");
      $("#dmsg").animate({
       top: b.i(50),
       scale: 0.2
      }, 350, "easeInExpo");
      $("#dshareBtn").fadeTo(200, 0);
      $("#d").delay(200).fadeOut(200, function() {
       h.kg();
       r = null;
       $("#gameBtnTray").show()
      })
     }
     var u, v, w = b.i(2.2);
     this.jb = function() {
      v = document.getElementById("e");
      v.width = b.i(1024);
      v.height = b.i(576);
      if (u = document.getElementById("moreCanvas")) u.width = 51, u.height = 51;
      $("#dshareBtn").click(function() {
       c.yt(l.X(n.Kq), c.mu, d.As() + "drawing" + r + ".jpg", function() {
        p();
        return !0
       });
       return !1
      });
      $("#d").click(function() {
       p()
      });
      $("#moreLink").mouseenter(function() {
       x || (x = !0, m(function() {
        x = !1
       }))
      }).click(function() {
       Analytics.yD("SMG_MRTINX_CTR_SITE_BehindtheScenes")
      })
     };
     this.Ed = function() {
      g.subscribe(g.v.Ib, function() {
       a.la({
        text: l.X(n.Hp),
        qh: "dmsg",
        ua: !0
       });
       a.la({
        text: l.X(n.Jq),
        Lc: "#dshareBtn img",
        ua: !0
       })
      });
      g.subscribe(g.v.xq, this.lB);
      g.subscribe(g.v.Cp, this.Ho)
     };
     var r = null;
     this.Ho = function(a) {
      r = a + 1;
      h.ig();
      $("#gameBtnTray").hide();
      $("#dpic").addClass("drawing" + r);
      $("#dframe").animate({
       top: b.i(100),
       scale: 0.35
      }, 0);
      $("#dframe").fadeTo(0, 0);
      $("#dmsg").animate({
       top: b.i(60),
       scale: 0.5
      }, 0);
      $("#dmsg").fadeTo(0, 0);
      $("#dshareBtn").fadeTo(0, 0);
      $("#d").fadeIn(100, function() {
       $("#dframe").fadeTo(0, 1);
       $("#dmsg").fadeTo(0, 1);
       $("#dframe").animate({
        top: 0,
        scale: 1
       }, 350, "easeOutBack");
       $("#dmsg").animate({
        top: 0,
        scale: 1
       }, 350, "easeOutBack");
       $("#dshareBtn").delay(600).fadeTo(200, 1)
      })
     };
     var x = !1;
     this.lB = function() {
      var a = v.getContext("2d");
      h.ig();
      $("#e").fadeIn(function() {
       function c() {
        var P = Date.now() - d;
        P < s ? (g = e.$m(P,
         u, w, s), l = e.$m(P, v, w, s)) : P < F ? P > s + 100 && (r = n = -1 * e.Ve(P - (s + 100), 0, b.i(10), F - (s + 100))) : P < H ? r = n = b.i(-10) + e.dj(P - F, b.i(20), H - F) : P < K ? P > H + 100 && (r = n = b.i(10) - e.dj(P - (H + 100), b.i(10), K - (H + 100))) : !(P < M) && P < O && (p = e.Ve(P - M, x, b.i(300), O - M), g = b.i(w) - e.Ve(P - M, 0, b.i(2), s), l = b.i(w) - e.Ve(P - M, 0, b.i(2), s));
        P > s && P < H && (Q = e.cj(P - s, 0.1, H - s, 6));
        P > H && P < M && (Q = 0.1 - e.cj(P - H, 0.1, M - H, 2));
        P < O ? window.requestAnimationFrame(c) : ($("#e").fadeOut(), h.kg());
        var P = m + (b.i(500) - g / w * b.i(200)),
         U = p + (b.i(600) - l / w * b.i(400));
        f(a, g, l + Q, P, U, n, r)
       }
       var d =
        Date.now(),
        g = 0.1,
        l = 0.1,
        m = 0,
        p = 0,
        n = 0,
        r = 0,
        u = g,
        v = l,
        x = m,
        s = 600,
        F = 400 + s,
        H = 600 + F,
        K = 700 + H,
        M = 500 + K,
        O = 800 + M,
        Q = 0;
       window.requestAnimationFrame(c)
      })
     }
    }
   }(ga, cb, T, H, Oa, xa, U, $a, ha, F),
   mc = function() {
    for (var a = ["ms", "moz", "webkit", "o"], c = 0; c < a.length && !window.requestAnimationFrame; c++) window.requestAnimationFrame = window[a[c] + "RequestAnimationFrame"];
    if (!window.requestAnimationFrame) {
     var d = 1E3 / 60,
      b = 0;
     window.requestAnimationFrame = function(a) {
      var c = Date.now(),
       g = Math.max(0, d - (c - b));
      window.setTimeout(function() {
        a(Date.now())
       },
       g);
      b = c + g
     }
    }
    return window.requestAnimationFrame
   }(),
   nc = function(a, c, d, b, f, e, g, h, l) {
    function n() {
     var a = document.getElementById("vid");
     if (!a) {
      try {
       a = document.createElement("video")
      } catch (b) {
       return null
      }
      a.id = "vid";
      a.className = "ctrPointer";
      $("#video").append(a)
     }
     return a
    }
    var q = null,
     m = {
      Vs: function() {
       if (0 === (l.Ye(0, 0) || 0)) {
        var a = n(),
         b = c.Gr,
         e = d.Gs(),
         f = d.Uo;
        if (null != a && null != e) try {
         a.src = f + "intro_" + b + e, a.load()
        } catch (g) {}
       }
      },
      kA: function() {
       0 < (l.Ye(0, 0) || 0) && $("#vid").remove()
      },
      Zz: function(a) {
       var b = l.Ye(0, 0) || 0,
        c =
        document.getElementById("vid");
       q = a;
       if (0 === b && c && (a = c.readyState, 2 === a || 3 === a || 4 === a)) {
        g.Oh();
        $(c).fadeIn(300, function() {
         c.play()
        });
        c.addEventListener("ended", m.Um);
        c.addEventListener("mousedown", m.Um);
        return
       }
       m.Um()
      },
      Um: function() {
       var a = document.getElementById("vid");
       $(a).fadeOut(500, function() {
        a.pause();
        a.seek = 0
       });
       q && q()
      },
      Uy: function() {
       var a = n(),
        b = c.Gr,
        e = d.Gs(),
        f = d.Uo;
       if (null != a && null != e) try {
        a.src = f + "outro_" + b + e, a.load()
       } catch (g) {}
      },
      bA: function() {
       var a = document.getElementById("vid");
       if (a) {
        var c = a.readyState;
        2 === c || 3 === c || 4 === c ? (g.Oh(), g.kf || (a.volume = 0), $(a).fadeIn(300, function() {
         a.play()
        }), a.addEventListener("ended", m.es), a.addEventListener("mousedown", m.es)) : ($(a).remove(), f.Va(b.Dg, !1))
       }
      },
      es: function() {
       f.Va(b.Dg, !0);
       var a = $("#vid");
       a.fadeOut(500, function() {
        a[0].pause();
        a[0].seek = 0;
        a.remove()
       })
      },
      jb: function() {
       this.Vs()
      }
     };
    h.subscribe(h.v.tq, function() {
     m.Vs()
    });
    return m
   }(V, H, T, ya, qb, ra, na, U, ua),
   oc = function(a, c, d, b, f, e, g, h, l, n, q, m, p, u, v, w, r, x, k, D, C, F, z, E, J, H, K, G, L) {
    var A = a.uE || p.Sl,
     s = new function() {
      function u() {
       $("#levelMenu").hide()
      }

      function v() {
       r.ig();
       $("#levelMenu").show()
      }

      function D() {
       f.cb >= f.Mt() - 1 ? (H.hide(), x.bA()) : (N.Ln = !0, g.Va(a.ls ? e.qb : e.Vc, !1))
      }

      function M() {
       if (f.cb !== f.Mt() - 1) return !1;
       var a = b.Nc(f.cb);
       return f.Nb !== a ? !1 : !0
      }

      function O() {
       $("#resultScore").text(ha[ea]);
       ea++;
       ea < ga.length && (ea < ia ? setTimeout(function() {
        O()
       }, 10) : setTimeout(function() {
        O()
       }, 167))
      }

      function Q() {
       N.qe = !0;
       null != aa && clearTimeout(aa);
       aa = setTimeout(function() {
        N.qe = !1;
        aa = null
       }, 1E3)
      }

      function P(a) {
       var d = g.Xe(a);
       a == e.qb || a == e.Vc || a == e.Zd ? H.fadeOut(300) :
        a !== e.Bd && H.show();
       a !== e.si && u();
       a !== e.qb && a !== e.Bd || m.Ph(A);
       var h = g.Xe(e.Vc);
       a == e.Vc ? (f.Pu(), b.gi(), h.Kh(), N.Ln ? (N.Ln = !1, setTimeout(function() {
        $("#levelResults").hide();
        h.rB();
        f.wj() || L.ku()
       }, 800)) : (clearTimeout(ca), ca = setTimeout(function() {
        h.ax()
       }, 300))) : h.ao();
       var n = g.Xe(e.Ke);
       n && (a === e.Ke ? n.Kh() : n.ao());
       a == e.Bd ? (G.Pc(!0, 0), d.Kh()) : a == e.Ff ? T(!1) : a === e.Dg ? ($("#levelResults").hide(), H.OA(), a = C.X(z.Kp).replace("%d", b.xf()), l.la({
        text: a,
        Lc: "#finalScore img",
        scale: 0.8 * c.bb
       }), $("#congrats").empty().append(l.la({
        text: C.X(z.pp),
        scale: 1.2 * c.bb
       })), l.la({
        text: C.X(z.Lq),
        Lc: "#finalShareBtn img",
        scale: 0.8 * c.bb,
        Sn: c.i(130)
       }), l.la({
        text: C.X(z.wq),
        Lc: "#finalFunBtn img",
        scale: 0.8 * c.bb,
        Sn: c.i(310)
       })) : a == e.Zd ? k.ra(k.v.mr) : a == e.Ce ? k.ra(k.v.Er) : a == e.Ie && k.ra(k.v.Er)
      }

      function U(h) {
       if (h == e.qb) {
        $("#playBtn").click(function() {
         m.O(p.ka);
         K.zz && K.zz();
         x.Zz(function() {
          0 === (b.Ye(0, 0) || 0) ? N.it(0, 0) : g.Va(a.ls ? e.Bd : e.Vc, !1)
         })
        });
        $("#optionsBtn").click(function() {
         m.O(p.ka);
         d.JD ? k.ra(k.v.uw) : g.Va(e.Zd)
        });
        $("#achievementsBtn").click(function() {
         X && (m.O(p.ka),
          g.Va(e.Ce))
        }).toggleClass("disabled", !X);
        $("#leaderboardsBtn").click(function() {
         X && (m.O(p.ka), g.Va(e.Ie))
        }).toggleClass("disabled", !X);
        var w = null;
        $("#resetYesBtn").on(n.Mo, function() {
         m.O(p.ka);
         w = setTimeout(function() {
          L.Sf();
          w = null;
          q.clear();
          b.pA();
          f.rA();
          k.ra(k.v.tq)
         }, 3E3)
        }).on(n.bn, function() {
         null != w && clearTimeout(w)
        });
        T(!1);
        $("#optionSound").click(function() {
         T(!0, "optionMsg")
        });
        N.Vu ? ($("#optionHd").addClass("activeResolution"), $("#optionSd").addClass("inActiveResolution"), $("#optionSd").addClass("ctrPointer"),
         $("#optionSd").hover(function() {
          V("optionMsg", C.X(z.Fq), 4E3)
         }, function() {
          $("#optionMsg").stop(!0, !0).fadeOut(500)
         }), h = "optionSd") : ($("#optionSd").addClass("activeResolution"), $("#optionHd").addClass("inActiveResolution"), $("#optionHd").addClass("ctrPointer"), $("#optionHd").hover(function() {
         V("optionMsg", C.X(z.Eq), 4E3)
        }, function() {
         $("#optionMsg").stop(!0, !0).fadeOut(500)
        }), h = "optionHd");
        $("#" + h).click(function() {
         q.PA(!N.Vu);
         window.location.reload()
        });
        k.subscribe(k.v.Ib, function() {
         R("#playBtn img",
          z.fw);
         R("#optionsBtn img", z.Zd);
         R("#resetYesBtn img", z.Gw);
         R("#resetNoBtn img", z.bw);
         l.la({
          text: C.X(z.Ie),
          Ab: "leaderboardsBtn",
          scale: 0.8 * c.bb
         });
         l.la({
          text: C.X(z.Ce),
          Ab: "achievementsBtn",
          scale: 0.8 * c.bb
         })
        })
       } else if (h == e.Vc) $("#boxBack").click(function() {
        m.O(p.ka);
        g.Va(e.qb)
       }), h = g.Xe(h), h.init(s);
       else if (h == e.Ke) $("#boxEnterCodeButton").click(function() {
        m.O(p.ka);
        g.Va(e.Ke)
       }), $("#codeBack").click(function() {
        m.O(p.ka);
        g.Va(e.Vc)
       }), h = g.Xe(h), h.init(s);
       else if (h == e.Bd) $("#levelBack").click(function() {
        m.O(p.ka);
        g.Va(a.ls ? e.qb : e.Vc)
       }), G.Pc(!0, 0), h = g.Xe(h), h.init(s);
       else if (h == e.Ff) $("#gameRestartBtn").click(function() {
        N.qe || (m.O(p.ka), ba(f.Nb, !0, !0))
       }), $("#gameMenuBtn").click(function() {
        N.qe || (m.O(p.ka), v())
       });
       else if (h == e.si) $("#continueBtn").click(function() {
        m.O(p.ka);
        u();
        r.kg()
       }), $("#skipBtn").click(function() {
        m.O(p.ka);
        u();
        f.wj() ? (b.rf(f.cb, f.Nb, 0), ba(f.Nb + 1, !1)) : ($("#gameBtnTray").hide(), D())
       }), $("#selectBtn").click(function() {
        m.O(p.ka);
        u();
        r.vu();
        N.cg = !0;
        N.vh = !1;
        N.Tm()
       }), $("#menuBtn").click(function() {
        m.O(p.ka);
        u();
        r.vu();
        N.cg = !0;
        N.vh = !0;
        N.Tm()
       }), T(!1), $("#gameSound").click(function() {
        T(!0, "gameMsg")
       }), k.subscribe(k.v.Ib, function() {
        R("#continueBtn img", z.gv);
        R("#skipBtn img", z.lw);
        R("#selectBtn img", z.Vv);
        R("#menuBtn img", z.Xv)
       });
       else if (h == e.sq) $("#nextBtn").click(function() {
        N.qe || (Q(), m.O(p.ka), f.wj() ? ba(f.Nb + 1, !1) : D())
       }), $("#replayBtn").click(function() {
        N.qe || (Q(), m.O(p.ka), ba(f.Nb, !1))
       }), $("#lrMenuBtn").click(function() {
        N.qe || (Q(), m.O(p.ka), N.cg = !0, N.vh = !1, N.yu())
       }), k.subscribe(k.v.Ib, function() {
        R("#nextBtn img",
         z.NEXT);
        R("#replayBtn img", z.vb);
        R("#lrMenuBtn img", z.qb);
        l.oc({
         text: C.X(z.lv),
         qh: "resultTickerMessage",
         ua: !0
        })
       });
       else if (h == e.Dg) $("#gameCompleteBack").click(function() {
        m.O(p.ka);
        g.Va(e.qb);
        H.hide()
       }), $("#finalShareBtn").click(function() {
        var a = b.xf();
        J.yt(d.cy(a, f.dA()), J.mu, d.Ds() + "score" + a + ".png", Ia(!0))
       });
       else if (h == e.Zd) {
        var A = d.PB,
         B = $("#soundBtn");
        d.cB(B, function() {
         var a = !q.qn();
         m.kk(a);
         m.O(p.ka);
         A(B, a);
         T(!1);
         T(!1)
        });
        var O = d.NB,
         M = $("#musicBtn");
        d.VA(M, function() {
         m.O(p.ka);
         var a = !q.nn();
         m.ik(a);
         O(M, a);
         T(!1);
         T(!1)
        });
        var P = d.MB;
        d.SA(function(b) {
         m.O(p.ka);
         null == b && (b = a.On.indexOf(q.lh()), b = a.On[(b + 1) % a.On.length]);
         q.RA(b);
         k.ra(k.v.Ib)
        });
        var S = d.KB;
        d.JA(function() {
         m.O(p.ka);
         var a = !q.ln();
         q.IA(a);
         S(a)
        });
        var Y = $("#resetBtn").click(function() {
         var a = l.la({
           text: C.X(z.Hq),
           Ec: E.T,
           width: 1250 * c.Gb,
           ua: !0
          }),
          b = l.oc({
           text: C.X(z.Gq),
           ua: !0,
           Sn: c.i(550)
          });
         $("#resetText").empty().append($(a));
         $("#resetHoldYes").empty().append($(b));
         m.O(p.ka);
         L.nk("resetGame")
        });
        $("#optionsBack").click(function() {
         m.O(p.ka);
         g.Va(e.qb)
        });
        d.AB(!a.MD);
        h = function() {
         R("#optionsTitle img", z.Zd);
         A(B, q.qn());
         O(M, q.nn());
         P();
         S(q.ln());
         d.bB(Y, C.X(z.iw));
         var a = q.lh();
         $("#lang").removeClass("lang-en lang-de lang-ru lang-fr").addClass("lang-" + F.zB(a))
        };
        k.subscribe(k.v.Ib, h);
        k.subscribe(k.v.mr, h)
       } else h === e.Ie ? $("#leaderboardBack").click(function() {
        m.O(p.ka);
        g.Va(e.qb)
       }) : h === e.Ce && $("#achievementsBack").click(function() {
        m.O(p.ka);
        g.Va(e.qb)
       })
      }

      function S() {
       $("#achievementsBtn").toggleClass("disabled", !X);
       $("#leaderboardsBtn").toggleClass("disabled", !X)
      }

      function V(a, b, c) {
       if (void 0 != a) {
        c = c || 500;
        a = $("#" + a);
        var d = a.find("img");
        0 === d.length && (d = $("<img/>").appendTo(a));
        l.oc({
         text: b,
         img: d[0],
         ua: !0,
         alpha: 0.6
        });
        a.stop(!0, !0).fadeIn(500).delay(c).fadeOut(750)
       }
      }

      function T(a, b) {
       var c, d = m.ve,
        e = m.kf;
       a && (d && e ? (d = !0, e = !1) : e = d || e ? d = !1 : d = !0, m.kk(d), m.ik(e));
       c = d && !e ? "effectsOnly" : d || e ? "allSound" : "noSound";
       $("#optionSound").removeClass("effectsOnly noSound allSound").addClass(c);
       $("#gameSound").removeClass("effectsOnly noSound allSound").addClass(c);
       e || d ? (c = e ?
        z.$v : z.Zv, d = d ? z.pw : z.ow, d = C.X(z.ap).replace("{0}", C.X(c).toLowerCase()).replace("{1}", C.X(d).toLowerCase())) : d = C.X(z.Fp);
       V(b, d)
      }

      function R(a, b) {
       l.la({
        text: C.X(b),
        Lc: a,
        ua: !0
       })
      }
      var N = this;
      this.Vu = c.zy;
      this.qe = this.vj = this.Ln = this.vh = this.cg = !1;
      var Y = w.vE || 30,
       X = !1;
      k.subscribe(k.v.rm, function() {
       X = !0;
       S()
      });
      k.subscribe(k.v.sm, function() {
       X = !1;
       S()
      });
      var ca = null,
       aa = null,
       ba = this.Gz = function(a, b, c) {
        H.fadeIn(650, 100);
        f.Nb = a;
        M() && x.Uy();
        c ? r.$j() : (g.Va(e.Ff, !b), setTimeout(function() {
         N.nt()
        }, 200))
       };
      this.yu = function() {
       N.vh &&
        (H.fadeOut(800, 400), m.Ph(A));
       G.mx(function() {
        N.vj = !1;
        N.vh ? g.Va(e.qb, !1) : (G.Pc(!0, 0), g.Va(e.Bd, !0))
       })
      };
      this.nt = function() {
       var a = g.Yi == e.Bd ? 400 : 0;
       $("#levelScore").fadeOut();
       $("#levelBack").fadeOut();
       $("#levelOptions").fadeOut(a, function() {
        N.vj ? ($("#levelResults").fadeOut(800), setTimeout(function() {
         r.ru(f.cb + 1, f.Nb);
         G.jo(!1, function() {
          N.iu()
         })
        }, 400)) : G.Fz(function() {
         N.vj = !0;
         r.ru(f.cb + 1, f.Nb);
         G.jo(!0, function() {
          N.iu()
         })
        })
       })
      };
      this.Tm = function() {
       N.ox();
       setTimeout(function() {
        N.cg || $("#levelResults").delay(750).fadeIn(250);
        G.nx(function() {
         N.cg ? N.yu() : setTimeout(function() {
          O()
         }, 250)
        })
       }, 250)
      };
      this.iu = function() {
       $("#levelBackground").hide();
       w.hu && a.Mx && $("#bg").show();
       $("#gameBtnTray").fadeIn()
      };
      this.ox = function() {
       G.Pc(!1, 1);
       Q();
       $("#levelBackground").show();
       w.hu && a.Mx && $("#bg").hide();
       $("#gameBtnTray").fadeOut()
      };
      var ga = [],
       ha = [],
       ea = 0,
       ia = 0;
      this.bo = function(a) {
       function c(a, b, d) {
        function e() {
         var c = Date.now(),
          q = (c - m) / k;
         m = c;
         p += Math.round(b * q);
         h -= a * q;
         0 >= h ? (h = 0, p = f, s.fadeOut(400), r.fadeOut(400, d)) : n(e);
         l.oc({
          text: g(h),
          img: r[0],
          ua: !0
         });
         l.ns({
          text: p,
          Ab: "resultScore",
          ua: !0
         })
        }
        var f = p + b,
         h = a,
         k = Math.max(1E3, 2E3 - 50 * a),
         m = Date.now(),
         n = window.requestAnimationFrame;
        e()
       }

       function e(a, b) {
        function c() {
         var e = Date.now(),
          h = Math.min(Math.round(a * (e - f) / 1E3), d);
         f = e;
         d -= h;
         p += h;
         0 >= d ? (d = 0, p = a, s.fadeOut(400), r.fadeOut(400, b)) : g(c);
         l.oc({
          text: d,
          img: r[0],
          ua: !0
         });
         l.ns({
          text: p,
          Ab: "resultScore",
          ua: !0
         })
        }
        var d = a,
         f = Date.now(),
         g = window.requestAnimationFrame;
        c()
       }

       function g(a) {
        var b = Math.floor(a / 60);
        a = Math.round(a % 60);
        return b + ":" + (10 > a ? "0" + a : a)
       }
       var h = a.Eb,
        k = a.gk,
        m = a.time,
        n, p = 0,
        q = 1E3 * h;
       Math.round((k - 1E3 * h) / m);
       switch (h) {
        case 3:
         $("#resultStar1").removeClass("starEmpty").addClass("star");
         $("#resultStar2").removeClass("starEmpty").addClass("star");
         $("#resultStar3").removeClass("starEmpty").addClass("star");
         n = C.X(z.Uv);
         break;
        case 2:
         $("#resultStar1").removeClass("starEmpty").addClass("star");
         $("#resultStar2").removeClass("starEmpty").addClass("star");
         $("#resultStar3").removeClass("star").addClass("starEmpty");
         n = C.X(z.Tv);
         break;
        case 1:
         $("#resultStar1").removeClass("starEmpty").addClass("star");
         $("#resultStar2").removeClass("star").addClass("starEmpty");
         $("#resultStar3").removeClass("star").addClass("starEmpty");
         n = C.X(z.Sv);
         break;
        default:
         $("#resultStar1").removeClass("star").addClass("starEmpty"), $("#resultStar2").removeClass("star").addClass("starEmpty"), $("#resultStar3").removeClass("star").addClass("starEmpty"), n = C.X(z.Rv)
       }
       l.la({
        text: n,
        Lc: "#resultStatus img",
        ua: !0
       });
       var r = $("#resultTickerValue").hide(),
        s = $("#resultTickerLabel").hide(),
        u = $("#resultScore").empty().hide(),
        v = $("#resultImproved").hide(),
        w = $("#resultTickerMessage").hide();
       l.oc({
        text: C.X(z.rw),
        img: s[0],
        ua: !0
       });
       l.oc({
        text: q,
        img: r[0],
        ua: !0
       });
       $("#resultScore img").remove();
       setTimeout(function() {
        s.fadeIn(300);
        r.fadeIn(300);
        u.fadeIn(300, function() {
         e(q, function() {
          l.oc({
           text: C.X(z.vm),
           img: s[0],
           ua: !0
          });
          s.fadeIn(300);
          l.oc({
           text: g(Math.ceil(m)),
           img: r[0],
           ua: !0
          });
          r.fadeIn(300, function() {
           c(Math.ceil(m), k - p, function() {
            w.fadeIn(300);
            null != B && 0 < B && k > B && ($.browser.msie ? v.show() : v.animate({
             scale: 2.5,
             opacity: 0
            }, 0, function() {
             v.css("display", "block");
             v.animate({
              scale: 1,
              opacity: 1
             }, 600, "easeInCubic")
            }))
           })
          })
         })
        })
       }, 1E3);
       n = f.cb;
       var A = f.Nb,
        B = b.pn(n, A - 1);
       b.Fo(n, A - 1, k);
       b.rf(n, A - 1, h);
       b.Nc(n) > A && f.wj() && b.rf(n, A, 0);
       N.cg = !1;
       N.Tm();
       0 === n && 1 === A && (K.vz && K.vz(a.ws), a.ws < Y && !d.ND && setTimeout(function() {
        L.nB()
       }, 3E3), x.kA())
      };
      var fa = !0;
      this.Ru = function() {
       $(window).width() < c.i(1024) + 120 && fa ? ($("#moreLink").fadeOut(function() {
        fa = !1
       }), $("#zenbox_tab").fadeOut()) : $(window).width() > c.i(1024) + 120 && !fa && ($("#moreLink").fadeIn(function() {
        fa = !0
       }), $("#zenbox_tab").fadeIn())
      };
      this.jn = !0;
      this.mo = function() {
       g.Yi === e.Ff && r.By() && !N.qe ? v() : m.Oh()
      };
      this.Rt = function() {
       g.Yi !== e.si && N.jn && m.zo()
      };
      this.init = function() {
       b.load();
       g.fo = P
      };
      this.jb = function() {
       x.jb();
       h.jb();
       g.jb();
       H.jb();
       $(window).blur(N.mo);
       $(window).focus(N.Rt);
       $(window).resize(function() {
        N.Ru()
       })
      };
      this.Ed = function() {
       k.subscribe(k.v.pl, this.bo);
       G.Ed();
       h.Ed();
       g.Ed(U);
       f.Ed();
       k.ra(k.v.Ib);
       if (null != w.bx && null != w.ef) this.it(w.bx - 1, w.ef - 1);
       else if (q.ju) {
        var a = g.Xe(e.Ke);
        a && a.Jn && a.Jn() ? (G.Pc(!0, 0), g.Va(e.Ke, !0)) : g.Va(e.qb, !0)
       }
       var b = this;
       k.subscribe(k.v.Dq, function() {
        b.mo()
       });
       k.subscribe(k.v.Gp, function() {
        b.jn = !0;
        b.Rt()
       });
       k.subscribe(k.v.Bp, function() {
        b.jn = !1;
        b.mo()
       })
      };
      this.it = function(a, b) {
       g.Va(e.Ff, !0);
       f.cb = a;
       f.Nb = b + 1;
       this.nt()
      };
      this.Hz = function(a) {
       N.vj = !1;
       G.Pc(!0, 0);
       g.Va(e.Bd);
       H.HA(a)
      }
     };
    return s
   }(V, H, T, ua, Ra, ya, qb, lc, ga, Ua, ra, na, w, mc, xa, ta, $a, nc, U, qa, ha, fa, F, Q, cb, function(a, c) {
    var d = null;
    return {
     jb: function() {
      d = $("#gameBorder")
     },
     HA: function(b) {
      b = (b = c.Tr[b]) ? a.Uc + b : "";
      d.removeClass("gameComplete").css("background-image",
       "url(" + b + ")")
     },
     OA: function() {
      d.css("background-image", "").addClass("gameComplete")
     },
     hide: function() {
      d.hide()
     },
     show: function() {
      d.show()
     },
     fadeIn: function(a, c) {
      d.delay(c || 0).fadeIn(a)
     },
     fadeOut: function(a, c) {
      d.delay(c || 0).fadeOut(a)
     }
    }
   }(T, V), Oa, bb, ab),
   pc = function(a, c, d, b, f, e, g, h, l, n) {
    return {
     init: function() {
      a.init();
      e.Ih(function() {
       d.init();
       h.ra(h.v.bv)
      })
     },
     jb: function() {
      f.xx && "undefined" != typeof document.body.onselectstart && (document.body.onselectstart = Ia(!1));
      $(".ctrCursor").on("mousedown mouseup", function() {
       $(this).toggleClass("ctrCursorActive")
      });
      $("body").addClass("ui-" + c.be);
      b.jb("c");
      b.element.width = c.pb;
      b.element.height = c.$a;
      c.fC || (c.Hk ? $(b.element).width(c.Hk).height(c.eC) : $(b.element).width(c.pb).height(c.$a));
      g.jb && g.jb();
      a.jb();
      d.jb();
      h.ra(h.v.av)
     },
     Bo: function() {
      a.Bo(function() {
       d.Ed();
       h.ra(h.v.bp);
       $(".hideBeforeLoad").fadeIn(500);
       d.Ru();
       $("#gameFooterSocial").css("top", 0);
       if (!f.Om && n.Tn()) {
        $("#lsDomain").text(location.protocol + "//" + location.host);
        $("#lsChromeInfoLink").show(0 <= navigator.userAgent.indexOf("Chrome"));
        var a = $("#lsWarning").fadeIn(100);
        $("#lsOkButton").on("click", function() {
         a.fadeOut()
        })
       }
      })
     }
    }
   }(xb, H, oc, Y, ra, Aa, Va, U, eb, T),
   qc = function(a, c, d, b, f) {
    a("forceHTML5Audio", c.Ux);
    window.showFpsCounter = function() {
     b.xs = !0
    };
    a("initFB", d.ty);
    a("initTwitter", d.wy);
    a("onLevelWon", function(a) {
     f.subscribe(f.v.pl, function() {
      a()
     })
    });
    a("pauseGame", function() {
     f.ra(f.v.Dq)
    });
    a("enable", function() {
     f.ra(f.v.Gp)
    });
    a("disable", function() {
     f.ra(f.v.Bp)
    });
    return window.ZeptoLab
   }(function() {
    return function(a, c) {
     var d = window.ZeptoLab;
     null == d && (d = window.ZeptoLab = {});
     var b = d.ctr;
     null == b && (b = d.ctr = {});
     b[a] = c
    }
   }(), ta, cb, ra, U);
  (function(a, c) {
   c.Tn() && (a.init(), $(document).ready(function() {
    a.jb();
    a.Bo()
   }))
  })(pc, T, qc)
 })();
})();