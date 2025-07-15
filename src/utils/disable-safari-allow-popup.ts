export function disableSafariAllowPopup(): void {
	console.warn('Only Safari should get here. If you are using another browser, please report this issue.');
	const w = window.open();
	if (!w) {
		console.error('Failed to open a new window. Please allow pop-ups for this site.');
		return;
	}
	const a = w.document.createElement('a');
	a.href = 'obsidian://';
	w.document.body.append(a);
	a.click();
}

/*
javascript:
var%20w=window.open();
var%20a=w.document.createElement('a');
a.href='obsidian://';
w.document.body.append(a);
a.click()

*/