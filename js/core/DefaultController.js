class DefaultController {
  constructor(riotScope) {
    this.riotScope = riotScope;

    this.riotInit();
  }

  riotInit() {
    this.rs = this.riotScope;

    this.rs.on("update", this.onUpdate);
    this.rs.on("updated", this.onUpdated);
    this.rs.on("before-mount", this.onBeforeMount);
    this.rs.on("mount", this.onMount);
    this.rs.on("before-unmount", this.onBeforeUnmount);
    this.rs.on("unmount", this.onUnmount);

  }

  onUpdate() {}
  onUpdated() {}
  onBeforeMount() {}
  onMount() {}
  onBeforeUnmount() {}
  onUnmount() {}
}

module.exports = DefaultController;
