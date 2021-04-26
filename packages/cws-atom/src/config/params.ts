

export const TRANSFER = { 
	script:
		'03030201C7070000000076CC07100aA00700CC07100aA00700CC07C01E0a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64CC071012A00700CC07100aBFACD7C021FFC002CC071012BFACD7C061FFC002CC07101aA00700CC07C0070a057561746f6dCC071012A00700BAACC76CA1080D01BE0700BE0700BE0700BE0700CC071012A0070029AC9700C9CAAC9700C9BE0700BE0700CC071012A00700CC07100aA00700CC07C0270a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21CAA0C70021CC07C00612040a020801CC071018BFACC700C108BE0700CC071012A00700CC07100aA00700CC07C0070a057561746f6dCC071012A00700BAACC76CA9080D01BE0700BE0700CC071010BFACC700B108BE0700BE0700CC07C00D1a0b636f736d6f736875622d34CC071020BFACC700B908DC07C00441544f4dDDACD70061FFC0DAACC7C0A10806D207CC05065052455353425554546f4e',
	signature:
		'00304502202591B0C6EF53FC5FDF4EC653EA516C59E5C4198E3A4ABD07BD59C1E591F58F89022100FFF19AFBF03C2FE5F789DC27013460AC2839E282ADD5EC7350DDC7062D527F82'
};

export const DELEGATE = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C98080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d34222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C88080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C90080D01CC07C00B227d2c226d656d6f223a2229AC9700A8CAAC9700A8CC07C048222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d736744656c6567617465222c2276616c7565223a7b22616d6f756e74223a7b22616d6f756e74223a22BAACC76C80080D01CC07C028222c2264656e6f6d223a227561746f6d227d2c2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76CA0080D01CC07C002227dDC07C00441544f4dDC07C00544656c6774DDA6D700FFC0DAACC7C0800806D207CC05065052455353425554546f4e',
	signature:
		'003045022072E3B452804B9DA17542BE60A64DDD05497609E15319CB968D85C25B6673B7E00221009B6EC425BDC2D025CEFD084ED7EF6E4B8232EFF9AE4B345D1B91DFF14E1EFB26'
};

export const UNDELEGATE = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C98080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d34222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C88080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C90080D01CC07C00B227d2c226d656d6f223a2229AC9700A8CAAC9700A8CC07C04A222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d7367556e64656c6567617465222c2276616c7565223a7b22616d6f756e74223a7b22616d6f756e74223a22BAACC76C80080D01CC07C028222c2264656e6f6d223a227561746f6d227d2c2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76CA0080D01CC07C002227dDC07C00441544f4dDC07C005556e44656cDDA6D700FFC0DAACC7C0800806D207CC05065052455353425554546f4e',
	signature:
		'003045022100F0DD2080DE1B9DBC02567A19EF1296E62C35ABB88679341AA24285FDA68E2BBA022017A094448EDD913A7B01FC55A15383C73497BB7AFB5A14E4B1078FCF37ECF67B'
};

export const WITHDRAW = {
	script:
		'03010201C7070000000076CC07C0137b226163636f756e745f6e756d626572223a22BAACC76C90080D01CC07C037222c22636861696e5f6964223a22636f736d6f736875622d34222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a22BAACC76C80080D01CC07C01B222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22BAACC76C88080D01CC07C00B227d2c226d656d6f223a2229AC9700A0CAAC9700A0CC07C059222c226d736773223a5b7b2274797065223a22636f736d6f732d73646b2f4d7367576974686472617744656c65676174696f6e526577617264222c2276616c7565223a7b2264656c656761746f725f61646472657373223a2229A0D700FFC0CAA0D700FFC0CC07C017222c2276616c696461746f725f61646472657373223a2229A6D700FFC0CAA6D700FFC0CC07C011227d7d5d2c2273657175656e6365223a22BAACC76C98080D01CC07C002227dDC07C00441544f4dDC07C006526577617264DDA6D700FFC0D207CC05065052455353425554546f4e',
	signature:
		'00003044022005190906CC3C302D7B26A5EAD8BD8AD54C33B2B5E6083CAA9AE9709085E548F3022001791219E36D80EB672CEC9485033D745669B18DA0CCE2630D7E360C5645B123'
};


export const COIN_TYPE = '80000076'


export enum TX_TYPE_URL{
	SEND = '/cosmos.bank.v1beta1.MsgSend',
	DELEGATE = '/cosmos.staking.v1beta1.MsgDelegate',
	UNDELEGATE = '/cosmos.staking.v1beta1.MsgUndelegate',
	WITHDRAW = '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
}
