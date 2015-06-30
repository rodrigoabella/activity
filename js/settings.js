$(document).ready(function() {
	function saveSettings() {
		OC.msg.startSaving('#activity_notifications_msg');
		var post = $('#activity_notifications').serialize();

		$.post(OC.generateUrl('/apps/activity/settings'), post, function(response) {
			OC.msg.finishedSuccess('#activity_notifications_msg', response.data.message);
		});
	}

	var $activityNotifications = $('#activity_notifications');
	$activityNotifications.find('input[type=checkbox]').change(saveSettings);

	$activityNotifications.find('select').change(saveSettings);

	$activityNotifications.find('.activity_select_group').click(function() {
		var selectGroup = '#activity_notifications .' + $(this).attr('data-select-group');
		var checkedBoxes = $(selectGroup + ':checked').length;
		$(selectGroup).attr('checked', true);
		if (checkedBoxes === $(selectGroup + ':checked').length) {
			// All values were already selected, so invert it
			$(selectGroup).attr('checked', false);
		}

		saveSettings();
	});
});
