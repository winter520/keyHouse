import config from '@etc/js/config'
export default {
	error: {
		err_1: 'Please enter the user name!',
		err_2: '3 to 5 characters in length.',
		err_3: 'Please input a password!',
		err_4: 'Password can only enter 6-20 letters, numbers and underscores.',
		err_5: 'Please enter the password again!',
		err_6: 'The two passwords are inconsistent!',
		err_7: 'Account already exists',
		err_8: 'Account does not exist',
		err_9: 'Connection failed!',
	},
	warn: {
		w_1: 'Please select an account',
		w_2: 'Please get the account',
		w_3: 'Account is empty!',
		w_4: 'Please select a mode',
		w_5: 'Mode cannot be empty',
		w_6: '',
		w_7: 'User cannot be empty',
		w_8: 'Please enter the name of public account',
		w_9: '3 to 20 characters in length',
		w_10: '',
		w_11: 'Group created successfully',
		w_12: 'Data is empty!',
		w_13: 'Login timeout, please login again!',
		w_14: 'Please enter the destination address',
		w_15: 'Please enter the amount',
		w_16: 'Cancelled',
		w_17: 'Can not be empty',
	},
	success: {
		s_1: 'Created successfully!',
		s_2: 'Replication success',
		s_3: 'Account creation request sent successfully!',
		s_4: 'Connection succeeded!',
		s_5: 'Delete successfully!',
	},
	btn: {
		confirm: 'Confirm',
		cancel: 'Cancel',
		login: 'Login',
		register: 'Register',
		back: 'Back',
		unlock: 'Unlock',
		enter: 'Receive',
		out: 'Send',
		code: 'QR Code',
		copy: 'Copy',
		createAccount: 'Create Managed Account',
		restart: 'Reset',
		agree: 'Agree',
		refuse: 'Refuse',
		approval: 'Approval',
		create: 'Create',
		newBuild: 'Newly build',
		set: 'Setting',
		setName: 'Setting aliases',
		setNode: 'Set node',
		review: 'Review',
		lookHistory: 'Viewing history'
	},
	loading: {
		l_1: 'Loading……'
	},
	title: {
		walletTitle: '<span>SMPC</span> Wallet',
		login: 'Login',
		register: 'Create Account',
		gMember: 'Current group members',
		selectNode: 'Node selection',
		history: 'History',
		wait: 'Waiting',
		refrsh: 'Refresh',
		personAccount: 'Private Account',
		groupAccount: 'Managed Account',
		quit: 'Exit',
		createGroup: 'Create validation',
		groupNews: 'Managed Account News',
		txnsNews: 'Transaction News',
		accountList: 'Account list',
		netSet: 'Network settings',
		groupSet: 'Group information settings',
		gAccountSet: 'Manger account settings'
	},
	label: {
		username: 'User name',
		password: 'Password',
		password2: 'Confirm password',
		coinType: 'Cointype',
		address: 'Address',
		balance: 'Balance',
		action: 'Action',
		admins: 'Admin',
		self: 'Own',
		send: 'Send',
		sendAddr: 'Send Address',
		assets: 'Assets',
		amount: 'Amount',
		date: 'Date',
		info: 'Information',
		hash: 'TxHash',
		mode: 'Mode',
		to: 'To Address',
		value: 'Value',
		source: 'Source',
		from: 'From',
		group: 'Group',
		txnHistory: 'History',
		groupHistory: 'Managed Account history',
		txnsHistory: 'Transaction history',
		IP: 'IP',
		aliases: 'Aliases',
		notSetUp: 'Not set up',
		initiator: 'Initiator',
		approver: 'Approver',
		version: 'Version',
		versionTest: 'Testnet',
		groupId: 'Group ID'
	},
	state: {
		name: 'Status',
		on: 'On-line',
		off: 'Off-line',
		success: 'Success',
		fail: 'Fail',
		pending: 'Pending',
		null: 'Null',
		new: 'New'
	},
	tip: {
		name: 'Tip',
		walletTip: "Note: the current version is testnet. <br/> Please do not transfer mainnet coins, otherwise all assets will be lost! <br/> the wallet key is stored locally. We can't recover the key!",
		deleteNode: 'This operation will permanently delete this node. Do you want to continue?',
		devTip: 'Coming soon!'
	}
}
