export default {
  formWithUrl: '<form action="/users" method="post"></form>',
  formWithoutProps: '<form action="#" method="post"></form>',
  formWithInputAndTextarea: '<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea></form>',
  formWithInputCustomAttrs: '<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>',
  formElementsWithDefaultAttrValues: '<form action="#" method="post"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea></form>',
  formElemenetsWithOverwrittenValues: '<form action="#" method="post"><label for="job">Job</label><textarea name="job" cols="50" rows="50">hexlet</textarea></form>',
  formWithSubmit: '<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Save"></form>',
  formWithNamedSubmit: '<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Create"></form>',
};
