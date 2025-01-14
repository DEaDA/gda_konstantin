export default class Config {

    static DEFAULT_WIDTH = 1920;
    static DEFAULT_HEIGHT = 1080;

    static animations = {
        ease: 'sine.inOut'
    }
    static colorsSet = [
        [0xffe5ec, 0xffc2d1, 0xffb3c6, 0xff8fab, 0xfb6f92],
        [0x17bebb, 0x2e282a, 0xcd5334, 0xedb88b, 0xfad8d6],
        [0xbfacaa, 0x02020a, 0x05204a, 0xb497d6, 0xe1e2ef],
        [0x985f99, 0x9684a1, 0xaaacb0, 0xb6c9bb, 0xbfedc1],
        [0xbbbe64, 0x8e5572, 0xf2f7f2, 0xbcaa99, 0x443850],
        [0xceb992, 0x73937e, 0x585563, 0x5b2e48, 0x471323],
        [0x7fb069, 0xfffbbd, 0xe6aa68, 0xca3c25, 0x1d1a05],
        [0x03045e, 0x0077b6, 0x00b4d8, 0x90e0ef, 0xcaf0f8],
        [0xccd5ae, 0xe9edc9, 0xfefae0, 0xfaedcd, 0xd4a373],
    ]
    static colors = {
        green: '#15ab5b',
        darkgreen: '#1d3838',
        darkback: '#151824',
        darkbacklight: '#202436',
        darkblue: '#31364b',
        yellow: '#fdbf08',
        blockcolor: '#0d984d',
        white: '#ffffff',
    }
    static FONTS = {}
    static lines = {
        pivotWidth: 2,
        tipWidth: 2,
        pivotColor: '#ffffff',
        tipColor: '#757575',
        arrowOffset: 42,
        arrowHeadLength: 20,
        arrowHeadWidth: 8,
    }
}