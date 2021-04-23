<template>
    <div
        class="task"
        :class="{'task_disabled': task.status, 'task_padding-right': editor}"
        >
        <button
            class="task__btn-toggle"
            :class="{'task__btn-toggle_active': task.status}"
            @click="toggle(task.id)"
            ></button>
        <span class="task__date" :class="{'task__date_disabled': task.status}">{{task.date}}</span>

        <div class="task__box-editor" v-if="editor">
            <textarea
                class="task__editor"
                v-model="message"
                ref="editor"
                @blur="closeEditor"
                @keydown.enter="redactTask(task.id)"
                ></textarea>
        </div>
        <p class="task__text" v-else >{{task.text}}</p>

        <button
            class="task__btn-control task__btn-control_check-mark"
            v-if="editor"
            @mousedown="redactTask(task.id)"
            ></button>

        <button
            class="task__btn-control task__btn-control_edit"
            :class="{'task__btn-control_disabled': editor}"
            @click="openEditor"
            ></button>

        <button
            class="task__btn-control task__btn-control_delete"
            @mousedown="removeTask(task.id)"
            ></button>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Task',
  data() {
    return {
      editor: false,
      message: this.task.text,
    };
  },
  props: {
    task: {
      type: Object,
    },
  },

  methods: {
    ...mapMutations(['toggleStatus', 'deleteTask', 'editTask']),
    toggle(id) {
      this.toggleStatus(id);
    },

    removeTask(id) {
      this.deleteTask(id);
    },

    redactTask(id) {
      const text = this.message.trim();
      this.editTask({ id, text });
      this.closeEditor();
    },

    openEditor() {
      this.editor = true;
    },

    closeEditor() {
      this.editor = false;
    },

    addFocusTextarea() {
      const textarea = this.$refs.editor;
      if (textarea) {
        textarea.focus();
      }
    },

  },
  updated() {
    this.addFocusTextarea();
  },
};
</script>

<style lang="scss" scoped>
    .task {
        min-width: 500px;
        max-width: 700px;
        margin: 0 auto 30px;
        padding: 5px 65px 5px 5px;
        border-top: 2px solid #4943cd;
        border-bottom: 2px solid #4943cd;
        display: flex;
        position: relative;

        &_disabled {
            border-color: #a039a2;
            &::before {
                content: '';
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, .7);
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
        }

        &_padding-right {
            padding-right: 100px;
        }

        &__btn-toggle {
            margin-right: 10px;
            min-width: 24px;
            height: 24px;
            background: none;
            border: 2px solid #4943cd;
            border-radius: 50%;
            position: relative;
            z-index: 2;
            cursor: pointer;

            &_active {
                &::before {
                    content: '';
                    width: 12px;
                    height: 12px;
                    background: #a039a2;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }

        &__date {
            padding: 2px 6px 0 6px;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            background: #4943cd;
            border-radius: 5px 5px 0 0 ;
            position: absolute;
            top: -20px;
            left: 0;

            &_disabled {
                background: #a039a2;
            }
        }

        &__box-editor {
            width: 100%;
        }

        &__editor {
            background:  #eee;
            width: 100%;
            height: 34px;
        }

        &__btn-control {
            width: 24px;
            height: 24px;
            border-radius: 5px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            transition: background-color .2s;
            position: absolute;
            top: 5px;

            &:hover {
            background-color: #a039a2;
            }

            &_disabled {
                background-color: #a039a2;
                z-index: -1;
            }

            &_delete {
                background-image: url(../assets/delete-k.png);
                right: 5px;
                z-index: 2;
            }

            &_edit {
                background-image: url(../assets/edit24.png);
                right: 34px;
            }

            &_check-mark {
                background-image: url(../assets/check-mark.png);
                right: 68px;
                &:hover {
                    background-color: #4943cd;
                }
            }
        }
    }
</style>
