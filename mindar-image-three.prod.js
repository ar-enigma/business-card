import { Matrix4 as Te, Vector3 as Se, Quaternion as Qt, Scene as Ct, WebGLRenderer as Ti, sRGBEncoding as Si, PerspectiveCamera as vi, Group as zt } from "three";
import { o as S, b as w, c as y, d as te, E as A, A as Xt, e as de, m as W, f as K, s as U, g as M, h as ue, t as ve, B as Zt, i as Yt, D as Mt, j as Oi, L as es, r as v, k as pe, S as ts, M as ss, T as me, l as Y, n as xt, p as as, q as ae, R as rs, u as ns, v as is, w as $e, x as Z, y as ce, z as Lt, F as he, G as _i, H as Ai, I as Ye, J as Me, K as et, N as re, O as Fe, P as tt, Q as st, U as os, V as us, W as ls, X as ps, Y as at, Z as rt, _ as Ei, $ as R, a0 as le, a1 as nt, a2 as it, a3 as ms, a4 as cs, a5 as ds, a6 as ki, a7 as q, a8 as Ii, a9 as ot, aa as $i, ab as Di, ac as Ci, ad as zi, ae as xi, af as Li, ag as Ve, ah as Re, ai as Pi, aj as Fi, ak as Vi, al as Ri, am as ji, an as Bi, ao as Hi, ap as Wi, aq as hs, ar as Pt, as as P, at as fs, au as Ui, av as ys, aw as qi, ax as Gi, ay as Ki, az as Ji, aA as gs, aB as Qi, aC as Xi, aD as bs, aE as Zi, aF as Ns, aG as Yi, aH as Mi, aI as eo, aJ as to, aK as so, aL as ao, aM as ro, aN as no, aO as io, aP as Oe, aQ as ee, aR as ut, aS as oo, aT as uo, aU as lo, aV as po, aW as mo, aX as co, aY as ho, aZ as fo, a_ as yo, a$ as go, b0 as bo, b1 as No, b2 as wo, b3 as To, b4 as So, b5 as vo, b6 as Oo, b7 as _o, b8 as Ao, b9 as Eo, ba as ko, bb as Io, bc as lt, bd as ws, be as $o, bf as Do, bg as Co, bh as zo, bi as xo, bj as Lo, bk as Po, bl as Fo, bm as Vo, bn as Ro, bo as jo, bp as Bo, bq as Ho, br as Wo, bs as Uo, bt as qo, bu as Go, bv as Ko, bw as Jo, bx as Qo, by as Xo, bz as Zo, bA as Yo, bB as Mo, bC as eu, bD as tu, bE as su, bF as au, bG as ru, bH as nu, bI as iu, bJ as ou, bK as uu, bL as lu, bM as pu, bN as mu, bO as cu, bP as du, bQ as hu, bR as fu, bS as yu, bT as gu, bU as bu, bV as Nu, bW as wu, bX as Tu, bY as Su, bZ as vu, b_ as Ou, b$ as _u, c0 as Au, c1 as Eu, c2 as ku, c3 as Iu, c4 as $u, c5 as pt, c6 as Du, c7 as Cu, c8 as zu, c9 as xu, ca as Lu, cb as Pu, cc as Fu, cd as Vu, ce as Ru, cf as ju, cg as Bu, ch as Hu, ci as Wu, cj as Uu, ck as qu, cl as Gu, cm as Ku, cn as Ju, co as Qu, cp as Xu, cq as Zu, cr as Yu, cs as Mu, ct as mt, cu as ct, cv as el, cw as tl, cx as sl, cy as al, cz as rl, cA as nl, cB as il, cC as ol, cD as dt, cE as z, cF as Ts, cG as Ss, cH as vs, cI as Os, cJ as _s, cK as As, cL as Es, cM as ks, cN as Is, cO as $s, cP as Ds, cQ as Cs, cR as zs, cS as xs, cT as Ls, cU as Ps, cV as Fs, cW as Vs, cX as Rs, cY as js, cZ as Bs, c_ as Hs, c$ as Ws, d0 as Us, d1 as qs, d2 as Gs, d3 as Ks, d4 as Js, d5 as Qs, d6 as Xs, d7 as Zs, d8 as Ys, d9 as Ms, da as ea, db as ta, dc as sa, dd as aa, de as ra, df as na, dg as ia, dh as oa, di as ua, dj as la, dk as pa, dl as ma, dm as ca, dn as da, dp as ha, dq as fa, dr as ya, ds as ga, dt as ba, du as ht, dv as Na, dw as wa, dx as Ta, dy as Sa, dz as va, dA as Oa, dB as _a, dC as Aa, dD as Ea, dE as ka, dF as ft, dG as Ia, dH as $a, dI as Da, dJ as Ca, dK as za, dL as xa, dM as La, dN as Pa, dO as Fa, dP as Va, dQ as Ra, dR as ja, dS as Ba, dT as Ha, dU as Wa, dV as Ua, dW as qa, dX as Ga, dY as Ka, dZ as Ja, d_ as Qa, d$ as Xa, e0 as Za, e1 as Ya, e2 as Ma, e3 as er, e4 as tr, e5 as sr, e6 as ar, e7 as rr, e8 as nr, e9 as ir, ea as or, eb as ur, ec as lr, ed as pr, ee as mr, ef as cr, eg as dr, eh as hr, ei as fr, ej as yr, ek as gr, el as br, em as Nr, en as wr, eo as Tr, ep as Sr, eq as vr, er as Or, es as _r, et as Ar, eu as Er, ev as kr, ew as Ir, ex as $r, ey as Dr, ez as Cr, eA as zr, eB as xr, eC as Lr, eD as Pr, eE as Fr, eF as Vr, eG as se, eH as Rr, eI as jr, eJ as Br, eK as Hr, eL as Wr, eM as yt, eN as _e, eO as Ur, eP as qr, eQ as Gr, eR as Kr, eS as Jr, eT as Qr, eU as ne, eV as Xr, eW as Zr, eX as Yr, eY as Mr, eZ as V, e_ as L, e$ as Ae, f0 as en, f1 as gt, f2 as De, f3 as ul, f4 as tn, f5 as ll, f6 as sn, f7 as an, f8 as pl, f9 as ml, fa as rn, fb as cl, fc as dl, fd as hl, fe as fl, ff as yl, fg as gl, fh as bl, fi as Nl, fj as wl, fk as Tl, fl as Sl, fm as vl, fn as Ol, fo as _l, fp as Al, fq as El, fr as kl, fs as Il, ft as $l, fu as Dl, fv as Cl, fw as zl, fx as xl, fy as Ll, fz as Pl, fA as Fl, fB as Vl, fC as Rl, fD as jl, fE as Bl, fF as Hl, fG as Wl, fH as Ul, fI as ql, fJ as Gl, fK as Kl, fL as Jl, fM as Ql, fN as Xl, fO as Zl, fP as Yl, fQ as Ml, fR as ep, fS as tp, fT as sp, fU as ap, fV as rp, fW as np, fX as ip, fY as op, fZ as up, f_ as lp, f$ as pp, g0 as mp, g1 as cp, g2 as dp, g3 as hp, g4 as fp, g5 as yp, g6 as gp, g7 as bp, g8 as Np, g9 as wp, ga as Tp, gb as Sp, gc as vp, gd as Op, ge as _p, gf as Ap, gg as Ep, gh as kp, gi as Ip, gj as $p, gk as Dp, gl as Cp, gm as zp, gn as xp, go as Lp, gp as Pp, gq as Fp, gr as Vp, gs as Rp, gt as jp, gu as Bp, gv as Hp, gw as Wp, gx as Up, gy as qp, gz as Gp, gA as Kp, gB as Jp, gC as Qp, gD as Xp, gE as Zp, gF as Yp, gG as Mp, gH as em, gI as tm, gJ as sm, gK as am, gL as rm, gM as nm, gN as im, gO as om, gP as um, gQ as lm, gR as pm, gS as mm, gT as cm, gU as dm, gV as hm, gW as fm, gX as ym, gY as gm, gZ as bm, g_ as Nm, g$ as wm, h0 as Tm, h1 as Sm, h2 as vm, h3 as Om, h4 as _m, h5 as Am, h6 as Em, h7 as km, h8 as Im, h9 as $m, ha as Dm, hb as Cm, hc as zm, hd as xm, he as Lm, hf as Pm, hg as Fm, hh as Vm, hi as Rm, hj as jm, hk as Bm, hl as Hm, hm as Wm, hn as Um, ho as qm, hp as Gm, hq as Km, hr as Jm, hs as Qm, ht as Xm, hu as Zm, hv as Ym, hw as Mm, hx as ec, hy as tc, hz as sc, hA as ac, hB as rc, hC as nc, hD as ic, hE as oc, hF as uc, hG as lc, hH as pc, hI as mc, hJ as cc, hK as dc, hL as hc, hM as fc, hN as yc, hO as gc, hP as bc, hQ as Nc, hR as wc, hS as Tc, hT as Sc, hU as vc, hV as Oc, hW as _c, hX as Ac, hY as Ec, hZ as kc, h_ as Ic, h$ as $c, i0 as Dc, i1 as Cc, i2 as zc, i3 as xc, i4 as Lc, i5 as Pc, i6 as Fc, i7 as Vc, i8 as Rc, i9 as jc, ia as Bc, ib as Hc, ic as Wc, id as Uc, ie as qc, ig as Gc, ih as Kc, ii as Jc, ij as Qc, ik as Xc, il as Zc, im as Yc, io as Mc, ip as ed, iq as td, ir as sd, is as ad, it as rd, iu as nd, iv as id, iw as od, ix as ud, iy as ld, iz as pd, iA as md, iB as cd, iC as dd, iD as hd, iE as fd, iF as yd, iG as gd, iH as bd, iI as Nd, iJ as wd, iK as Td, iL as Sd, iM as vd, iN as Od, iO as _d, iP as Ad, iQ as Ed, iR as kd, iS as Id, iT as $d, iU as Dd, iV as Cd, iW as zd, iX as xd, iY as Ld, iZ as Pd, C as Fd } from "./controller-mGt1s8dJ.js";
import { CSS3DRenderer as Vd } from "three/addons/renderers/CSS3DRenderer.js";
import { U as Rd } from "./ui-fBadYuor.js";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jd(s) {
  w(Array.isArray(s), () => "The argument passed to tf.addN() must be a list of tensors"), w(s.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${s.length}`);
  const e = s.map((r, n) => y(r, `tensors${n}`, "addN")), t = e[0];
  e.forEach((r) => {
    if (r.dtype !== t.dtype)
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
  }), e.forEach((r) => {
    if (!te(r.shape, t.shape))
      throw new Error("All tensors passed to tf.addN() must have the same shape");
  });
  const a = e;
  return A.runKernel(Xt, a);
}
const nn = /* @__PURE__ */ S({ addN_: jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bd(s, e, t, a, r, n) {
  const u = y(s, "forgetBias", "basicLSTMCell"), o = y(e, "lstmKernel", "basicLSTMCell"), l = y(t, "lstmBias", "basicLSTMCell"), p = y(a, "data", "basicLSTMCell"), m = y(r, "c", "basicLSTMCell"), c = y(n, "h", "basicLSTMCell"), d = de([p, c], 1), h = W(d, o), N = K(h, l), g = N.shape[0], f = N.shape[1] / 4, b = [g, f], O = U(N, [0, 0], b), _ = U(N, [0, f], b), T = U(N, [0, f * 2], b), I = U(N, [0, f * 3], b), D = K(M(ue(O), ve(_)), M(m, ue(K(u, T)))), C = M(ve(D), ue(I));
  return [D, C];
}
const on = /* @__PURE__ */ S({ basicLSTMCell_: Bd });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Hd(s, e) {
  const t = y(s, "x", "bitwiseAnd"), a = y(e, "y", "bitwiseAnd");
  if (!te(t.shape, a.shape))
    throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${a.shape}`);
  if (t.dtype !== "int32" || a.dtype !== "int32")
    throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${a.dtype}`);
  const r = { a: t, b: a };
  return A.runKernel(Zt, r);
}
const un = /* @__PURE__ */ S({ bitwiseAnd_: Hd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wd(s, e) {
  const t = y(s, "s0", "broadcastArgs", "int32"), a = y(e, "s1", "broadcastArgs", "int32");
  if (t.rank !== 1)
    throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);
  if (a.rank !== 1)
    throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${a.rank}`);
  const r = { s0: t, s1: a };
  return A.runKernel(Yt, r);
}
const ln = /* @__PURE__ */ S({ broadcastArgs_: Wd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ud(s) {
  const t = { x: y(s, "x", "diag") };
  return A.runKernel(Mt, t);
}
const pn = /* @__PURE__ */ S({ diag_: Ud });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qd(s, e) {
  const t = y(s, "x", "ensureShape", "string_or_numeric");
  if (!Oi(t.shape, e))
    throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);
  return s;
}
const mn = /* @__PURE__ */ S({ ensureShape_: qd });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function cn(s, e, t) {
  if (t <= 0)
    throw new Error("The number of values should be positive.");
  const a = { start: s, stop: e, num: t };
  return A.runKernel(es, {}, a);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fe = 2147483648;
function Gd(s, e, t = "left") {
  const a = y(s, "sortedSequence", "searchSorted"), r = y(e, "values", "searchSorted"), n = a.shape[a.shape.length - 1], u = r.shape[r.shape.length - 1], o = v(a, [-1, n]), l = v(r, [-1, u]);
  if (o.rank < 2)
    throw new Error("Sorted input argument must be at least 2-dimensional");
  if (o.shape[0] !== l.shape[0])
    throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");
  if (pe(l.shape) >= fe)
    throw new Error(`values tensor size must less than ${fe}`);
  if (o.shape[1] >= fe)
    throw new Error(`trailing dim_size must less than ${fe} for int32 output type, was ${o.shape[1]}`);
  const p = {
    sortedSequence: o,
    values: l
  }, m = { side: t };
  return A.runKernel(ts, p, m);
}
const Ce = /* @__PURE__ */ S({ searchSorted_: Gd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function dn(s, e) {
  return Ce(s, e, "left");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kd(s, e, t, a, r = !1) {
  const u = { x: y(s, "x", "maxPoolWithArgmax") }, o = { filterSize: e, strides: t, pad: a, includeBatchInIndex: r }, l = A.runKernel(ss, u, o);
  return { result: l[0], indexes: l[1] };
}
const hn = /* @__PURE__ */ S({ maxPoolWithArgmax_: Kd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fn(s, e, { indexing: t = "xy" } = {}) {
  if (t !== "xy" && t !== "ij")
    throw new TypeError(`${t} is not a valid third argument to meshgrid`);
  if (s === void 0)
    return [];
  let a = y(s, "x", "meshgrid", s instanceof me ? s.dtype : "float32");
  if (e === void 0)
    return [a];
  let r = y(e, "y", "meshgrid", e instanceof me ? e.dtype : "float32");
  const n = pe(a.shape), u = pe(r.shape);
  return t === "xy" ? (a = v(a, [1, -1]), r = v(r, [-1, 1]), [
    W(Y([u, 1], a.dtype), a),
    W(r, Y([1, n], r.dtype))
  ]) : (a = v(a, [-1, 1]), r = v(r, [1, -1]), [
    W(a, Y([1, u], a.dtype)),
    W(Y([n, 1], r.dtype), r)
  ]);
}
function Jd(s, e, t, a) {
  const r = y(e, "data", "multiRNNCell"), n = xt(t, "c", "multiRNNCell"), u = xt(a, "h", "multiRNNCell");
  let o = r;
  const l = [];
  for (let c = 0; c < s.length; c++) {
    const d = s[c](o, n[c], u[c]);
    l.push(d[0]), l.push(d[1]), o = d[1];
  }
  const p = [], m = [];
  for (let c = 0; c < l.length; c += 2)
    p.push(l[c]), m.push(l[c + 1]);
  return [p, m];
}
const yn = /* @__PURE__ */ S({ multiRNNCell_: Jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qd(s, e, t, a = !1) {
  const r = y(s, "logits", "multinomial"), n = r.size, u = r.rank;
  if (n < 2)
    throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${n}.`);
  if (u > 2)
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${u}`);
  t = t || Math.random();
  const l = { logits: u === 1 ? v(r, [1, -1]) : r }, p = { numSamples: e, seed: t, normalized: a }, m = A.runKernel(as, l, p);
  return u === 1 ? v(m, [m.size]) : m;
}
const gn = /* @__PURE__ */ S({ multinomial_: Qd });
function Xd(s, e) {
  const t = y(s, "v1", "outerProduct"), a = y(e, "v2", "outerProduct");
  w(t.rank === 1 && a.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${a.rank}.`);
  const r = v(t, [-1, 1]), n = v(a, [1, -1]);
  return W(r, n);
}
const bn = /* @__PURE__ */ S({ outerProduct_: Xd });
function Zd(s, e, t = 0) {
  return w(e.length === 2, () => "Invalid number of paddings. Must be length of 2."), ae(s, [e], t);
}
const Nn = /* @__PURE__ */ S({ pad1d_: Zd });
function Yd(s, e, t = 0) {
  return w(e.length === 2 && e[0].length === 2 && e[1].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const wn = /* @__PURE__ */ S({ pad2d_: Yd });
function Md(s, e, t = 0) {
  return w(e.length === 3 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const Tn = /* @__PURE__ */ S({ pad3d_: Md });
function eh(s, e, t = 0) {
  return w(e.length === 4 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2 && e[3].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const Sn = /* @__PURE__ */ S({ pad4d_: eh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function th(s, e, t, a) {
  const r = s.map((m, c) => y(m, `tensors${c}`, "raggedGather", "int32")), n = y(e, "paramsDenseValues", "raggedGather"), u = y(t, "indices", "raggedGather", "int32"), o = {
    paramsNestedSplits: r,
    paramsDenseValues: n,
    indices: u
  }, l = { outputRaggedRank: a }, p = A.runKernel(rs, o, l);
  return {
    outputNestedSplits: p.slice(0, p.length - 1),
    outputDenseValues: p[p.length - 1]
  };
}
const vn = /* @__PURE__ */ S({ raggedGather_: th });
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function sh(s, e, t) {
  const a = y(s, "starts", "raggedRange"), r = y(e, "limits", "raggedRange", a.dtype), n = y(t, "deltas", "raggedRange", a.dtype), u = {
    starts: a,
    limits: r,
    deltas: n
  }, o = A.runKernel(ns, u);
  return {
    rtNestedSplits: o[0],
    rtDenseValues: o[1]
  };
}
const On = /* @__PURE__ */ S({ raggedRange_: sh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ah(s, e, t, a, r) {
  const n = y(s, "shape", "raggedTensorToTensor", "int32"), u = y(e, "values", "raggedTensorToTensor"), o = y(t, "defaultValue", "raggedTensorToTensor", u.dtype), l = a.map((c, d) => y(c, `tensors${d}`, "raggedTensorToTensor", "int32")), p = {
    shape: n,
    values: u,
    defaultValue: o,
    rowPartitionTensors: l
  }, m = { rowPartitionTypes: r };
  return A.runKernel(is, p, m);
}
const _n = /* @__PURE__ */ S({ raggedTensorToTensor_: ah });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rh(s, e, t) {
  $e(s);
  const a = pe(s);
  let r = null;
  if (t == null || t === "float32")
    r = new Float32Array(a);
  else if (t === "int32")
    r = new Int32Array(a);
  else if (t === "bool")
    r = new Uint8Array(a);
  else
    throw new Error(`Unknown data type ${t}`);
  for (let n = 0; n < a; n++)
    r[n] = e();
  return A.makeTensor(r, s, t);
}
const An = /* @__PURE__ */ S({ rand_: rh });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const nh = 1e-3, En = 0.1;
function ih(s, e, t) {
  return t == null && (t = bt()), je(s, e, (a, r) => Nt(a, r, t));
}
function bt() {
  return A.backend.floatPrecision() === 32 ? nh : En;
}
function je(s, e, t) {
  let a = !0;
  if ((Z(s) || Z(e)) && (a = !1), Z(s) && Z(e) && (a = !0), a) {
    const u = s.constructor.name, o = e.constructor.name;
    if (u !== o)
      throw new Error(`Arrays are of different type. Actual: ${u}. Expected: ${o}`);
  }
  if (Array.isArray(s) && Array.isArray(e)) {
    const u = ce(s), o = ce(e);
    if (!te(u, o))
      throw new Error(`Arrays have different shapes. Actual: [${u}]. Expected: [${o}]`);
  }
  const r = Z(s) ? s : Lt(s), n = Z(e) ? e : Lt(e);
  if (r.length !== n.length)
    throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${n.length}.
Actual:   ${r}.
Expected: ${n}.`);
  for (let u = 0; u < n.length; ++u) {
    const o = r[u], l = n[u];
    if (!t(o, l))
      throw new Error(`Arrays differ: actual[${u}] = ${o}, expected[${u}] = ${l}.
Actual:   ${r}.
Expected: ${n}.`);
  }
  typeof expect < "u" && expect().nothing();
}
function oh(s, e) {
  s().then(() => e.fail(), () => e()), typeof expect < "u" && expect().nothing();
}
function uh(s, e) {
  const t = typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? [e] : e;
  return he(s) || he(s[0]) || he(e) || he(e[0]) ? je(s, t, (a, r) => a == r) : je(s, e, (a, r) => Nt(a, r, 0));
}
function lh(s, e, t) {
  if (t == null && (t = bt()), !Nt(s, e, t))
    throw new Error(`Numbers differ: actual === ${s}, expected === ${e}`);
  typeof expect < "u" && expect().nothing();
}
function Nt(s, e, t) {
  return !isFinite(s) && !isFinite(e) ? !0 : !(isNaN(s) || isNaN(e) || Math.abs(s - e) > t);
}
function ph(s, e, t) {
  for (let a = 0; a < s.length; a++)
    if (s[a] < e || s[a] > t)
      throw new Error(`Value out of range:${s[a]} low: ${e}, high: ${t}`);
}
function mh(s, e) {
  const t = new Float32Array(s), a = new Float32Array(e);
  if (t.length !== a.length)
    throw new Error(`Expected ArrayBuffer to be of length ${a.length}, but it was ${t.length}`);
  for (let r = 0; r < a.length; r++)
    if (t[r] !== a[r])
      throw new Error(`Expected ArrayBuffer value at ${r} to be ${a[r]} but got ${t[r]} instead`);
}
function kn(s) {
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    Array.isArray(t) ? kn(t) : s[e] = _i(t);
  }
  return s;
}
function ch(s) {
  const e = document.createElement("video");
  return "playsInline" in e && (e.playsInline = !0), e.muted = !0, e.loop = !0, e.style.position = "fixed", e.style.left = "0px", e.style.top = "0px", e.preload = "auto", e.appendChild(s), new Promise((t) => {
    e.addEventListener("loadeddata", (a) => t(e)), e.load();
  });
}
async function dh(s) {
  await s.play(), "requestVideoFrameCallback" in s && await new Promise((e) => {
    s.requestVideoFrameCallback(e);
  });
}
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TEST_EPSILON_FLOAT16: En,
  createVideoElement: ch,
  encodeStrings: kn,
  expectArrayBuffersEqual: mh,
  expectArraysClose: ih,
  expectArraysEqual: uh,
  expectNumbersClose: lh,
  expectPromiseToFail: oh,
  expectValuesInRange: ph,
  play: dh,
  testEpsilon: bt
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fh(s, e, t = 1, a = "float32", r) {
  if ($e(s), t == null && (t = 1), a == null && (a = "float32"), a !== "float32" && a !== "int32")
    throw new Error(`Unsupported data type ${a}`);
  const n = new Ai(e, t, a, r), u = Ye(s, a);
  for (let o = 0; o < u.values.length; o++)
    u.values[o] = n.nextValue();
  return u.toTensor();
}
const In = /* @__PURE__ */ S({ randomGamma_: fh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yh(s, e, t) {
  if (e != null && e === "bool")
    throw new Error(`Unsupported data type ${e}`);
  return Me(s, 0, 1, e, t);
}
const $n = /* @__PURE__ */ S({ randomStandardNormal_: yh });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gh(s, e, t, a) {
  return et(s, e, t, "int32", a);
}
const Dn = /* @__PURE__ */ S({ randomUniformInt_: gh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bh(s) {
  const e = y(s, "x", "reverse");
  return w(e.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`), re(e, 0);
}
const Cn = /* @__PURE__ */ S({ reverse1d_: bh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Nh(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`), re(t, e);
}
const zn = /* @__PURE__ */ S({ reverse2d_: Nh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wh(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`), re(t, e);
}
const xn = /* @__PURE__ */ S({ reverse3d_: wh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Th(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`), re(t, e);
}
const Ln = /* @__PURE__ */ S({ reverse4d_: Th });
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Sh(s, e) {
  const t = y(s, "x", "setdiff1d"), a = y(e, "y", "setdiff1d");
  w(t.dtype === a.dtype, () => `x and y should have the same dtype, but got x (${t.dtype}) and y (${a.dtype}).`), w(t.rank === 1, () => `x should be 1D tensor, but got x (${t.shape}).`), w(a.rank === 1, () => `y should be 1D tensor, but got y (${a.shape}).`);
  const r = await t.data(), n = await a.data(), u = new Set(n);
  let o = 0;
  for (let m = 0; m < r.length; m++)
    u.has(r[m]) || o++;
  const l = new Fe([o], t.dtype), p = new Fe([o], "int32");
  for (let m = 0, c = 0; m < r.length; m++)
    u.has(r[m]) || (l.values[c] = r[m], p.values[c] = m, c++);
  return [l.toTensor(), p.toTensor()];
}
const Pn = Sh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fn(s, e, t) {
  if (tt(s), e != null && e.length !== 4)
    throw new Error("tensor4d() requires shape to have four numbers");
  const a = ce(s, t);
  if (a.length !== 4 && a.length !== 1)
    throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return st(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vn(s, e, t) {
  if (tt(s), e != null && e.length !== 5)
    throw new Error("tensor5d() requires shape to have five numbers");
  const a = ce(s, t);
  if (a.length !== 5 && a.length !== 1)
    throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return st(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Rn(s, e, t) {
  if (tt(s), e != null && e.length !== 6)
    throw new Error("tensor6d() requires shape to have six numbers");
  const a = ce(s, t);
  if (a.length !== 6 && a.length !== 1)
    throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return e = e || a, st(s, e, a, t);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vh(s, e, t) {
  const a = y(s, "tensor", "tensorScatterupdate"), r = y(e, "indices", "tensorScatterupdate", "int32"), n = y(t, "updates", "tensorScatterupdate");
  if (os(n, r, a.shape), a.dtype !== n.dtype)
    throw new Error(`tensor and updates must have the same dtype, instead they are ${a.dtype} and ${n.dtype}.`);
  const u = {
    tensor: a,
    indices: r,
    updates: n
  }, o = {};
  return A.runKernel(us, u, o);
}
const jn = S({ tensorScatterUpdate_: vh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bn(s, e) {
  return Ce(s, e, "right");
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Oh(s) {
  const e = y(s, "condition", "whereAsync", "bool"), t = await e.data(), a = ls(e.shape, t);
  return s !== e && e.dispose(), a;
}
const wt = Oh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function _h(s, e, t) {
  const a = y(s, "tensor", "boolMask"), r = y(e, "mask", "boolMask", "bool"), n = t ?? 0, u = r.rank, o = a.shape;
  w(u > 0, () => "mask cannot be scalar"), ps(o.slice(n, n + u), r.shape, "mask's shape must match the first K dimensions of tensor's shape,");
  let l = 1;
  for (let g = n; g < n + u; g++)
    l *= o[g];
  const p = o.slice(0, n).concat([l], o.slice(n + u)), m = v(a, p), c = v(r, [-1]), d = await wt(c), h = at(d, [1]), N = rt(m, h, n);
  return s !== a && a.dispose(), e !== r && r.dispose(), h.dispose(), m.dispose(), c.dispose(), d.dispose(), N;
}
const Hn = _h;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ah(s, e, t, a, r = !0) {
  const n = y(s, "v", "movingAverage"), u = y(e, "x", "movingAverage"), o = y(t, "decay", "movingAverage");
  Ei(n, u), w(te(n.shape, u.shape), () => "Shape mismatch in v and x");
  const l = R(1), p = le(l, o);
  let m = M(le(u, n), p);
  if (r) {
    w(a != null, () => "When using zeroDebias: true, step is required.");
    const c = y(a, "step", "movingAverage");
    m = nt(m, le(l, it(o, c)));
  }
  return K(n, m);
}
const Wn = /* @__PURE__ */ S({ movingAverage_: Ah });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Eh(s, e, t) {
  $e(t);
  const a = y(s, "indices", "scatterND", "int32"), r = y(e, "updates", "scatterND");
  os(r, a, t);
  const n = { indices: a, updates: r }, u = { shape: t };
  return A.runKernel(ms, n, u);
}
const Un = /* @__PURE__ */ S({ scatterND_: Eh });
function kh(s, e, t, a) {
  if (s.dtype !== "int32")
    throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${s.dtype}.`);
  if (s.rank > 2)
    throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${s.shape}.`);
  const r = s.rank > 0 ? s.shape[0] : 1, n = s.rank > 1 ? s.shape[1] : 1;
  if (t.length !== n)
    throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${n}.`);
  const u = e.size;
  if (!(e.rank === 0 || e.rank === 1 && u === r))
    throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);
  if (e.dtype !== a.dtype)
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ih(s, e, t, a = 0) {
  $e(t);
  const r = y(s, "sparseIndices", "sparseToDense", "int32"), n = y(e, "sparseValues", "sparseToDense", "string_or_numeric"), u = y(a, "defaultValue", "sparseToDense", n.dtype);
  kh(r, n, t, u);
  const o = {
    sparseIndices: r,
    sparseValues: n,
    defaultValue: u
  }, l = { outputShape: t };
  return A.runKernel(cs, o, l);
}
const qn = /* @__PURE__ */ S({ sparseToDense_: Ih });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $h(s, e) {
  const t = y(e, "indices", "gatherND", "int32"), r = { params: y(s, "x", "gatherND", "string_or_numeric"), indices: t };
  return A.runKernel(ds, r);
}
const Gn = /* @__PURE__ */ S({ gatherND_: $h });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Dh(s, e, t = 1) {
  const a = y(s, "predictions", "inTopK"), r = y(e, "targets", "inTopK");
  w(a.rank > 1, () => `inTopK() expects the predictions to be of rank 2 or higher, but got ${a.rank}`), w(a.rank - 1 === r.rank, () => `predictions rank should be 1 larger than targets rank, but got predictions rank ${a.rank} and targets rank ${r.rank}`), ps(a.shape.slice(0, a.shape.length - 1), r.shape, "predictions's shape should be align with the targets' shape, except the last dimension.");
  const n = a.shape[a.shape.length - 1];
  w(t > 0 && t <= n, () => `'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${n}), but got ${t}`);
  const u = await a.data(), o = await r.data(), [l, p] = [u.length / n, n], m = ki("bool", l);
  for (let c = 0; c < l; c++) {
    const d = c * p, h = u.subarray(d, d + p), N = [];
    for (let g = 0; g < h.length; g++)
      N.push({ value: h[g], index: g });
    N.sort((g, f) => f.value - g.value), m[c] = 0;
    for (let g = 0; g < t; g++)
      if (N[g].index === o[c]) {
        m[c] = 1;
        break;
      }
  }
  return s !== a && a.dispose(), e !== r && r.dispose(), q(m, r.shape, "bool");
}
const Kn = Dh;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ch({ x: s, filter: e, strides: t, pad: a, dataFormat: r = "NHWC", dilations: n = [1, 1], dimRoundingMode: u, bias: o, activation: l = "linear", preluActivationWeights: p, leakyreluAlpha: m }) {
  if (Ii(A.state.gradientDepth, l) === !1) {
    let I = ot(s, e, t, a, r, n, u);
    return o != null && (I = K(I, o)), $i(I, l, p, m);
  }
  const c = y(s, "x", "depthwiseConv2d", "float32"), d = y(e, "filter", "depthwiseConv2d", "float32");
  let h = c, N = !1;
  c.rank === 3 && (N = !0, h = v(c, [1, c.shape[0], c.shape[1], c.shape[2]])), w(h.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`), w(d.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`), w(h.shape[3] === d.shape[2], () => `Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`), n == null && (n = [1, 1]), w(Di(t, n), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${n}'`), Ci("fused depthwiseConv2d", a, u);
  const g = zi(
    h.shape,
    d.shape,
    t,
    n,
    a,
    u,
    !0
    /* depthwise */
  );
  let f;
  o != null && (f = y(o, "bias", "fused conv2d"), [f] = xi(f, c), Li(g.outShape, f.shape));
  let b;
  p != null && (b = y(p, "prelu weights", "fused depthwiseConv2d"));
  const O = (I, D) => {
    w(Pi(n), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${n}'`);
    const [C, X, F, j] = D, ze = Fi(I, F, l), $t = Vi(X.shape, ze, C, t, a, n, u), Dt = Ri(X, ze, C.shape, t, a, n, u);
    if (j != null) {
      const wi = ji(f, ze);
      return [$t, Dt, wi];
    }
    return [$t, Dt];
  }, _ = {
    x: h,
    filter: d,
    bias: f,
    preluActivationWeights: b
  }, T = {
    strides: t,
    pad: a,
    dataFormat: r,
    dilations: n,
    dimRoundingMode: u,
    activation: l,
    leakyreluAlpha: m
  };
  return o == null ? Ve((D, C, X) => {
    let F = A.runKernel(Re, _, T);
    return X([C, D, F]), N && (F = v(F, [F.shape[1], F.shape[2], F.shape[3]])), { value: F, gradFunc: O };
  })(h, d) : Ve((D, C, X, F) => {
    let j = A.runKernel(Re, _, T);
    return F([C, D, j, X]), N && (j = v(j, [j.shape[1], j.shape[2], j.shape[3]])), { value: j, gradFunc: O };
  })(h, d, f);
}
const zh = /* @__PURE__ */ S({ fusedDepthwiseConv2d_: Ch });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conv2d: Bi,
  depthwiseConv2d: zh,
  matMul: Hi
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xh = "model", Lh = ".json", Ph = ".weights.bin";
function Ft(s) {
  return new Promise((e) => setTimeout(e)).then(s);
}
class J {
  constructor(e) {
    if (!P().getBool("IS_BROWSER"))
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    e.startsWith(J.URL_SCHEME) && (e = e.slice(J.URL_SCHEME.length)), (e == null || e.length === 0) && (e = xh), this.modelJsonFileName = e + Lh, this.weightDataFileName = e + Ph;
  }
  async save(e) {
    if (typeof document > "u")
      throw new Error("Browser downloads are not supported in this environment since `document` is not present");
    const t = fs.join(e.weightData), a = window.URL.createObjectURL(new Blob([t], { type: "application/octet-stream" }));
    if (e.modelTopology instanceof ArrayBuffer)
      throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
    {
      const r = [{
        paths: ["./" + this.weightDataFileName],
        weights: e.weightSpecs
      }], n = Ui(e, r), u = window.URL.createObjectURL(new Blob([JSON.stringify(n)], { type: "application/json" })), o = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      if (o.download = this.modelJsonFileName, o.href = u, await Ft(() => o.dispatchEvent(new MouseEvent("click"))), e.weightData != null) {
        const l = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        l.download = this.weightDataFileName, l.href = a, await Ft(() => l.dispatchEvent(new MouseEvent("click")));
      }
      return { modelArtifactsInfo: ys(e) };
    }
  }
}
J.URL_SCHEME = "downloads://";
class Fh {
  constructor(e) {
    if (e == null || e.length < 1)
      throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);
    this.jsonFile = e[0], this.weightsFiles = e.slice(1);
  }
  async load() {
    return new Promise((e, t) => {
      const a = new FileReader();
      a.onload = (r) => {
        const n = JSON.parse(r.target.result), u = n.modelTopology;
        if (u == null) {
          t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (n.weightsManifest == null) {
          t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (this.weightsFiles.length === 0) {
          e({ modelTopology: u });
          return;
        }
        const l = hs(n, (p) => this.loadWeights(p));
        e(l);
      }, a.onerror = (r) => t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`), a.readAsText(this.jsonFile);
    });
  }
  loadWeights(e) {
    const t = [], a = [];
    for (const u of e)
      t.push(...u.weights), a.push(...u.paths);
    const r = this.checkManifestAndWeightFiles(e), n = a.map((u) => this.loadWeightsFile(u, r[u]));
    return Promise.all(n).then((u) => [t, u]);
  }
  loadWeightsFile(e, t) {
    return new Promise((a, r) => {
      const n = new FileReader();
      n.onload = (u) => {
        const o = u.target.result;
        a(o);
      }, n.onerror = (u) => r(`Failed to weights data from file of path '${e}'.`), n.readAsArrayBuffer(t);
    });
  }
  /**
   * Check the compatibility between weights manifest and weight files.
   */
  checkManifestAndWeightFiles(e) {
    const t = [], a = this.weightsFiles.map((n) => Pt(n.name)), r = {};
    for (const n of e)
      n.paths.forEach((u) => {
        const o = Pt(u);
        if (t.indexOf(o) !== -1)
          throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);
        if (t.push(o), a.indexOf(o) === -1)
          throw new Error(`Weight file with basename '${o}' is not provided.`);
        r[u] = this.weightsFiles[a.indexOf(o)];
      });
    if (t.length !== this.weightsFiles.length)
      throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);
    return r;
  }
}
const Vh = (s) => P().getBool("IS_BROWSER") && !Array.isArray(s) && s.startsWith(J.URL_SCHEME) ? Rh(s.slice(J.URL_SCHEME.length)) : null;
Wi.registerSaveRouter(Vh);
function Rh(s = "model") {
  return new J(s);
}
function jh(s) {
  return new Fh(s);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xe {
  constructor(e) {
    this.modelArtifacts = e;
  }
  load() {
    return this.modelArtifacts;
  }
}
class Qn {
  constructor(e) {
    this.saveHandler = e;
  }
  save(e) {
    return this.saveHandler(e);
  }
}
class Bh {
  constructor(e) {
    e.load && (this.load = () => Promise.resolve(e.load())), e.save && (this.save = (t) => Promise.resolve(e.save(t)));
  }
}
function Hh(s, e, t, a) {
  const r = arguments;
  return new Bh(Ee(...r));
}
function Ee(s, e, t, a) {
  return arguments.length === 1 ? s.modelTopology != null || s.weightSpecs != null ? new xe(s) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of typ