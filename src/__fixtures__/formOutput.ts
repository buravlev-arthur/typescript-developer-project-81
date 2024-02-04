export default {
  formWithUrl: '<form method="post" action="/users"></form>',
  formWithoutProps: '<form method="post" action="#"></form>',
  formWithInputAndTextarea: '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
  formWithInputCustomAttrs: '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>',
  formElementsWithDefaultAttrValues: '<form method="post" action="#"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
  formElemenetsWithOverwrittenValues: '<form method="post" action="#"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
  formWithSubmit: '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Save"></form>',
  formWithNamedSubmit: '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Create"></form>',
};
