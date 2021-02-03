

export const TRANSFER = { 
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C98080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d33222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C88080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C90080D01CC07C00B227d2c226d656d6f223a2229AC9700A8CAAC9700A8CC07C045222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d736753656e64222c2276616c7565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C80080D01CC07C024222c2264656e6f6d223a227561746f6d227d5d2c2266726f6d5f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C010222c22746f5f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76CA0080D01CC07C002227dDC07C00441544f4dDDA6D700FFC0DAACC7C0800806D207CC05065052455353425554546f4e',
	signature:
		'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const DELEGATE = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C98080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d33222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C88080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C90080D01CC07C00B227d2c226d656d6f223a2229AC9700A8CAAC9700A8CC07C048222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d736744656c6567617465222c2276616c7565223a7b22616d6f756e74223a7b22616d6f756e74223a22BAACC76C80080D01CC07C028222c2264656e6f6d223a227561746f6d227d2c2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76CA0080D01CC07C002227dDC07C00441544f4dDC07C00544656c6774DDA6D700FFC0DAACC7C0800806D207CC05065052455353425554546f4e',
	signature:
		'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const UNDELEGATE = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C98080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d33222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C88080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C90080D01CC07C00B227d2c226d656d6f223a2229AC9700A8CAAC9700A8CC07C04A222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d7367556e64656c6567617465222c2276616c7565223a7b22616d6f756e74223a7b22616d6f756e74223a22BAACC76C80080D01CC07C028222c2264656e6f6d223a227561746f6d227d2c2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76CA0080D01CC07C002227dDC07C00441544f4dDC07C005556e44656cDDA6D700FFC0DAACC7C0800806D207CC05065052455353425554546f4e',
	signature:
		'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const WITHDRAW = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C90080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d33222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C80080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C88080D01CC07C00B227d2c226d656d6f223a2229AC9700A0CAAC9700A0CC07C059222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d7367576974686472617744656c65676174696f6e526577617264222c2276616c7565223a7b2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76C98080D01CC07C002227dDC07C00441544f4dDC07C006526577617264DDA6D700FFC0D207CC05065052455353425554546f4e',
	signature:
		'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};


export const COIN_TYPE = '80000076'


